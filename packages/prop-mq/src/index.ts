import { CCSSOptions, CCSSProps } from '@cryptic-css/core'
import { mediaQuery } from '@w11r/use-breakpoint'

const handleMqElem = (value, state, t, api) => {
    const extracted = api.extractStaticValues(value.elements[1], state, t, true)
    if (extracted && Object.keys(extracted).length) {
        return [value.elements[0].value, extracted]
    }
}

/* develblock:start */
const babelPluginHandler = (attr, state, t, api) => {
    let extracted
    let isStatic

    if (attr.realValue.elements[0] && !t.isArrayExpression(attr.realValue.elements[0])) {
        extracted = handleMqElem(attr.realValue, state, t, api)
        isStatic = !attr.realValue.elements[1]?.properties?.length
    } else {
        extracted = []
        attr.realValue.elements = attr.realValue.elements.filter((el) => {
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
/* develblock:end */

export default (options: Partial<CCSSOptions>) => {
    const props = options.props as CCSSProps

    const handler = (input, prop, options) => {
        if (typeof input[0] === 'string') {
            input = [input]
        }
        // We need new array references to avoid mutating the original src
        const generated: [string, {}][] = []
        for (let i = 0; i < input.length; i++) {
            generated[i] = [input[i][0], options.__ccss(input[i][1])]
        }

        return mediaQuery(generated, options.outputTransformer.type)
    }
    props.mq = handler
    /* develblock:start */
    handler.babelPluginHandler = babelPluginHandler
    /* develblock:end */
}
