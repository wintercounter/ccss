import { defaultOptions } from 'ccss'

export const onlyFullyStatic = (attr, state, t, api) => {
    if (!api.isValueTreeStatic(attr.value.expression, t)) {
        return {
            isStatic: false
        }
    }
    return hybrid(attr, state, t, api)
}

export const child = (attr, state, t, api) => {}

export const hybrid = (attr, state, t, api) => {
    const extracted = api.extractStaticValues(attr.realValue, state, t)

    return {
        pureValue: extracted,
        ccssValue: { [attr.name.name]: extracted },
        isStatic: !(attr.realValue.elements || attr.realValue.properties).length,
        isExtracted: !!Object.keys(extracted).length
    }
}

for (const prop of Object.values(defaultOptions.props)) {
    prop.babelPluginHandler = prop.babelPluginHandler || onlyFullyStatic
}

const handleMqElem = (value, state, t, api) => {
    const extracted = api.extractStaticValues(value.elements[1], state, t)
    if (Object.keys(extracted).length) {
        return [value.elements[0].value, extracted]
    }
}
defaultOptions.props.mq.babelPluginHandler = (attr, state, t, api) => {
    let extracted
    let isStatic
    if (attr.realValue.elements[0] && !t.isArrayExpression(attr.realValue.elements[0])) {
        extracted = handleMqElem(attr.realValue, state, t, api)
        isStatic = !attr.realValue.elements[1].properties.length
    } else {
        extracted = []
        attr.realValue.elements.filter(el => {
            const ext = handleMqElem(el, state, t, api)
            ext && extracted.push(ext)
            return el.elements[1].properties.length
        })
        isStatic = !attr.realValue.elements.length
    }
    return {
        pureValue: extracted,
        ccssValue: { [attr.name.name]: extracted },
        isStatic,
        isExtracted: !!extracted
    }
}
defaultOptions.props.child.babelPluginHandler = hybrid
