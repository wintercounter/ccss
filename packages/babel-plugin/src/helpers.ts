export const isCCSSTag = (path, state) => {
    const nodeName = path.node.name.object?.name || path.node.name.name
    const { identifiers = {} } = state.opts

    return identifiers[nodeName]
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

export const getIdentifierByValueType = (value, t, wrapContainer = true) => {
    if (typeof value === 'string') {
        return t.stringLiteral(value)
    }

    if (typeof value === 'boolean') {
        if (wrapContainer) {
            return t.jsxExpressionContainer(t.booleanLiteral(value))
        }
        return t.booleanLiteral(value)
    }

    if (typeof value === 'number') {
        if (wrapContainer) {
            return t.jsxExpressionContainer(t.numericLiteral(value))
        }
        return t.numericLiteral(value)
    }

    return value
}

export const isAttrValueString = attr => attr.value && attr.value.type === 'StringLiteral'
export const isAttrValueSingleStringLiteral = attr =>
    attr.value &&
    attr.value.type === 'JSXExpressionContainer' &&
    attr.value?.expression.type === 'TemplateLiteral' &&
    attr.value.expression.quasis.length === 1 &&
    typeof attr.value.expression.quasis?.[0].value.raw === 'string' &&
    attr.value.expression.quasis[0].value.raw === attr.value.expression.quasis[0].value.cooked
export const isAttrValueNumeric = attr =>
    attr.value && attr.value.type === 'JSXExpressionContainer' && attr.value?.expression.type === 'NumericLiteral'
export const isAttrArray = attr => attr?.value?.expression.type === 'ArrayExpression'

export const getAttrDetails = (attr, state, t) => {
    const name = attr.name.name

    const resolved = resolveConstantExpression(attr, state)
    if (resolved) {
        attr.value = getIdentifierByValueType(resolved, t)
    }

    switch (true) {
        case isAttrValueString(attr):
            return {
                name,
                value: attr.value.value,
                isStatic: true
            }
        case isAttrValueSingleStringLiteral(attr):
            return {
                name,
                value: attr.value.expression.quasis[0].value.cooked,
                isStatic: true
            }
        case isAttrValueNumeric(attr):
            return {
                name,
                value: attr.value.expression.value,
                isStatic: true
            }
        case isAttrArray(attr): {
            let isStatic = true

            attr.value.expression.elements = attr.value.expression.elements.map(el => {
                const resolved = resolveConstantExpression(el, state)
                if (resolved) {
                    el = getIdentifierByValueType(resolved, t, false)
                }
                if (!t.isNumericLiteral(el) && !t.isStringLiteral(el)) {
                    isStatic = false
                }
                return el
            })

            return {
                name,
                //
                value: isStatic ? attr.value.expression.elements.map(el => el.value) : attr.value.expression.value,
                isStatic
            }
        }
    }
}

export const resolveConstantExpression = (attr, state) => {
    const { constants } = state.opts

    // Nothing to resolve...
    if (!constants) return

    let obj = attr?.value?.expression || attr
    const path = []
    while (obj) {
        obj.name && path.push(obj.name)
        obj.property?.name && path.push(obj.property.name)
        obj = obj.object
    }
    path.reverse()

    // Not a constant or no such constant was found
    if (path.length === 0 || !constants[path[0]]) return

    let value = constants
    let key

    while ((key = path.shift())) {
        // No such constant found, quit
        if (!value.hasOwnProperty(key)) return
        value = value[key]
    }
    return value
}
