import { setProps, props, pipe, options } from '@cryptic-css/core'

const DEFAULT = 5

const gutter = input => {
    const g = options.gutter || DEFAULT

    switch (true) {
        case Array.isArray(input):
            return input.map(gutter)
        case input:
            return gutter
        case !isNaN(input):
            return g * input
        default:
            return input
    }
}

setProps({
    p: pipe(gutter, props.p),
    pt: pipe(gutter, props.pt),
    pr: pipe(gutter, props.pr),
    pb: pipe(gutter, props.pb),
    pl: pipe(gutter, props.pl),
    m: pipe(gutter, props.m),
    mt: pipe(gutter, props.mt),
    mr: pipe(gutter, props.mr),
    mb: pipe(gutter, props.mb),
    ml: pipe(gutter, props.ml),
    gg: pipe(gutter, props.gg),
    grg: pipe(gutter, props.grg),
    gcg: pipe(gutter, props.gcg)
})
