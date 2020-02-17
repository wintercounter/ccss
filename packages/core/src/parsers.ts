import options from './options'
import { valueMap, pseudoMap } from './maps'
import ccss from './ccss'

export const toCSSRule = cssProp => input => {
    return input === undefined ? '' : `${cssProp}: ${input};`
}

export const parseSingle = input => {
    switch (typeof input) {
        case 'number':
            return input === 0 ? 0 : options.applyUnit(input)
        case 'string':
        default:
            return input
    }
}

const applyArray = input => {
    let out = ''
    for (const i of input) {
        out += `${parseSingle(i)} `
    }
    return out
}

export const parseArray = input => {
    switch (true) {
        case Array.isArray(input):
            return applyArray(input)
        case input:
            return parseSingle(1)
        default:
            return parseSingle(input)
    }
}

export const mapValue = (input, prop) => {
    return valueMap?.[prop]?.[input] || input
}

export const pipe = function(...fs) {
    return (input, prop, original) => {
        for (const f of fs) {
            input = f(input, prop, original)
        }
        return input
    }
}

export const parsePseudo = (input, prop) => `
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
export const child = input => {
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
