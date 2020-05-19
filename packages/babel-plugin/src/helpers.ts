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

export const getIdentifierByValueType = (value, t) => {
    if (typeof value === 'string') {
        return t.stringLiteral(value)
    }

    if (typeof value === 'boolean') {
        return t.jsxExpressionContainer(t.booleanLiteral(value))
    }

    if (typeof value === 'number') {
        return t.jsxExpressionContainer(t.numericLiteral(value))
    }

    return value
}
