import * as t from '@babel/types'
import template from '@babel/template'
import traverse from '@babel/traverse'
import {
    getIdentifierByValueType,
    isPropArray,
    isPropObject,
    isPropValueNumeric,
    isPropValueSingleStringLiteral,
    isPropValueString
} from '@/utils'
import { deepCSSVars } from '@/handlers'

const createCCSSToValueCallExpression = template(`
    __ccss.toValue(%%name%%, %%value%%)
`)

let ccssInstance

export default class Processor {
    api
    options
    ccss
    path
    componentNames
    constructor({ options, api, path }) {
        this.api = api
        this.options = options
        this.componentNames = Object.keys(options.components)
        this.ccss = ccssInstance || (typeof options.ccss === 'string' ? eval(options.ccss) : options.ccss)
        // Cache for later use, we don't want to eval always
        ccssInstance = this.ccss
        this.path = path
        // Set `child`'s handler
        ccssInstance.setProps([[['child'], null, undefined, { babelPluginHandler: deepCSSVars }]])
    }

    isCCSSElement = () => {
        const { node } = this.path
        const compare = (name) =>
            t.isIdentifier(node.arguments[0], { name }) || node.arguments[0]?.object?.name === name
        if (
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            t.isIdentifier(node.callee.object, { name: 'React' }) &&
            t.isIdentifier(node.callee.property, { name: 'createElement' }) &&
            this.componentNames.some(compare) &&
            !node.callee.computed
        ) {
            return this.componentNames.find(compare)
        }
    }

    isCCSSProp = (prop) => {
        return !!this.ccss.registry.get(prop)
    }

    shortifyProps = (path) => {
        traverse(
            path.node,
            {
                ObjectProperty: (p) => {
                    const prop = p.node

                    // Do nothing if prop key is not an identifier (computed prop name)
                    if (!t.isIdentifier(prop.key)) return

                    const name = prop.key.name || prop.key.value
                    const definition = this.ccss.registry.get(name)

                    // this is a CCSS prop
                    if (definition && definition.ccssContext !== false) {
                        // Let's find the shortest key
                        const shortestPropName = definition.keys.reduce((a, b) => (a.length <= b.length ? a : b))
                        if (prop.key.name) {
                            prop.key.name = shortestPropName
                        } else {
                            prop.key.value = shortestPropName
                        }
                        if (prop.value.value !== undefined && definition.map) {
                            const entry = Object.entries(definition.map).find(([k, v]) => v === prop.value.value)
                            if (entry) {
                                prop.value = getIdentifierByValueType(entry[0])
                            }
                        }
                    } else {
                        // Not a CCSS prop, skip shortifying children
                        p.skip()
                    }
                }
            },
            path,
            path.scope
        )
    }

    setComputed(v) {
        if (this.path) {
            this.path.isComputed = true
        }
    }

    getPropDescriptor(prop, computedValue) {
        const name = prop.key.name || prop.key.value

        switch (true) {
            case isPropValueString(prop): {
                const pureValue = prop.value.value
                return {
                    name,
                    pureValue,
                    ccssValue: { [name]: pureValue },
                    ccssString: this.ccss.toValue(name, pureValue),
                    isComputed: false
                }
            }
            case isPropValueSingleStringLiteral(prop): {
                const pureValue = prop.value.quasis[0].value.cooked
                return {
                    name,
                    pureValue,
                    ccssValue: { [name]: pureValue },
                    ccssString: this.ccss.toValue(name, pureValue),
                    isComputed: false
                }
            }
            case isPropValueNumeric(prop): {
                const pureValue = prop.value.value
                return {
                    name,
                    pureValue,
                    ccssValue: { [name]: pureValue },
                    ccssString: this.ccss.toValue(name, pureValue),
                    isComputed: false
                }
            }
            case t.isUnaryExpression(prop.value) && t.isNumericLiteral(prop.value.argument): {
                const pureValue = prop.value.argument.value
                return {
                    name,
                    pureValue: pureValue * -1,
                    ccssValue: { [name]: pureValue * -1 },
                    ccssString: this.ccss.toValue(name, pureValue * -1),
                    isComputed: false
                }
            }
            case isPropObject(prop):
            case isPropArray(prop): {
                // Fully static, just run, extract, done
                if (this.isValueTreeStatic(prop)) {
                    const extracted = this.extractStaticValues(prop.value, prop)

                    return {
                        pureValue: extracted,
                        ccssValue: { [name]: extracted },
                        ccssString: this.ccss.toValue(name, extracted),
                        isComputed: false
                    }
                }

                return {
                    name,
                    isComputed: true,
                    ...computedValue(prop)
                }
            }
            case t.isBooleanLiteral(prop.value): {
                return {
                    name,
                    pureValue: prop.value.value,
                    ccssValue: { [name]: prop.value.value },
                    ccssString: this.ccss.toValue(name, prop.value.value),
                    isComputed: false
                }
            }
            default: {
                return {
                    name,
                    pureValue: null,
                    ccssValue: null,
                    ccssString: null,
                    isComputed: true,
                    ...computedValue(prop)
                }
            }
        }
    }
    createVariable(prop) {
        const { path } = this
        const { value } = prop
        let body = path.scope.block.body

        if (t.isArrowFunctionExpression(path.scope.block)) {
            if (t.isBlockStatement(path.scope.block.body)) {
                body = path.scope.block.body.body
            } else {
                path.scope.block.body = t.blockStatement([t.returnStatement(path.scope.block.body)])
                body = path.scope.block.body.body
            }
        }

        const nodeIndex = body.indexOf(path.container)
        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id)
        const { expression } = createCCSSToValueCallExpression({
            name: t.stringLiteral(prop.key.name || prop.key.value),
            value
        })
        body.splice(nodeIndex, 0, t.variableDeclaration('const', [t.variableDeclarator(id, expression)]))

        return id
    }
    addProp(name, value, method = 'push') {
        // It's null, let's create an object
        if (t.isNullLiteral(this.path.node.arguments[1])) {
            this.path.node.arguments[1] = t.objectExpression([])
        }
        let properties = this.path.node.arguments?.[1]?.properties

        // Maybe it's an _extend helper?
        // Lets find the first ObjectExpression to use then.
        if (!properties) {
            traverse(
                this.path.node,
                {
                    ObjectExpression(path) {
                        properties = path.node.properties
                        path.stop()
                    }
                },
                this.path,
                this.path.scope
            )
        }

        const newProp = t.objectProperty(t.stringLiteral(name), getIdentifierByValueType(value))
        properties[method](newProp)
        return newProp
    }
    isValueComputed(v) {
        return (
            !t.isNumericLiteral(v) &&
            !t.isStringLiteral(v) &&
            !(t.isUnaryExpression(v) && t.isNumericLiteral(v.argument))
        )
    }
    isValueTreeStatic = (prop) => {
        let foundDynamic = false
        this.walkTree(prop.value, (v) => {
            foundDynamic = foundDynamic || this.isValueComputed(v)
        })
        return !foundDynamic
    }
    walkProperties = (method, cb, ...rest) => {
        traverse(
            this.path.node,
            {
                ObjectExpression(path) {
                    if (path.ccssWalkProperties) {
                        path.stop()
                        return
                    }
                    path.ccssWalkProperties = true
                    path.node.properties =
                        path.node.properties[method]((...i) => cb(path, ...i), ...rest) || path.node.properties
                }
            },
            this.path,
            this.path.scope
        )
    }
    walkTree = (value, cb, method = 'forEach') => {
        const v = value
        if (v.type === 'ObjectExpression') {
            const newProps = v.properties[method]((v) => {
                const ret = this.walkTree(v, cb, method)
                return ret
            })
            v.properties = (newProps || v.properties).filter(Boolean)
            return v
        } else if (v.type === 'ArrayExpression') {
            v.elements = (v.elements[method]((v) => this.walkTree(v, cb, method)) || v.elements).filter(Boolean)
            return v
        } else if (v.type === 'ObjectProperty') {
            v.value = this.walkTree(v.value, cb, method) || v.value
            return v
        } else {
            return cb(value)
        }
    }
    extractStaticValues = (value, prop) => {
        if (t.isObjectExpression(value)) {
            return this.extractStaticValuesFromObject(value, prop)
        } else if (t.isArrayExpression(value)) {
            return this.extractStaticValuesFromArray(value, prop)
        }
    }
    extractStaticValuesFromArray = (value, prop) => {
        const extracted = []

        value.elements = value.elements.filter((v) => {
            if (t.isNumericLiteral(v) || t.isStringLiteral(v)) {
                extracted.push(v.value)
                return false
            } else if (t.isUnaryExpression(v) && t.isNumericLiteral(v.argument)) {
                extracted.push(v.argument.value * -1)
                return false
            } else if (t.isArrayExpression(v)) {
                const ext = this.extractStaticValues(v, prop)
                if (ext.length) {
                    extracted.push(ext)
                }
                return !!v.elements.length
            } else if (t.isObjectExpression(v)) {
                const ext = this.extractStaticValues(v, prop)
                if (Object.keys(ext).length) {
                    extracted.push(ext)
                }
                return !!v.properties.length
            }
            return true
        })

        return extracted
    }
    extractStaticValuesFromObject = (value, prop) => {
        const extracted = {}

        value.properties = value.properties.filter((v) => {
            const _value = v.value
            const _key = v.key.name || v.key.value

            if (t.isNumericLiteral(_value) || t.isStringLiteral(_value)) {
                extracted[_key] = v.value.value
                return false
            } else if (t.isUnaryExpression(_value) && t.isNumericLiteral(_value.argument)) {
                extracted[_key] = v.value.argument.value * -1
                return false
            } else if (t.isArrayExpression(_value)) {
                const ext = this.extractStaticValues(_value, prop)
                if (ext.length) {
                    extracted[_key] = ext
                }
                return _value.elements.length
            } else if (t.isObjectExpression(_value)) {
                // If there is no such ccss prop but this is a ccss context, pass it
                const ext = this.extractStaticValues(_value, prop)
                if (Object.keys(ext).length) {
                    extracted[_key] = ext
                }
                return _value.properties.length
            }
        })

        return extracted
    }
}
