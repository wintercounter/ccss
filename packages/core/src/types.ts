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
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    a?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    anim?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    animation?: TCSSPropValue

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
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'anim-del'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'animation-delay'?: TCSSPropValue

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
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'anim-dir'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'animation-direction'?: TCSSPropValue

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
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'anim-dur'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'animation-duration'?: TCSSPropValue

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
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'anim-fill'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'animation-fill-mode'?: TCSSPropValue

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
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'anim-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'animation-iteration-count'?: TCSSPropValue

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
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'anim-name'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'animation-name'?: TCSSPropValue

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
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'anim-state'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'animation-play-state'?: TCSSPropValue

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
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'anim-timing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'animation-timing-function'?: TCSSPropValue

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
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'bf-visibility'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'backface-visibility'?: TCSSPropValue

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
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    pers?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    perspective?: TCSSPropValue

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
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'pers-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'perspective-origin'?: TCSSPropValue

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
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tran?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    transform?: TCSSPropValue

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
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'tran-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'transform-origin'?: TCSSPropValue

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
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'tran-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'transform-style'?: TCSSPropValue

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
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    trans?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    transition?: TCSSPropValue

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
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'trans-del'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'transition-delay'?: TCSSPropValue

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
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'trans-dur'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'transition-duration'?: TCSSPropValue

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
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'trans-prop'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'transition-property'?: TCSSPropValue

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
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'trans-timing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'transition-timing-function'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    f?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    fx?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    flex?: TCSSPropValue

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
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'fx-dir'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'flex-direction'?: TCSSPropValue

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
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'fx-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'flex-wrap'?: TCSSPropValue

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
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'fx-base'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'flex-basis'?: TCSSPropValue

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
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'fx-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'flex-flow'?: TCSSPropValue

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
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'fx-grow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'flex-grow'?: TCSSPropValue

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
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'fx-shrink'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'flex-shrink'?: TCSSPropValue

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
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'al-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'align-items'?: TCSSPropValue

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
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'al-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'align-content'?: TCSSPropValue

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
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'just-items'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'justify-items'?: TCSSPropValue

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
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'just-content'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'justify-content'?: TCSSPropValue

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
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'al-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'align-self'?: TCSSPropValue

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
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'just-self'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'justify-self'?: TCSSPropValue

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
     *     prop: 'font',
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    font?: TCSSPropValue

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
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'ft-family'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'font-family'?: TCSSPropValue

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
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'ft-kern'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'font-kerning'?: TCSSPropValue

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
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'ft-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'font-size'?: TCSSPropValue

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
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'ft-stretch'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'font-stretch'?: TCSSPropValue

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
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'ft-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'font-style'?: TCSSPropValue

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
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'ft-variant'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'font-variant'?: TCSSPropValue

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
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'ft-weight'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'font-weight'?: TCSSPropValue

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
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'ltr-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'letter-spacing'?: TCSSPropValue

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
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-h'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-height'?: TCSSPropValue

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
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'txt-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'text-align'?: TCSSPropValue

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
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'txt-decor'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'text-decoration'?: TCSSPropValue

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
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'txt-in'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'text-indent'?: TCSSPropValue

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
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'txt-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'text-overflow'?: TCSSPropValue

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
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'txt-shad'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'text-shadow'?: TCSSPropValue

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
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'txt-tranf'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'text-transform'?: TCSSPropValue

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
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'v-align'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'vertical-align'?: TCSSPropValue

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
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'w-space'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'white-space'?: TCSSPropValue

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
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'w-break'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'word-break'?: TCSSPropValue

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
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'w-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'word-spacing'?: TCSSPropValue

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
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'w-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'word-wrap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    l?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    list?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    'list-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    li?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-style-image'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    lp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-style-position'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    lt?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-type'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-style-type'?: TCSSPropValue

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
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    mar?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    margin?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    mT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'mar-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'margin-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    mR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'mar-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'margin-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    mB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'mar-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'margin-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    mL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'mar-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'margin-left'?: TCSSPropValue

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
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    pad?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    padding?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    pT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'pad-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'padding-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    pR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'pad-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'padding-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    pB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'pad-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'padding-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    pL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'pad-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'padding-left'?: TCSSPropValue

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
     *     prop: 'background',
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    background?: TCSSPropValue

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
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'bg-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'background-image'?: TCSSPropValue

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
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'bg-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'background-color'?: TCSSPropValue

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
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'bg-size'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'background-size'?: TCSSPropValue

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
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'bg-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'background-repeat'?: TCSSPropValue

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
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'bg-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'background-position'?: TCSSPropValue

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
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'bg-attach'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'background-attachment'?: TCSSPropValue

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
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'bg-blend'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'background-blend-mode'?: TCSSPropValue

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
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'bg-clip'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'background-clip'?: TCSSPropValue

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
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'bg-org'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'background-origin'?: TCSSPropValue

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
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    wid?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    width?: TCSSPropValue

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
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    hei?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    height?: TCSSPropValue

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
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-width'?: TCSSPropValue

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
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-hei'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-height'?: TCSSPropValue

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
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-width'?: TCSSPropValue

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
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-hei'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-height'?: TCSSPropValue

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
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grid?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    ga?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'gr-area'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'grid-area'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    gac?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'gr-auto-cols'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'grid-auto-columns'?: TCSSPropValue

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
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'gr-auto-flow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'grid-auto-flow'?: TCSSPropValue

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
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'gr-auto-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'grid-auto-rows'?: TCSSPropValue

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
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'gr-col'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'grid-column'?: TCSSPropValue

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
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'gr-col-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'grid-column-end'?: TCSSPropValue

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
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'gr-col-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'grid-column-gap'?: TCSSPropValue

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
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'gr-col-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'grid-column-start'?: TCSSPropValue

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
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'gr-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'grid-gap'?: TCSSPropValue

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
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'gr-row'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'grid-row'?: TCSSPropValue

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
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'gr-row-end'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'grid-row-end'?: TCSSPropValue

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
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'gr-row-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'grid-row-gap'?: TCSSPropValue

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
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'gr-row-start'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'grid-row-start'?: TCSSPropValue

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
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'gr-tmpl'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'grid-template'?: TCSSPropValue

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
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'gr-areas'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'grid-template-areas'?: TCSSPropValue

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
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'gr-cols'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'grid-template-columns'?: TCSSPropValue

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
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'gr-rows'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'grid-template-rows'?: TCSSPropValue

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
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    bd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    border?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    bB?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'bd-bot'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'border-bottom'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    bBc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'bd-bot-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'border-bottom-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    bBlr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'bd-bot-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'border-bottom-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    bBrr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'bd-bot-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'border-bottom-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    bBs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'bd-bot-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'border-bottom-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    bBw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'bd-bot-wid'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'border-bottom-width'?: TCSSPropValue

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
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'bd-coll'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'border-collapse'?: TCSSPropValue

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
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'bd-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'border-color'?: TCSSPropValue

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
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'bd-img'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'border-image'?: TCSSPropValue

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
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'bd-img-outset'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'border-image-outset'?: TCSSPropValue

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
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'bd-img-repeat'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'border-image-repeat'?: TCSSPropValue

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
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'bd-img-slice'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'border-image-slice'?: TCSSPropValue

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
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'bd-img-src'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'border-image-source'?: TCSSPropValue

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
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'bd-img-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'border-image-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    bL?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'bd-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'border-left'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    bLc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'bd-left-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'border-left-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    bLs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'bd-left-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'border-left-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    bLw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'bd-left-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'border-left-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    br?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'bd-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'border-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    bR?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'bd-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'border-right'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    bRc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'bd-right-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'border-right-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    bRs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'bd-right-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'border-right-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    bRw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'bd-right-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'border-right-width'?: TCSSPropValue

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
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'bd-spacing'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'border-spacing'?: TCSSPropValue

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
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'bd-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'border-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    bT?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'bd-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'border-top'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    bTc?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'bd-top-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'border-top-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    bTlr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'bd-top-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'border-top-left-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    bTrr?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'bd-top-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'border-top-right-radius'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    bTs?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'bd-top-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'border-top-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    bTw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'bd-top-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'border-top-width'?: TCSSPropValue

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
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'bd-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'border-width'?: TCSSPropValue

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
     *     prop: 'clip-path',
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    'clip-path'?: TCSSPropValue

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
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    dsp?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    display?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    P?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    pos?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    position?: TCSSPropValue

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
     *     prop: 'top',
     *     short: 'T'
     * }
     * @propDocEnd
     */
    top?: TCSSPropValue

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
     *     prop: 'right',
     *     short: 'R'
     * }
     * @propDocEnd
     */
    right?: TCSSPropValue

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
     *     prop: 'bottom',
     *     short: 'B'
     * }
     * @propDocEnd
     */
    bottom?: TCSSPropValue

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
     *     prop: 'left',
     *     short: 'L'
     * }
     * @propDocEnd
     */
    left?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'z-index',
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zi?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'z-index',
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    'z-index'?: TCSSPropValue

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
     *     prop: 'color',
     *     short: 'c'
     * }
     * @propDocEnd
     */
    color?: TCSSPropValue

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
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    over?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    overflow?: TCSSPropValue

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
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'over-x'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'overflow-x'?: TCSSPropValue

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
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'over-y'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'overflow-y'?: TCSSPropValue

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
     *     prop: 'float',
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    float?: TCSSPropValue

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
     *     prop: 'clear',
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clear?: TCSSPropValue

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
     *     prop: 'visibility',
     *     short: 'v'
     * }
     * @propDocEnd
     */
    visibility?: TCSSPropValue

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
     *     prop: 'columns',
     *     short: 'col'
     * }
     * @propDocEnd
     */
    columns?: TCSSPropValue

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
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'col-count'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'column-count'?: TCSSPropValue

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
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'col-fill'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'column-fill'?: TCSSPropValue

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
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'col-gap'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'column-gap'?: TCSSPropValue

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
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'col-rule'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'column-rule'?: TCSSPropValue

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
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'col-rule-color'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'column-rule-color'?: TCSSPropValue

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
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'col-rule-style'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'column-rule-style'?: TCSSPropValue

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
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'col-rule-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'column-rule-width'?: TCSSPropValue

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
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'col-span'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'column-span'?: TCSSPropValue

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
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'col-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'column-width'?: TCSSPropValue

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
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'pb-after'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'page-break-after'?: TCSSPropValue

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
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'pb-before'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'page-break-before'?: TCSSPropValue

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
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'pb-inside'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'page-break-inside'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shd?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shadow?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    'box-shadow'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    siz?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    sizing?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    'box-sizing'?: TCSSPropValue

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
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'obj-fit'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'object-fit'?: TCSSPropValue

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
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'obj-pos'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'object-position'?: TCSSPropValue

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
     *     prop: 'opacity',
     *     short: 'op'
     * }
     * @propDocEnd
     */
    opacity?: TCSSPropValue

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
     *     prop: 'order',
     *     short: 'or'
     * }
     * @propDocEnd
     */
    order?: TCSSPropValue

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
     *     prop: 'outline',
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    outline?: TCSSPropValue

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
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'blend-mode'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'mix-blend-mode'?: TCSSPropValue

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
     *     prop: 'content',
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    content?: TCSSPropValue

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
     *     prop: 'cursor',
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cursor?: TCSSPropValue

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
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'p-events'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'pointer-events'?: TCSSPropValue

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
     *     prop: 'filter',
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    filter?: TCSSPropValue

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
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    's-behavior'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    'scroll-behavior'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    sw?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    's-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    'scrollbar-width'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    sh?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    's-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    'scrollbar-height'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    us?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'u-select'?: TCSSPropValue

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
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
