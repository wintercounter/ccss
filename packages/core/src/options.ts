import mergeDeep from './utils'
import { IOptions } from './types'

const options: IOptions = {
    unit: 'rem',
    valueTransformer: n => `${n}${options.unit}`
}

/**
 * This function will set custom options. It is extending the default options.
 *
 * @example
 * ```js
 * setOptions({
 *     unit: 'var(--custom)',
 *     valueTransformer: v => `calc(${v} * ${options.unit})`
 * })
 * ```
 */
export const setOptions = (c: IOptions) => {
    mergeDeep(options, c)
}

export default 
