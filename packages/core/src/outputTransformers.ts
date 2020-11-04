export const objectOutputTransformer = (generated, descriptor) => {
    return Object.assign(generated, descriptor)
}
objectOutputTransformer.defaultOutput = () => ({})
objectOutputTransformer.type = Object
objectOutputTransformer.toCSSRule = (cssProp, input) => {
    return input === undefined ? {} : { [cssProp]: input }
}
objectOutputTransformer.toChild = (input, prop, transformedFn, definition) => {
    const p = definition ? definition.keys[definition.keys.length - 1] : prop
    return {
        [p[0] === ':' ? `&${p}` : p]: transformedFn(input)
    }
}
objectOutputTransformer.unsupportedHandler = (generated, input, prop) => {
    generated[prop] = input
    return generated
}

export const stringOutputTransformer = (generated, descriptor) => {
    return generated + descriptor
}

stringOutputTransformer.defaultOutput = () => ''
stringOutputTransformer.type = String
stringOutputTransformer.toCSSRule = (cssProp, input) => {
    return input === undefined ? '' : `${cssProp}: ${input};`
}
stringOutputTransformer.toChild = (input, prop, transformedFn, definition) => {
    const p = definition ? definition.keys[definition.keys.length - 1] : prop
    return `
    ${p[0] === ':' ? `&${p}` : p} {
        ${transformedFn(input)}
    }`
}
stringOutputTransformer.unsupportedHandler = (generated, input, prop) => {
    // eslint-disable-next-line no-restricted-syntax
    return generated + `${prop}: ${input};`
}
stringOutputTransformer.camelCaseReducer = (acc, cc) => {
    return [cc, ...acc]
}
