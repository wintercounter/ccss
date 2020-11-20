// @ts-nocheck

import traverse from '@babel/traverse'
import template from '@babel/template'
import merge from 'lodash/merge'
import Processor from '@/processor'
import { getIdentifierByValueType } from '@/utils'

const defaultOpts = {
    pragmas: ['React.createElement', '_jsx', '_jsxs'],
    components: {
        Ui: true
    },
    constants: {},
    classNameStrategy: 'MurmurHash2',
    resolveConstants: true,
    shortify: true,
    ccss: `require('@cryptic-css/core').default || require('@cryptic-css/core')`,
    extract: {
        outputFormat: 'ccss'
    },
    stats: false
}

export default (api, pluginOptions) => {
    const { types: t } = api
    const options = merge({}, defaultOpts, pluginOptions)
    options.constantNames = Object.keys(options.constants)

    return {
        visitor: {
            MemberExpression(path) {
                // Let's resolve constants

                // It's a constant
                const o = path.get('object')
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
                    processor.shortifyProps()
                }
            }
        }
    }
}
