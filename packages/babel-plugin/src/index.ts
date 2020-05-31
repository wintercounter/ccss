import fs from 'fs'
import path from 'path'

import * as classNameStrategies from './classNameStrategies'
import { isCCSSTag, covertToStringLiteralTag, getIdentifierByValueType, getAttrDetails } from '@/helpers'

/**
 * TODO
 * [X] If no css, no Ui
 * [X] If only static props, no Ui
 * [X] Handle Ui.tagName
 * [X] Add support for more custom tags
 * [X] Handle className when className is not a string
 * [X] Handle cases when it's number
 * [X] Handle cases when it's non primitive, it has to stay dynamic
 * [X] Check if we can precompile something dynamic?
 * [X] Handle tagged literal strings
 * [X] Make it static if only HTML attributes are left
 * [X] Handle array values
 * [X] Handle child
 * [ ] Handle mq
 * [ ]
 */

const styles = new Map()

let ccss, ccssOptions
export const ccssPropMap = {}
const valueMapTypes = {
    string: true,
    object: true,
    number: true
}

export default (api, opts = {}) => {
    const { types: t } = api

    return {
        pre(state) {
            state.opts.generatorOpts.jsescOption = {
                minimal: true
            }
            if (ccss) return

            const {
                expressions = {
                    ccss: `require('ccss').default`,
                    options: `require('ccss').defaultOptions`
                }
            } = opts
            ccss = eval(expressions.ccss)
            ccssOptions = eval(expressions.options)
            for (const [short, light, long] of ccssOptions.props._propTable) {
                const camelShort = toCamelCase(short)
                const camelLight = toCamelCase(light)
                const camelLong = toCamelCase(long)
                ccssPropMap[camelShort] = {
                    short,
                    light,
                    long,
                    camelShort,
                    camelLight,
                    camelLong,
                    isCSSProp: true,
                    processor: ccssOptions.props[camelShort]
                }
                ccssPropMap[camelLight] = {
                    short,
                    light,
                    long,
                    camelShort,
                    camelLight,
                    camelLong,
                    isCSSProp: true,
                    processor: ccssOptions.props[camelLight]
                }
                ccssPropMap[camelLong] = {
                    short,
                    light,
                    long,
                    camelShort,
                    camelLight,
                    camelLong,
                    isCSSProp: true,
                    processor: ccssOptions.props[camelLong]
                }
            }
            for (const k of Object.keys(ccssOptions.props)) {
                ccssPropMap[k] = ccssPropMap[k] || {
                    short: k,
                    light: k,
                    long: k,
                    camelShort: k,
                    camelLight: k,
                    camelLong: k,
                    isCSSProp: false,
                    processor: ccssOptions.props[k]
                }
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
                const classNames: string[] = []
                const classNameNode = path.node.attributes.find(node => node.name && node.name.name === 'className')
                const { opts: { classNameStrategy = {} } = {} } = state

                if (!isCCSSTag(path, state)) return

                state.opts.ccssPropMap = ccssPropMap
                const tagName = path.node.name.property?.name || 'div'

                let cssPropCount = 0
                let staticPropCount = 0

                // Filter will remove unnecessary attributes
                path.node.attributes = path.node.attributes
                    .map(attr => {
                        // Not supported attr, keep it as is
                        if (!attr?.name?.name || !ccssPropMap[attr.name.name]) return attr
                        cssPropCount++
                        attr.descriptor = attr.descriptor || ccssPropMap[attr.name.name]
                        const attrDetails = getAttrDetails(attr, state, t)

                        //console.log('attrDetails', attrDetails)

                        // We could extract some values
                        if (
                            attrDetails?.pureValue !== undefined &&
                            (attrDetails?.isStatic || attrDetails?.isExtracted)
                        ) {
                            const { name, pureValue, ccssValue, isStatic } = attrDetails

                            if (isStatic) {
                                staticPropCount++
                            }

                            const css = ccss(ccssValue)
                            let selector = styles.get(css)

                            if (!selector) {
                                selector = classNameStrategies[classNameStrategy](name, pureValue)
                                styles.set(css, selector)
                            }

                            classNames.push(selector)

                            if (isStatic) {
                                return false
                            }
                        }

                        const v = attr.value.expression.value
                        const short = ccssPropMap[attr.name.name].camelShort
                        const vm = ccssOptions.valueMap[short]

                        // No short value, just rename the prop
                        if (!vm) {
                            attr.name.name = short
                            return attr
                        }

                        const value = valueMapTypes[typeof v] && vm && vm.hasOwnProperty(v) ? vm[v] : v
                        attr.value = getIdentifierByValueType(value, t)
                        return attr
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
                    if (t.isJSXExpressionContainer(classNameNode.value)) {
                        classNameNode.value.expression = t.binaryExpression(
                            '+',
                            t.stringLiteral(`${classNames.join(' ')} `),
                            classNameNode.value.expression
                        )
                    } else {
                        classNameNode.value.value += ` ${classNames.join(' ')}`
                    }
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
