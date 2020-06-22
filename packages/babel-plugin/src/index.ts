// @ts-nocheck

import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import template from '@babel/template'
import { compile, serialize, stringify } from 'stylis'
import { merge } from 'lodash'
import fg from 'fast-glob'

import * as classNameStrategies from '@/classNameStrategies'
import { isCCSSTag, covertToStringLiteralTag, getIdentifierByValueType, getAttrDetails } from '@/helpers'
import { hybrid, onlyFullyStatic } from '@/handlers'

const defaultOpts = {
    identifiers: {
        Ui: true
    },
    constants: {},
    classNameStrategy: 'unicode',
    expressions: {
        ccss: `require('ccss').default || require('ccss')`,
        options: `require('ccss').defaultOptions`
    },
    stats: false
}

const valueMapTypes = {
    string: true,
    object: true,
    number: true
}

const statsFileName = 'babelPluginStyledCcssStats.json'

function getSourceCode(source, { start, end }) {
    const startLine = start.line
    const endLine = end.line
    const startColumn = start.column
    const endColumn = end.column

    let sourceLines = source.split('\n').slice(startLine - 1, endLine)
    sourceLines[0] = sourceLines[0].slice(startColumn)
    sourceLines[sourceLines.length - 1] = sourceLines[sourceLines.length - 1].slice(0, endColumn)
    return sourceLines.join('\n')
}

export default (api, opts) => {
    const { types: t } = api
    const Stats = {
        data: {
            total: 0,
            totalStatic: 0,
            nonStatic: []
        },
        write() {
            fs.writeFileSync(path.resolve(process.cwd(), statsFileName), JSON.stringify(this.data, null, 2), {
                mode: 0o755
            })
        }
    }
    opts = merge(defaultOpts, opts)
    const { expressions, stats, classNameStrategy } = opts
    const ccss = typeof expressions.ccss === 'string' ? eval(expressions.ccss) : expressions.ccss
    const ccssOptions = typeof expressions.options === 'string' ? eval(expressions.options) : expressions.options
    const styles = new Map()
    const ccssPropMap = {}
    let programStyles
    let currentProgram

    // Create prop map for all props in CCSS Prop table
    for (const [short, light, long] of ccssOptions.props._propTable) {
        const camelShort = toCamelCase(short)
        const camelLight = toCamelCase(light)
        const camelLong = toCamelCase(long)
        ccssPropMap[camelShort] = ccssPropMap[camelLight] = ccssPropMap[camelLong] = {
            short,
            light,
            long,
            camelShort,
            camelLight,
            camelLong,
            processor: ccssOptions.props[camelShort]
        }
    }
    // Add it for 3rd party props also (like mq, child, etc)
    for (const k of Object.keys(ccssOptions.props)) {
        const processor = ccssOptions.props[k]
        ccssPropMap[k] = ccssPropMap[k] || {
            short: k,
            light: k,
            long: k,
            camelShort: k,
            camelLight: k,
            camelLong: k,
            processor
        }
        // Attach default handler
        processor.babelPluginHandler = processor.babelPluginHandler || onlyFullyStatic
    }
    // Child needs static handler
    ccssPropMap.child.processor.babelPluginHandler = hybrid

    opts.ccssPropMap = ccssPropMap

    return {
        pre(state) {
            if (classNameStrategy === 'unicode') {
                // This will stop converting unicode characters to entities
                state.opts.generatorOpts.jsescOption = {
                    minimal: true
                }
            }
        },
        post(state) {
            // If there is no file, where we should write??? (during simple tests there is no filename)
            if (!state.opts.generatorOpts.filename || !programStyles.size) {
                return
            }
            const folderPath = state.opts.generatorOpts.filename.split(path.sep)
            const filename = folderPath.pop()
            const style = serialize(
                compile(
                    [...programStyles.entries()].reduce(
                        (acc, [rules, className]) => acc + `.${className}{${rules}}`,
                        ''
                    )
                ),
                stringify
            )
            const checksum = crypto.createHash('md5').update(style, 'utf8').digest('hex')
            const cssFilename = `__${filename}.${checksum}.css`
            const cssPath = `${folderPath.join(path.sep)}${path.sep}${cssFilename}`

            // Delete old files
            fg.sync([...folderPath, `__${filename}.*.css`].join('/')).forEach(p => fs.unlinkSync(p))

            fs.writeFileSync(cssPath, style, { mode: 0o755 })

            const buildImport = template(`import './${cssFilename}'`)
            currentProgram.unshiftContainer('body', buildImport())

            // Handle stats
            if (stats) {
                Stats.write()
            }
        },
        visitor: {
            Program(path) {
                programStyles = new Map()
                currentProgram = path
            },
            JSXOpeningElement(path, state) {
                const classNames: string[] = []
                const classNameNode = path.node.attributes.find(node => node.name && node.name.name === 'className')
                const identifier = isCCSSTag(path, state)
                // Use our own options
                state.opts = opts

                if (!identifier) return

                Stats.data.total++
                const tagName = path.node.name.property?.name || 'div'

                let cssPropCount = 0
                let staticPropCount = 0
                let flaggedAsDynamic = false

                // Filter will remove unnecessary attributes
                path.node.attributes = path.node.attributes
                    .map(attr => {
                        // Not supported attr, keep it as is
                        if (!attr?.name?.name || !ccssPropMap[attr.name.name]) {
                            // We don't know what will be there...
                            if (t.isJSXSpreadAttribute(attr)) {
                                flaggedAsDynamic = true
                            }
                            return attr
                        }
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
                            if (!programStyles.get(css)) {
                                programStyles.set(css, selector)
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
                        attr.value = getIdentifierByValueType(value, t) || attr.value
                        return attr
                    })
                    .filter(Boolean)

                // All ccss props could be extracted as static
                // Rename it to htmlTagName
                if (staticPropCount === cssPropCount && !flaggedAsDynamic) {
                    // JSXMemberExpression to JSXIdentifier (Ui.h2 to h2)
                    covertToStringLiteralTag(path, state, tagName)

                    if (identifier.defaultProps) {
                        path.node.attributes = path.node.attributes || []
                        Object.entries(identifier.defaultProps).forEach(([k, v]) => {
                            path.node.attributes.push(
                                t.jsxAttribute(t.jsxIdentifier(k), v === true ? null : getIdentifierByValueType(v, t))
                            )
                        })
                    }
                    Stats.data.totalStatic++
                } else {
                    // Keep original identifier
                    Stats.data.nonStatic.push({
                        file: this.file.opts.generatorOpts.filename,
                        code: getSourceCode(this.file.code, path.node.loc)
                    })
                }

                if (!classNames.length) return

                // Use existing className attr
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
                } else {
                    // Create className attr
                    const newProp = t.jSXAttribute(t.jSXIdentifier('className'), t.stringLiteral(classNames.join(' ')))
                    path.node.attributes.push(newProp)
                }
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
