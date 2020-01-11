import { setProps, props, pipe } from '@cryptic-css/core'

export const isRatio = (r: string) => typeof r === 'string' && r.indexOf(':') > -1

const ratioCache = {}
export const getRatioPercent = ratio => {
    if (ratioCache[ratio] !== undefined) {
        return ratioCache[ratio]
    }
    const [x, y] = ratio.split(':')
    return (ratioCache[ratio] = `${y / (x / 100)}%`)
}

const ratio = input => (Array.isArray(input) ? input.map(ratio) : isRatio(input) ? getRatioPercent(input) : input)

setProps({
    p: pipe(ratio, props.p),
    pt: pipe(ratio, props.pt),
    pr: pipe(ratio, props.pr),
    pb: pipe(ratio, props.pb),
    pl: pipe(ratio, props.pl),
    m: pipe(ratio, props.m),
    mt: pipe(ratio, props.mt),
    mr: pipe(ratio, props.mr),
    mb: pipe(ratio, props.mb),
    ml: pipe(ratio, props.ml)
})
