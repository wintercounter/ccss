import { mergeDeep } from './utils'

const context = {
    unit: 'var(--px)',
    formula: n => `calc(${n} * ${context.unit})`,
    gutter: 16
}

export const setContext = c => {
    mergeDeep(context, c)
}

export default context
