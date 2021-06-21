import { Properties } from 'csstype'
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
) => Properties | string

export interface CCSSParser extends Parser {
    (
        value: unknown,
        prop: string,
        transformedFn?: CCSSTransformedFn,
        inputObject?: InputObject,
        definition?: Definition
    ): unknown
}

export declare type CCSSPropValue = string | number | boolean | (string | number | boolean)[] | undefined
export declare type CCSSPropFunction = <T>(v: CCSSPropValue, o?: T) => string

export interface CCSSProps extends Properties {
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
    child?: {
        [key: string]: CCSSProps
    }

    /**
     * This prop provides simple support for the `ccss` prop for different implementations. The same top-level values
     * are accepted here.
     */
    ccss?: CCSSProps

    /**
     * This is an synonym to the `ccss` prop, this prop provides simple support for the `css` prop for different 
     * implementations. The same top-level values are accepted here.
     */
    css?: CCSSProps
}
