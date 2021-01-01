import { Options } from 'transformed'

const defaultOptions = (): Partial<Options> => {
    const options = {
        // InOut options
        // Convert CSS properties to camel case
        autoCamelCase: true,
        // CCSS options
        unit: 'px',
        applyUnit(n) {
            return `${n}${this.unit}`
        }
    }
    return options
}

export default defaultOptions
