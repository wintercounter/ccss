import { CCSSOptions } from './types'

const defaultOptions = (): Partial<CCSSOptions> => {
    return {
        autoCamelCase: true,

        // CCSS Options
        applyUnit(n) {
            return `${n}px`
        }
    }
}

export default defaultOptions
