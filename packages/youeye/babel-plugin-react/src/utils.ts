import * as t from '@babel/types'
import * as babylon from '@babel/parser'
import traverse from '@babel/traverse'

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

export const getIdentifierByValueType = (value) => {
    if (typeof value === 'undefined') {
        return t.identifier('undefined')
    }

    if (typeof value === 'string') {
        return t.stringLiteral(value)
    }

    if (typeof value === 'boolean') {
        return t.booleanLiteral(value)
    }

    if (typeof value === 'number') {
        return t.numericLiteral(value)
    }

    if (Array.isArray(value)) {
        return t.arrayExpression(value.map((v) => getIdentifierByValueType(v)))
    }

    if (typeof value === 'object') {
        return objectToAST(value)
    }

    return value
}

const objectToAST = <T>(literal: T) => {
    if (literal === null) {
        return t.nullLiteral()
    }
    switch (typeof literal) {
        case 'function':
            const ast = babylon.parse(literal.toString(), {
                allowReturnOutsideFunction: true,
                allowSuperOutsideMethod: true
            })
            return traverse.removeProperties(ast)
        case 'number':
            return t.numericLiteral(literal)
        case 'string':
            return t.stringLiteral(literal)
        case 'boolean':
            return t.booleanLiteral(literal)
        case 'undefined':
            return t.unaryExpression('void', t.numericLiteral(0), true)
        default:
            if (Array.isArray(literal)) {
                return t.arrayExpression(literal.map(objectToAST))
            }
            return t.objectExpression(
                Object.keys(literal)
                    .filter((k) => {
                        return typeof literal[k] !== 'undefined'
                    })
                    .map((k) => {
                        return t.objectProperty(t.stringLiteral(k), objectToAST(literal[k]))
                    })
            )
    }
}

export const covertToStringLiteralTag = (path, state, tagName) => {
    if (path.node.name?.object?.name) {
        const o = path.node.name.object
        delete path.node.name.object
        delete path.node.name.property
        Object.assign(path.node.name, o)
    }
    path.node.name.name = tagName
}

export const isPropValueString = (prop) => prop.value && prop.value.type === 'StringLiteral'
export const isPropValueSingleStringLiteral = (prop) =>
    prop.value &&
    prop.value?.type === 'TemplateLiteral' &&
    prop.value.expressions.length === 0 &&
    prop.value.quasis.length === 1 &&
    typeof prop.value.quasis?.[0].value.raw === 'string' &&
    prop.value.quasis[0].value.raw === prop.value.quasis[0].value.cooked
export const isPropValueNumeric = (prop) => prop.value && prop.value.type === 'NumericLiteral'
export const isPropArray = (prop) => prop?.value?.type === 'ArrayExpression'
export const isPropObject = (prop) => prop?.value?.type === 'ObjectExpression'
