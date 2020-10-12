import { pipe, CCSSOptions, CCSSParser, CCSSProps } from '@cryptic-css/core'

const DEFAULT = 5

const gutter = (input, prop, options) => {
    const g = options.gutter || DEFAULT

    switch (true) {
        case Array.isArray(input):
            return input.map(i => gutter(i, prop, options))
        case input:
            return g
        // @ts-ignore
        case typeof input === 'string' && +input == input:
            return +input
        case !isNaN(input):
            return g * input
        default:
            return input
    }
}

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps
    Object.assign(props as CCSSProps, {
        p: pipe(gutter, props.p as CCSSParser),
        pT: pipe(gutter, props.pT as CCSSParser),
        pR: pipe(gutter, props.pR as CCSSParser),
        pB: pipe(gutter, props.pB as CCSSParser),
        pL: pipe(gutter, props.pL as CCSSParser),
        m: pipe(gutter, props.m as CCSSParser),
        mT: pipe(gutter, props.mT as CCSSParser),
        mR: pipe(gutter, props.mR as CCSSParser),
        mB: pipe(gutter, props.mB as CCSSParser),
        mL: pipe(gutter, props.mL as CCSSParser),
        gg: pipe(gutter, props.gg as CCSSParser),
        grg: pipe(gutter, props.grg as CCSSParser),
        gcg: pipe(gutter, props.gcg as CCSSParser)
    })
}
