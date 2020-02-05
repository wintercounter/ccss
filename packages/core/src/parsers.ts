import options from './options'
import { valueMap, pseudoMap } from './maps'
import ccss from './ccss'

const IS_PROD = process.env.NODE_ENV === 'production'

const _evaluateCSSProp = (prop, value, transformer?) =>
    value === undefined ? '' : `${prop}: ${transformer ? transformer(value, prop) : value};`

export const evaluateCSSProp =
    process.env.NODE_ENV === 'production'
        ? _evaluateCSSProp
        : (...args) => {
              if (!IS_PROD && args[3]) {
                  try {
                      args[3](args)
                      // eslint-disable-next-line no-empty
                  } catch {}
              }
              // @ts-ignore
              return _evaluateCSSProp(...args)
          }

export const parseSingle = input => {
    switch (typeof input) {
        case 'number':
            return input === 0 ? 0 : options.valueTransformer(input)
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
            return applyArray([1])
        default:
            return parseSingle(input)
    }
}

export const mapValue = (input, prop) => {
    return valueMap?.[prop]?.[input] || input
}

export const pipe = function(...fs) {
    // @ts-ignore
    return (...args) => fs.reduce((args, f) => [f.apply(this, args)], args)[0]
}

/**
 * You can pass children to your ccss supporting both pseudo classes and nested selectors
 *
 * @example
 * ```js
 * child({
 *   h: { d: 'b' },
 *   '.childDiv': { p: 10 }
 * })
 * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
 * ```
 */
export const child = i => {
    let generated = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const k in i) {
        if (Object.prototype.hasOwnProperty.call(i, k)) {
            generated += `
            ${pseudoMap[k] ? `:${pseudoMap[k]}` : k} {
                ${ccss(i[k])}
            }`
        }
    }
    return generated
}
