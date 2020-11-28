// @ts-nocheck

import * as t from '@babel/types'
import template from '@babel/template'
import {
    getIdentifierByValueType,
    isPropArray,
    isPropObject,
    isPropValueNumeric,
    isPropValueSingleStringLiteral,
    isPropValueString
} from '@/utils'

const createCCSSToValueCallExpression = template(`
    globalThis.__ccss.toValue(%%name%%, %%value%%)
`)

let ccssInstance

export default class Processor {
    options
    ccss
    path
    constructor({ options, api, path }) {
        this.api = api
        this.options = options
        this.componentNames = Object.keys(options.components)
        this.ccss = ccssInstance || (typeof options.ccss === 'string' ? eval(options.ccss) : options.ccss)
        // Cache for later use, we don't want to eval always
        ccssInstance = this.ccss
        this.path = path
    }

    get properties() {
        return this.path.node.arguments?.[1]?.properties
    }
    set properties(v) {
        this.path.node.arguments[1].properties = v
    }

    isCCSSElement = () => {
        const { node } = this.path
        return (
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            t.isIdentifier(node.callee.object, { name: 'React' }) &&
            t.isIdentifier(node.callee.property, { name: 'createElement' }) &&
            this.componentNames.some(
                (name) => t.isIdentifier(node.arguments[0], { name }) || node.arguments[0]?.object?.name === name
            ) &&
            !node.callee.computed
        )
    }

    isCCSSProp = (prop) => {
        return !!this.ccss.registry.get(prop)
    }

    shortifyProps = (ObjectExpression = this.path.node.arguments[1]) => {
        // No props, leave it
        if (t.isNullLiteral(ObjectExpression)) {
            return ObjectExpression
        }

        ObjectExpression.properties = ObjectExpression.properties.map((prop) => {
            // Do nothing if prop key is not an identifier (computed prop name)
            if (!t.isIdentifier(prop.key)) return prop

            const name = prop.key.name
            const definition = this.ccss.registry.get(name)

            // this is a CCSS prop
            if (definition) {
                // Let's find the shortest key
                prop.key.name = definition.keys.reduce((a, b) => (a.length <= b.length ? a : b))
                if (prop.value.value !== undefined && definition.map) {
                    const entry = Object.entries(definition.map).find(([k, v]) => v === prop.value.value)
                    if (entry) {
                        prop.value = getIdentifierByValueType(entry[0])
                    }
                }
            }
            return prop
        })

        return ObjectExpression
    }

    setComputed(v) {
        if (this.path) {
            this.path.isComputed = true
        }
    }

    getPropDescriptor(prop, computedValue) {
        const name = prop.key.name
        const ccssDescriptor = this.ccss.registry.get(prop.key.name)

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
                const pureValue = prop.value.expression.quasis[0].value.cooked
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
                const pureValue = prop.realValue.argument.value
                return {
                    name,
                    pureValue: pureValue * -1,
                    ccssValue: { [name]: pureValue * -1 },
                    ccssString: this.ccss.toValue(name, pureValue),
                    isComputed: false
                }
            }
            case isPropObject(prop):
            case isPropArray(prop): {
                const handler = prop.descriptor.processor.babelPluginHandler

                return {
                    name,
                    ...handler(prop, state, t, api, prop.descriptor.processor.babelPluginCCSSContext)
                }
            }
            case t.isBooleanLiteral(prop.value): {
                return {
                    name,
                    pureValue: realValue.value,
                    ccssValue: { [name]: realValue.value },
                    ccssString: this.ccss.toValue(name, pureValue),
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
        const { expression } = createCCSSToValueCallExpression({ name: t.stringLiteral(prop.key.name), value })
        body.splice(nodeIndex, 0, t.variableDeclaration('const', [t.variableDeclarator(id, expression)]))

        return id
    }
    getProp(name, defaultValue) {
        const existingIndex = (this.properties || []).findIndex((prop) => prop.key.name === name)

        // Let's create one and add
        if (existingIndex === -1 && defaultValue !== undefined) {
            const newProp = t.objectProperty(t.stringLiteral(name), getIdentifierByValueType(defaultValue))
            this.properties.push(newProp)
            return newProp
        }

        return this.properties[existingIndex]
    }
}
