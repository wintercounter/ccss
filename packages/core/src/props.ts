import { pipe, mapValue, parseArray, parseSingle, toCSSRule, child, parsePseudo } from './parsers'
import ICCSSProps from './types'
import { pseudoMap } from './maps'

const props: ICCSSProps = {
    // Animation + 3D
    a: toCSSRule('animation'),
    ad: pipe(mapValue, toCSSRule('animation-delay')),
    aDir: pipe(mapValue, toCSSRule('animation-direction')),
    aD: pipe(mapValue, toCSSRule('animation-duration')),
    afm: pipe(mapValue, toCSSRule('animation-fill-mode')),
    aic: toCSSRule('animation-iteration-count'),
    an: toCSSRule('animation-name'),
    aps: pipe(mapValue, toCSSRule('animation-play-state')),
    ats: pipe(mapValue, toCSSRule('animation-timing-function')),
    bv: pipe(mapValue, toCSSRule('backface-visibility')),
    per: toCSSRule('perspective'),
    pero: toCSSRule('perspective-origin'),
    tf: toCSSRule('transform'),
    tfo: toCSSRule('transform-origin'),
    tfs: toCSSRule('transform-style'),
    tr: pipe(mapValue, toCSSRule('transition')),
    trD: pipe(mapValue, toCSSRule('transition-delay')),
    trd: pipe(mapValue, toCSSRule('transition-duration')),
    trp: toCSSRule('transition-property'),
    trt: toCSSRule('transition-timing-function'),

    // Flex
    fd: pipe(mapValue, toCSSRule('flex-direction')),
    fw: pipe(mapValue, toCSSRule('flex-wrap')),
    fb: pipe(parseSingle, toCSSRule('flex-basis')),
    ff: toCSSRule('flex-flow'),
    fg: toCSSRule('flex-grow'),
    fs: toCSSRule('flex-shrink'),
    ai: pipe(mapValue, toCSSRule('align-items')),
    ac: pipe(mapValue, toCSSRule('align-content')),
    ji: pipe(mapValue, toCSSRule('justify-items')),
    jc: pipe(mapValue, toCSSRule('justify-content')),
    aS: pipe(mapValue, toCSSRule('align-self')),
    jS: pipe(mapValue, toCSSRule('justify-self')),

    // Font + text related
    ft: toCSSRule('font'),
    ftf: pipe(mapValue, toCSSRule('font-family')),
    ftk: toCSSRule('font-kerning'),
    fts: pipe(mapValue, parseSingle, toCSSRule('font-size')),
    ftStr: pipe(mapValue, toCSSRule('font-stretch')),
    ftSty: pipe(mapValue, toCSSRule('font-style')),
    ftv: pipe(mapValue, toCSSRule('font-variant')),
    ftw: pipe(mapValue, toCSSRule('font-weight')),
    ls: toCSSRule('letter-spacing'),
    lh: toCSSRule('line-height'),

    ta: pipe(mapValue, toCSSRule('text-align')),
    td: pipe(mapValue, toCSSRule('text-decoration')),
    ti: pipe(parseSingle, toCSSRule('text-indent')),
    to: pipe(mapValue, toCSSRule('text-overflow')),
    ts: toCSSRule('text-shadow'),
    tt: pipe(mapValue, toCSSRule('text-transform')),

    va: pipe(mapValue, toCSSRule('vertical-align')),
    ws: pipe(mapValue, toCSSRule('white-space')),
    wb: pipe(mapValue, toCSSRule('word-break')),
    wS: pipe(parseSingle, toCSSRule('word-spacing')),
    ww: pipe(mapValue, toCSSRule('word-wrap')),

    // List
    lstS: pipe(mapValue, toCSSRule('list-style')),
    lstSI: toCSSRule('list-style-image'),
    lstSP: toCSSRule('list-style-position'),
    lstST: pipe(mapValue, toCSSRule('list-style-type')),

    // Margin
    m: pipe(parseArray, toCSSRule('margin')),
    mt: pipe(parseSingle, toCSSRule('margin-top')),
    mr: pipe(parseSingle, toCSSRule('margin-right')),
    mb: pipe(parseSingle, toCSSRule('margin-bottom')),
    ml: pipe(parseSingle, toCSSRule('margin-left')),

    // Padding
    p: pipe(parseArray, toCSSRule('padding')),
    pt: pipe(parseSingle, toCSSRule('padding-top')),
    pr: pipe(parseSingle, toCSSRule('padding-right')),
    pb: pipe(parseSingle, toCSSRule('padding-bottom')),
    pl: pipe(parseSingle, toCSSRule('padding-left')),

    // Background
    bg: pipe(mapValue, toCSSRule('background')),
    bgi: pipe(mapValue, toCSSRule('background-image')),
    bgc: pipe(mapValue, toCSSRule('background-color')),
    bgs: pipe(mapValue, toCSSRule('background-size')),
    bgr: pipe(mapValue, toCSSRule('background-repeat')),
    bgp: pipe(mapValue, toCSSRule('background-position')),
    bga: pipe(mapValue, toCSSRule('background-attachment')),
    bgbm: pipe(mapValue, toCSSRule('background-blend-mode')),
    bgC: pipe(mapValue, toCSSRule('background-clip')),
    bgo: pipe(mapValue, toCSSRule('background-origin')),

    // Dimension
    w: pipe(mapValue, parseSingle, toCSSRule('width')),
    h: pipe(mapValue, parseSingle, toCSSRule('height')),
    minW: pipe(mapValue, parseSingle, toCSSRule('min-width')),
    minH: pipe(mapValue, parseSingle, toCSSRule('min-height')),
    maxW: pipe(mapValue, parseSingle, toCSSRule('max-width')),
    maxH: pipe(mapValue, parseSingle, toCSSRule('max-height')),

    // Grid
    g: toCSSRule('grid'),
    ga: toCSSRule('grid-area'),
    gac: toCSSRule('grid-auto-columns'),
    gaf: toCSSRule('grid-auto-flow'),
    gar: toCSSRule('grid-auto-rows'),
    gc: toCSSRule('grid-column'),
    gce: toCSSRule('grid-column-end'),
    gcg: pipe(parseArray, toCSSRule('grid-column-gap')),
    gcs: toCSSRule('grid-column-start'),
    gg: pipe(parseArray, toCSSRule('grid-gap')),
    gr: toCSSRule('grid-row'),
    gre: toCSSRule('grid-row-end'),
    grg: pipe(parseArray, toCSSRule('grid-row-gap')),
    grs: toCSSRule('grid-row-start'),
    gt: toCSSRule('grid-template'),
    gta: toCSSRule('grid-template-areas'),
    gtc: pipe(parseArray, toCSSRule('grid-template-columns')),
    gtr: pipe(parseArray, toCSSRule('grid-template-rows')),

    // Border
    b: toCSSRule('border'),
    bb: toCSSRule('border-bottom'),
    bbc: toCSSRule('border-bottom-color'),
    bblr: pipe(parseSingle, toCSSRule('border-bottom-left-radius')),
    bbrr: pipe(parseSingle, toCSSRule('border-bottom-right-radius')),
    bbs: toCSSRule('border-bottom-style'),
    bbw: pipe(parseSingle, toCSSRule('border-bottom-width')),
    bC: toCSSRule('border-collapse'),
    bc: pipe(mapValue, toCSSRule('border-color')),
    bi: pipe(mapValue, toCSSRule('border-image')),
    bio: toCSSRule('border-image-outset'),
    bir: toCSSRule('border-image-repeat'),
    bis: toCSSRule('border-image-slice'),
    biSrc: toCSSRule('border-image-source'),
    biw: pipe(parseSingle, toCSSRule('border-image-width')),
    bl: toCSSRule('border-left'),
    blc: pipe(mapValue, toCSSRule('border-left-color')),
    bls: toCSSRule('border-left-style'),
    blw: toCSSRule('border-left-width'),
    r: pipe(mapValue, parseSingle, toCSSRule('border-radius')),
    br: toCSSRule('border-right'),
    brc: pipe(mapValue, toCSSRule('border-right-color')),
    brs: toCSSRule('border-right-style'),
    brw: pipe(parseSingle, toCSSRule('border-right-width')),
    bs: toCSSRule('border-spacing'),
    bS: toCSSRule('border-style'),
    bt: toCSSRule('border-top'),
    btc: pipe(mapValue, toCSSRule('border-top-color')),
    btlr: pipe(mapValue, parseSingle, toCSSRule('border-top-left-radius')),
    btrr: pipe(mapValue, parseSingle, toCSSRule('border-top-right-radius')),
    bts: toCSSRule('border-top-style'),
    btw: pipe(parseSingle, toCSSRule('border-top-width')),
    bw: pipe(parseSingle, toCSSRule('border-width')),

    // Clip
    clip: toCSSRule('clip'),
    clipPath: toCSSRule('clip-path'),

    // General
    d: pipe(mapValue, toCSSRule('display')),
    pos: pipe(mapValue, toCSSRule('position')),
    T: pipe(parseSingle, toCSSRule('top')),
    R: pipe(parseSingle, toCSSRule('right')),
    B: pipe(parseSingle, toCSSRule('bottom')),
    L: pipe(parseSingle, toCSSRule('left')),
    z: toCSSRule('z-index'),
    c: pipe(mapValue, toCSSRule('color')),
    o: pipe(mapValue, toCSSRule('overflow')),
    ox: pipe(mapValue, toCSSRule('overflow-x')),
    oy: pipe(mapValue, toCSSRule('overflow-y')),
    fl: pipe(mapValue, toCSSRule('float')),
    clr: pipe(mapValue, toCSSRule('clear')),
    v: pipe(mapValue, toCSSRule('visibility')),

    // Columns
    col: toCSSRule('columns'),
    cc: toCSSRule('column-count'),
    cf: toCSSRule('column-fill'),
    cg: pipe(parseSingle, toCSSRule('column-gap')),
    cr: toCSSRule('column-rule'),
    crc: pipe(mapValue, toCSSRule('column-rule-color')),
    crs: toCSSRule('column-rule-style'),
    crw: pipe(parseSingle, toCSSRule('column-rule-width')),
    cs: toCSSRule('column-span'),
    cw: pipe(parseSingle, toCSSRule('column-width')),
    pba: toCSSRule('page-break-after'),
    pbb: toCSSRule('page-break-before'),
    pbi: toCSSRule('page-break-inside'),

    // Box
    shadow: pipe(mapValue, toCSSRule('box-shadow')),
    sizing: toCSSRule('box-sizing'),

    // Misc
    of: pipe(mapValue, toCSSRule('object-fit')),
    oP: toCSSRule('object-position'),
    op: pipe(mapValue, toCSSRule('opacity')),
    or: toCSSRule('order'),
    ol: toCSSRule('outline'),
    mbm: pipe(mapValue, toCSSRule('mix-blend-mode')),
    ct: toCSSRule('content'),
    cur: pipe(mapValue, toCSSRule('cursor')),
    pe: pipe(mapValue, toCSSRule('pointer-events')),
    fil: toCSSRule('filter'),
    sb: pipe(mapValue, toCSSRule('scroll-behavior')),
    us: pipe(mapValue, toCSSRule('user-select')),

    // Customs
    styleText: i => i,
    child
}

// Add pseudos
for (const k of Object.keys(pseudoMap)) {
    props[k] = parsePseudo
}

export const setProps = o => Object.assign(props, o)

export default props
