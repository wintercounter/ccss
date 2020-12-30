import { CCSSParser } from '@/types'

export const parseSingle: CCSSParser = (input, prop, transformedFn) =>
    typeof input === 'number' ? (input === 0 ? 0 : transformedFn.options.applyUnit(input)) : input

const applyArray: CCSSParser = (input, prop, transformedFn) => {
    let out = ''
    for (const i of input) {
        out += `${parseSingle(i, prop, transformedFn)} `
    }
    return out
}

export const parseArray: CCSSParser = (input, prop, transformedFn) => {
    switch (true) {
        case Array.isArray(input):
            return applyArray(input, prop, transformedFn)
        case input:
            return parseSingle(1, prop, transformedFn)
        default:
            return parseSingle(input, prop, transformedFn)
    }
}

export const toCSSRule: CCSSParser = (input, prop, transformedFn, inputObject, definition) => {
    const cssProp = definition ? definition.keys[definition.keys.length - 1] : prop
    // We only need value
    if (!inputObject) return input
    return transformedFn.outputTransformer.toCSSRule(cssProp, input, prop, transformedFn)
}

export const parseCCSS: CCSSParser = (input, prop, transformedFn) => transformedFn(input)

export const parsePseudo: CCSSParser = (input, prop, transformedFn, inputObject, definition) => {
    return transformedFn.outputTransformer.toChild(input, prop, transformedFn, inputObject, definition)
}

export const child: CCSSParser = (input, prop, transformedFn, inputObject) => {
    let generated = transformedFn.outputTransformer.defaultOutput()

    for (const k in input) {
        if (Object.prototype.hasOwnProperty.call(input, k)) {
            const definition = transformedFn.registry.get(k)
            const isPseudo = k[0] === ':'
            generated = transformedFn.outputTransformer(
                generated,
                transformedFn.outputTransformer.toChild(
                    input[k],
                    k,
                    transformedFn,
                    inputObject,
                    isPseudo ? definition : undefined
                )
            )
        }
    }
    return generated
}
