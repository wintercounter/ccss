import _shortest from 'shortest'

// According to standard, anything above U+00A1 is supported as CSS selector
let charCode = 161
export const unicode = () => String.fromCharCode(charCode++)

export const shortest = _shortest('xyzXYZwqWQ'.split(''))

// Only for internal testing purposes!
// @see https://stackoverflow.com/questions/7627000/javascript-convert-string-to-safe-class-name-for-css
export const testing = (attr, value) => {
    return `${attr}${value.toString()}`.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0)
        if (c == 32) return '-'
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase()
        return '__' + ('000' + c.toString(16)).slice(-4)
    })
}
