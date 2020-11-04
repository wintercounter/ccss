import { CCSSOptions } from './types'

const defaultOptions: Partial<CCSSOptions> = () => {
    const options = {
        // InOut options
        // Convert CSS properties to camel case
        autoCamelCase: true,
        // CCSS options
        unit: typeof navigator != 'undefined' && navigator.product === 'ReactNative' ? 'px' : 'rem',
        applyUnit: n => `${n}${options.unit}`
    }
    return options
}

export default defaultOptions
