import { Properties as CSSProperties } from 'csstype'

export type StringTransformer = (generated: string, descriptor: string) => string

export type ObjectTransformer = (generated: CSSProperties, descriptor: CSSProperties) => CSSProperties

export type CCSSInput = any

export type CCSSOriginal = any

export type CCSSAnyFunction = (...args: any[]) => any

export type CCSSToCSSRule = (
    cssProp: string,
    objectProp: string,
    input: CCSSInput,
    prop: string,
    options: CCSSOptions
) => CSSProperties | string

export type CCSSToPseudoChild = (input: CCSSInput, prop: string, options: CCSSOptions) => CSSProperties | CCSSInput

export interface IOutputTransformer {
    (generated: string, descriptor: string): string
    (generated: CSSProperties, descriptor: CSSProperties): CSSProperties
    toCSSRule: CCSSToCSSRule
    toPseudo: CCSSToPseudoChild
    defaultOutput: CCSSAnyFunction
    toChild: CCSSToPseudoChild
    unsupportedHandler: (generated: any, input: any, prop: any) => Object | string
}

export interface CCSSOptions {
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
    outputTransformer: IOutputTransformer

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

    __ccss: CCSSAnyFunction
}

export type CCSSParser = (input: CCSSInput, prop: string, options: CCSSOptions, original?: CCSSOriginal) => CCSSInput

export type CCSSPipe = (...fn: CCSSParser[]) => CCSSParser

export type CCSSValueMap = { [key: string]: any }

export type CCSSPseudoMap = { [key: string]: string }

// TODO Update all keys and values, this is still the old
// Lets generate it from the prop table instead of hand like this...
export interface CCSSProps {
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported: boolean | string[]

    // CSS Props start here

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    a?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    ad?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    aDir?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    aD?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    afm?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    aic?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    an?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    aps?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    ats?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    bv?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    per?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    pero?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tf?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    tfo?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    tfs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    tr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    trD?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    trd?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    trp?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    trt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    fd?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    fw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    fb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    ff?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    fg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    fs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    ai?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    ac?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    ji?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    jc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    aS?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    jS?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font',
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    ft?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    ftf?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    ftk?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    fts?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    ftStr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    ftSty?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    ftv?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    ftw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    ls?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lh?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    ta?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    td?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    ti?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    to?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    ts?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    tt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    va?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    ws?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wS?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    ww?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'lstS'
     * }
     * @propDocEnd
     */
    lstS?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'lstSI'
     * }
     * @propDocEnd
     */
    lstSI?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lstSP'
     * }
     * @propDocEnd
     */
    lstSP?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lstST'
     * }
     * @propDocEnd
     */
    lstST?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    m?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mt'
     * }
     * @propDocEnd
     */
    mt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mr'
     * }
     * @propDocEnd
     */
    mr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mb'
     * }
     * @propDocEnd
     */
    mb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'ml'
     * }
     * @propDocEnd
     */
    ml?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    p?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pt'
     * }
     * @propDocEnd
     */
    pt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pr'
     * }
     * @propDocEnd
     */
    pr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pb'
     * }
     * @propDocEnd
     */
    pb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pl'
     * }
     * @propDocEnd
     */
    pl?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background',
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    bg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    bgi?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    bgc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    bgs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    bgr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    bgp?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    bga?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    bgbm?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    bgC?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    bgo?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    w?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    h?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minW?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minH?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxW?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxH?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    g?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    ga?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    gac?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    gaf?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    gar?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    gc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    gce?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    gcg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    gcs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    gg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    gr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    gre?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    grg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    grs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    gt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    gta?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    gtc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    gtr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    b?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bb'
     * }
     * @propDocEnd
     */
    bb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bbc'
     * }
     * @propDocEnd
     */
    bbc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bblr'
     * }
     * @propDocEnd
     */
    bblr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bbrr'
     * }
     * @propDocEnd
     */
    bbrr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bbs'
     * }
     * @propDocEnd
     */
    bbs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bbw'
     * }
     * @propDocEnd
     */
    bbw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    bC?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    bc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    bi?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    bio?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    bir?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    bis?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    biSrc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    biw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bl'
     * }
     * @propDocEnd
     */
    bl?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'blc'
     * }
     * @propDocEnd
     */
    blc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bls'
     * }
     * @propDocEnd
     */
    bls?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'blw'
     * }
     * @propDocEnd
     */
    blw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'r'
     * }
     * @propDocEnd
     */
    r?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    br?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'brc'
     * }
     * @propDocEnd
     */
    brc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'brs'
     * }
     * @propDocEnd
     */
    brs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'brw'
     * }
     * @propDocEnd
     */
    brw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    bs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    bS?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bt'
     * }
     * @propDocEnd
     */
    bt?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'btc'
     * }
     * @propDocEnd
     */
    btc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'btlr'
     * }
     * @propDocEnd
     */
    btlr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'btrr'
     * }
     * @propDocEnd
     */
    btrr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bts'
     * }
     * @propDocEnd
     */
    bts?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'btw'
     * }
     * @propDocEnd
     */
    btw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    bw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'clip',
     *     short: 'clip'
     * }
     * @propDocEnd
     */
    clip?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'clip-path',
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    clipPath?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    d?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'pos'
     * }
     * @propDocEnd
     */
    pos?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'top',
     *     short: 'T'
     * }
     * @propDocEnd
     */
    T?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'right',
     *     short: 'R'
     * }
     * @propDocEnd
     */
    R?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'bottom',
     *     short: 'B'
     * }
     * @propDocEnd
     */
    B?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'left',
     *     short: 'L'
     * }
     * @propDocEnd
     */
    L?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'z-index',
     *     short: 'z'
     * }
     * @propDocEnd
     */
    z?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'color',
     *     short: 'c'
     * }
     * @propDocEnd
     */
    c?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    o?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    ox?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    oy?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'float',
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    fl?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'clear',
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'visibility',
     *     short: 'v'
     * }
     * @propDocEnd
     */
    v?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'columns',
     *     short: 'col'
     * }
     * @propDocEnd
     */
    col?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    cc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    cf?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    cg?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    cr?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    crc?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    crs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    crw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    cs?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    cw?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pba?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pbb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pbi?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shadow'
     * }
     * @propDocEnd
     */
    shadow?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'sizing'
     * }
     * @propDocEnd
     */
    sizing?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    of?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    oP?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'opacity',
     *     short: 'op'
     * }
     * @propDocEnd
     */
    op?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'order',
     *     short: 'or'
     * }
     * @propDocEnd
     */
    or?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'outline',
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    ol?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    mbm?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'content',
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    ct?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'cursor',
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cur?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pe?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'filter',
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    fil?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    sb?: TCSSPropValue
    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    us?: TCSSSimplePropValue
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
    child?: TCSSSimplePropValue
}

// OLD

export type TCCSSCoreProp = {
    [key: string]: string | number | TCCSSCoreProp | (string | number | TCCSSCoreProp)[] | undefined
}
export type TNestedInput = { [key: string]: TNestedInput | string | number }
export type TCSSPropValue = <T>(v: string | string[] | TNestedInput[] | TNestedInput, o?: T) => string
export type TCSSSimplePropValue = <T>(v?: T | TNestedInput | string) => T | string | undefined
export type TMediaQueryInput = [any | string, string][]
export type TMediaQueryFunc = (input: TMediaQueryInput) => string | undefined

export interface IOptions extends Partial<any> {
    unit: string
    applyUnit: (n: number) => string
}
