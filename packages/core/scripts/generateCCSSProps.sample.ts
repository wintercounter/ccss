// @ts-nocheck

export interface CCSSProps extends AnyProp {
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
    child?: CCSSProp

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
    'anim-del'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-delay',
     *     props: ['ad', 'anim-del', 'animation-delay'],
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'animation-delay'?: CCSSProp

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
    'anim-dir'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-direction',
     *     props: ['aDir', 'anim-dir', 'animation-direction'],
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'animation-direction'?: CCSSProp

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
    'anim-dur'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-duration',
     *     props: ['aD', 'anim-dur', 'animation-duration'],
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'animation-duration'?: CCSSProp

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
    'anim-fill'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-fill-mode',
     *     props: ['afm', 'anim-fill', 'animation-fill-mode'],
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'animation-fill-mode'?: CCSSProp

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
    'anim-count'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-iteration-count',
     *     props: ['aic', 'anim-count', 'animation-iteration-count'],
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'animation-iteration-count'?: CCSSProp

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
    'anim-name'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-name',
     *     props: ['an', 'anim-name', 'animation-name'],
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'animation-name'?: CCSSProp

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
    'anim-state'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-play-state',
     *     props: ['aps', 'anim-state', 'animation-play-state'],
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'animation-play-state'?: CCSSProp

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
    'anim-timing'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'animation-timing-function',
     *     props: ['ats', 'anim-timing', 'animation-timing-function'],
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'animation-timing-function'?: CCSSProp

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
    'bf-visibility'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'backface-visibility',
     *     props: ['bv', 'bf-visibility', 'backface-visibility'],
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'backface-visibility'?: CCSSProp

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
    'pers-org'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'perspective-origin',
     *     props: ['pero', 'pers-org', 'perspective-origin'],
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'perspective-origin'?: CCSSProp

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
    'tran-org'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-origin',
     *     props: ['tfo', 'tran-org', 'transform-origin'],
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'transform-origin'?: CCSSProp

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
    'tran-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transform-style',
     *     props: ['tfs', 'tran-style', 'transform-style'],
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'transform-style'?: CCSSProp

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
    'trans-del'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-delay',
     *     props: ['trD', 'trans-del', 'transition-delay'],
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'transition-delay'?: CCSSProp

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
    'trans-dur'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-duration',
     *     props: ['trd', 'trans-dur', 'transition-duration'],
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'transition-duration'?: CCSSProp

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
    'trans-prop'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-property',
     *     props: ['trp', 'trans-prop', 'transition-property'],
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'transition-property'?: CCSSProp

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
    'trans-timing'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'transition-timing-function',
     *     props: ['trt', 'trans-timing', 'transition-timing-function'],
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'transition-timing-function'?: CCSSProp

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
    'fx-dir'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-direction',
     *     props: ['fd', 'fx-dir', 'flex-direction'],
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'flex-direction'?: CCSSProp

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
    'fx-wrap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-wrap',
     *     props: ['fw', 'fx-wrap', 'flex-wrap'],
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'flex-wrap'?: CCSSProp

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
    'fx-base'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-basis',
     *     props: ['fb', 'fx-base', 'flex-basis'],
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'flex-basis'?: CCSSProp

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
    'fx-flow'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-flow',
     *     props: ['ff', 'fx-flow', 'flex-flow'],
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'flex-flow'?: CCSSProp

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
    'fx-grow'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-grow',
     *     props: ['fg', 'fx-grow', 'flex-grow'],
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'flex-grow'?: CCSSProp

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
    'fx-shrink'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'flex-shrink',
     *     props: ['fs', 'fx-shrink', 'flex-shrink'],
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'flex-shrink'?: CCSSProp

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
    'al-items'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-items',
     *     props: ['ai', 'al-items', 'align-items'],
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'align-items'?: CCSSProp

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
    'al-content'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-content',
     *     props: ['ac', 'al-content', 'align-content'],
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'align-content'?: CCSSProp

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
    'just-items'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-items',
     *     props: ['ji', 'just-items', 'justify-items'],
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'justify-items'?: CCSSProp

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
    'just-content'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-content',
     *     props: ['jc', 'just-content', 'justify-content'],
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'justify-content'?: CCSSProp

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
    'al-self'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'align-self',
     *     props: ['aS', 'al-self', 'align-self'],
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'align-self'?: CCSSProp

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
    'just-self'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'justify-self',
     *     props: ['jS', 'just-self', 'justify-self'],
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'justify-self'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'font'],
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    ft?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font',
     *     props: ['ft', 'font'],
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
    'ft-family'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-family',
     *     props: ['ftf', 'ft-family', 'font-family'],
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'font-family'?: CCSSProp

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
    'ft-kern'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-kerning',
     *     props: ['ftk', 'ft-kern', 'font-kerning'],
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'font-kerning'?: CCSSProp

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
    'ft-size'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-size',
     *     props: ['fts', 'ft-size', 'font-size'],
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'font-size'?: CCSSProp

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
    'ft-stretch'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-stretch',
     *     props: ['ftStr', 'ft-stretch', 'font-stretch'],
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'font-stretch'?: CCSSProp

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
    'ft-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-style',
     *     props: ['ftSty', 'ft-style', 'font-style'],
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'font-style'?: CCSSProp

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
    'ft-variant'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-variant',
     *     props: ['ftv', 'ft-variant', 'font-variant'],
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'font-variant'?: CCSSProp

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
    'ft-weight'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'font-weight',
     *     props: ['ftw', 'ft-weight', 'font-weight'],
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'font-weight'?: CCSSProp

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
    'ltr-spacing'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'letter-spacing',
     *     props: ['ls', 'ltr-spacing', 'letter-spacing'],
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'letter-spacing'?: CCSSProp

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
    'line-h'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'line-height',
     *     props: ['lh', 'line-h', 'line-height'],
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-height'?: CCSSProp

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
    'txt-align'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-align',
     *     props: ['ta', 'txt-align', 'text-align'],
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'text-align'?: CCSSProp

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
    'txt-decor'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-decoration',
     *     props: ['td', 'txt-decor', 'text-decoration'],
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'text-decoration'?: CCSSProp

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
    'txt-in'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-indent',
     *     props: ['ti', 'txt-in', 'text-indent'],
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'text-indent'?: CCSSProp

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
    'txt-flow'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-overflow',
     *     props: ['to', 'txt-flow', 'text-overflow'],
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'text-overflow'?: CCSSProp

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
    'txt-shad'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-shadow',
     *     props: ['ts', 'txt-shad', 'text-shadow'],
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'text-shadow'?: CCSSProp

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
    'txt-tranf'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'text-transform',
     *     props: ['tt', 'txt-tranf', 'text-transform'],
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'text-transform'?: CCSSProp

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
    'v-align'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'vertical-align',
     *     props: ['va', 'v-align', 'vertical-align'],
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'vertical-align'?: CCSSProp

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
    'w-space'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'white-space',
     *     props: ['ws', 'w-space', 'white-space'],
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'white-space'?: CCSSProp

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
    'w-break'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-break',
     *     props: ['wb', 'w-break', 'word-break'],
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'word-break'?: CCSSProp

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
    'w-spacing'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-spacing',
     *     props: ['wS', 'w-spacing', 'word-spacing'],
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'word-spacing'?: CCSSProp

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
    'w-wrap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'word-wrap',
     *     props: ['ww', 'w-wrap', 'word-wrap'],
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'word-wrap'?: CCSSProp

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
    'list-style'?: CCSSProp

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
    'list-img'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-image',
     *     props: ['li', 'list-img', 'list-style-image'],
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-style-image'?: CCSSProp

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
    'list-pos'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-position',
     *     props: ['lp', 'list-pos', 'list-style-position'],
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-style-position'?: CCSSProp

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
    'list-type'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'list-style-type',
     *     props: ['lt', 'list-type', 'list-style-type'],
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-style-type'?: CCSSProp

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
    'mar-top'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-top',
     *     props: ['mT', 'mar-top', 'margin-top'],
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'margin-top'?: CCSSProp

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
    'mar-right'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-right',
     *     props: ['mR', 'mar-right', 'margin-right'],
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'margin-right'?: CCSSProp

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
    'mar-bottom'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-bottom',
     *     props: ['mB', 'mar-bottom', 'margin-bottom'],
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'margin-bottom'?: CCSSProp

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
    'mar-left'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'margin-left',
     *     props: ['mL', 'mar-left', 'margin-left'],
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'margin-left'?: CCSSProp

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
    'pad-top'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-top',
     *     props: ['pT', 'pad-top', 'padding-top'],
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'padding-top'?: CCSSProp

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
    'pad-right'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-right',
     *     props: ['pR', 'pad-right', 'padding-right'],
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'padding-right'?: CCSSProp

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
    'pad-bottom'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-bottom',
     *     props: ['pB', 'pad-bottom', 'padding-bottom'],
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'padding-bottom'?: CCSSProp

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
    'pad-left'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'padding-left',
     *     props: ['pL', 'pad-left', 'padding-left'],
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'padding-left'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'background'],
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    bg?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background',
     *     props: ['bg', 'background'],
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
    'bg-img'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-image',
     *     props: ['bgi', 'bg-img', 'background-image'],
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'background-image'?: CCSSProp

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
    'bg-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-color',
     *     props: ['bgc', 'bg-color', 'background-color'],
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'background-color'?: CCSSProp

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
    'bg-size'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-size',
     *     props: ['bgs', 'bg-size', 'background-size'],
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'background-size'?: CCSSProp

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
    'bg-repeat'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-repeat',
     *     props: ['bgr', 'bg-repeat', 'background-repeat'],
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'background-repeat'?: CCSSProp

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
    'bg-pos'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-position',
     *     props: ['bgp', 'bg-pos', 'background-position'],
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'background-position'?: CCSSProp

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
    'bg-attach'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-attachment',
     *     props: ['bga', 'bg-attach', 'background-attachment'],
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'background-attachment'?: CCSSProp

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
    'bg-blend'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-blend-mode',
     *     props: ['bgbm', 'bg-blend', 'background-blend-mode'],
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'background-blend-mode'?: CCSSProp

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
    'bg-clip'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-clip',
     *     props: ['bgC', 'bg-clip', 'background-clip'],
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'background-clip'?: CCSSProp

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
    'bg-org'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'background-origin',
     *     props: ['bgo', 'bg-org', 'background-origin'],
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'background-origin'?: CCSSProp

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
    'min-wid'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-width',
     *     props: ['minW', 'min-wid', 'min-width'],
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-width'?: CCSSProp

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
    'min-hei'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'min-height',
     *     props: ['minH', 'min-hei', 'min-height'],
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-height'?: CCSSProp

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
    'max-wid'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-width',
     *     props: ['maxW', 'max-wid', 'max-width'],
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-width'?: CCSSProp

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
    'max-hei'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'max-height',
     *     props: ['maxH', 'max-hei', 'max-height'],
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-height'?: CCSSProp

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
    'gr-area'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-area',
     *     props: ['ga', 'gr-area', 'grid-area'],
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'grid-area'?: CCSSProp

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
    'gr-auto-cols'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-columns',
     *     props: ['gac', 'gr-auto-cols', 'grid-auto-columns'],
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'grid-auto-columns'?: CCSSProp

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
    'gr-auto-flow'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-flow',
     *     props: ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'grid-auto-flow'?: CCSSProp

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
    'gr-auto-rows'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-auto-rows',
     *     props: ['gar', 'gr-auto-rows', 'grid-auto-rows'],
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'grid-auto-rows'?: CCSSProp

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
    'gr-col'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column',
     *     props: ['gc', 'gr-col', 'grid-column'],
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'grid-column'?: CCSSProp

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
    'gr-col-end'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-end',
     *     props: ['gce', 'gr-col-end', 'grid-column-end'],
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'grid-column-end'?: CCSSProp

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
    'gr-col-gap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-gap',
     *     props: ['gcg', 'gr-col-gap', 'grid-column-gap'],
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'grid-column-gap'?: CCSSProp

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
    'gr-col-start'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-column-start',
     *     props: ['gcs', 'gr-col-start', 'grid-column-start'],
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'grid-column-start'?: CCSSProp

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
    'gr-gap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-gap',
     *     props: ['gg', 'gr-gap', 'grid-gap'],
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'grid-gap'?: CCSSProp

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
    'gr-row'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row',
     *     props: ['gr', 'gr-row', 'grid-row'],
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'grid-row'?: CCSSProp

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
    'gr-row-end'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-end',
     *     props: ['gre', 'gr-row-end', 'grid-row-end'],
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'grid-row-end'?: CCSSProp

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
    'gr-row-gap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-gap',
     *     props: ['grg', 'gr-row-gap', 'grid-row-gap'],
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'grid-row-gap'?: CCSSProp

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
    'gr-row-start'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-row-start',
     *     props: ['grs', 'gr-row-start', 'grid-row-start'],
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'grid-row-start'?: CCSSProp

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
    'gr-tmpl'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template',
     *     props: ['gt', 'gr-tmpl', 'grid-template'],
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'grid-template'?: CCSSProp

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
    'gr-areas'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-areas',
     *     props: ['gta', 'gr-areas', 'grid-template-areas'],
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'grid-template-areas'?: CCSSProp

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
    'gr-cols'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-columns',
     *     props: ['gtc', 'gr-cols', 'grid-template-columns'],
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'grid-template-columns'?: CCSSProp

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
    'gr-rows'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'grid-template-rows',
     *     props: ['gtr', 'gr-rows', 'grid-template-rows'],
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'grid-template-rows'?: CCSSProp

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
    'bd-bot'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom',
     *     props: ['bB', 'bd-bot', 'border-bottom'],
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'border-bottom'?: CCSSProp

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
    'bd-bot-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-color',
     *     props: ['bBc', 'bd-bot-color', 'border-bottom-color'],
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'border-bottom-color'?: CCSSProp

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
    'bd-bot-left-radius'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-left-radius',
     *     props: ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius'],
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'border-bottom-left-radius'?: CCSSProp

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
    'bd-bot-right-radius'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-right-radius',
     *     props: ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius'],
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'border-bottom-right-radius'?: CCSSProp

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
    'bd-bot-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-style',
     *     props: ['bBs', 'bd-bot-style', 'border-bottom-style'],
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'border-bottom-style'?: CCSSProp

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
    'bd-bot-wid'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-bottom-width',
     *     props: ['bBw', 'bd-bot-wid', 'border-bottom-width'],
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'border-bottom-width'?: CCSSProp

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
    'bd-coll'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-collapse',
     *     props: ['bC', 'bd-coll', 'border-collapse'],
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'border-collapse'?: CCSSProp

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
    'bd-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-color',
     *     props: ['bc', 'bd-color', 'border-color'],
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'border-color'?: CCSSProp

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
    'bd-img'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image',
     *     props: ['bi', 'bd-img', 'border-image'],
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'border-image'?: CCSSProp

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
    'bd-img-outset'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-outset',
     *     props: ['bio', 'bd-img-outset', 'border-image-outset'],
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'border-image-outset'?: CCSSProp

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
    'bd-img-repeat'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-repeat',
     *     props: ['bir', 'bd-img-repeat', 'border-image-repeat'],
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'border-image-repeat'?: CCSSProp

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
    'bd-img-slice'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-slice',
     *     props: ['bis', 'bd-img-slice', 'border-image-slice'],
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'border-image-slice'?: CCSSProp

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
    'bd-img-src'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-source',
     *     props: ['biSrc', 'bd-img-src', 'border-image-source'],
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'border-image-source'?: CCSSProp

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
    'bd-img-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-image-width',
     *     props: ['biw', 'bd-img-width', 'border-image-width'],
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'border-image-width'?: CCSSProp

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
    'bd-left'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left',
     *     props: ['bL', 'bd-left', 'border-left'],
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'border-left'?: CCSSProp

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
    'bd-left-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-color',
     *     props: ['bLc', 'bd-left-color', 'border-left-color'],
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'border-left-color'?: CCSSProp

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
    'bd-left-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-style',
     *     props: ['bLs', 'bd-left-style', 'border-left-style'],
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'border-left-style'?: CCSSProp

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
    'bd-left-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-left-width',
     *     props: ['bLw', 'bd-left-width', 'border-left-width'],
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'border-left-width'?: CCSSProp

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
    'bd-radius'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-radius',
     *     props: ['br', 'bd-radius', 'border-radius'],
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'border-radius'?: CCSSProp

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
    'bd-right'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right',
     *     props: ['bR', 'bd-right', 'border-right'],
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'border-right'?: CCSSProp

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
    'bd-right-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-color',
     *     props: ['bRc', 'bd-right-color', 'border-right-color'],
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'border-right-color'?: CCSSProp

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
    'bd-right-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-style',
     *     props: ['bRs', 'bd-right-style', 'border-right-style'],
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'border-right-style'?: CCSSProp

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
    'bd-right-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-right-width',
     *     props: ['bRw', 'bd-right-width', 'border-right-width'],
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'border-right-width'?: CCSSProp

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
    'bd-spacing'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-spacing',
     *     props: ['bs', 'bd-spacing', 'border-spacing'],
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'border-spacing'?: CCSSProp

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
    'bd-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-style',
     *     props: ['bS', 'bd-style', 'border-style'],
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'border-style'?: CCSSProp

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
    'bd-top'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top',
     *     props: ['bT', 'bd-top', 'border-top'],
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'border-top'?: CCSSProp

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
    'bd-top-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-color',
     *     props: ['bTc', 'bd-top-color', 'border-top-color'],
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'border-top-color'?: CCSSProp

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
    'bd-top-left-radius'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-left-radius',
     *     props: ['bTlr', 'bd-top-left-radius', 'border-top-left-radius'],
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'border-top-left-radius'?: CCSSProp

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
    'bd-top-right-radius'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-right-radius',
     *     props: ['bTrr', 'bd-top-right-radius', 'border-top-right-radius'],
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'border-top-right-radius'?: CCSSProp

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
    'bd-top-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-style',
     *     props: ['bTs', 'bd-top-style', 'border-top-style'],
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'border-top-style'?: CCSSProp

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
    'bd-top-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-top-width',
     *     props: ['bTw', 'bd-top-width', 'border-top-width'],
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'border-top-width'?: CCSSProp

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
    'bd-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'border-width',
     *     props: ['bw', 'bd-width', 'border-width'],
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'border-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip',
     *     props: ['clip'],
     *     short: 'clip'
     * }
     * @propDocEnd
     */
    clip?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clipPath', 'clip-path'],
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    clipPath?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clip-path',
     *     props: ['clipPath', 'clip-path'],
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    'clip-path'?: CCSSProp

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
     *     props: ['T', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    T?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'top',
     *     props: ['T', 'top'],
     *     short: 'T'
     * }
     * @propDocEnd
     */
    top?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    R?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'right',
     *     props: ['R', 'right'],
     *     short: 'R'
     * }
     * @propDocEnd
     */
    right?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    B?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'bottom',
     *     props: ['B', 'bottom'],
     *     short: 'B'
     * }
     * @propDocEnd
     */
    bottom?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    L?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'left',
     *     props: ['L', 'left'],
     *     short: 'L'
     * }
     * @propDocEnd
     */
    left?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zi?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'z-index',
     *     props: ['zi', 'z-index'],
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    'z-index'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color'],
     *     short: 'c'
     * }
     * @propDocEnd
     */
    c?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'color',
     *     props: ['c', 'color'],
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
    'over-x'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-x',
     *     props: ['ox', 'over-x', 'overflow-x'],
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'overflow-x'?: CCSSProp

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
    'over-y'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'overflow-y',
     *     props: ['oy', 'over-y', 'overflow-y'],
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'overflow-y'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    fl?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'float',
     *     props: ['fl', 'float'],
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    float?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clr?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'clear',
     *     props: ['clr', 'clear'],
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clear?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    v?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'visibility',
     *     props: ['v', 'visibility'],
     *     short: 'v'
     * }
     * @propDocEnd
     */
    visibility?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'columns'],
     *     short: 'col'
     * }
     * @propDocEnd
     */
    col?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'columns',
     *     props: ['col', 'columns'],
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
    'col-count'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-count',
     *     props: ['cc', 'col-count', 'column-count'],
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'column-count'?: CCSSProp

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
    'col-fill'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-fill',
     *     props: ['cf', 'col-fill', 'column-fill'],
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'column-fill'?: CCSSProp

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
    'col-gap'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-gap',
     *     props: ['cg', 'col-gap', 'column-gap'],
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'column-gap'?: CCSSProp

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
    'col-rule'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule',
     *     props: ['cr', 'col-rule', 'column-rule'],
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'column-rule'?: CCSSProp

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
    'col-rule-color'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-color',
     *     props: ['crc', 'col-rule-color', 'column-rule-color'],
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'column-rule-color'?: CCSSProp

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
    'col-rule-style'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-style',
     *     props: ['crs', 'col-rule-style', 'column-rule-style'],
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'column-rule-style'?: CCSSProp

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
    'col-rule-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-rule-width',
     *     props: ['crw', 'col-rule-width', 'column-rule-width'],
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'column-rule-width'?: CCSSProp

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
    'col-span'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-span',
     *     props: ['cs', 'col-span', 'column-span'],
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'column-span'?: CCSSProp

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
    'col-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'column-width',
     *     props: ['cw', 'col-width', 'column-width'],
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'column-width'?: CCSSProp

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
    'pb-after'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-after',
     *     props: ['pba', 'pb-after', 'page-break-after'],
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'page-break-after'?: CCSSProp

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
    'pb-before'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-before',
     *     props: ['pbb', 'pb-before', 'page-break-before'],
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'page-break-before'?: CCSSProp

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
    'pb-inside'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'page-break-inside',
     *     props: ['pbi', 'pb-inside', 'page-break-inside'],
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'page-break-inside'?: CCSSProp

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
    'box-shadow'?: CCSSProp

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
    'box-sizing'?: CCSSProp

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
    'obj-fit'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-fit',
     *     props: ['of', 'obj-fit', 'object-fit'],
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'object-fit'?: CCSSProp

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
    'obj-pos'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'object-position',
     *     props: ['oP', 'obj-pos', 'object-position'],
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'object-position'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    op?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'opacity',
     *     props: ['op', 'opacity'],
     *     short: 'op'
     * }
     * @propDocEnd
     */
    opacity?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    or?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'order',
     *     props: ['or', 'order'],
     *     short: 'or'
     * }
     * @propDocEnd
     */
    order?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline'],
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    ol?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'outline',
     *     props: ['ol', 'outline'],
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
    'blend-mode'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'mix-blend-mode',
     *     props: ['mbm', 'blend-mode', 'mix-blend-mode'],
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'mix-blend-mode'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    ct?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'content',
     *     props: ['ct', 'content'],
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    content?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cursor'],
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cur?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'cursor',
     *     props: ['cur', 'cursor'],
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
    'p-events'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'pointer-events',
     *     props: ['pe', 'p-events', 'pointer-events'],
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'pointer-events'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter'],
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    fil?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'filter',
     *     props: ['fil', 'filter'],
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
    's-behavior'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scroll-behavior',
     *     props: ['sb', 's-behavior', 'scroll-behavior'],
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    'scroll-behavior'?: CCSSProp

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
    's-width'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-width',
     *     props: ['sw', 's-width', 'scrollbar-width'],
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    'scrollbar-width'?: CCSSProp

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
    's-height'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'scrollbar-height',
     *     props: ['sh', 's-height', 'scrollbar-height'],
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    'scrollbar-height'?: CCSSProp

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
    'u-select'?: CCSSProp

    /**
     * @propDocStart
     * {
     *     long: 'user-select',
     *     props: ['us', 'u-select', 'user-select'],
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'user-select'?: CCSSProp
}

/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
