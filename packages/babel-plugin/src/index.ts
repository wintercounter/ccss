import fs from 'fs'
import path from 'path'

import * as classNameStrategies from './classNameStrategies'

const getIdentifierByValueType = (value, t) => {
    if (typeof value === 'string') {
        return t.stringLiteral(value)
    }

    if (typeof value === 'boolean') {
        return t.jsxExpressionContainer(t.booleanLiteral(value))
    }

    if (typeof value === 'number') {
        return t.jsxExpressionContainer(t.numericLiteral(value))
    }

    return null
}

/**
 * TODO
 * - If no css, no Ui
 * - If only static props, no Ui
 * - Handle Ui.tagName
 * - Add support for more custom tags
 * - Handle className when className is not a string
 * - Handle cases when it's number
 * - Handle cases when it's non primitive, it has to stay dynamic
 * - Check can we precompile something dynamic?
 * - Handle tagged literal strings
 */

const styles = new Map()

let ccss, ccssOptions
const ccssPropMap = {}
const valueMapTypes = {
    string: true,
    object: true,
    number: true
}

export default api => {
    const { types: t } = api

    return {
        pre(state) {
            state.opts.generatorOpts.jsescOption = {
                minimal: true
            }
            if (ccss) return

            const {
                opts: {
                    expressions = {
                        ccss: `require('ccss').default`,
                        options: `require('ccss').defaultOptions`
                    }
                } = {}
            } = state
            ccss = eval(expressions.ccss)
            ccssOptions = eval(expressions.options)
            for (const [short, light, long] of ccssOptions.props._propTable) {
                const camelShort = toCamelCase(short)
                const camelLight = toCamelCase(light)
                const camelLong = toCamelCase(long)
                ccssPropMap[camelShort] = { short, light, long, camelShort, camelLight, camelLong }
                ccssPropMap[camelLight] = { short, light, long, camelShort, camelLight, camelLong }
                ccssPropMap[camelLong] = { short, light, long, camelShort, camelLight, camelLong }
            }
        },
        post(state) {
            const folderPath = state.opts.generatorOpts.filename.split(path.sep)
            const filename = folderPath.pop()
            fs.writeFileSync(
                `${folderPath.join(path.sep)}${path.sep}__${filename}.css`,
                [...styles.entries()].reduce(
                    (acc, [rules, className]) =>
                        acc +
                        `.${className}{
    ${rules}
}
`,
                    ''
                ),
                { mode: 0o755 }
            )
        },
        visitor: {
            JSXOpeningElement(path, state) {
                const classNames = []
                const classNameNode = path.node.attributes.find(node => node.name && node.name.name === 'className')
                const {
                    opts: { identifiers, classNameStrategy } = { identifiers: {}, classNameStrategy: 'unicode' }
                } = state

                // Not supported JSX tagName
                if (!identifiers[path.node.name.name]) {
                    return
                }

                // Filter will remove unnecessary attributes
                path.node.attributes = path.node.attributes
                    .map(attr => {
                        // Not supported attr, keep it as is
                        if (!attr?.name?.name || !ccssPropMap[attr.name.name]) return attr

                        const attrName = attr.name.name

                        switch (true) {
                            // Simple string
                            case attr.value && attr.value.type === 'StringLiteral':
                                const css = ccss({ [attrName]: attr.value.value })
                                let selector = styles.get(css)

                                if (!selector) {
                                    selector = classNameStrategies[classNameStrategy](attrName, attr.value.value)
                                    styles.set(css, selector)
                                }

                                classNames.push(selector)
                                return false

                            // Not static value
                            default:
                                const v = attr.value.expression.value
                                const short = ccssPropMap[attrName].camelShort
                                const vm = ccssOptions.valueMap[short]
                                const value = valueMapTypes[typeof v] && vm && vm.hasOwnProperty(v) ? vm[v] : v
                                return t.jSXAttribute(t.jSXIdentifier(short), getIdentifierByValueType(value, t))
                        }
                    })
                    .filter(x => x)

                if (!classNames) return

                if (classNameNode) {
                    classNameNode.value.value += ` ${classNames.join(' ')}`
                    return
                }

                const newProp = t.jSXAttribute(t.jSXIdentifier('className'), t.stringLiteral(classNames.join(' ')))
                path.node.attributes.push(newProp)
            }
        }
    }
}

const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())
