import { Properties as CSSProperties } from 'csstype'
export declare type StringTransformer = (generated: string, descriptor: string) => string
export declare type ObjectTransformer = (generated: CSSProperties, descriptor: CSSProperties) => CSSProperties
export declare type CCSSInput = any
export declare type CCSSFunction = (input: CCSSProps) => string | CSSProperties
export declare type CCSSToCSSRule = (
    cssProp: string,
    objectProp: string,
    input: CCSSInput,
    prop: string,
    options: CCSSOptions
) => CSSProperties | string
export declare type CCSSToPseudoChild = (
    input: CCSSInput,
    prop: string,
    options: CCSSOptions
) => CSSProperties | CCSSInput
export interface CCSSDefaultOutputFunction {
    (): Object
    (): string
}
export interface CCSSOutputTransformer {
    (generated: string, descriptor: string): string
    (generated: CSSProperties, descriptor: CSSProperties): CSSProperties
    toCSSRule: CCSSToCSSRule
    defaultOutput: CCSSDefaultOutputFunction
    toChild: CCSSToPseudoChild
    unsupportedHandler: (generated: any, input: any, prop: any) => Object | string
}
export interface CCSSOptions {
    [key: string]: any
    /**
     * Unit to use globally for number values.
     */
    unit: string
    /**
     * Function the applies unit to a value
     */
    applyUnit: (value: number) => string
    /**
     * Tells how to transform the final output
     */
    outputTransformer: CCSSOutputTransformer
    /**
     * All supported properties
     */
    props: Partial<CCSSProps>
    /**
     * Keys and values to `mapValue` against
     */
    valueMap: Partial<CCSSValueMap>
    /**
     * Map of supported pseudo selectors
     */
    pseudoMap: Partial<CCSSPseudoMap>
    __ccss: CCSSFunction
}
export declare type CCSSParser = (
    input: CCSSInput,
    prop: string,
    options: CCSSOptions,
    original?: CCSSInput
) => CCSSInput
export declare type CCSSPipe = (...fn: CCSSParser[]) => CCSSParser
export declare type CCSSValueMap = {
    [key: string]: any
}
export declare type CCSSPseudoMap = {
    [key: string]: string
}
export declare type CCSSPropValue = string | number | boolean | (string | number | boolean)[] | undefined
export declare type CCSSPropFunction = <T>(v: CCSSPropValue, o?: T) => string
export declare type CCSSProp = CCSSPropValue | CCSSPropFunction
export interface IOptions extends Partial<any> {
    unit: string
    applyUnit: (n: number) => string
}
export interface CCSSProps {
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
    styleText?: (v: string) => string
    
    /**
     * You can pass children to your ccss supporting both pseudo classes and nested selectors.
     *
     * @example
     * ```js
     * child({
     *   h: { d: 'b' },
     *   '.childDiv': { p: 10 }
     * })
     * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
     * ```
     */
    child?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'alignment-baseline',
     *     props: ['ab', 'align-b', 'alignment-baseline'],
     *     short: 'ab'
     * }
     * @propDocEnd
     */
    ab?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'alignment-baseline',
     *     props: ['ab', 'align-b', 'alignment-baseline'],
     *     short: 'ab'
     * }
     * @propDocEnd
     */
    alignB?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'alignment-baseline',
     *     props: ['ab', 'align-b', 'alignment-baseline'],
     *     short: 'ab'
     * }
     * @propDocEnd
     */
    alignmentBaseline?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'baseline-shift',
     *     props: ['bls', 'bl-shift', 'baseline-shift'],
     *     short: 'bls'
     * }
     * @propDocEnd
     */
    bls?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'baseline-shift',
     *     props: ['bls', 'bl-shift', 'baseline-shift'],
     *     short: 'bls'
     * }
     * @propDocEnd
     */
    blShift?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'baseline-shift',
     *     props: ['bls', 'bl-shift', 'baseline-shift'],
     *     short: 'bls'
     * }
     * @propDocEnd
     */
    baselineShift?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-rule',
     *     props: ['cpr', 'clip-r', 'clip-rule'],
     *     short: 'cpr'
     * }
     * @propDocEnd
     */
    cpr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-rule',
     *     props: ['cpr', 'clip-r', 'clip-rule'],
     *     short: 'cpr'
     * }
     * @propDocEnd
     */
    clipR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-rule',
     *     props: ['cpr', 'clip-r', 'clip-rule'],
     *     short: 'cpr'
     * }
     * @propDocEnd
     */
    clipRule?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation-filters',
     *     props: ['cif', 'color-i-f', 'color-interpolation-filters'],
     *     short: 'cif'
     * }
     * @propDocEnd
     */
    cif?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation-filters',
     *     props: ['cif', 'color-i-f', 'color-interpolation-filters'],
     *     short: 'cif'
     * }
     * @propDocEnd
     */
    colorIF?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation-filters',
     *     props: ['cif', 'color-i-f', 'color-interpolation-filters'],
     *     short: 'cif'
     * }
     * @propDocEnd
     */
    colorInterpolationFilters?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation',
     *     props: ['ci', 'color-i', 'color-interpolation'],
     *     short: 'ci'
     * }
     * @propDocEnd
     */
    ci?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation',
     *     props: ['ci', 'color-i', 'color-interpolation'],
     *     short: 'ci'
     * }
     * @propDocEnd
     */
    colorI?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-interpolation',
     *     props: ['ci', 'color-i', 'color-interpolation'],
     *     short: 'ci'
     * }
     * @propDocEnd
     */
    colorInterpolation?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-profile',
     *     props: ['cpf', 'color-p', 'color-profile'],
     *     short: 'cpf'
     * }
     * @propDocEnd
     */
    cpf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-profile',
     *     props: ['cpf', 'color-p', 'color-profile'],
     *     short: 'cpf'
     * }
     * @propDocEnd
     */
    colorP?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-profile',
     *     props: ['cpf', 'color-p', 'color-profile'],
     *     short: 'cpf'
     * }
     * @propDocEnd
     */
    colorProfile?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-rendering',
     *     props: ['crd', 'color-r', 'color-rendering'],
     *     short: 'crd'
     * }
     * @propDocEnd
     */
    crd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-rendering',
     *     props: ['crd', 'color-r', 'color-rendering'],
     *     short: 'crd'
     * }
     * @propDocEnd
     */
    colorR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color-rendering',
     *     props: ['crd', 'color-r', 'color-rendering'],
     *     short: 'crd'
     * }
     * @propDocEnd
     */
    colorRendering?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'dominant-baseline',
     *     props: ['db', 'dom-base', 'dominant-baseline'],
     *     short: 'db'
     * }
     * @propDocEnd
     */
    db?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'dominant-baseline',
     *     props: ['db', 'dom-base', 'dominant-baseline'],
     *     short: 'db'
     * }
     * @propDocEnd
     */
    domBase?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'dominant-baseline',
     *     props: ['db', 'dom-base', 'dominant-baseline'],
     *     short: 'db'
     * }
     * @propDocEnd
     */
    dominantBaseline?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'enable-background',
     *     props: ['eb', 'enable-bg', 'enable-background'],
     *     short: 'eb'
     * }
     * @propDocEnd
     */
    eb?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'enable-background',
     *     props: ['eb', 'enable-bg', 'enable-background'],
     *     short: 'eb'
     * }
     * @propDocEnd
     */
    enableBg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'enable-background',
     *     props: ['eb', 'enable-bg', 'enable-background'],
     *     short: 'eb'
     * }
     * @propDocEnd
     */
    enableBackground?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill-opacity',
     *     props: ['fo', 'fill-op', 'fill-opacity'],
     *     short: 'fo'
     * }
     * @propDocEnd
     */
    fo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill-opacity',
     *     props: ['fo', 'fill-op', 'fill-opacity'],
     *     short: 'fo'
     * }
     * @propDocEnd
     */
    fillOp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill-opacity',
     *     props: ['fo', 'fill-op', 'fill-opacity'],
     *     short: 'fo'
     * }
     * @propDocEnd
     */
    fillOpacity?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill-rule',
     *     props: ['fr', 'fill-rule', 'fill-rule'],
     *     short: 'fr'
     * }
     * @propDocEnd
     */
    fr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill-rule',
     *     props: ['fr', 'fill-rule', 'fill-rule'],
     *     short: 'fr'
     * }
     * @propDocEnd
     */
    fillRule?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill',
     *     props: ['fi', 'fill', 'fill'],
     *     short: 'fi'
     * }
     * @propDocEnd
     */
    fi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'fill',
     *     props: ['fi', 'fill', 'fill'],
     *     short: 'fi'
     * }
     * @propDocEnd
     */
    fill?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-color',
     *     props: ['fdc', 'flood-c', 'flood-color'],
     *     short: 'fdc'
     * }
     * @propDocEnd
     */
    fdc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-color',
     *     props: ['fdc', 'flood-c', 'flood-color'],
     *     short: 'fdc'
     * }
     * @propDocEnd
     */
    floodC?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-color',
     *     props: ['fdc', 'flood-c', 'flood-color'],
     *     short: 'fdc'
     * }
     * @propDocEnd
     */
    floodColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-opacity',
     *     props: ['fdo', 'flood-o', 'flood-opacity'],
     *     short: 'fdo'
     * }
     * @propDocEnd
     */
    fdo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-opacity',
     *     props: ['fdo', 'flood-o', 'flood-opacity'],
     *     short: 'fdo'
     * }
     * @propDocEnd
     */
    floodO?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flood-opacity',
     *     props: ['fdo', 'flood-o', 'flood-opacity'],
     *     short: 'fdo'
     * }
     * @propDocEnd
     */
    floodOpacity?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size-adjust',
     *     props: ['fsa', 'font-s-a', 'font-size-adjust'],
     *     short: 'fsa'
     * }
     * @propDocEnd
     */
    fsa?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size-adjust',
     *     props: ['fsa', 'font-s-a', 'font-size-adjust'],
     *     short: 'fsa'
     * }
     * @propDocEnd
     */
    fontSA?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size-adjust',
     *     props: ['fsa', 'font-s-a', 'font-size-adjust'],
     *     short: 'fsa'
     * }
     * @propDocEnd
     */
    fontSizeAdjust?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'glyph-orientation-horizontal',
     *     props: ['goh', 'glyph-o-h', 'glyph-orientation-horizontal'],
     *     short: 'goh'
     * }
     * @propDocEnd
     */
    goh?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'glyph-orientation-horizontal',
     *     props: ['goh', 'glyph-o-h', 'glyph-orientation-horizontal'],
     *     short: 'goh'
     * }
     * @propDocEnd
     */
    glyphOH?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'glyph-orientation-horizontal',
     *     props: ['goh', 'glyph-o-h', 'glyph-orientation-horizontal'],
     *     short: 'goh'
     * }
     * @propDocEnd
     */
    glyphOrientationHorizontal?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'image-rendering',
     *     props: ['ir', 'img-r', 'image-rendering'],
     *     short: 'ir'
     * }
     * @propDocEnd
     */
    ir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'image-rendering',
     *     props: ['ir', 'img-r', 'image-rendering'],
     *     short: 'ir'
     * }
     * @propDocEnd
     */
    imgR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'image-rendering',
     *     props: ['ir', 'img-r', 'image-rendering'],
     *     short: 'ir'
     * }
     * @propDocEnd
     */
    imageRendering?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'kerning',
     *     props: ['k', 'kern', 'kerning'],
     *     short: 'k'
     * }
     * @propDocEnd
     */
    k?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'kerning',
     *     props: ['k', 'kern', 'kerning'],
     *     short: 'k'
     * }
     * @propDocEnd
     */
    kern?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'kerning',
     *     props: ['k', 'kern', 'kerning'],
     *     short: 'k'
     * }
     * @propDocEnd
     */
    kerning?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'lighting-color',
     *     props: ['lc', 'l-color', 'lighting-color'],
     *     short: 'lc'
     * }
     * @propDocEnd
     */
    lc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'lighting-color',
     *     props: ['lc', 'l-color', 'lighting-color'],
     *     short: 'lc'
     * }
     * @propDocEnd
     */
    lColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'lighting-color',
     *     props: ['lc', 'l-color', 'lighting-color'],
     *     short: 'lc'
     * }
     * @propDocEnd
     */
    lightingColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-end',
     *     props: ['me', 'm-end', 'marker-end'],
     *     short: 'me'
     * }
     * @propDocEnd
     */
    me?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-end',
     *     props: ['me', 'm-end', 'marker-end'],
     *     short: 'me'
     * }
     * @propDocEnd
     */
    mEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-end',
     *     props: ['me', 'm-end', 'marker-end'],
     *     short: 'me'
     * }
     * @propDocEnd
     */
    markerEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-mid',
     *     props: ['mm', 'm-mid', 'marker-mid'],
     *     short: 'mm'
     * }
     * @propDocEnd
     */
    mm?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-mid',
     *     props: ['mm', 'm-mid', 'marker-mid'],
     *     short: 'mm'
     * }
     * @propDocEnd
     */
    mMid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-mid',
     *     props: ['mm', 'm-mid', 'marker-mid'],
     *     short: 'mm'
     * }
     * @propDocEnd
     */
    markerMid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-start',
     *     props: ['ms', 'm-start', 'marker-start'],
     *     short: 'ms'
     * }
     * @propDocEnd
     */
    ms?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-start',
     *     props: ['ms', 'm-start', 'marker-start'],
     *     short: 'ms'
     * }
     * @propDocEnd
     */
    mStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'marker-start',
     *     props: ['ms', 'm-start', 'marker-start'],
     *     short: 'ms'
     * }
     * @propDocEnd
     */
    markerStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mask',
     *     props: ['msk', 'mask', 'mask'],
     *     short: 'msk'
     * }
     * @propDocEnd
     */
    msk?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mask',
     *     props: ['msk', 'mask', 'mask'],
     *     short: 'msk'
     * }
     * @propDocEnd
     */
    mask?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'shape-rendering',
     *     props: ['sr', 'shape-rdr', 'shape-rendering'],
     *     short: 'sr'
     * }
     * @propDocEnd
     */
    sr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'shape-rendering',
     *     props: ['sr', 'shape-rdr', 'shape-rendering'],
     *     short: 'sr'
     * }
     * @propDocEnd
     */
    shapeRdr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'shape-rendering',
     *     props: ['sr', 'shape-rdr', 'shape-rendering'],
     *     short: 'sr'
     * }
     * @propDocEnd
     */
    shapeRendering?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stop-color',
     *     props: ['sc', 'stop-c', 'stop-color'],
     *     short: 'sc'
     * }
     * @propDocEnd
     */
    sc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stop-color',
     *     props: ['sc', 'stop-c', 'stop-color'],
     *     short: 'sc'
     * }
     * @propDocEnd
     */
    stopC?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stop-color',
     *     props: ['sc', 'stop-c', 'stop-color'],
     *     short: 'sc'
     * }
     * @propDocEnd
     */
    stopColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dasharray',
     *     props: ['sda', 'stroke-da', 'stroke-dasharray'],
     *     short: 'sda'
     * }
     * @propDocEnd
     */
    sda?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dasharray',
     *     props: ['sda', 'stroke-da', 'stroke-dasharray'],
     *     short: 'sda'
     * }
     * @propDocEnd
     */
    strokeDa?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dasharray',
     *     props: ['sda', 'stroke-da', 'stroke-dasharray'],
     *     short: 'sda'
     * }
     * @propDocEnd
     */
    strokeDasharray?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dashoffset',
     *     props: ['sdo', 'stroke-do', 'stroke-dashoffset'],
     *     short: 'sdo'
     * }
     * @propDocEnd
     */
    sdo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dashoffset',
     *     props: ['sdo', 'stroke-do', 'stroke-dashoffset'],
     *     short: 'sdo'
     * }
     * @propDocEnd
     */
    strokeDo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-dashoffset',
     *     props: ['sdo', 'stroke-do', 'stroke-dashoffset'],
     *     short: 'sdo'
     * }
     * @propDocEnd
     */
    strokeDashoffset?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linecap',
     *     props: ['slc', 'stroke-lc', 'stroke-linecap'],
     *     short: 'slc'
     * }
     * @propDocEnd
     */
    slc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linecap',
     *     props: ['slc', 'stroke-lc', 'stroke-linecap'],
     *     short: 'slc'
     * }
     * @propDocEnd
     */
    strokeLc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linecap',
     *     props: ['slc', 'stroke-lc', 'stroke-linecap'],
     *     short: 'slc'
     * }
     * @propDocEnd
     */
    strokeLinecap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linejoin',
     *     props: ['slj', 'stroke-lj', 'stroke-linejoin'],
     *     short: 'slj'
     * }
     * @propDocEnd
     */
    slj?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linejoin',
     *     props: ['slj', 'stroke-lj', 'stroke-linejoin'],
     *     short: 'slj'
     * }
     * @propDocEnd
     */
    strokeLj?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-linejoin',
     *     props: ['slj', 'stroke-lj', 'stroke-linejoin'],
     *     short: 'slj'
     * }
     * @propDocEnd
     */
    strokeLinejoin?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-miterlimit',
     *     props: ['sml', 'stroke-ml', 'stroke-miterlimit'],
     *     short: 'sml'
     * }
     * @propDocEnd
     */
    sml?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-miterlimit',
     *     props: ['sml', 'stroke-ml', 'stroke-miterlimit'],
     *     short: 'sml'
     * }
     * @propDocEnd
     */
    strokeMl?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-miterlimit',
     *     props: ['sml', 'stroke-ml', 'stroke-miterlimit'],
     *     short: 'sml'
     * }
     * @propDocEnd
     */
    strokeMiterlimit?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-opacity',
     *     props: ['sop', 'stroke-o', 'stroke-opacity'],
     *     short: 'sop'
     * }
     * @propDocEnd
     */
    sop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-opacity',
     *     props: ['sop', 'stroke-o', 'stroke-opacity'],
     *     short: 'sop'
     * }
     * @propDocEnd
     */
    strokeO?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-opacity',
     *     props: ['sop', 'stroke-o', 'stroke-opacity'],
     *     short: 'sop'
     * }
     * @propDocEnd
     */
    strokeOpacity?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-width',
     *     props: ['swt', 'stroke-w', 'stroke-width'],
     *     short: 'swt'
     * }
     * @propDocEnd
     */
    swt?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-width',
     *     props: ['swt', 'stroke-w', 'stroke-width'],
     *     short: 'swt'
     * }
     * @propDocEnd
     */
    strokeW?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke-width',
     *     props: ['swt', 'stroke-w', 'stroke-width'],
     *     short: 'swt'
     * }
     * @propDocEnd
     */
    strokeWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke',
     *     props: ['st', 'stroke', 'stroke'],
     *     short: 'st'
     * }
     * @propDocEnd
     */
    st?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'stroke',
     *     props: ['st', 'stroke', 'stroke'],
     *     short: 'st'
     * }
     * @propDocEnd
     */
    stroke?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-anchor',
     *     props: ['txa', 'txt-anchor', 'text-anchor'],
     *     short: 'txa'
     * }
     * @propDocEnd
     */
    txa?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-anchor',
     *     props: ['txa', 'txt-anchor', 'text-anchor'],
     *     short: 'txa'
     * }
     * @propDocEnd
     */
    txtAnchor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-anchor',
     *     props: ['txa', 'txt-anchor', 'text-anchor'],
     *     short: 'txa'
     * }
     * @propDocEnd
     */
    textAnchor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-rendering',
     *     props: ['txr', 'txt-render', 'text-rendering'],
     *     short: 'txr'
     * }
     * @propDocEnd
     */
    txr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-rendering',
     *     props: ['txr', 'txt-render', 'text-rendering'],
     *     short: 'txr'
     * }
     * @propDocEnd
     */
    txtRender?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-rendering',
     *     props: ['txr', 'txt-render', 'text-rendering'],
     *     short: 'txr'
     * }
     * @propDocEnd
     */
    textRendering?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'unicode-bidi',
     *     props: ['ub', 'uni-bidi', 'unicode-bidi'],
     *     short: 'ub'
     * }
     * @propDocEnd
     */
    ub?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'unicode-bidi',
     *     props: ['ub', 'uni-bidi', 'unicode-bidi'],
     *     short: 'ub'
     * }
     * @propDocEnd
     */
    uniBidi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'unicode-bidi',
     *     props: ['ub', 'uni-bidi', 'unicode-bidi'],
     *     short: 'ub'
     * }
     * @propDocEnd
     */
    unicodeBidi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'writing-mode',
     *     props: ['wm', 'writing', 'writing-mode'],
     *     short: 'wm'
     * }
     * @propDocEnd
     */
    wm?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'writing-mode',
     *     props: ['wm', 'writing', 'writing-mode'],
     *     short: 'wm'
     * }
     * @propDocEnd
     */
    writing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'writing-mode',
     *     props: ['wm', 'writing', 'writing-mode'],
     *     short: 'wm'
     * }
     * @propDocEnd
     */
    writingMode?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    a?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    anim?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    animation?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    ad?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    animDel?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    animationDelay?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    aDir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    animDir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    animationDirection?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    aD?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    animDur?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    animationDuration?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    afm?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    animFill?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    animationFillMode?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    aic?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    animCount?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    animationIterationCount?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    an?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    animName?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    animationName?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    aps?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    animState?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    animationPlayState?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    ats?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    animTiming?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    animationTimingFunction?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    bv?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    bfVisibility?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    backfaceVisibility?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    per?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    pers?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    perspective?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    pero?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    persOrg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    perspectiveOrigin?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tran?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    transform?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    tfo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    tranOrg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    transformOrigin?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    tfs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    tranStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    transformStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    tr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    trans?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    transition?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    trD?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    transDel?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    transitionDelay?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    trd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    transDur?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    transitionDuration?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    trp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    transProp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    transitionProperty?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    trt?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    transTiming?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    transitionTimingFunction?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    f?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    fx?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    flex?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    fd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    fxDir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    flexDirection?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    fw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    fxWrap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    flexWrap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    fb?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    fxBase?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    flexBasis?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    ff?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    fxFlow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    flexFlow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    fg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    fxGrow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    flexGrow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    fs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    fxShrink?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    flexShrink?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    ai?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    alItems?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    alignItems?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    ac?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    alContent?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    alignContent?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    ji?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    justItems?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    justifyItems?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    jc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    justContent?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    justifyContent?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    aS?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    alSelf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    alignSelf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    jS?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    justSelf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    justifySelf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'ft', 'font'],
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    ft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'ft', 'font'],
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    font?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    ftf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    ftFamily?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    fontFamily?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    ftk?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    ftKern?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    fontKerning?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    fts?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    ftSize?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    fontSize?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    ftStr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    ftStretch?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    fontStretch?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    ftSty?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    ftStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    fontStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    ftv?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    ftVariant?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    fontVariant?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    ftw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    ftWeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    fontWeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    ls?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    ltrSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    letterSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lh?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lineH?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lineHeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    ta?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    txtAlign?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    textAlign?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    td?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    txtDecor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    textDecoration?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    ti?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    txtIn?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    textIndent?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    to?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    txtFlow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    textOverflow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    ts?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    txtShad?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    textShadow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    tt?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    txtTranf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    textTransform?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    va?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    vAlign?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    verticalAlign?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    ws?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    wSpace?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    whiteSpace?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wb?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wBreak?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wordBreak?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wS?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wordSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    ww?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    wWrap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    wordWrap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    l?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    list?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    listStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    li?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    listImg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    listStyleImage?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    lp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    listPos?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    listStylePosition?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    lt?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    listType?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    listStyleType?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    m?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    mar?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    margin?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    mT?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    marTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    marginTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    mR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    marRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    marginRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    mB?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    marBottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    marginBottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    mL?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    marLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    marginLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    p?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    pad?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    padding?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    pT?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    padTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    paddingTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    pR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    padRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    paddingRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    pB?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    padBottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    paddingBottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    pL?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    padLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    paddingLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'bg', 'background'],
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    bg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'bg', 'background'],
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    background?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    bgi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    bgImg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    backgroundImage?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    bgc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    bgColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    backgroundColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    bgs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    bgSize?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    backgroundSize?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    bgr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    bgRepeat?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    backgroundRepeat?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    bgp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    bgPos?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    backgroundPosition?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    bga?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    bgAttach?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    backgroundAttachment?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    bgbm?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    bgBlend?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    backgroundBlendMode?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    bgC?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    bgClip?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    backgroundClip?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    bgo?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    bgOrg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    backgroundOrigin?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backdrop-filter',
     *     props: ['bf', 'bd-filter', 'backdrop-filter'],
     *     short: 'bf'
     * }
     * @propDocEnd
     */
    bf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backdrop-filter',
     *     props: ['bf', 'bd-filter', 'backdrop-filter'],
     *     short: 'bf'
     * }
     * @propDocEnd
     */
    bdFilter?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backdrop-filter',
     *     props: ['bf', 'bd-filter', 'backdrop-filter'],
     *     short: 'bf'
     * }
     * @propDocEnd
     */
    backdropFilter?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    w?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    wid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    width?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    h?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    hei?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    height?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minW?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minWid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minH?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minHei?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minHeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxW?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxWid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxH?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxHei?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxHeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    g?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    ga?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    grArea?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    gridArea?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    gac?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    grAutoCols?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    gridAutoColumns?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    gaf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    grAutoFlow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    gridAutoFlow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    gar?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    grAutoRows?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    gridAutoRows?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    gc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    grCol?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    gridColumn?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    gce?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    grColEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    gridColumnEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    gcg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    grColGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    gridColumnGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    gcs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    grColStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    gridColumnStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    gg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    grGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    gridGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    gr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    grRow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    gridRow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    gre?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    grRowEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    gridRowEnd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    grg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    grRowGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    gridRowGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    grs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    grRowStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    gridRowStart?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    gt?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    grTmpl?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    gridTemplate?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    gta?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    grAreas?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    gridTemplateAreas?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    gtc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    grCols?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    gridTemplateColumns?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    gtr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    grRows?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    gridTemplateRows?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    b?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    bd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    border?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    bB?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    bdBot?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    borderBottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    bBc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    bdBotColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    borderBottomColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    bBlr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    bdBotLeftRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    borderBottomLeftRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    bBrr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    bdBotRightRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    borderBottomRightRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    bBs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    bdBotStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    borderBottomStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    bBw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    bdBotWid?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    borderBottomWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    bC?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    bdColl?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    borderCollapse?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    bc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    bdColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    borderColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    bi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    bdImg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    borderImage?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    bio?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    bdImgOutset?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    borderImageOutset?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    bir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    bdImgRepeat?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    borderImageRepeat?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    bis?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    bdImgSlice?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    borderImageSlice?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    biSrc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    bdImgSrc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    borderImageSource?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    biw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    bdImgWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    borderImageWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    bL?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    bdLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    borderLeft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    bLc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    bdLeftColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    borderLeftColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    bLs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    bdLeftStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    borderLeftStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    bLw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    bdLeftWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    borderLeftWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    br?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    bdRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    borderRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    bR?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    bdRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    borderRight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    bRc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    bdRightColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    borderRightColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    bRs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    bdRightStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    borderRightStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    bRw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    bdRightWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    borderRightWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    bs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    bdSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    borderSpacing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    bS?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    bdStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    borderStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    bT?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    bdTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    borderTop?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    bTc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    bdTopColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    borderTopColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    bTlr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    bdTopLeftRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    borderTopLeftRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    bTrr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    bdTopRightRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    borderTopRightRadius?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    bTs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    bdTopStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    borderTopStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    bTw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    bdTopWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    borderTopWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    bw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    bdWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    borderWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip',
     *     props: ['clp', 'clip', 'clip'],
     *     short: 'clp'
     * }
     * @propDocEnd
     */
    clp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip',
     *     props: ['clp', 'clip', 'clip'],
     *     short: 'clp'
     * }
     * @propDocEnd
     */
    clip?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clpp', 'clip-path', 'clip-path'],
     *     short: 'clpp'
     * }
     * @propDocEnd
     */
    clpp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clpp', 'clip-path', 'clip-path'],
     *     short: 'clpp'
     * }
     * @propDocEnd
     */
    clipPath?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    d?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    dsp?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    display?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    P?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    pos?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    position?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'top',
     *     props: ['T', 'top', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    T?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'top',
     *     props: ['T', 'top', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    top?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    R?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    right?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    B?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    bottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    L?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    left?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zIndex?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color', 'color'],
     *     short: 'c'
     * }
     * @propDocEnd
     */
    c?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color', 'color'],
     *     short: 'c'
     * }
     * @propDocEnd
     */
    color?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    o?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    over?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    overflow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    ox?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    overX?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    overflowX?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    oy?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    overY?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    overflowY?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-anchor',
     *     props: ['oa', 'over-a', 'overflow-anchor'],
     *     short: 'oa'
     * }
     * @propDocEnd
     */
    oa?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-anchor',
     *     props: ['oa', 'over-a', 'overflow-anchor'],
     *     short: 'oa'
     * }
     * @propDocEnd
     */
    overA?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-anchor',
     *     props: ['oa', 'over-a', 'overflow-anchor'],
     *     short: 'oa'
     * }
     * @propDocEnd
     */
    overflowAnchor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    fl?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    float?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clear?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    v?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    visibility?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'col', 'columns'],
     *     short: 'col'
     * }
     * @propDocEnd
     */
    col?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'col', 'columns'],
     *     short: 'col'
     * }
     * @propDocEnd
     */
    columns?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    cc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    colCount?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    columnCount?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    cf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    colFill?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    columnFill?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    cg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    colGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    columnGap?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    cr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    colRule?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    columnRule?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    crc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    colRuleColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    columnRuleColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    crs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    colRuleStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    columnRuleStyle?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    crw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    colRuleWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    columnRuleWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    cs?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    colSpan?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    columnSpan?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    cw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    colWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    columnWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pba?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pbAfter?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pageBreakAfter?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pbb?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pbBefore?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pageBreakBefore?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pbi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pbInside?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pageBreakInside?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shd?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shadow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    boxShadow?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    siz?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    sizing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    boxSizing?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'contain',
     *     props: ['cn', 'cont', 'contain'],
     *     short: 'cn'
     * }
     * @propDocEnd
     */
    cn?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'contain',
     *     props: ['cn', 'cont', 'contain'],
     *     short: 'cn'
     * }
     * @propDocEnd
     */
    cont?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'contain',
     *     props: ['cn', 'cont', 'contain'],
     *     short: 'cn'
     * }
     * @propDocEnd
     */
    contain?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'direction',
     *     props: ['dir', 'dir', 'direction'],
     *     short: 'dir'
     * }
     * @propDocEnd
     */
    dir?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'direction',
     *     props: ['dir', 'dir', 'direction'],
     *     short: 'dir'
     * }
     * @propDocEnd
     */
    direction?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    of?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    objFit?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    objectFit?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    oP?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    objPos?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    objectPosition?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    op?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    opacity?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    or?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    order?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline', 'outline'],
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    ol?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline', 'outline'],
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    outline?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    mbm?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    blendMode?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    mixBlendMode?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    ct?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    content?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cur', 'cursor'],
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cur?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cur', 'cursor'],
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cursor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pe?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pEvents?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pointerEvents?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter', 'filter'],
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    fil?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter', 'filter'],
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    filter?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    sb?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    sBehavior?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    scrollBehavior?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    sw?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    sWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    scrollbarWidth?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    sh?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    sHeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    scrollbarHeight?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    us?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    uSelect?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    userSelect?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'caret-color',
     *     props: ['carc', 'car-color', 'caret-color'],
     *     short: 'carc'
     * }
     * @propDocEnd
     */
    carc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'caret-color',
     *     props: ['carc', 'car-color', 'caret-color'],
     *     short: 'carc'
     * }
     * @propDocEnd
     */
    carColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'caret-color',
     *     props: ['carc', 'car-color', 'caret-color'],
     *     short: 'carc'
     * }
     * @propDocEnd
     */
    caretColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-touch-callout',
     *     props: ['wtc', 'webkit-touch-callout', '-webkit-touch-callout'],
     *     short: 'wtc'
     * }
     * @propDocEnd
     */
    wtc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-touch-callout',
     *     props: ['wtc', 'webkit-touch-callout', '-webkit-touch-callout'],
     *     short: 'wtc'
     * }
     * @propDocEnd
     */
    webkitTouchCallout?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-overflow-scrolling',
     *     props: ['wos', 'webkit-overflow-scrolling', '-webkit-overflow-scrolling'],
     *     short: 'wos'
     * }
     * @propDocEnd
     */
    wos?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-overflow-scrolling',
     *     props: ['wos', 'webkit-overflow-scrolling', '-webkit-overflow-scrolling'],
     *     short: 'wos'
     * }
     * @propDocEnd
     */
    webkitOverflowScrolling?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-tap-highlight-color',
     *     props: ['wthc', 'webkit-tap-highlight-color', '-webkit-tap-highlight-color'],
     *     short: 'wthc'
     * }
     * @propDocEnd
     */
    wthc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-tap-highlight-color',
     *     props: ['wthc', 'webkit-tap-highlight-color', '-webkit-tap-highlight-color'],
     *     short: 'wthc'
     * }
     * @propDocEnd
     */
    webkitTapHighlightColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-text-fill-color',
     *     props: ['wtfc', 'webkit-text-fill-color', '-webkit-text-fill-color'],
     *     short: 'wtfc'
     * }
     * @propDocEnd
     */
    wtfc?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-text-fill-color',
     *     props: ['wtfc', 'webkit-text-fill-color', '-webkit-text-fill-color'],
     *     short: 'wtfc'
     * }
     * @propDocEnd
     */
    webkitTextFillColor?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-user-drag',
     *     props: ['wud', 'webkit-user-drag', '-webkit-user-drag'],
     *     short: 'wud'
     * }
     * @propDocEnd
     */
    wud?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-user-drag',
     *     props: ['wud', 'webkit-user-drag', '-webkit-user-drag'],
     *     short: 'wud'
     * }
     * @propDocEnd
     */
    webkitUserDrag?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-backdrop-filter',
     *     props: ['wbf', 'webkit-backdrop-filter', '-webkit-backdrop-filter'],
     *     short: 'wbf'
     * }
     * @propDocEnd
     */
    wbf?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: '-webkit-backdrop-filter',
     *     props: ['wbf', 'webkit-backdrop-filter', '-webkit-backdrop-filter'],
     *     short: 'wbf'
     * }
     * @propDocEnd
     */
    webkitBackdropFilter?: CCSSProp
}

/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
