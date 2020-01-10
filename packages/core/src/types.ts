export type ICSSPropValue = <T>(v: string, o: T) => string
export type ICSSSimplePropValue = <T>(v: T) => string | undefined

export default interface ICCSSProps {
    /**
     * animation
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    a?: ICSSPropValue
    /**
     * animation-delay
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ad?: ICSSPropValue
    /**
     * animation-direction
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aDir?: ICSSPropValue
    /**
     * animation-duration
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aD?: ICSSPropValue
    /**
     * animation-fill-mode
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    afm?: ICSSPropValue
    /**
     * animation-iteration-count
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aic?: ICSSPropValue
    /**
     * animation-name
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    an?: ICSSPropValue
    /**
     * animation-play-state
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aps?: ICSSPropValue
    /**
     * animation-timing-function
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ats?: ICSSPropValue
    /**
     * backface-visibility
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bv?: ICSSPropValue
    /**
     * perspective
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    per?: ICSSPropValue
    /**
     * perspective-origin
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pero?: ICSSPropValue
    /**
     * transform
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tf?: ICSSPropValue
    /**
     * transform-origin
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tfo?: ICSSPropValue
    /**
     * transform-style
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tfs?: ICSSPropValue
    /**
     * transition
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tr?: ICSSPropValue
    /**
     * transition-delay
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trD?: ICSSPropValue
    /**
     * transition-duration
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trd?: ICSSPropValue
    /**
     * transition-property
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trp?: ICSSPropValue
    /**
     * transition-timing-function
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trt?: ICSSPropValue
    /**
     * flex-direction
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fd?: ICSSPropValue
    /**
     * flex-wrap
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fw?: ICSSPropValue
    /**
     * flex-basis
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fb?: ICSSPropValue
    /**
     * flex-flow
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ff?: ICSSPropValue
    /**
     * flex-grow
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fg?: ICSSPropValue
    /**
     * flex-shrink
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fs?: ICSSPropValue
    /**
     * align-items
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ai?: ICSSPropValue
    /**
     * align-content
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ac?: ICSSPropValue
    /**
     * justify-items
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ji?: ICSSPropValue
    /**
     * justify-content
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    jc?: ICSSPropValue
    /**
     * align-self
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aS?: ICSSPropValue
    /**
     * justify-self
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    jS?: ICSSPropValue
    /**
     * font
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ft?: ICSSPropValue
    /**
     * font-family
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftf?: ICSSPropValue
    /**
     * font-kerning
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftk?: ICSSPropValue
    /**
     * font-size
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fts?: ICSSPropValue
    /**
     * font-stretch
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftStretch?: ICSSPropValue
    /**
     * font-style
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftStyle?: ICSSPropValue
    /**
     * font-variant
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftv?: ICSSPropValue
    /**
     * font-weight
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftw?: ICSSPropValue
    /**
     * letter-spacing
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ls?: ICSSPropValue
    /**
     * line-height
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    lh?: ICSSPropValue
    /**
     * text-align
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ta?: ICSSPropValue
    /**
     * text-decoration
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    td?: ICSSPropValue
    /**
     * text-indent
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ti?: ICSSPropValue
    /**
     * text-overflow
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    to?: ICSSPropValue
    /**
     * text-shadow
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ts?: ICSSPropValue
    /**
     * text-transform
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tt?: ICSSPropValue
    /**
     * vertical-align
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    va?: ICSSPropValue
    /**
     * white-space
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ws?: ICSSPropValue
    /**
     * word-break
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    wb?: ICSSPropValue
    /**
     * word-spacing
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    wS?: ICSSPropValue
    /**
     * word-wrap
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ww?: ICSSPropValue
    /**
     * list-style
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listS?: ICSSPropValue
    /**
     * list-style-image
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listSI?: ICSSPropValue
    /**
     * list-style-position
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listSP?: ICSSPropValue
    /**
     * list-style-type
     * @type ICSSPropValue = (v: string, o: T) => string
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listST?: ICSSPropValue
    /**
     * margin
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    m?: ICSSPropValue
    /**
     * margin-top
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mt?: ICSSPropValue
    /**
     * margin-right
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mr?: ICSSPropValue
    /**
     * margin-bottom
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mb?: ICSSPropValue
    /**
     * margin-left
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ml?: ICSSPropValue
    /**
     * padding
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    p?: ICSSPropValue
    /**
     * padding-top
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pt?: ICSSPropValue
    /**
     * padding-right
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pr?: ICSSPropValue
    /**
     * padding-bottom
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pb?: ICSSPropValue
    /**
     * padding-left
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pl?: ICSSPropValue
    /**
     * background
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bg?: ICSSPropValue
    /**
     * background-image
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgi?: ICSSPropValue
    /**
     * background-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgc?: ICSSPropValue
    /**
     * background-size
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgs?: ICSSPropValue
    /**
     * background-repeat
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgr?: ICSSPropValue
    /**
     * background-position
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgp?: ICSSPropValue
    /**
     * background-attachment
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bga?: ICSSPropValue
    /**
     * background-blend-mode
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgbm?: ICSSPropValue
    /**
     * background-clip
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgC?: ICSSPropValue
    /**
     * background-origin
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgo?: ICSSPropValue
    /**
     * width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    w?: ICSSPropValue
    /**
     * height
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    h?: ICSSPropValue
    /**
     * min-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    minW?: ICSSPropValue
    /**
     * min-height
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    minH?: ICSSPropValue
    /**
     * max-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    maxW?: ICSSPropValue
    /**
     * max-height
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    maxH?: ICSSPropValue
    /**
     * grid
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    g?: ICSSPropValue
    /**
     * grid-area
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ga?: ICSSPropValue
    /**
     * grid-auto-columns
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gac?: ICSSPropValue
    /**
     * grid-auto-flow
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gaf?: ICSSPropValue
    /**
     * grid-auto-row
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gar?: ICSSPropValue
    /**
     * grid-column
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gc?: ICSSPropValue
    /**
     * grid-column-end
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gce?: ICSSPropValue
    /**
     * grid-column-gap
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gcg?: ICSSPropValue
    /**
     * grid-column-start
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gcs?: ICSSPropValue
    /**
     * grid-gap
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gg?: ICSSPropValue
    /**
     * grid-row
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gr?: ICSSPropValue
    /**
     * grid-row-end
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gre?: ICSSPropValue
    /**
     * grid-row-gap
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    grg?: ICSSPropValue
    /**
     * grid-row-start
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    grs?: ICSSPropValue
    /**
     * grid-template
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gt?: ICSSPropValue
    /**
     * grid-template-areas
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gta?: ICSSPropValue
    /**
     * grid-template-columns
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gtc?: ICSSPropValue
    /**
     * grid-template-rows
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gtr?: ICSSPropValue
    /**
     * border
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    b?: ICSSPropValue
    /**
     * border-bottom
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bb?: ICSSPropValue
    /**
     * border-bottom-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbc?: ICSSPropValue
    /**
     * border-bottom-left-radius
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bblr?: ICSSPropValue
    /**
     * border-bottom-right-radius
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbrr?: ICSSPropValue
    /**
     * border-bottom-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbs?: ICSSPropValue
    /**
     * border-bottom-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbw?: ICSSPropValue
    /**
     * border-collapse
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bC?: ICSSPropValue
    /**
     * border-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bc?: ICSSPropValue
    /**
     * border-image
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bi?: ICSSPropValue
    /**
     * border-image-outset
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bio?: ICSSPropValue
    /**
     * border-image-repeat
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bir?: ICSSPropValue
    /**
     * border-image-slice
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bis?: ICSSPropValue
    /**
     * border-image-source
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    biSrc?: ICSSPropValue
    /**
     * border-image-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    biw?: ICSSPropValue
    /**
     * border-left
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bl?: ICSSPropValue
    /**
     * border-left-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    blc?: ICSSPropValue
    /**
     * border-left-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bls?: ICSSPropValue
    /**
     * border-left-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    blw?: ICSSPropValue
    /**
     * border-radius
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    r?: ICSSPropValue
    /**
     * border-right
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    br?: ICSSPropValue
    /**
     * border-right-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brc?: ICSSPropValue
    /**
     * border-right-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brs?: ICSSPropValue
    /**
     * border-right-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brw?: ICSSPropValue
    /**
     * border-spacing
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bs?: ICSSPropValue
    /**
     * border-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bS?: ICSSPropValue
    /**
     * border-top
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bt?: ICSSPropValue
    /**
     * border-top-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btc?: ICSSPropValue
    /**
     * border-top-left-radius
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btlr?: ICSSPropValue
    /**
     * border-top-right-radius
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btrr?: ICSSPropValue
    /**
     * border-top-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bts?: ICSSPropValue
    /**
     * border-top-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btw?: ICSSPropValue
    /**
     * border-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bw?: ICSSPropValue
    /**
     * clip
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clip?: ICSSPropValue
    /**
     * clipPath
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clipPath?: ICSSPropValue
    /**
     * display
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    d?: ICSSPropValue
    /**
     * position
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pos?: ICSSPropValue
    /**
     * top
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    T?: ICSSPropValue
    /**
     * right
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    R?: ICSSPropValue
    /**
     * bottom
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    B?: ICSSPropValue
    /**
     * left
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    L?: ICSSPropValue
    /**
     * z-index
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    z?: ICSSPropValue
    /**
     * color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    c?: ICSSPropValue
    /**
     * overflow
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    o?: ICSSPropValue
    /**
     * overflow-x
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ox?: ICSSPropValue
    /**
     * overflow-y
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    oy?: ICSSPropValue
    /**
     * float
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fl?: ICSSPropValue
    /**
     * clear
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clr?: ICSSPropValue
    /**
     * visibility
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    v?: ICSSPropValue
    /**
     * columns
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    col?: ICSSPropValue
    /**
     * column-count
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cc?: ICSSPropValue
    /**
     * column-fill
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cf?: ICSSPropValue
    /**
     * column-gap
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cg?: ICSSPropValue
    /**
     * column-rule
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cr?: ICSSPropValue
    /**
     * column-rule-color
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crc?: ICSSPropValue
    /**
     * column-rule-style
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crs?: ICSSPropValue
    /**
     * column-rule-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crw?: ICSSPropValue
    /**
     * column-span
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cs?: ICSSPropValue
    /**
     * column-width
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cw?: ICSSPropValue
    /**
     * page-break-after
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pba?: ICSSPropValue
    /**
     * page-break-before
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pbb?: ICSSPropValue
    /**
     * page-break-inside
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pbi?: ICSSPropValue
    /**
     * box-shadow
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    shadow?: ICSSPropValue
    /**
     * box-sizing
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    sizing?: ICSSPropValue
    /**
     * object-fit
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    of?: ICSSPropValue
    /**
     * object-position
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    oP?: ICSSPropValue
    /**
     * opacity
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    op?: ICSSPropValue
    /**
     * order
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    or?: ICSSPropValue
    /**
     * outline
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ol?: ICSSPropValue
    /**
     * mix-blend-mode
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mbm?: ICSSPropValue
    /**
     * content
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ct?: ICSSPropValue
    /**
     * cursor
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cur?: ICSSPropValue
    /**
     * pointer-events
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pe?: ICSSPropValue
    /**
     * filter
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fil?: ICSSPropValue
    /**
     * scroll-behavior
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    sb?: ICSSPropValue
    /**
     * user-select
     * @type ICSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    us?: ICSSPropValue
    styleText?: ICSSPropValue
    mid?: ICSSPropValue
    hScroll?: ICSSPropValue
    ps?: ICSSSimplePropValue
    mq?: ICSSSimplePropValue
    theme?: ICSSPropValue
}
