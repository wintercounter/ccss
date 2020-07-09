// @ts-nocheck

export const onlyFullyStatic = (attr, state, t, api, isCCSSContext) => {
    if (!api.isValueTreeStatic(attr.value.expression, t)) {
        return {
            isStatic: false
        }
    }
    return hybrid(attr, state, t, api, isCCSSContext)
}

export const hybrid = (attr, state, t, api, isCCSSContext) => {
    const extracted = api.extractStaticValues(attr.realValue, state, t, isCCSSContext)

    return {
        pureValue: extracted,
        ccssValue: { [attr.name.name]: extracted },
        isStatic: !(attr.realValue.elements || attr.realValue.properties).length,
        isExtracted: !!Object.keys(extracted).length
    }
}
