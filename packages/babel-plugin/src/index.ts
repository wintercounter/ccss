// @ts-nocheck
import traverse from '@babel/traverse'
import merge from 'lodash/merge'
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
            ObjectProperty(path) {
                if (
                    path.node.value.type === 'Identifier' &&
                    options.constantNames.includes(path.node.value.name) &&
                    // Skip react createClass calls, this is maybe our component, not a constant to resolve
                    path.parentPath.type !== 'CallExpression'
                ) {
                    path.node.value = getIdentifierByValueType(options.constants[path.node.value.name])
                }
            },
            MemberExpression(path) {
                const o = path.get('object')
                // Resolve constants
                if (options.constantNames.includes(o.node.name)) {
                    let value = options.constants[o.node.name]
                    let parent = o
                    let prevParent = o

                    while (true) {
                        parent = parent.parentPath

                        const tmp = value?.[parent.node?.property?.name]
                        if (tmp !== undefined) {
                            value = tmp
                            prevParent = parent
                        } else {
                            break
                        }
                    }
                    // Const we replace to
                    prevParent.replaceWith(getIdentifierByValueType(value))
                }
            },
            CallExpression(path) {
                const processor = new Processor({ options, api, path })

                // Handle CCSS components
                if (!processor.isCCSSElement()) return

                // Start with shortifying
                if (options.shortify) {
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
