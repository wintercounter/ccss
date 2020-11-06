export const parseMapValue = (input, prop, transformedFn) => {
    return transformedFn.registry.get(prop)?.map?.[input] || input
}
