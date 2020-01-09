import mergeDeep from './utils'
import { IContext } from './types'

const context: IContext = {
    unit: 'var(--px)',
    formula: n => `calc(${n} * ${context.unit})`,
    gutter: 16
}

/**
 * This function will set the context, based on the default one.
 *
 * @param {IContext} context
 * @example
 * ```js
 * setContext({} as IContext)
 * ```
 */
export const setContext = (c: IContext) => {
    mergeDeep(context, c)
}

export default context
