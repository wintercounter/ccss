const DEFAULT = 5

const gutter = (input, prop, transformedFn) => {
    const g = transformedFn.options.gutter || DEFAULT

    switch (true) {
        case Array.isArray(input):
            return input.map((i) => gutter(i, prop, transformedFn))
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

const usePlugin = (transformedFn) => {
    transformedFn.setProps(
        ['p', 'pT', 'pR', 'pB', 'pL', 'm', 'mT', 'mR', 'mB', 'mL', 'gg', 'cg', 'gp', 'gr'].map((prop) => [
            [prop],
            null,
            [gutter, '...']
        ])
    )
}

export default usePlugin
