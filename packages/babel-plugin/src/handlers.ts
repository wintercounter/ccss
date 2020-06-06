export const onlyFullyStatic = (attr, state, t, api) => {
    if (!api.isValueTreeStatic(attr.value.expression, t)) {
        return {
            isStatic: false
        }
    }
    return hybrid(attr, state, t, api)
}

export const hybrid = (attr, state, t, api) => {
    const extracted = api.extractStaticValues(attr.realValue, state, t)

    return {
        pureValue: extracted,
        ccssValue: { [attr.name.name]: extracted },
        isStatic: !(attr.realValue.elements || attr.realValue.properties).length,
        isExtracted: !!Object.keys(extracted).length
    }
}
