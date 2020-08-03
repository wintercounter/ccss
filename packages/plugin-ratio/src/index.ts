import { pipe, CCSSOptions, CCSSProps, CCSSParser } from '@cryptic-css/core'

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

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps
    Object.assign(props as CCSSProps, {
        p: pipe(ratio, props.p as CCSSParser),
        pT: pipe(ratio, props.pT as CCSSParser),
        pR: pipe(ratio, props.pR as CCSSParser),
        pB: pipe(ratio, props.pB as CCSSParser),
        pL: pipe(ratio, props.pL as CCSSParser),
        m: pipe(ratio, props.m as CCSSParser),
        mT: pipe(ratio, props.mT as CCSSParser),
        mR: pipe(ratio, props.mR as CCSSParser),
        mB: pipe(ratio, props.mB as CCSSParser),
        mL: pipe(ratio, props.mL as CCSSParser)
    })
}
