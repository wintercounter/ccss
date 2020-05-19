import fs from 'fs'
import path from 'path'

import * as classNameStrategies from './classNameStrategies'
import { isCCSSTag, covertToStringLiteralTag, getIdentifierByValueType } from '@/helpers'

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
            // If there is no file, where we should write??? (during simple tests there is no filename)
            if (!state.opts.generatorOpts.filename) {
                return
            }
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

                if (!isCCSSTag(path, state)) return

                const tagName = path.node.name.property?.name || 'div'

                let cssPropCount = 0
                let staticPropCount = 0

                // Filter will remove unnecessary attributes
                path.node.attributes = path.node.attributes
                    .map(attr => {
                        // Not supported attr, keep it as is
                        if (!attr?.name?.name || !ccssPropMap[attr.name.name]) return attr

                        cssPropCount++

                        const attrName = attr.name.name

                        switch (true) {
                            // Simple string
                            case attr.value && t.isStringLiteral(attr.value) /*.type === 'StringLiteral'*/:
                                staticPropCount++

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

                                // No short value, just rename the prop
                                if (!vm) {
                                    attr.name.name = short
                                    return attr
                                }

                                const value = valueMapTypes[typeof v] && vm && vm.hasOwnProperty(v) ? vm[v] : v
                                attr.value = getIdentifierByValueType(value, t)
                                return attr

                            /* return t.jSXAttribute(t.jSXIdentifier(short)) */
                        }
                    })
                    .filter(x => x)

                // All ccss props could be extracted as static
                // Rename it to htmlTagName
                if (staticPropCount === cssPropCount) {
                    // JSXMemberExpression to JSXIdentifier (Ui.h2 to h2)
                    covertToStringLiteralTag(path, state, tagName)
                }

                if (!classNames.length) return

                if (classNameNode) {
                    classNameNode.value.value += ` ${classNames.join(' ')}`
                    return
                }

                const newProp = t.jSXAttribute(t.jSXIdentifier('className'), t.stringLiteral(classNames.join(' ')))
                path.node.attributes.push(newProp)
            },
            JSXClosingElement(path, state) {
                const openingName = path.parent.openingElement.name.name
                // We only change it to stringLiteral. If not name/nem, it's something else.
                if (!openingName || !isCCSSTag(path, state)) return

                covertToStringLiteralTag(path, state, openingName)
            }
        }
    }
}

const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())
