export const objectOutputTransformer = (generated, descriptor) => {
    return Object.assign(generated, descriptor)
}

objectOutputTransformer.defaultOutput = () => ({})
objectOutputTransformer.type = Object
objectOutputTransformer.toCSSRule = (cssProp, objectCSSProp, input) => {
    return input === undefined ? {} : { [objectCSSProp]: input }
}
objectOutputTransformer.toPseudo = (input, prop, options) => {
    return {
        [`:${options.pseudoMap[prop]}`]: options.__ccss(input)
    }
}
objectOutputTransformer.unsupportedHandler = input => {
    let generated = objectOutputTransformer.defaultOutput()
    // eslint-disable-next-line no-restricted-syntax
    for (const k in input) {
        if (Object.prototype.hasOwnProperty.call(input, k)) {
            generated = `${k}: ${input[k]};`
        }
    }
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
stringOutputTransformer.toPseudo = (input, prop, options) => {
    return `
    :${options.pseudoMap[prop]} {
        ${options.__ccss(input)}
    }`
}
stringOutputTransformer.unsupportedHandler = input => {
    let generated = stringOutputTransformer.defaultOutput()
    // eslint-disable-next-line no-restricted-syntax
    for (const k in input) {
        if (Object.prototype.hasOwnProperty.call(input, k)) {
            generated = `${k}: ${input[k]};`
        }
    }
    return generated
}
