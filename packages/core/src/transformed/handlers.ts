export const mapValue = (input, prop, transformedFn) => {
    return transformedFn.getProp(prop)?.map?.[input] || input
}
