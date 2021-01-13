import { CCSSOutputTransformer } from '@/types'

export const objectOutputTransformer: CCSSOutputTransformer = (generated, descriptor) => {
    return Object.assign(generated, descriptor)
}
objectOutputTransformer.defaultOutput = () => ({})
objectOutputTransformer.type = Object
objectOutputTransformer.toCSSRule = (cssProp, input) => {
    return input === undefined ? {} : { [cssProp]: input }
}
objectOutputTransformer.toChild = (input, prop, transformedFn, inputObject, definition) => {
    const p = definition ? definition.keys[definition.keys.length - 1] : prop
    return {
        [p[0] === ':' ? `&${p}` : p]: transformedFn(input)
    }
}
objectOutputTransformer.unsupportedHandler = (generated, input, prop) => {
    generated[prop] = input
    return generated
}

export const stringOutputTransformer: CCSSOutputTransformer = (generated, descriptor) => {
    return (generated as string) + (descriptor as string)
}

stringOutputTransformer.defaultOutput = () => ''
stringOutputTransformer.type = String
stringOutputTransformer.toCSSRule = (cssProp, input) => {
    return input === undefined ? '' : `${cssProp}: ${input};`
}
stringOutputTransformer.toChild = (input, prop, transformedFn, inputObject, definition) => {
    const p = definition ? definition.keys[definition.keys.length - 1] : prop
    return `
    ${p[0] === ':' ? `&${p}` : p} {
        ${transformedFn(input)}
    }`
}
stringOutputTransformer.unsupportedHandler = (generated, input, prop) => {
    return `${generated}${prop}: ${input};`
}
stringOutputTransformer.camelCaseReducer = (acc, cc) => {
    return [cc, ...acc]
}
