import { pipe } from '@cryptic-css/core'

const DEFAULT = 5

const gutter = (input, prop, options) => {
    const g = options.gutter || DEFAULT

    switch (true) {
        case Array.isArray(input):
            return input.map(i => gutter(i, prop, options))
        case input:
            return g
        case !isNaN(input):
            return g * input
        default:
            return input
    }
}

export default ({ props }) => {
    Object.assign(props, {
        p: pipe(gutter, props.p),
        pT: pipe(gutter, props.pT),
        pR: pipe(gutter, props.pR),
        pB: pipe(gutter, props.pB),
        pL: pipe(gutter, props.pL),
        m: pipe(gutter, props.m),
        mT: pipe(gutter, props.mT),
        mR: pipe(gutter, props.mR),
        mB: pipe(gutter, props.mB),
        mL: pipe(gutter, props.mL),
        gg: pipe(gutter, props.gg),
        grg: pipe(gutter, props.grg),
        gcg: pipe(gutter, props.gcg)
    })
}
