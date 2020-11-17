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

const usePlugin = transformedFn => {
    transformedFn.setProps(
        ['p', 'pT', 'pR', 'pB', 'pL', 'm', 'mT', 'mR', 'mB', 'mL'].map(prop => [[prop], null, [ratio, '...']])
    )
}

export default usePlugin
