import { pipe, mapValue, parseMultipart, parseSingle, evaluateCSSProp, noop } from './parsers'
import { mid, hScroll, ps, mq } from './customProps'

/* develblock:start */
const validateTime = (n, v) =>
    v &&
    !Number.isNaN(v) &&
    !v.startsWith('var') &&
    console.warn(`'${n}' with value '${v}' is a number. You didn't specify any unit like 's' or 'ms'.`)

const validatePureNumber = (n, v) =>
    v &&
    Number.isNaN(v) &&
    console.warn(`'${n}' with value '${v}' is a not number. You should only use plain number without unit here.`)
/* develblock:end */

const props = {
    // Animation + 3D
    a: v => evaluateCSSProp('animation', v),
    ad: v =>
        evaluateCSSProp(
            'animation-delay',
            v,
            mapValue,
            /* develblock:start */
            validateTime
            /* develblock:end */
        ),
    aDir: v => evaluateCSSProp('animation-direction', v, mapValue),
    aD: v =>
        evaluateCSSProp(
            'animation-duration',
            v,
            mapValue,
            /* develblock:start */
            validateTime
            /* develblock:end */
        ),
    afm: v => evaluateCSSProp('animation-fill-mode', v, mapValue),
    aic: v => evaluateCSSProp('animation-iteration-count', v),
    an: v => evaluateCSSProp('animation-name', v),
    aps: v => evaluateCSSProp('animation-play-state', v, mapValue),
    ats: v => evaluateCSSProp('animation-timing-function', v, mapValue),
    bv: v => evaluateCSSProp('backface-visibility', v, mapValue),
    per: v => evaluateCSSProp('perspective', v),
    pero: v => evaluateCSSProp('perspective-origin', v),
    tf: v => evaluateCSSProp('transform', v),
    tfo: v => evaluateCSSProp('transform-origin', v),
    tfs: v => evaluateCSSProp('transform-style', v),
    tr: v => evaluateCSSProp('transition', v, mapValue),
    trD: v =>
        evaluateCSSProp(
            'transition-delay',
            v,
            mapValue,
            /* develblock:start */
            validateTime
            /* develblock:end */
        ),
    trd: v =>
        evaluateCSSProp(
            'transition-duration',
            v,
            mapValue,
            /* develblock:start */
            validateTime
            /* develblock:end */
        ),
    trp: v => evaluateCSSProp('transition-property', v),
    trt: v => evaluateCSSProp('transition-timing-function', v),

    // Flex
    fd: v => evaluateCSSProp('flex-direction', v, mapValue),
    fw: v => evaluateCSSProp('flex-wrap', v, mapValue),
    fb: v => evaluateCSSProp('flex-basis', v, parseSingle),
    ff: v => evaluateCSSProp('flex-flow', v),
    fg: v => evaluateCSSProp('flex-grow', v),
    fs: v => evaluateCSSProp('flex-shrink', v),
    ai: v => evaluateCSSProp('align-items', v, mapValue),
    ac: v => evaluateCSSProp('align-content', v, mapValue),
    ji: v => evaluateCSSProp('justify-items', v, mapValue),
    jc: v => evaluateCSSProp('justify-content', v, mapValue),
    aS: v => evaluateCSSProp('align-self', v, mapValue),
    jS: v => evaluateCSSProp('justify-self', v, mapValue),

    // Font + text related
    ft: v => evaluateCSSProp('font', v),
    ftf: v => evaluateCSSProp('font-family', v, mapValue),
    ftk: v => evaluateCSSProp('font-kerning', v),
    fts: v => evaluateCSSProp('font-size', v, pipe(mapValue, parseSingle)),
    ftStretch: v => evaluateCSSProp('font-stretch', v, mapValue),
    ftStyle: v => evaluateCSSProp('font-style', v, mapValue),
    ftv: v => evaluateCSSProp('font-variant', v, mapValue),
    ftw: v => evaluateCSSProp('font-weight', v, mapValue),
    ls: v =>
        evaluateCSSProp(
            'letter-spacing',
            v,
            /* develblock:start */
            undefined,
            validatePureNumber
            /* develblock:end */
        ),
    lh: v =>
        evaluateCSSProp(
            'line-height',
            v,
            /* develblock:start */
            undefined,
            validatePureNumber
            /* develblock:end */
        ),

    ta: v => evaluateCSSProp('text-align', v, mapValue),
    td: v => evaluateCSSProp('text-decoration', v, mapValue),
    ti: v => evaluateCSSProp('text-indent', v, parseSingle),
    to: v => evaluateCSSProp('text-overflow', v, mapValue),
    ts: v => evaluateCSSProp('text-shadow', v),
    tt: v => evaluateCSSProp('text-transform', v, mapValue),

    va: v => evaluateCSSProp('vertical-align', v, mapValue),
    ws: v => evaluateCSSProp('white-space', v, mapValue),
    wb: v => evaluateCSSProp('word-break', v, mapValue),
    wS: v => evaluateCSSProp('word-spacing', v, parseSingle),
    ww: v => evaluateCSSProp('word-wrap', v, mapValue),

    // List
    listS: v => evaluateCSSProp('list-style', v, mapValue),
    listSI: v => evaluateCSSProp('list-style-image', v),
    listSP: v => evaluateCSSProp('list-style-position', v),
    listST: v => evaluateCSSProp('list-style-type', v, mapValue),

    // Margin
    m: v => evaluateCSSProp('margin', v, parseMultipart),
    mt: v => evaluateCSSProp('margin-top', v, parseMultipart),
    mr: v => evaluateCSSProp('margin-right', v, parseMultipart),
    mb: v => evaluateCSSProp('margin-bottom', v, parseMultipart),
    ml: v => evaluateCSSProp('margin-left', v, parseMultipart),

    // Padding
    p: v => evaluateCSSProp('padding', v, parseMultipart),
    pt: v => evaluateCSSProp('padding-top', v, parseMultipart),
    pr: v => evaluateCSSProp('padding-right', v, parseMultipart),
    pb: v => evaluateCSSProp('padding-bottom', v, parseMultipart),
    pl: v => evaluateCSSProp('padding-left', v, parseMultipart),

    // Background
    bg: v => evaluateCSSProp('background', v, mapValue),
    bgi: v => evaluateCSSProp('background-image', v, mapValue),
    bgc: v => evaluateCSSProp('background-color', v, mapValue),
    bgs: v => evaluateCSSProp('background-size', v, mapValue),
    bgr: v => evaluateCSSProp('background-repeat', v, mapValue),
    bgp: v => evaluateCSSProp('background-position', v, mapValue),
    bga: v => evaluateCSSProp('background-attachment', v, mapValue),
    bgbm: v => evaluateCSSProp('background-blend-mode', v, mapValue),
    bgC: v => evaluateCSSProp('background-clip', v, mapValue),
    bgo: v => evaluateCSSProp('background-origin', v, mapValue),

    // Dimension
    w: v => evaluateCSSProp('width', v, mapValue),
    h: v => evaluateCSSProp('height', v, mapValue),
    minW: v => evaluateCSSProp('min-width', v, pipe(mapValue, parseSingle)),
    minH: v => evaluateCSSProp('min-height', v, pipe(mapValue, parseSingle)),
    maxW: v => evaluateCSSProp('max-width', v, pipe(mapValue, parseSingle)),
    maxH: v => evaluateCSSProp('max-height', v, pipe(mapValue, parseSingle)),

    // Grid
    g: v => evaluateCSSProp('grid', v),
    ga: v => evaluateCSSProp('grid-area', v),
    gac: v => evaluateCSSProp('grid-auto-columns', v),
    gaf: v => evaluateCSSProp('grid-auto-flow', v),
    gar: v => evaluateCSSProp('grid-auto-row', v),
    gc: v => evaluateCSSProp('grid-column', v),
    gce: v => evaluateCSSProp('grid-column-end', v),
    gcg: v => evaluateCSSProp('grid-column-gap', v, parseMultipart),
    gcs: v => evaluateCSSProp('grid-column-start', v),
    gg: v => evaluateCSSProp('grid-gap', v, parseMultipart),
    gr: v => evaluateCSSProp('grid-row', v),
    gre: v => evaluateCSSProp('grid-row-end', v),
    grg: v => evaluateCSSProp('grid-row-gap', v, parseMultipart),
    grs: v => evaluateCSSProp('grid-row-start', v),
    gt: v => evaluateCSSProp('grid-template', v),
    gta: v => evaluateCSSProp('grid-template-areas', v),
    gtc: v => evaluateCSSProp('grid-template-columns', v, parseMultipart),
    gtr: v => evaluateCSSProp('grid-template-rows', v, parseMultipart),

    // Border
    b: v => evaluateCSSProp('border', v),
    bb: v => evaluateCSSProp('border-bottom', v),
    bbc: v => evaluateCSSProp('border-bottom-color', v),
    bblr: v => evaluateCSSProp('border-bottom-left-radius', v, parseSingle),
    bbrr: v => evaluateCSSProp('border-bottom-right-radius', v, parseSingle),
    bbs: v => evaluateCSSProp('border-bottom-style', v),
    bbw: v => evaluateCSSProp('border-bottom-width', v, parseSingle),
    bC: v => evaluateCSSProp('border-collapse', v),
    bc: v => evaluateCSSProp('border-color', v, mapValue),
    bi: v => evaluateCSSProp('border-image', v, mapValue),
    bio: v => evaluateCSSProp('border-image-outset', v),
    bir: v => evaluateCSSProp('border-image-repeat', v),
    bis: v => evaluateCSSProp('border-image-slice', v),
    biSrc: v => evaluateCSSProp('border-image-source', v),
    biw: v => evaluateCSSProp('border-image-width', v, parseSingle),
    bl: v => evaluateCSSProp('border-left', v),
    blc: v => evaluateCSSProp('border-left-color', v, mapValue),
    bls: v => evaluateCSSProp('border-left-style', v),
    blw: v => evaluateCSSProp('border-left-width', v),
    r: v => evaluateCSSProp('border-radius', v, pipe(mapValue, parseSingle)),
    br: v => evaluateCSSProp('border-right', v),
    brc: v => evaluateCSSProp('border-right-color', v, mapValue),
    brs: v => evaluateCSSProp('border-right-style', v),
    brw: v => evaluateCSSProp('border-right-width', v, parseSingle),
    bs: v => evaluateCSSProp('border-spacing', v),
    bS: v => evaluateCSSProp('border-style', v),
    bt: v => evaluateCSSProp('border-top', v),
    btc: v => evaluateCSSProp('border-top-color', v, mapValue),
    btlr: v => evaluateCSSProp('border-top-left-radius', v, pipe(mapValue, parseSingle)),
    btrr: v => evaluateCSSProp('border-top-right-radius', v, pipe(mapValue, parseSingle)),
    bts: v => evaluateCSSProp('border-top-style', v),
    btw: v => evaluateCSSProp('border-top-width', v, parseSingle),
    bw: v => evaluateCSSProp('border-width', v, parseSingle),

    // Clip
    clip: v => evaluateCSSProp('clip', v),
    clipPath: v => evaluateCSSProp('clipPath', v),

    // General
    d: v => evaluateCSSProp('display', v, mapValue),
    pos: v => evaluateCSSProp('position', v, mapValue),
    T: v => evaluateCSSProp('top', v, parseSingle),
    R: v => evaluateCSSProp('right', v, parseSingle),
    B: v => evaluateCSSProp('bottom', v, parseSingle),
    L: v => evaluateCSSProp('left', v, parseSingle),
    z: v => evaluateCSSProp('z-index', v),
    c: v => evaluateCSSProp('color', v, mapValue),
    o: v => evaluateCSSProp('overflow', v, mapValue),
    ox: v => evaluateCSSProp('overflow-x', v, mapValue),
    oy: v => evaluateCSSProp('overflow-y', v, mapValue),
    fl: v => evaluateCSSProp('float', v, mapValue),
    clr: v => evaluateCSSProp('clear', v, mapValue),
    v: v => evaluateCSSProp('visibility', v, mapValue),

    // Columns
    col: v => evaluateCSSProp('columns', v),
    cc: v => evaluateCSSProp('column-count', v),
    cf: v => evaluateCSSProp('column-fill', v),
    cg: v => evaluateCSSProp('column-gap', v, parseSingle),
    cr: v => evaluateCSSProp('column-rule', v),
    crc: v => evaluateCSSProp('column-rule-color', v, mapValue),
    crs: v => evaluateCSSProp('column-rule-style', v),
    crw: v => evaluateCSSProp('column-rule-width', v, parseSingle),
    cs: v => evaluateCSSProp('column-span', v),
    cw: v => evaluateCSSProp('column-width', v, parseSingle),
    pba: v => evaluateCSSProp('page-break-after', v),
    pbb: v => evaluateCSSProp('page-break-before', v),
    pbi: v => evaluateCSSProp('page-break-inside', v),

    // Box
    shadow: v => evaluateCSSProp('box-shadow', v, mapValue),
    sizing: v => evaluateCSSProp('box-sizing', v),

    // Misc
    of: v => evaluateCSSProp('object-fit', v, mapValue),
    oP: v => evaluateCSSProp('object-position', v),
    op: v => evaluateCSSProp('opacity', v, mapValue),
    or: v => evaluateCSSProp('order', v),
    ol: v => evaluateCSSProp('outline', v),
    mbm: v => evaluateCSSProp('mix-blend-mode', v, mapValue),
    ct: v => evaluateCSSProp('content', v),
    cur: v => evaluateCSSProp('cursor', v, mapValue),
    pe: v => evaluateCSSProp('pointer-events', v, mapValue),
    fil: v => evaluateCSSProp('filter', v),
    sb: v => evaluateCSSProp('scroll-behavior', v, mapValue),
    us: v => evaluateCSSProp('user-select', v, mapValue),

    // Customs
    styleText: i => i,
    mid,
    hScroll,
    ps,
    mq,

    // styled's theme prop, don't do anything with it
    theme: noop
}

export const setProps = o => Object.assign(props, o)

export default props
