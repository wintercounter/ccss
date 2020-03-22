import { CCSSProps } from './types'
import { createOptions } from './createOptions'

const generate = (v: Partial<CCSSProps>, options): string => {
    let generated = options.outputTransformer.defaultOutput()
    // eslint-disable-next-line no-restricted-syntax
    for (const k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue

        if (k === 'unsupported') {
            // skip this key
        }
        // Found such prop, process it
        else if (options.props[k]) {
            const value = options.props[k](v[k], k, options, v)

            // We don't handle undefined values
            if (value !== undefined) {
                generated = options.outputTransformer(generated, value, v[k], k, options, v)
            }
        }
        // Handle unsupported only if key is allowed
        else if (v.unsupported === true || (Array.isArray(v.unsupported) && v.unsupported.includes(k))) {
            generated = options.outputTransformer.unsupportedHandler(generated, v[k], k, options, v)
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
