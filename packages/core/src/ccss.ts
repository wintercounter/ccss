import { TCCSSCoreProp } from './types'
import { createOptions } from './createOptions'

const generate = (v: TCCSSCoreProp & any, options): string => {
    let generated = options.outputTransformer.defaultOutput()
    // eslint-disable-next-line no-restricted-syntax
    for (const k in v) {
        if (Object.prototype.hasOwnProperty.call(v, k)) {
            if (options.props[k]) {
                generated = (options.props[k]
                    ? options.outputTransformer
                    : options.outputTransformer.unsupportedHandler)(generated, options.props[k](v[k], k, options, v))
            }
        }
    }
    return generated
}

export const defaultOptions = createOptions()

export const createCCSS = (options = defaultOptions) => {
    const __ccss = ccssProps => generate(ccssProps, options)
    options.__ccss = __ccss
    return __ccss
}

export const ccss = createCCSS()
