import context from './context'
import { valueMap } from './maps'

const IS_PROD = process.env.NODE_ENV === 'production'

export const isRatio = (r: string) => typeof r === 'string' && r.indexOf(':') > -1

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

const ratioCache = new Map()
export const getRatioPercent = ratio => {
    if (!ratioCache.has(ratio)) {
        const [x, y] = ratio.split(':')
        ratioCache.set(ratio, `${y / (x / 100)}%`)
    }
    return ratioCache.get(ratio)
}

export const parseSingle = (input, o, gutter = false) => {
    switch (typeof input) {
        case 'string':
            return isRatio(input) ? getRatioPercent(input) : input
        case 'number':
            return input === 0 ? 0 : context.formula(gutter ? input * context.gutter : input)
        case 'boolean':
            return context.formula(context.gutter)
    }
}

const applyArray = (input, o) => {
    let out = ''
    for (const i of input) {
        out += `${parseSingle(i, o, true)} `
    }
    return out
}

export const parseMultipart = (v, o) => {
    switch (true) {
        case Array.isArray(v):
            return applyArray(v, o)
        case v:
            return applyArray([1], o)
        default:
            return parseSingle(v, o)
    }
}

export const mapValue = (input, prop) => {
    return valueMap?.[prop]?.[input] || input
}

export const pipe = function(...fs) {
    // @ts-ignore
    return (...args) => fs.reduce((args, f) => [f.apply(this, args)], args)[0]
}

export const noop = () => ''
