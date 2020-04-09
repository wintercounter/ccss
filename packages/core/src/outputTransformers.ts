export const objectOutputTransformer = (generated, descriptor) => {
    return Object.assign(generated, descriptor)
}

objectOutputTransformer.defaultOutput = () => ({})
objectOutputTransformer.type = Object
objectOutputTransformer.toCSSRule = (cssProp, objectCSSProp, input) => {
    return input === undefined ? {} : { [objectCSSProp]: input }
}
objectOutputTransformer.toChild = (input, prop, options) => {
    return {
        [options.pseudoMap[prop] || prop]: options.__ccss(input)
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
stringOutputTransformer.toCSSRule = (cssProp, objectCSSProp, input) => {
    return input === undefined ? '' : `${cssProp}: ${input};`
}
stringOutputTransformer.toChild = (input, prop, options) => {
    return `
    ${options.pseudoMap[prop] || prop} {
        ${options.__ccss(input)}
    }`
}
stringOutputTransformer.unsupportedHandler = (generated, input, prop) => {
    // eslint-disable-next-line no-restricted-syntax
    return generated + `${prop}: ${input};`
}
