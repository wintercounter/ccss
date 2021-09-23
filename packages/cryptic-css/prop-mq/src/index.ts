import { CCSSProps, CCSSPropValue } from '@cryptic-css/core'
import { InputObject } from 'transformed'
import { mediaQuery } from '@w11r/use-breakpoint'

export type MediaQueryItem = [string, CCSSProps]
export type MediaQueryItems = MediaQueryItem | MediaQueryItem[]
export type MediaQueryPropFunction = <T>(v: CCSSPropValue, o?: T, p?: InputObject) => MediaQueryItems
export type MediaQueryValue = MediaQueryItem | MediaQueryItem[] | MediaQueryPropFunction

declare module '@cryptic-css/core' {
    interface CCSSProps {
        /**
         * # mediaQuery
         *
         * Helps you to apply CCSS rules based on screen sizes, and use query (@ based rules).
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        mq?: MediaQueryValue
        /**
         * # mediaQuery
         *
         * Helps you to apply CCSS rules based on screen sizes, and use query (@ based rules).
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        mediaQuery?: MediaQueryValue
        /**
         * # mediaQuery
         *
         * Helps you to apply CCSS rules based on screen sizes, and use query (@ based rules).
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        at?: MediaQueryValue
        /**
         * # mediaQuery
         *
         * Helps you to apply CCSS rules based on screen sizes, and use query (@ based rules).
         *
         * @see https://ccss.dev/docs/api-and-packages/prop-mq
         */
        media?: MediaQueryValue
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

const useProp = (transformedFn) => {
    transformedFn.setProps(
        ['mq', 'at', 'media', 'mediaQuery'].map((prop) => [
            [prop],
            null,
            [handler],
            { babelPluginHandler: 'deepCSSVars' }
        ])
    )
}

const x: CCSSProps = {}

export default useProp
