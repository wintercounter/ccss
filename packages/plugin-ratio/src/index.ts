import { pipe } from '@cryptic-css/core'

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

export default ({ props }) => {
    Object.assign(props, {
        p: pipe(ratio, props.p),
        pT: pipe(ratio, props.pT),
        pR: pipe(ratio, props.pR),
        pB: pipe(ratio, props.pB),
        pL: pipe(ratio, props.pL),
        m: pipe(ratio, props.m),
        mT: pipe(ratio, props.mT),
        mR: pipe(ratio, props.mR),
        mB: pipe(ratio, props.mB),
        mL: pipe(ratio, props.mL)
    })
}
