import { CCSSInput, CCSSParser, CCSSPipe } from '@/types'

export const toCSSRule = (cssProp: string, objectProp: string): CCSSParser => (input, prop, options) =>
    options.outputTransformer.toCSSRule(cssProp, objectProp, input, prop, options)

export const parseSingle: CCSSParser = (input, _, options) =>
    typeof input === 'number' ? (input === 0 ? 0 : options.applyUnit(input)) : input

const applyArray: CCSSParser = (input, prop, options) =>
    input.reduce((acc: string, curr: CCSSInput) => acc.concat(`${parseSingle(curr, prop, options)} `), '')

export const parseArray: CCSSParser = (input, prop, options) => {
    switch (true) {
        case Array.isArray(input):
            return applyArray(input, prop, options)
        case input:
            return parseSingle(1, prop, options)
        default:
            return parseSingle(input, prop, options)
    }
}

export const mapValue: CCSSParser = (input, prop, options) => options.valueMap?.[prop]?.[input] || input

export const parseCCSS: CCSSParser = (input, _, options) => options.__ccss(input)

export const pipe: CCSSPipe = function(...fs) {
    return (input, prop, options, original) => {
        for (const f of fs) {
            input = f(input, prop, options, original)
        }
        return input
    }
}

export const parsePseudo: CCSSParser = (input, prop, options) =>
    options.outputTransformer.toPseudo(input, prop, options)

export const child: CCSSParser = (input, _, options, original) => {
    let generated = options.outputTransformer.defaultOutput()

    for (const k in input) {
        if (Object.prototype.hasOwnProperty.call(input, k)) {
            if (options.props[k]) {
                generated = options.outputTransformer(generated, options.props[k](input[k], k, options, original))
            } else {
                generated = options.outputTransformer(
                    generated,
                    options.outputTransformer.toChild(input[k], k, options)
                )
            }
        }
    }
    return generated
}
