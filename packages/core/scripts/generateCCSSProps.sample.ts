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
    child?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    a?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    anim?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation',
     *     short: 'a'
     * }
     * @propDocEnd
     */
    animation?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    ad?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'anim-del'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-delay',
     *     short: 'ad'
     * }
     * @propDocEnd
     */
    'animation-delay'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    aDir?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'anim-dir'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-direction',
     *     short: 'aDir'
     * }
     * @propDocEnd
     */
    'animation-direction'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    aD?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'anim-dur'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-duration',
     *     short: 'aD'
     * }
     * @propDocEnd
     */
    'animation-duration'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    afm?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'anim-fill'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-fill-mode',
     *     short: 'afm'
     * }
     * @propDocEnd
     */
    'animation-fill-mode'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    aic?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'anim-count'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-iteration-count',
     *     short: 'aic'
     * }
     * @propDocEnd
     */
    'animation-iteration-count'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    an?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'anim-name'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-name',
     *     short: 'an'
     * }
     * @propDocEnd
     */
    'animation-name'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    aps?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'anim-state'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-play-state',
     *     short: 'aps'
     * }
     * @propDocEnd
     */
    'animation-play-state'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    ats?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'anim-timing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'animation-timing-function',
     *     short: 'ats'
     * }
     * @propDocEnd
     */
    'animation-timing-function'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    bv?: any

    /**
     * @propDocStart
     * {
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'bf-visibility'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'backface-visibility',
     *     short: 'bv'
     * }
     * @propDocEnd
     */
    'backface-visibility'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    per?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    pers?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective',
     *     short: 'per'
     * }
     * @propDocEnd
     */
    perspective?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    pero?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'pers-org'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'perspective-origin',
     *     short: 'pero'
     * }
     * @propDocEnd
     */
    'perspective-origin'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tf?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    tran?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform',
     *     short: 'tf'
     * }
     * @propDocEnd
     */
    transform?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    tfo?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'tran-org'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-origin',
     *     short: 'tfo'
     * }
     * @propDocEnd
     */
    'transform-origin'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    tfs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'tran-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transform-style',
     *     short: 'tfs'
     * }
     * @propDocEnd
     */
    'transform-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    tr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    trans?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition',
     *     short: 'tr'
     * }
     * @propDocEnd
     */
    transition?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    trD?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'trans-del'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-delay',
     *     short: 'trD'
     * }
     * @propDocEnd
     */
    'transition-delay'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    trd?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'trans-dur'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-duration',
     *     short: 'trd'
     * }
     * @propDocEnd
     */
    'transition-duration'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    trp?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'trans-prop'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-property',
     *     short: 'trp'
     * }
     * @propDocEnd
     */
    'transition-property'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    trt?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'trans-timing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'transition-timing-function',
     *     short: 'trt'
     * }
     * @propDocEnd
     */
    'transition-timing-function'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    f?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    fx?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex',
     *     short: 'f'
     * }
     * @propDocEnd
     */
    flex?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    fd?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'fx-dir'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-direction',
     *     short: 'fd'
     * }
     * @propDocEnd
     */
    'flex-direction'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    fw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'fx-wrap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-wrap',
     *     short: 'fw'
     * }
     * @propDocEnd
     */
    'flex-wrap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    fb?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'fx-base'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-basis',
     *     short: 'fb'
     * }
     * @propDocEnd
     */
    'flex-basis'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    ff?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'fx-flow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-flow',
     *     short: 'ff'
     * }
     * @propDocEnd
     */
    'flex-flow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    fg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'fx-grow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-grow',
     *     short: 'fg'
     * }
     * @propDocEnd
     */
    'flex-grow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    fs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'fx-shrink'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'flex-shrink',
     *     short: 'fs'
     * }
     * @propDocEnd
     */
    'flex-shrink'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    ai?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'al-items'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-items',
     *     short: 'ai'
     * }
     * @propDocEnd
     */
    'align-items'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    ac?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'al-content'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-content',
     *     short: 'ac'
     * }
     * @propDocEnd
     */
    'align-content'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    ji?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'just-items'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-items',
     *     short: 'ji'
     * }
     * @propDocEnd
     */
    'justify-items'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    jc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'just-content'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-content',
     *     short: 'jc'
     * }
     * @propDocEnd
     */
    'justify-content'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    aS?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'al-self'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'align-self',
     *     short: 'aS'
     * }
     * @propDocEnd
     */
    'align-self'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    jS?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'just-self'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'justify-self',
     *     short: 'jS'
     * }
     * @propDocEnd
     */
    'justify-self'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font',
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    ft?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font',
     *     short: 'ft'
     * }
     * @propDocEnd
     */
    font?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    ftf?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'ft-family'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-family',
     *     short: 'ftf'
     * }
     * @propDocEnd
     */
    'font-family'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    ftk?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'ft-kern'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-kerning',
     *     short: 'ftk'
     * }
     * @propDocEnd
     */
    'font-kerning'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    fts?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'ft-size'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-size',
     *     short: 'fts'
     * }
     * @propDocEnd
     */
    'font-size'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    ftStr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'ft-stretch'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-stretch',
     *     short: 'ftStr'
     * }
     * @propDocEnd
     */
    'font-stretch'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    ftSty?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'ft-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-style',
     *     short: 'ftSty'
     * }
     * @propDocEnd
     */
    'font-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    ftv?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'ft-variant'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-variant',
     *     short: 'ftv'
     * }
     * @propDocEnd
     */
    'font-variant'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    ftw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'ft-weight'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'font-weight',
     *     short: 'ftw'
     * }
     * @propDocEnd
     */
    'font-weight'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    ls?: any

    /**
     * @propDocStart
     * {
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'ltr-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'letter-spacing',
     *     short: 'ls'
     * }
     * @propDocEnd
     */
    'letter-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    lh?: any

    /**
     * @propDocStart
     * {
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-h'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'line-height',
     *     short: 'lh'
     * }
     * @propDocEnd
     */
    'line-height'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    ta?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'txt-align'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-align',
     *     short: 'ta'
     * }
     * @propDocEnd
     */
    'text-align'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    td?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'txt-decor'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-decoration',
     *     short: 'td'
     * }
     * @propDocEnd
     */
    'text-decoration'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    ti?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'txt-in'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-indent',
     *     short: 'ti'
     * }
     * @propDocEnd
     */
    'text-indent'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    to?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'txt-flow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-overflow',
     *     short: 'to'
     * }
     * @propDocEnd
     */
    'text-overflow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    ts?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'txt-shad'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-shadow',
     *     short: 'ts'
     * }
     * @propDocEnd
     */
    'text-shadow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    tt?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'txt-tranf'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'text-transform',
     *     short: 'tt'
     * }
     * @propDocEnd
     */
    'text-transform'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    va?: any

    /**
     * @propDocStart
     * {
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'v-align'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'vertical-align',
     *     short: 'va'
     * }
     * @propDocEnd
     */
    'vertical-align'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    ws?: any

    /**
     * @propDocStart
     * {
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'w-space'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'white-space',
     *     short: 'ws'
     * }
     * @propDocEnd
     */
    'white-space'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    wb?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'w-break'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-break',
     *     short: 'wb'
     * }
     * @propDocEnd
     */
    'word-break'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    wS?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'w-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-spacing',
     *     short: 'wS'
     * }
     * @propDocEnd
     */
    'word-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    ww?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'w-wrap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'word-wrap',
     *     short: 'ww'
     * }
     * @propDocEnd
     */
    'word-wrap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    l?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    list?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style',
     *     short: 'l'
     * }
     * @propDocEnd
     */
    'list-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    li?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-img'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-image',
     *     short: 'li'
     * }
     * @propDocEnd
     */
    'list-style-image'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    lp?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-pos'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-position',
     *     short: 'lp'
     * }
     * @propDocEnd
     */
    'list-style-position'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    lt?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-type'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'list-style-type',
     *     short: 'lt'
     * }
     * @propDocEnd
     */
    'list-style-type'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    m?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    mar?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin',
     *     short: 'm'
     * }
     * @propDocEnd
     */
    margin?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    mT?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'mar-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-top',
     *     short: 'mT'
     * }
     * @propDocEnd
     */
    'margin-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    mR?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'mar-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-right',
     *     short: 'mR'
     * }
     * @propDocEnd
     */
    'margin-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    mB?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'mar-bottom'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-bottom',
     *     short: 'mB'
     * }
     * @propDocEnd
     */
    'margin-bottom'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    mL?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'mar-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'margin-left',
     *     short: 'mL'
     * }
     * @propDocEnd
     */
    'margin-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    p?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    pad?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding',
     *     short: 'p'
     * }
     * @propDocEnd
     */
    padding?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    pT?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'pad-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-top',
     *     short: 'pT'
     * }
     * @propDocEnd
     */
    'padding-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    pR?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'pad-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-right',
     *     short: 'pR'
     * }
     * @propDocEnd
     */
    'padding-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    pB?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'pad-bottom'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-bottom',
     *     short: 'pB'
     * }
     * @propDocEnd
     */
    'padding-bottom'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    pL?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'pad-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'padding-left',
     *     short: 'pL'
     * }
     * @propDocEnd
     */
    'padding-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background',
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    bg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background',
     *     short: 'bg'
     * }
     * @propDocEnd
     */
    background?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    bgi?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'bg-img'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-image',
     *     short: 'bgi'
     * }
     * @propDocEnd
     */
    'background-image'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    bgc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'bg-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-color',
     *     short: 'bgc'
     * }
     * @propDocEnd
     */
    'background-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    bgs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'bg-size'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-size',
     *     short: 'bgs'
     * }
     * @propDocEnd
     */
    'background-size'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    bgr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'bg-repeat'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-repeat',
     *     short: 'bgr'
     * }
     * @propDocEnd
     */
    'background-repeat'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    bgp?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'bg-pos'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-position',
     *     short: 'bgp'
     * }
     * @propDocEnd
     */
    'background-position'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    bga?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'bg-attach'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-attachment',
     *     short: 'bga'
     * }
     * @propDocEnd
     */
    'background-attachment'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    bgbm?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'bg-blend'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-blend-mode',
     *     short: 'bgbm'
     * }
     * @propDocEnd
     */
    'background-blend-mode'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    bgC?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'bg-clip'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-clip',
     *     short: 'bgC'
     * }
     * @propDocEnd
     */
    'background-clip'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    bgo?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'bg-org'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'background-origin',
     *     short: 'bgo'
     * }
     * @propDocEnd
     */
    'background-origin'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    w?: any

    /**
     * @propDocStart
     * {
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    wid?: any

    /**
     * @propDocStart
     * {
     *     prop: 'width',
     *     short: 'w'
     * }
     * @propDocEnd
     */
    width?: any

    /**
     * @propDocStart
     * {
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    h?: any

    /**
     * @propDocStart
     * {
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    hei?: any

    /**
     * @propDocStart
     * {
     *     prop: 'height',
     *     short: 'h'
     * }
     * @propDocEnd
     */
    height?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    minW?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-wid'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-width',
     *     short: 'minW'
     * }
     * @propDocEnd
     */
    'min-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    minH?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-hei'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'min-height',
     *     short: 'minH'
     * }
     * @propDocEnd
     */
    'min-height'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    maxW?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-wid'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-width',
     *     short: 'maxW'
     * }
     * @propDocEnd
     */
    'max-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    maxH?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-hei'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'max-height',
     *     short: 'maxH'
     * }
     * @propDocEnd
     */
    'max-height'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    g?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grd?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid',
     *     short: 'g'
     * }
     * @propDocEnd
     */
    grid?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    ga?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'gr-area'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-area',
     *     short: 'ga'
     * }
     * @propDocEnd
     */
    'grid-area'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    gac?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'gr-auto-cols'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-columns',
     *     short: 'gac'
     * }
     * @propDocEnd
     */
    'grid-auto-columns'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    gaf?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'gr-auto-flow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-flow',
     *     short: 'gaf'
     * }
     * @propDocEnd
     */
    'grid-auto-flow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    gar?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'gr-auto-rows'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-auto-rows',
     *     short: 'gar'
     * }
     * @propDocEnd
     */
    'grid-auto-rows'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    gc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'gr-col'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column',
     *     short: 'gc'
     * }
     * @propDocEnd
     */
    'grid-column'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    gce?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'gr-col-end'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-end',
     *     short: 'gce'
     * }
     * @propDocEnd
     */
    'grid-column-end'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    gcg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'gr-col-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-gap',
     *     short: 'gcg'
     * }
     * @propDocEnd
     */
    'grid-column-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    gcs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'gr-col-start'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-column-start',
     *     short: 'gcs'
     * }
     * @propDocEnd
     */
    'grid-column-start'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    gg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'gr-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-gap',
     *     short: 'gg'
     * }
     * @propDocEnd
     */
    'grid-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    gr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'gr-row'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row',
     *     short: 'gr'
     * }
     * @propDocEnd
     */
    'grid-row'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    gre?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'gr-row-end'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-end',
     *     short: 'gre'
     * }
     * @propDocEnd
     */
    'grid-row-end'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    grg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'gr-row-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-gap',
     *     short: 'grg'
     * }
     * @propDocEnd
     */
    'grid-row-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    grs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'gr-row-start'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-row-start',
     *     short: 'grs'
     * }
     * @propDocEnd
     */
    'grid-row-start'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    gt?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'gr-tmpl'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template',
     *     short: 'gt'
     * }
     * @propDocEnd
     */
    'grid-template'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    gta?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'gr-areas'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-areas',
     *     short: 'gta'
     * }
     * @propDocEnd
     */
    'grid-template-areas'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    gtc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'gr-cols'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-columns',
     *     short: 'gtc'
     * }
     * @propDocEnd
     */
    'grid-template-columns'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    gtr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'gr-rows'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'grid-template-rows',
     *     short: 'gtr'
     * }
     * @propDocEnd
     */
    'grid-template-rows'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    b?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    bd?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border',
     *     short: 'b'
     * }
     * @propDocEnd
     */
    border?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    bB?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'bd-bot'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom',
     *     short: 'bB'
     * }
     * @propDocEnd
     */
    'border-bottom'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    bBc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'bd-bot-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-color',
     *     short: 'bBc'
     * }
     * @propDocEnd
     */
    'border-bottom-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    bBlr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'bd-bot-left-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-left-radius',
     *     short: 'bBlr'
     * }
     * @propDocEnd
     */
    'border-bottom-left-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    bBrr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'bd-bot-right-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-right-radius',
     *     short: 'bBrr'
     * }
     * @propDocEnd
     */
    'border-bottom-right-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    bBs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'bd-bot-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-style',
     *     short: 'bBs'
     * }
     * @propDocEnd
     */
    'border-bottom-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    bBw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'bd-bot-wid'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-bottom-width',
     *     short: 'bBw'
     * }
     * @propDocEnd
     */
    'border-bottom-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    bC?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'bd-coll'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-collapse',
     *     short: 'bC'
     * }
     * @propDocEnd
     */
    'border-collapse'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    bc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'bd-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-color',
     *     short: 'bc'
     * }
     * @propDocEnd
     */
    'border-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    bi?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'bd-img'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image',
     *     short: 'bi'
     * }
     * @propDocEnd
     */
    'border-image'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    bio?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'bd-img-outset'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-outset',
     *     short: 'bio'
     * }
     * @propDocEnd
     */
    'border-image-outset'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    bir?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'bd-img-repeat'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-repeat',
     *     short: 'bir'
     * }
     * @propDocEnd
     */
    'border-image-repeat'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    bis?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'bd-img-slice'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-slice',
     *     short: 'bis'
     * }
     * @propDocEnd
     */
    'border-image-slice'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    biSrc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'bd-img-src'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-source',
     *     short: 'biSrc'
     * }
     * @propDocEnd
     */
    'border-image-source'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    biw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'bd-img-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-image-width',
     *     short: 'biw'
     * }
     * @propDocEnd
     */
    'border-image-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    bL?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'bd-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left',
     *     short: 'bL'
     * }
     * @propDocEnd
     */
    'border-left'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    bLc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'bd-left-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-color',
     *     short: 'bLc'
     * }
     * @propDocEnd
     */
    'border-left-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    bLs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'bd-left-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-style',
     *     short: 'bLs'
     * }
     * @propDocEnd
     */
    'border-left-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    bLw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'bd-left-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-left-width',
     *     short: 'bLw'
     * }
     * @propDocEnd
     */
    'border-left-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    br?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'bd-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-radius',
     *     short: 'br'
     * }
     * @propDocEnd
     */
    'border-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    bR?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'bd-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right',
     *     short: 'bR'
     * }
     * @propDocEnd
     */
    'border-right'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    bRc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'bd-right-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-color',
     *     short: 'bRc'
     * }
     * @propDocEnd
     */
    'border-right-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    bRs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'bd-right-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-style',
     *     short: 'bRs'
     * }
     * @propDocEnd
     */
    'border-right-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    bRw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'bd-right-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-right-width',
     *     short: 'bRw'
     * }
     * @propDocEnd
     */
    'border-right-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    bs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'bd-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-spacing',
     *     short: 'bs'
     * }
     * @propDocEnd
     */
    'border-spacing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    bS?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'bd-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-style',
     *     short: 'bS'
     * }
     * @propDocEnd
     */
    'border-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    bT?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'bd-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top',
     *     short: 'bT'
     * }
     * @propDocEnd
     */
    'border-top'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    bTc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'bd-top-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-color',
     *     short: 'bTc'
     * }
     * @propDocEnd
     */
    'border-top-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    bTlr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'bd-top-left-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-left-radius',
     *     short: 'bTlr'
     * }
     * @propDocEnd
     */
    'border-top-left-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    bTrr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'bd-top-right-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-right-radius',
     *     short: 'bTrr'
     * }
     * @propDocEnd
     */
    'border-top-right-radius'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    bTs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'bd-top-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-style',
     *     short: 'bTs'
     * }
     * @propDocEnd
     */
    'border-top-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    bTw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'bd-top-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-top-width',
     *     short: 'bTw'
     * }
     * @propDocEnd
     */
    'border-top-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    bw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'bd-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'border-width',
     *     short: 'bw'
     * }
     * @propDocEnd
     */
    'border-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'clip',
     *     short: 'clip'
     * }
     * @propDocEnd
     */
    clip?: any

    /**
     * @propDocStart
     * {
     *     prop: 'clip-path',
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    clipPath?: any

    /**
     * @propDocStart
     * {
     *     prop: 'clip-path',
     *     short: 'clipPath'
     * }
     * @propDocEnd
     */
    'clip-path'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    d?: any

    /**
     * @propDocStart
     * {
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    dsp?: any

    /**
     * @propDocStart
     * {
     *     prop: 'display',
     *     short: 'd'
     * }
     * @propDocEnd
     */
    display?: any

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    P?: any

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    pos?: any

    /**
     * @propDocStart
     * {
     *     prop: 'position',
     *     short: 'P'
     * }
     * @propDocEnd
     */
    position?: any

    /**
     * @propDocStart
     * {
     *     prop: 'top',
     *     short: 'T'
     * }
     * @propDocEnd
     */
    T?: any

    /**
     * @propDocStart
     * {
     *     prop: 'top',
     *     short: 'T'
     * }
     * @propDocEnd
     */
    top?: any

    /**
     * @propDocStart
     * {
     *     prop: 'right',
     *     short: 'R'
     * }
     * @propDocEnd
     */
    R?: any

    /**
     * @propDocStart
     * {
     *     prop: 'right',
     *     short: 'R'
     * }
     * @propDocEnd
     */
    right?: any

    /**
     * @propDocStart
     * {
     *     prop: 'bottom',
     *     short: 'B'
     * }
     * @propDocEnd
     */
    B?: any

    /**
     * @propDocStart
     * {
     *     prop: 'bottom',
     *     short: 'B'
     * }
     * @propDocEnd
     */
    bottom?: any

    /**
     * @propDocStart
     * {
     *     prop: 'left',
     *     short: 'L'
     * }
     * @propDocEnd
     */
    L?: any

    /**
     * @propDocStart
     * {
     *     prop: 'left',
     *     short: 'L'
     * }
     * @propDocEnd
     */
    left?: any

    /**
     * @propDocStart
     * {
     *     prop: 'z-index',
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    zi?: any

    /**
     * @propDocStart
     * {
     *     prop: 'z-index',
     *     short: 'zi'
     * }
     * @propDocEnd
     */
    'z-index'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'color',
     *     short: 'c'
     * }
     * @propDocEnd
     */
    c?: any

    /**
     * @propDocStart
     * {
     *     prop: 'color',
     *     short: 'c'
     * }
     * @propDocEnd
     */
    color?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    o?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    over?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow',
     *     short: 'o'
     * }
     * @propDocEnd
     */
    overflow?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    ox?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'over-x'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-x',
     *     short: 'ox'
     * }
     * @propDocEnd
     */
    'overflow-x'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    oy?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'over-y'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'overflow-y',
     *     short: 'oy'
     * }
     * @propDocEnd
     */
    'overflow-y'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'float',
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    fl?: any

    /**
     * @propDocStart
     * {
     *     prop: 'float',
     *     short: 'fl'
     * }
     * @propDocEnd
     */
    float?: any

    /**
     * @propDocStart
     * {
     *     prop: 'clear',
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'clear',
     *     short: 'clr'
     * }
     * @propDocEnd
     */
    clear?: any

    /**
     * @propDocStart
     * {
     *     prop: 'visibility',
     *     short: 'v'
     * }
     * @propDocEnd
     */
    v?: any

    /**
     * @propDocStart
     * {
     *     prop: 'visibility',
     *     short: 'v'
     * }
     * @propDocEnd
     */
    visibility?: any

    /**
     * @propDocStart
     * {
     *     prop: 'columns',
     *     short: 'col'
     * }
     * @propDocEnd
     */
    col?: any

    /**
     * @propDocStart
     * {
     *     prop: 'columns',
     *     short: 'col'
     * }
     * @propDocEnd
     */
    columns?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    cc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'col-count'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-count',
     *     short: 'cc'
     * }
     * @propDocEnd
     */
    'column-count'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    cf?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'col-fill'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-fill',
     *     short: 'cf'
     * }
     * @propDocEnd
     */
    'column-fill'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    cg?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'col-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-gap',
     *     short: 'cg'
     * }
     * @propDocEnd
     */
    'column-gap'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    cr?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'col-rule'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule',
     *     short: 'cr'
     * }
     * @propDocEnd
     */
    'column-rule'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    crc?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'col-rule-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-color',
     *     short: 'crc'
     * }
     * @propDocEnd
     */
    'column-rule-color'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    crs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'col-rule-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-style',
     *     short: 'crs'
     * }
     * @propDocEnd
     */
    'column-rule-style'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    crw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'col-rule-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-rule-width',
     *     short: 'crw'
     * }
     * @propDocEnd
     */
    'column-rule-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    cs?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'col-span'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-span',
     *     short: 'cs'
     * }
     * @propDocEnd
     */
    'column-span'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    cw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'col-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'column-width',
     *     short: 'cw'
     * }
     * @propDocEnd
     */
    'column-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    pba?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'pb-after'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-after',
     *     short: 'pba'
     * }
     * @propDocEnd
     */
    'page-break-after'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    pbb?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'pb-before'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-before',
     *     short: 'pbb'
     * }
     * @propDocEnd
     */
    'page-break-before'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    pbi?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'pb-inside'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'page-break-inside',
     *     short: 'pbi'
     * }
     * @propDocEnd
     */
    'page-break-inside'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shd?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    shadow?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-shadow',
     *     short: 'shd'
     * }
     * @propDocEnd
     */
    'box-shadow'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    siz?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    sizing?: any

    /**
     * @propDocStart
     * {
     *     prop: 'box-sizing',
     *     short: 'siz'
     * }
     * @propDocEnd
     */
    'box-sizing'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    of?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'obj-fit'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-fit',
     *     short: 'of'
     * }
     * @propDocEnd
     */
    'object-fit'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    oP?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'obj-pos'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'object-position',
     *     short: 'oP'
     * }
     * @propDocEnd
     */
    'object-position'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'opacity',
     *     short: 'op'
     * }
     * @propDocEnd
     */
    op?: any

    /**
     * @propDocStart
     * {
     *     prop: 'opacity',
     *     short: 'op'
     * }
     * @propDocEnd
     */
    opacity?: any

    /**
     * @propDocStart
     * {
     *     prop: 'order',
     *     short: 'or'
     * }
     * @propDocEnd
     */
    or?: any

    /**
     * @propDocStart
     * {
     *     prop: 'order',
     *     short: 'or'
     * }
     * @propDocEnd
     */
    order?: any

    /**
     * @propDocStart
     * {
     *     prop: 'outline',
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    ol?: any

    /**
     * @propDocStart
     * {
     *     prop: 'outline',
     *     short: 'ol'
     * }
     * @propDocEnd
     */
    outline?: any

    /**
     * @propDocStart
     * {
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    mbm?: any

    /**
     * @propDocStart
     * {
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'blend-mode'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'mix-blend-mode',
     *     short: 'mbm'
     * }
     * @propDocEnd
     */
    'mix-blend-mode'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'content',
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    ct?: any

    /**
     * @propDocStart
     * {
     *     prop: 'content',
     *     short: 'ct'
     * }
     * @propDocEnd
     */
    content?: any

    /**
     * @propDocStart
     * {
     *     prop: 'cursor',
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cur?: any

    /**
     * @propDocStart
     * {
     *     prop: 'cursor',
     *     short: 'cur'
     * }
     * @propDocEnd
     */
    cursor?: any

    /**
     * @propDocStart
     * {
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    pe?: any

    /**
     * @propDocStart
     * {
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'p-events'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'pointer-events',
     *     short: 'pe'
     * }
     * @propDocEnd
     */
    'pointer-events'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'filter',
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    fil?: any

    /**
     * @propDocStart
     * {
     *     prop: 'filter',
     *     short: 'fil'
     * }
     * @propDocEnd
     */
    filter?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    sb?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    's-behavior'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scroll-behavior',
     *     short: 'sb'
     * }
     * @propDocEnd
     */
    'scroll-behavior'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    sw?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    's-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-width',
     *     short: 'sw'
     * }
     * @propDocEnd
     */
    'scrollbar-width'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    sh?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    's-height'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'scrollbar-height',
     *     short: 'sh'
     * }
     * @propDocEnd
     */
    'scrollbar-height'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    us?: any

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'u-select'?: any

    /**
     * @propDocStart
     * {
     *     prop: 'user-select',
     *     short: 'us'
     * }
     * @propDocEnd
     */
    'user-select'?: any
}

/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
