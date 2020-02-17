import options from './options'
import { valueMap, pseudoMap } from './maps'
import ccss from './ccss'

export const toCSSRule = cssProp => (key, input) => {
    return input === undefined ? '' : `${cssProp}: ${input};`
}

export const parseSingle = (prop, input) => {
    switch (typeof input) {
        case 'number':
            return input === 0 ? 0 : options.applyUnit(input)
        case 'string':
        default:
            return input
    }
}

const applyArray = (prop, input) => {
    let out = ''
    for (const i of input) {
        out += `${parseSingle(prop, i)} `
    }
    return out
}

export const parseArray = (prop, input) => {
    switch (true) {
        case Array.isArray(input):
            return applyArray(prop, input)
        case input:
            return applyArray(prop, [1])
        default:
            return parseSingle(prop, input)
    }
}

export const mapValue = (prop, input) => {
    return valueMap?.[prop]?.[input] || input
}

export const pipe = function(...fs) {
    return (prop, input, original) => {
        for (const f of fs) {
            input = f(prop, input, original)
        }
        return input
    }
}

export const parsePseudo = (prop, input) => `
    :${pseudoMap[prop]} {
        ${ccss(input)}
    }
`

/**
 * You can pass children to your ccss supporting both pseudo classes and nested selectors
 *
 * @example
 * ```js
 * child({
 *   ':h': { d: 'b' },
 *   '.childDiv': { p: 10 }
 * })
 * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
 * ```
 */
export const child = (prop, input) => {
    let generated = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const k in input) {
        if (Object.prototype.hasOwnProperty.call(input, k)) {
            generated += `
            ${pseudoMap[k] ? `:${pseudoMap[k]}` : k} {
                ${ccss(input[k])}
            }`
        }
    }
    return generated
}
