import mergeDeep from './utils'

interface IContext {
    unit: string
    transformer: (n: string | number) => string
    gutter: number
}

const context: IContext = {
    unit: 'rem',
    valueTransformer: n => `calc(${n} * ${context.unit})`,
    gutter: 16
}

export const setContext = (c: IContext) => {
    mergeDeep(context, c)
}

export default context
