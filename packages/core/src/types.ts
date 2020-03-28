import { Properties as CSSProperties } from 'csstype'

export type StringTransformer = (generated: string, descriptor: string) => string

export type ObjectTransformer = (generated: CSSProperties, descriptor: CSSProperties) => CSSProperties

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
    outputTransformer: StringTransformer | ObjectTransformer

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
}

export type CCSSInput = any

export type CCSSParser = (input: CCSSInput, string, CCSSOptions, CCSSOriginal?) => CCSSInput

export type CCSSPipe = (...fn: CCSSParser[]) => CCSSInput

export type CCSSValueMap = { [key: string]: any }

export type CCSSPseudoMap = { [key: string]: string }

// TODO: Refactor these Old types and interface

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

/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
export interface CCSSProps {
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported: boolean | string[]
    
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

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    a?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    anim?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation',
     *     props: ['a', 'anim', 'animation'],
     *     short: 'a'
     * }
     * @propDocEnd
     */
    animation?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    ad?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'anim-del'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'animation-delay'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    aDir?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'anim-dir'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'animation-direction'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    aD?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'anim-dur'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'animation-duration'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    afm?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'anim-fill'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'animation-fill-mode'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    aic?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'anim-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'animation-iteration-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    an?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'anim-name'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'animation-name'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    aps?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'anim-state'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'animation-play-state'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    ats?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'anim-timing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'animation-timing-function'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    bv?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'bf-visibility'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'backface-visibility'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    per?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    pers?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective',
     *     props: ['per', 'pers', 'perspective'],
     *     short: 'per'
     * }
     * @propDocEnd
     */
    perspective?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    pero?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'pers-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'perspective-origin'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tf?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tran?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform',
     *     props: ['tf', 'tran', 'transform'],
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    transform?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    tfo?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'tran-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'transform-origin'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    tfs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'tran-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'transform-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    tr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    trans?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition',
     *     props: ['tr', 'trans', 'transition'],
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    transition?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    trD?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'trans-del'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'transition-delay'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    trd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'trans-dur'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'transition-duration'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    trp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'trans-prop'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'transition-property'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    trt?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'trans-timing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'transition-timing-function'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    f?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    fx?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex',
     *     props: ['f', 'fx', 'flex'],
     *     short: 'f'
     * }
     * @propDocEnd
     */
    flex?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    fd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'fx-dir'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'flex-direction'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    fw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'fx-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'flex-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    fb?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'fx-base'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'flex-basis'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    ff?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'fx-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'flex-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    fg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'fx-grow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'flex-grow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    fs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'fx-shrink'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'flex-shrink'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    ai?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'al-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'align-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    ac?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'al-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'align-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    ji?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'just-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'justify-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    jc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'just-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'justify-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    aS?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'al-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'align-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    jS?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'just-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'justify-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'font'],
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    ft?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'font'],
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    font?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    ftf?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'ft-family'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'font-family'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    ftk?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'ft-kern'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'font-kerning'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    fts?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'ft-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'font-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    ftStr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'ft-stretch'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'font-stretch'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    ftSty?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'ft-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'font-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    ftv?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'ft-variant'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'font-variant'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    ftw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'ft-weight'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'font-weight'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    ls?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'ltr-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'letter-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lh?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-h'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    ta?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'txt-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'text-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    td?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'txt-decor'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'text-decoration'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    ti?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'txt-in'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'text-indent'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    to?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'txt-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'text-overflow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    ts?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'txt-shad'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'text-shadow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    tt?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'txt-tranf'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'text-transform'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    va?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'v-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'vertical-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    ws?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'w-space'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'white-space'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wb?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'w-break'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'word-break'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wS?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'w-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'word-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    ww?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'w-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'word-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    l?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    list?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style',
     *     props: ['l', 'list', 'list-style'],
     *     short: 'l'
     * }
     * @propDocEnd
     */
    'list-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    li?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-style-image'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    lp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-style-position'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    lt?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-type'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-style-type'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    m?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    mar?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin',
     *     props: ['m', 'mar', 'margin'],
     *     short: 'm'
     * }
     * @propDocEnd
     */
    margin?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    mT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'mar-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'margin-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    mR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'mar-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'margin-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    mB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'mar-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'margin-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    mL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'mar-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'margin-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    p?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    pad?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding',
     *     props: ['p', 'pad', 'padding'],
     *     short: 'p'
     * }
     * @propDocEnd
     */
    padding?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    pT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'pad-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'padding-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    pR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'pad-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'padding-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    pB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'pad-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'padding-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    pL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'pad-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'padding-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'background'],
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    bg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'background'],
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    background?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    bgi?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'bg-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'background-image'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    bgc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'bg-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'background-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    bgs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'bg-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'background-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    bgr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'bg-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'background-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    bgp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'bg-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'background-position'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    bga?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'bg-attach'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'background-attachment'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    bgbm?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'bg-blend'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'background-blend-mode'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    bgC?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'bg-clip'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'background-clip'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    bgo?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'bg-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'background-origin'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    w?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    wid?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'width',
     *     props: ['w', 'wid', 'width'],
     *     short: 'w'
     * }
     * @propDocEnd
     */
    width?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    h?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    hei?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'height',
     *     props: ['h', 'hei', 'height'],
     *     short: 'h'
     * }
     * @propDocEnd
     */
    height?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minW?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minH?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-hei'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxW?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxH?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-hei'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    g?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid',
     *     props: ['g', 'grd', 'grid'],
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grid?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    ga?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'gr-area'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'grid-area'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    gac?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'gr-auto-cols'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'grid-auto-columns'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    gaf?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'gr-auto-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'grid-auto-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    gar?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'gr-auto-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'grid-auto-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    gc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'gr-col'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'grid-column'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    gce?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'gr-col-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'grid-column-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    gcg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'gr-col-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'grid-column-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    gcs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'gr-col-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'grid-column-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    gg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'gr-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'grid-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    gr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'gr-row'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'grid-row'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    gre?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'gr-row-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'grid-row-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    grg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'gr-row-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'grid-row-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    grs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'gr-row-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'grid-row-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    gt?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'gr-tmpl'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'grid-template'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    gta?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'gr-areas'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'grid-template-areas'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    gtc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'gr-cols'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'grid-template-columns'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    gtr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'gr-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'grid-template-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    b?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    bd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border',
     *     props: ['b', 'bd', 'border'],
     *     short: 'b'
     * }
     * @propDocEnd
     */
    border?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    bB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'bd-bot'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'border-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    bBc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'bd-bot-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'border-bottom-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    bBlr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'bd-bot-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'border-bottom-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    bBrr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'bd-bot-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'border-bottom-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    bBs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'bd-bot-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'border-bottom-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    bBw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'bd-bot-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'border-bottom-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    bC?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'bd-coll'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'border-collapse'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    bc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'bd-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'border-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    bi?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'bd-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'border-image'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    bio?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'bd-img-outset'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'border-image-outset'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    bir?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'bd-img-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'border-image-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    bis?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'bd-img-slice'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'border-image-slice'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    biSrc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'bd-img-src'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'border-image-source'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    biw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'bd-img-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'border-image-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    bL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'bd-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'border-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    bLc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'bd-left-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'border-left-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    bLs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'bd-left-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'border-left-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    bLw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'bd-left-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'border-left-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    br?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'bd-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'border-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    bR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'bd-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'border-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    bRc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'bd-right-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'border-right-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    bRs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'bd-right-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'border-right-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    bRw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'bd-right-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'border-right-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    bs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'bd-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'border-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    bS?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'bd-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'border-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    bT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'bd-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'border-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    bTc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'bd-top-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'border-top-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    bTlr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'bd-top-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'border-top-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    bTrr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'bd-top-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'border-top-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    bTs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'bd-top-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'border-top-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    bTw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'bd-top-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'border-top-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    bw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'bd-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'border-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'clip',
     *     props: ['clip'],
     *     short: 'clip'
     * }
     * @propDocEnd
     */
    clip?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clipPath', 'clip-path'],
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    clipPath?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clipPath', 'clip-path'],
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    'clip-path'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    d?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    dsp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'display',
     *     props: ['d', 'dsp', 'display'],
     *     short: 'd'
     * }
     * @propDocEnd
     */
    display?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    P?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    pos?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'position',
     *     props: ['P', 'pos', 'position'],
     *     short: 'P'
     * }
     * @propDocEnd
     */
    position?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'top',
     *     props: ['T', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    T?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'top',
     *     props: ['T', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    top?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    R?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    right?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    B?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    bottom?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    L?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    left?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zi?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    'z-index'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color'],
     *     short: 'c'
     * }
     * @propDocEnd
     */
    c?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color'],
     *     short: 'c'
     * }
     * @propDocEnd
     */
    color?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    o?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    over?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow',
     *     props: ['o', 'over', 'overflow'],
     *     short: 'o'
     * }
     * @propDocEnd
     */
    overflow?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    ox?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'over-x'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'overflow-x'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    oy?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'over-y'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'overflow-y'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    fl?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    float?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clear?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    v?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    visibility?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'columns'],
     *     short: 'col'
     * }
     * @propDocEnd
     */
    col?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'columns'],
     *     short: 'col'
     * }
     * @propDocEnd
     */
    columns?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    cc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'col-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'column-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    cf?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'col-fill'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'column-fill'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    cg?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'col-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'column-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    cr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'col-rule'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'column-rule'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    crc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'col-rule-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'column-rule-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    crs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'col-rule-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'column-rule-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    crw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'col-rule-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'column-rule-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    cs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'col-span'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'column-span'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    cw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'col-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'column-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pba?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'pb-after'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'page-break-after'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pbb?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'pb-before'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'page-break-before'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pbi?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'pb-inside'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'page-break-inside'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shadow?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-shadow',
     *     props: ['shd', 'shadow', 'box-shadow'],
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    'box-shadow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    siz?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    sizing?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'box-sizing',
     *     props: ['siz', 'sizing', 'box-sizing'],
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    'box-sizing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    of?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'obj-fit'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'object-fit'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    oP?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'obj-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'object-position'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    op?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    opacity?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    or?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    order?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline'],
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    ol?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline'],
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    outline?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    mbm?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'blend-mode'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'mix-blend-mode'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    ct?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    content?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cursor'],
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cur?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cursor'],
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cursor?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pe?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'p-events'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'pointer-events'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter'],
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    fil?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter'],
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    filter?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    sb?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    's-behavior'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    'scroll-behavior'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    sw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    's-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    'scrollbar-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    sh?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    's-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    'scrollbar-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    us?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'u-select'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'user-select'?: TCSSPropValue
}

/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
