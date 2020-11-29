export const handleOnlyFullyNotComputed = (processor, prop, ccssDescriptor) => {
    // No variables, no expressions, just extract
    if (!processor.isValueTreeStatic(prop)) {
        return {
            isComputed: true
        }
    }
    return handleHybrid(processor, prop, ccssDescriptor)
}

export const handleHybrid = (processor, prop, ccssDescriptor) => {
    const extracted = processor.extractStaticValues(prop.value, prop)

    return {
        pureValue: extracted,
        ccssValue: { [prop.key.name]: extracted },
        ccssString: processor.ccss.toValue(prop.key.name, extracted),
        isComputed: !!(prop.value.elements || prop.value.properties).length,
        isExtracted: !!Object.keys(extracted).length
    }
}
