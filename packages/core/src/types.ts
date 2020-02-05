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
    valueTransformer: (n: number) => string
}

export default interface ICCSSProps {
    /**
     * animation
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     * @description
     * The flex-wrap property specifies whether the flexible items should wrap or not.
     *
     * Note: If the elements are not flexible items, the flex-wrap property has no effect.
     */
    a?: TCSSPropValue
    /**
     * animation-delay
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ad?: TCSSPropValue
    /**
     * animation-direction
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aDir?: TCSSPropValue
    /**
     * animation-duration
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aD?: TCSSPropValue
    /**
     * animation-fill-mode
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    afm?: TCSSPropValue
    /**
     * animation-iteration-count
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aic?: TCSSPropValue
    /**
     * animation-name
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    an?: TCSSPropValue
    /**
     * animation-play-state
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aps?: TCSSPropValue
    /**
     * animation-timing-function
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ats?: TCSSPropValue
    /**
     * backface-visibility
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bv?: TCSSPropValue
    /**
     * perspective
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    per?: TCSSPropValue
    /**
     * perspective-origin
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pero?: TCSSPropValue
    /**
     * transform
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tf?: TCSSPropValue
    /**
     * transform-origin
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tfo?: TCSSPropValue
    /**
     * transform-style
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tfs?: TCSSPropValue
    /**
     * transition
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tr?: TCSSPropValue
    /**
     * transition-delay
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trD?: TCSSPropValue
    /**
     * transition-duration
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trd?: TCSSPropValue
    /**
     * transition-property
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trp?: TCSSPropValue
    /**
     * transition-timing-function
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    trt?: TCSSPropValue
    /**
     * flex-direction
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fd?: TCSSPropValue
    /**
     * flex-wrap
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fw?: TCSSPropValue
    /**
     * flex-basis
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fb?: TCSSPropValue
    /**
     * flex-flow
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ff?: TCSSPropValue
    /**
     * flex-grow
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fg?: TCSSPropValue
    /**
     * flex-shrink
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fs?: TCSSPropValue
    /**
     * align-items
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ai?: TCSSPropValue
    /**
     * align-content
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ac?: TCSSPropValue
    /**
     * justify-items
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ji?: TCSSPropValue
    /**
     * justify-content
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    jc?: TCSSPropValue
    /**
     * align-self
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    aS?: TCSSPropValue
    /**
     * justify-self
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    jS?: TCSSPropValue
    /**
     * font
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ft?: TCSSPropValue
    /**
     * font-family
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftf?: TCSSPropValue
    /**
     * font-kerning
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftk?: TCSSPropValue
    /**
     * font-size
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fts?: TCSSPropValue
    /**
     * font-stretch
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftStretch?: TCSSPropValue
    /**
     * font-style
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftStyle?: TCSSPropValue
    /**
     * font-variant
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftv?: TCSSPropValue
    /**
     * font-weight
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ftw?: TCSSPropValue
    /**
     * letter-spacing
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ls?: TCSSPropValue
    /**
     * line-height
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    lh?: TCSSPropValue
    /**
     * text-align
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ta?: TCSSPropValue
    /**
     * text-decoration
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    td?: TCSSPropValue
    /**
     * text-indent
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ti?: TCSSPropValue
    /**
     * text-overflow
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    to?: TCSSPropValue
    /**
     * text-shadow
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ts?: TCSSPropValue
    /**
     * text-transform
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    tt?: TCSSPropValue
    /**
     * vertical-align
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    va?: TCSSPropValue
    /**
     * white-space
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ws?: TCSSPropValue
    /**
     * word-break
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    wb?: TCSSPropValue
    /**
     * word-spacing
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    wS?: TCSSPropValue
    /**
     * word-wrap
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ww?: TCSSPropValue
    /**
     * list-style
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listS?: TCSSPropValue
    /**
     * list-style-image
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listSI?: TCSSPropValue
    /**
     * list-style-position
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listSP?: TCSSPropValue
    /**
     * list-style-type
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    listST?: TCSSPropValue
    /**
     * margin
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    m?: TCSSPropValue
    /**
     * margin-top
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mt?: TCSSPropValue
    /**
     * margin-right
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mr?: TCSSPropValue
    /**
     * margin-bottom
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mb?: TCSSPropValue
    /**
     * margin-left
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ml?: TCSSPropValue
    /**
     * padding
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    p?: TCSSPropValue
    /**
     * padding-top
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pt?: TCSSPropValue
    /**
     * padding-right
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pr?: TCSSPropValue
    /**
     * padding-bottom
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pb?: TCSSPropValue
    /**
     * padding-left
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pl?: TCSSPropValue
    /**
     * background
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bg?: TCSSPropValue
    /**
     * background-image
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgi?: TCSSPropValue
    /**
     * background-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgc?: TCSSPropValue
    /**
     * background-size
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgs?: TCSSPropValue
    /**
     * background-repeat
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgr?: TCSSPropValue
    /**
     * background-position
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgp?: TCSSPropValue
    /**
     * background-attachment
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bga?: TCSSPropValue
    /**
     * background-blend-mode
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgbm?: TCSSPropValue
    /**
     * background-clip
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgC?: TCSSPropValue
    /**
     * background-origin
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bgo?: TCSSPropValue
    /**
     * width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    w?: TCSSPropValue
    /**
     * height
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    h?: TCSSPropValue
    /**
     * min-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    minW?: TCSSPropValue
    /**
     * min-height
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    minH?: TCSSPropValue
    /**
     * max-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    maxW?: TCSSPropValue
    /**
     * max-height
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    maxH?: TCSSPropValue
    /**
     * grid
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    g?: TCSSPropValue
    /**
     * grid-area
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ga?: TCSSPropValue
    /**
     * grid-auto-columns
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gac?: TCSSPropValue
    /**
     * grid-auto-flow
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gaf?: TCSSPropValue
    /**
     * grid-auto-row
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gar?: TCSSPropValue
    /**
     * grid-column
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gc?: TCSSPropValue
    /**
     * grid-column-end
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gce?: TCSSPropValue
    /**
     * grid-column-gap
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gcg?: TCSSPropValue
    /**
     * grid-column-start
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gcs?: TCSSPropValue
    /**
     * grid-gap
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gg?: TCSSPropValue
    /**
     * grid-row
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gr?: TCSSPropValue
    /**
     * grid-row-end
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gre?: TCSSPropValue
    /**
     * grid-row-gap
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    grg?: TCSSPropValue
    /**
     * grid-row-start
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    grs?: TCSSPropValue
    /**
     * grid-template
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gt?: TCSSPropValue
    /**
     * grid-template-areas
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gta?: TCSSPropValue
    /**
     * grid-template-columns
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gtc?: TCSSPropValue
    /**
     * grid-template-rows
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    gtr?: TCSSPropValue
    /**
     * border
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    b?: TCSSPropValue
    /**
     * border-bottom
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bb?: TCSSPropValue
    /**
     * border-bottom-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbc?: TCSSPropValue
    /**
     * border-bottom-left-radius
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bblr?: TCSSPropValue
    /**
     * border-bottom-right-radius
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbrr?: TCSSPropValue
    /**
     * border-bottom-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbs?: TCSSPropValue
    /**
     * border-bottom-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bbw?: TCSSPropValue
    /**
     * border-collapse
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bC?: TCSSPropValue
    /**
     * border-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bc?: TCSSPropValue
    /**
     * border-image
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bi?: TCSSPropValue
    /**
     * border-image-outset
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bio?: TCSSPropValue
    /**
     * border-image-repeat
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bir?: TCSSPropValue
    /**
     * border-image-slice
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bis?: TCSSPropValue
    /**
     * border-image-source
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    biSrc?: TCSSPropValue
    /**
     * border-image-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    biw?: TCSSPropValue
    /**
     * border-left
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bl?: TCSSPropValue
    /**
     * border-left-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    blc?: TCSSPropValue
    /**
     * border-left-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bls?: TCSSPropValue
    /**
     * border-left-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    blw?: TCSSPropValue
    /**
     * border-radius
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    r?: TCSSPropValue
    /**
     * border-right
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    br?: TCSSPropValue
    /**
     * border-right-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brc?: TCSSPropValue
    /**
     * border-right-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brs?: TCSSPropValue
    /**
     * border-right-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    brw?: TCSSPropValue
    /**
     * border-spacing
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bs?: TCSSPropValue
    /**
     * border-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bS?: TCSSPropValue
    /**
     * border-top
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bt?: TCSSPropValue
    /**
     * border-top-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btc?: TCSSPropValue
    /**
     * border-top-left-radius
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btlr?: TCSSPropValue
    /**
     * border-top-right-radius
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btrr?: TCSSPropValue
    /**
     * border-top-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bts?: TCSSPropValue
    /**
     * border-top-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    btw?: TCSSPropValue
    /**
     * border-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    bw?: TCSSPropValue
    /**
     * clip
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clip?: TCSSPropValue
    /**
     * clipPath
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clipPath?: TCSSPropValue
    /**
     * display
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    d?: TCSSPropValue
    /**
     * position
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pos?: TCSSPropValue
    /**
     * top
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    T?: TCSSPropValue
    /**
     * right
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    R?: TCSSPropValue
    /**
     * bottom
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    B?: TCSSPropValue
    /**
     * left
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    L?: TCSSPropValue
    /**
     * z-index
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    z?: TCSSPropValue
    /**
     * color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    c?: TCSSPropValue
    /**
     * overflow
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    o?: TCSSPropValue
    /**
     * overflow-x
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ox?: TCSSPropValue
    /**
     * overflow-y
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    oy?: TCSSPropValue
    /**
     * float
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fl?: TCSSPropValue
    /**
     * clear
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    clr?: TCSSPropValue
    /**
     * visibility
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    v?: TCSSPropValue
    /**
     * columns
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    col?: TCSSPropValue
    /**
     * column-count
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cc?: TCSSPropValue
    /**
     * column-fill
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cf?: TCSSPropValue
    /**
     * column-gap
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cg?: TCSSPropValue
    /**
     * column-rule
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cr?: TCSSPropValue
    /**
     * column-rule-color
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crc?: TCSSPropValue
    /**
     * column-rule-style
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crs?: TCSSPropValue
    /**
     * column-rule-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    crw?: TCSSPropValue
    /**
     * column-span
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cs?: TCSSPropValue
    /**
     * column-width
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cw?: TCSSPropValue
    /**
     * page-break-after
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pba?: TCSSPropValue
    /**
     * page-break-before
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pbb?: TCSSPropValue
    /**
     * page-break-inside
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pbi?: TCSSPropValue
    /**
     * box-shadow
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    shadow?: TCSSPropValue
    /**
     * box-sizing
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    sizing?: TCSSPropValue
    /**
     * object-fit
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    of?: TCSSPropValue
    /**
     * object-position
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    oP?: TCSSPropValue
    /**
     * opacity
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    op?: TCSSPropValue
    /**
     * order
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    or?: TCSSPropValue
    /**
     * outline
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ol?: TCSSPropValue
    /**
     * mix-blend-mode
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    mbm?: TCSSPropValue
    /**
     * content
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    ct?: TCSSPropValue
    /**
     * cursor
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    cur?: TCSSPropValue
    /**
     * pointer-events
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    pe?: TCSSPropValue
    /**
     * filter
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    fil?: TCSSPropValue
    /**
     * scroll-behavior
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    sb?: TCSSPropValue
    /**
     * user-select
     * @type TCSSPropValue (<T>(v: string, o: T) => string)
     * @example
     * ```js
     * // TO BE DEFINED
     * ```
     */
    us?: TCSSSimplePropValue
    styleText?: (v: string) => string
    theme?: TCSSSimplePropValue
    child?: TCSSSimplePropValue
}
