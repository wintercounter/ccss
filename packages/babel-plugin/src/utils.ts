// Source: https://github.com/r12a/app-conversion/blob/gh-pages/conversionfunctions.js#L1488

/* eslint-disable */
export function convertCharStr2CSS(str) {
    // Converts a string of characters to CSS escapes
    // str: sequence of Unicode characters
    var highsurrogate = 0
    var suppCP
    var pad
    var outputString = ''
    for (var i = 0; i < str.length; i++) {
        var cc = str.charCodeAt(i)
        if (cc < 0 || cc > 0xffff) {
            outputString += '!Error in convertCharStr2CSS: unexpected charCodeAt result, cc=' + cc + '!'
        }
        if (highsurrogate != 0) {
            // this is a supp char, and cc contains the low surrogate
            if (0xdc00 <= cc && cc <= 0xdfff) {
                suppCP = 0x10000 + ((highsurrogate - 0xd800) << 10) + (cc - 0xdc00)
                pad = suppCP.toString(16).toUpperCase()
                if (suppCP < 0x10000) {
                    while (pad.length < 4) {
                        pad = '0' + pad
                    }
                } else {
                    while (pad.length < 6) {
                        pad = '0' + pad
                    }
                }
                outputString += '\\' + pad + ' '
                highsurrogate = 0
                continue
            } else {
                outputString += 'Error in convertCharStr2CSS: low surrogate expected, cc=' + cc + '!'
                highsurrogate = 0
            }
        }
        if (0xd800 <= cc && cc <= 0xdbff) {
            // start of supplementary character
            highsurrogate = cc
        } else {
            // this is a BMP character
            if (cc == 0x5c) {
                outputString += '\\\\'
            } else if (cc > 0x1f && cc < 0x7f) {
                outputString += String.fromCharCode(cc)
            } else if (cc == 0x9 || cc == 0xa || cc == 0xd) {
                outputString += String.fromCharCode(cc)
            } /* if (cc > 0x7E) */ else {
                pad = cc.toString(16).toUpperCase()
                while (pad.length < 4) {
                    pad = '0' + pad
                }
                outputString += '\\' + pad + ' '
            }
        }
    }
    return outputString
}
