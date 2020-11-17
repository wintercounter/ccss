import { CCSSProp } from '@cryptic-css/core'
import { mediaQuery } from '@w11r/use-breakpoint'

declare module '@cryptic-css/core' {
    interface CCSSProps {
        /**
         * # mediaQuery (mb)
         *
         * Helps you to apply CCSS rules based on screen sizes.
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        mq?: CCSSProp
        /**
         * # mediaQuery (mb)
         *
         * Helps you to apply CCSS rules based on screen sizes.
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        mediaQuery?: CCSSProp
    }
}

const handler = (input, prop, transformedFn): string => {
    if (typeof input[0] === 'string') {
        input = [input]
    }
    // We need new array references to avoid mutating the original src
    const generated: [string, {}][] = []
    for (let i = 0; i < input.length; i++) {
        generated[i] = [input[i][0], transformedFn(input[i][1])]
    }

    return mediaQuery(generated, transformedFn.outputTransformer.type) as string
}

/* develblock:start */
const handleMqElem = (value, state, t, api) => {
    const extracted = api.extractStaticValues(value.elements[1], state, t, true)

    if (extracted && Object.keys(extracted).length) {
        return [value.elements[0].value, extracted]
    }
}

const babelPluginHandler = (attr, state, t, api) => {
    let extracted
    let isStatic

    if (attr.realValue.elements[0] && !t.isArrayExpression(attr.realValue.elements[0])) {
        extracted = handleMqElem(attr.realValue, state, t, api)
        isStatic = !attr.realValue.elements[1]?.properties?.length
    } else {
        extracted = []
        attr.realValue.elements = attr.realValue.elements.filter(el => {
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
handler.babelPluginHandler = babelPluginHandler
/* develblock:end */

const useProp = transformedFn => {
    transformedFn.setProps(['mq', 'mediaQuery'].map(prop => [[prop], null, [handler]]))
}

export default useProp
