// @ts-nocheck

import _shortest from 'shortest'
import hash from '@emotion/hash'

// According to standard, anything above U+00A1 is supported as CSS selector
let charCode = 161
const forbidden = [173]
export const unicode = () => {
    charCode++
    if (forbidden.includes(charCode)) {
        return unicode()
    }
    return String.fromCharCode(charCode)
}

export const shortest = _shortest('cCsSxyzXYZwqWQ'.split(''))

export const MurmurHash2 = css => {
    return `c${hash(css)}`
}

// Only for internal testing purposes!
const replace = x =>
    x.replace(/[^a-z0-9]/g, function (s) {
        var c = s.charCodeAt(0)
        if (c == 32) return '_'
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase()
        return '_'
    })
export const testing = (attr, value) => {
    return replace(`${replace(attr)} ${replace(typeof value === 'object' ? JSON.stringify(value) : value.toString())}`)
}
