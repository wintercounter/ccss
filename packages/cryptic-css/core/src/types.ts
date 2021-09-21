import CSS from 'csstype'
import { TransformedFn, Options, OutputTransformer, Whatever, Parser, InputObject, Definition } from 'transformed'

export interface CCSSOutputTransformer extends OutputTransformer {
    type: typeof Object | typeof String
    toCSSRule: CCSSToCSSRule
    defaultOutput: () => Whatever
    toChild: Parser
}

export declare interface CCSSOptions extends Options {
    /**
     * Function the applies unit to a value
     */
    applyUnit?: (value: number) => string
}
export declare interface CCSSTransformedFn extends TransformedFn {
    (InputObject: CCSSProps): Whatever
    options: CCSSOptions
    outputTransformer: CCSSOutputTransformer
}

export declare type CCSSToCSSRule = (
    cssProp: string,
    objectProp: string,
    input: CCSSProps,
    prop: string,
    options: CCSSOptions
) => CSS.Properties | string

export interface CCSSParser extends Parser {
    (
        value: unknown,
        prop: string,
        transformedFn?: CCSSTransformedFn,
        inputObject?: InputObject,
        definition?: Definition
    ): unknown
}

export declare type CCSSPropFunction = <T>(v: CCSSPropValue, o?: T, p?: InputObject) => string
export declare type CCSSPropValue =
    | string
    | number
    | boolean
    | (string | number | boolean)[]
    | undefined
    | CCSSPropFunction

type Pseudos = { [P in CSS.Pseudos]?: CCSSProps }

export interface CCSSProps
    extends CSS.PropertiesFallback<CCSSPropValue>,
        CSS.PropertiesHyphenFallback<CCSSPropValue>,
        Pseudos {
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported?: boolean | string[]

    /**
     * Define custom CSS text.
     */
    raw?: <T>(v: T) => string | object

    /**
     * You can pass children to your ccss supporting both pseudo classes and nested selectors.
     *
     * @example
     * ```js
     * child({
     *   h: { dp: 'b' },
     *   '.childDiv': { p: 10 }
     * })
     * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
     * ```
     */
    child?: Pseudos & {
        [key: string]: CCSSProps
    }

    /**
     * This prop provides simple support for the `ccss` prop for different implementations. The same top-level values
     * are accepted here.
     */
    ccss?: CCSSProps

    /**
     * CSS variables support
     *
     * @example
     * ```js
     * {
     *     '--': {
     *         'site-background': '#333'
     *     }
     * }
     * ```
     */
    ['--']?: {
        [key: string]: CCSSPropValue
    }

    /**
     * CSS variables support. Alias for `--`
     *
     * @example
     * ```js
     * {
     *     var: {
     *         'site-background': '#333'
     *     }
     * }
     * ```
     */
    var?: {
        [key: string]: CCSSPropValue
    }
}

// Quick Tester

/*const x: CCSSProps = {
    padding: [1, 2, 3, 'str'],
    clipRule: 'unset',
    ':hover': {
        width: 3
    },
    child: {
        kakakakaa: {
            padding: 0
        }
    }
}*/
