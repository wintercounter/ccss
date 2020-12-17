// @ts-nocheck
import merge from 'lodash/merge'
import get from 'lodash/get'
import Processor from '@/processor'
import * as extractors from '@/extractors'
import { getIdentifierByValueType } from '@/utils'

const defaultOpts = {
    components: {
        Ui: true
    },
    constants: {},
    shortify: true,
    ccss: `require('@cryptic-css/core').default || require('@cryptic-css/core')`,
    extract: {
        output: '__[filename].[contenthash].css',
        classNameStrategy: 'MurmurHash2',
        module: false
    },
    // TODO: re-implement
    stats: false,
    // TODO: implement
    strict: false
}

export default (api, pluginOptions) => {
    const { types: t } = api
    const options = merge({}, defaultOpts, pluginOptions)
    options.constantNames = Object.keys(options.constants)
    let extractor
    if (options.extract) {
        // We only have this extractor for now
        extractor = new extractors['ccss'](options.extract)
    }
    let program

    return {
        pre(state) {
            if (options?.extract?.classNameStrategy === 'unicode') {
                // This will stop converting unicode characters to entities
                state.opts.generatorOpts.jsescOption = {
                    minimal: true
                }
            }
        },
        post(state) {
            if (options.extract) {
                extractor.writeFile(state.opts.generatorOpts.filename, program)
            }
        },
        visitor: {
            Program(path) {
                program = path
            },
            MemberExpression(path) {
                const keys = []
                let parent = path
                let lastParent
                const object = path.get('object')

                if (!object.node.name || !options.constantNames.includes(object.node.name)) return

                do {
                    if (parent.node.computed || parent.key === 'left') return
                    keys.push(parent.node.property.name)
                    lastParent = parent
                } while ((parent = parent.findParent(p => p.isMemberExpression())))

                const key = [object.node.name, ...keys].join('.')
                const value = get(options.constants, key)
                if (value === undefined) {
                    console.warn(`Constant key not found: ${key}`)
                    return
                }
                lastParent.replaceWith(getIdentifierByValueType(value))
            },
            CallExpression(path) {
                const processor = new Processor({ options, api, path })
                const cmpName = processor.isCCSSElement()

                // Handle CCSS components
                if (!cmpName) return

                // Add default props
                if (options.components?.[cmpName]?.defaultProps) {
                    for (const [name, value] of Object.entries(options.components?.[cmpName]?.defaultProps)) {
                        processor.addProp(name, value, 'unshift')
                    }
                }

                if (options.shortify) {
                    // Start with shortifying
                    processor.shortifyProps(path)
                }

                // Do extraction
                if (options.extract) {
                    extractor.onCallExpression(processor)
                }
            }
        }
    }
}
