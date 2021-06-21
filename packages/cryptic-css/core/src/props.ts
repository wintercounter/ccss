import { Props } from 'transformed'
import { parseArray, child, parsePseudo, toCSSRule, self } from './parsers'

const getAligns = () => ({
    s: 'start',
    fs: 'flex-start',
    e: 'end',
    fe: 'flex-end',
    st: 'stretch',
    c: 'center',
    n: 'normal',
    sb: 'space-between',
    sa: 'space-around',
    se: 'space-evenly'
})

const getOverflows = () => ({
    // @ts-ignore
    [false]: 'hidden',
    h: 'hidden',
    // @ts-ignore
    [true]: 'visible',
    v: 'visible',
    s: 'scroll',
    a: 'auto'
})

const getTfoBgpPos = () => ({
    c: 'center',
    t: 'top',
    tr: 'top right',
    r: 'right',
    br: 'bottom right',
    b: 'bottom',
    bl: 'bottom left',
    l: 'left',
    tl: 'top left'
})

const getFalseNone = () => ({
    n: 'none',
    // @ts-ignore
    [false]: 'none'
})

const auto = () => ({
    a: 'auto'
})

// Minify and optimize
const toCSSRuleHandler = [toCSSRule]
const fromArrayToCSSRuleHandler = [parseArray, toCSSRule]
const pseudoHandler = [parsePseudo]
const nil = null
const htmlAttr = { htmlAttr: true }

const defaultProps = (): Props => [
    // SVG presentational attributes
    [['ab', 'alignment-baseline'], nil, toCSSRuleHandler, htmlAttr],
    [['bls', 'baseline-shift'], nil, toCSSRuleHandler, htmlAttr],
    [['cpr', 'clip-rule'], nil, toCSSRuleHandler, htmlAttr],
    [['cif', 'color-interpolation-filters'], nil, toCSSRuleHandler, htmlAttr],
    [['ci', 'color-interpolation'], nil, toCSSRuleHandler, htmlAttr],
    [['cpf', 'color-profile'], nil, toCSSRuleHandler, htmlAttr],
    [['crd', 'color-rendering'], nil, toCSSRuleHandler, htmlAttr],
    [['db', 'dominant-baseline'], nil, toCSSRuleHandler, htmlAttr],
    [['d'], nil, toCSSRuleHandler, htmlAttr],
    [['eb', 'enable-background'], nil, toCSSRuleHandler, htmlAttr],
    [['fo', 'fill-opacity'], nil, toCSSRuleHandler, htmlAttr],
    [['fr', 'fill-rule'], nil, toCSSRuleHandler, htmlAttr],
    [['fi', 'fill'], nil, toCSSRuleHandler, htmlAttr],
    [['fdc', 'flood-color'], nil, toCSSRuleHandler, htmlAttr],
    [['fdo', 'flood-opacity'], nil, toCSSRuleHandler, htmlAttr],
    [['fsa', 'font-size-adjust'], nil, toCSSRuleHandler, htmlAttr],
    [['goh', 'glyph-orientation-horizontal'], nil, toCSSRuleHandler, htmlAttr],
    [['ir', 'image-rendering'], nil, toCSSRuleHandler, htmlAttr],
    [['k', 'kerning'], nil, toCSSRuleHandler, htmlAttr],
    [['lc', 'lighting-color'], nil, toCSSRuleHandler, htmlAttr],
    [['me', 'marker-end'], nil, toCSSRuleHandler, htmlAttr],
    [['mm', 'marker-mid'], nil, toCSSRuleHandler, htmlAttr],
    [['ms', 'marker-start'], nil, toCSSRuleHandler, htmlAttr],
    [['msk', 'mask'], nil, toCSSRuleHandler, htmlAttr],
    [['sr', 'shape-rendering'], nil, toCSSRuleHandler, htmlAttr],
    [['sc', 'stop-color'], nil, toCSSRuleHandler, htmlAttr],
    [['sda', 'stroke-dasharray'], nil, toCSSRuleHandler, htmlAttr],
    [['sdo', 'stroke-dashoffset'], nil, toCSSRuleHandler, htmlAttr],
    [['slc', 'stroke-linecap'], nil, toCSSRuleHandler, htmlAttr],
    [['slj', 'stroke-linejoin'], nil, toCSSRuleHandler, htmlAttr],
    [['sml', 'stroke-miterlimit'], nil, toCSSRuleHandler, htmlAttr],
    [['sop', 'stroke-opacity'], nil, toCSSRuleHandler, htmlAttr],
    [['swt', 'stroke-width'], nil, toCSSRuleHandler, htmlAttr],
    [['st', 'stroke'], nil, toCSSRuleHandler, htmlAttr],
    [['txa', 'text-anchor'], nil, toCSSRuleHandler, htmlAttr],
    [['txr', 'text-rendering'], nil, toCSSRuleHandler, htmlAttr],
    [['ub', 'unicode-bidi'], nil, toCSSRuleHandler, htmlAttr],
    [['wm', 'writing-mode'], nil, toCSSRuleHandler, htmlAttr],

    // Animation + 3D
    [['a', 'animation'], nil, toCSSRuleHandler],
    [['ad', 'animation-delay'], nil, toCSSRuleHandler],
    [
        ['aDir', 'animation-direction'],
        {
            n: 'normal',
            r: 'reverse',
            a: 'alternate',
            ar: 'alternate-reverse'
        }
    ],
    [['aD', 'animation-duration'], nil, toCSSRuleHandler],
    [
        ['afm', 'animation-fill-mode'],
        {
            ...getFalseNone(),
            fwd: 'forwards',
            bwd: 'backwards',
            b: 'both'
        }
    ],
    [['aic', 'animation-iteration-count'], nil, toCSSRuleHandler],
    [['an', 'animation-name'], nil, toCSSRuleHandler],
    [
        ['aps', 'animation-play-state'],
        {
            p: 'paused',
            r: 'running'
        }
    ],
    [['ats', 'animation-timing-function'], nil, toCSSRuleHandler],
    [
        ['bv', 'backface-visibility'],
        {
            v: 'visible',
            h: 'hidden'
        }
    ],
    [['per', 'perspective'], nil, toCSSRuleHandler],
    [['pero', 'perspective-origin'], nil, toCSSRuleHandler],
    [['tf', 'transform'], nil, toCSSRuleHandler],
    [['tfo', 'transform-origin'], getTfoBgpPos(), toCSSRuleHandler],
    [['tfs', 'transform-style'], nil, toCSSRuleHandler],
    [['tr', 'transition'], nil, toCSSRuleHandler],
    [['trD', 'transition-delay'], nil, toCSSRuleHandler],
    [['trd', 'transition-duration'], nil, toCSSRuleHandler],
    [['trp', 'transition-property'], nil, toCSSRuleHandler],
    [['trt', 'transition-timing-function'], nil, toCSSRuleHandler],
    [['wc', 'will-change'], nil, toCSSRuleHandler],

    // Flex
    [['f', 'flex'], nil, toCSSRuleHandler],
    [
        ['fd', 'flex-direction'],
        {
            r: 'row',
            rr: 'row-reverse',
            c: 'column',
            cr: 'column-reverse'
        },
        toCSSRuleHandler
    ],
    [
        ['fw', 'flex-wrap'],
        {
            w: 'wrap'
        },
        toCSSRuleHandler
    ],
    [['fb', 'flex-basis'], nil, fromArrayToCSSRuleHandler],
    [['ff', 'flex-flow'], nil, toCSSRuleHandler],
    [['fg', 'flex-grow'], nil, toCSSRuleHandler],
    [['fs', 'flex-shrink'], nil, toCSSRuleHandler],
    [['ai', 'align-items'], getAligns(), toCSSRuleHandler],
    [['ac', 'align-content'], getAligns(), toCSSRuleHandler],
    [['ji', 'justify-items'], getAligns(), toCSSRuleHandler],
    [['jc', 'justify-content'], getAligns(), toCSSRuleHandler],
    [['aS', 'align-self'], getAligns(), toCSSRuleHandler],
    [['jS', 'justify-self'], getAligns(), toCSSRuleHandler],

    // Font + text related
    [['ft', 'font'], nil, toCSSRuleHandler],
    [['ftf', 'font-family'], nil, toCSSRuleHandler],
    [['ftk', 'font-kerning'], nil, toCSSRuleHandler],
    [['fts', 'font-size'], nil, fromArrayToCSSRuleHandler],
    [
        ['ftStr', 'font-stretch'],
        {
            uc: 'ultra-condensed',
            ec: 'extra-condensed',
            c: 'condensed',
            sc: 'semi-condensed',
            n: 'normal',
            se: 'semi-expanded',
            e: 'expanded',
            ee: 'extra-expanded',
            ue: 'ultra-expanded'
        },
        toCSSRuleHandler
    ],
    [
        ['ftSty', 'font-style'],
        {
            n: 'normal',
            i: 'italic',
            o: 'oblique'
        },
        toCSSRuleHandler
    ],
    [
        ['ftv', 'font-variant'],
        {
            n: 'normal',
            sc: 'small-caps'
        },
        toCSSRuleHandler
    ],
    [
        ['ftw', 'font-weight'],
        {
            n: 'normal',
            b: 'bold',
            br: 'bolder',
            l: 'lighter'
        },
        toCSSRuleHandler
    ],
    [['ls', 'letter-spacing'], nil, fromArrayToCSSRuleHandler],
    [['lh', 'line-height'], nil, toCSSRuleHandler],
    [
        ['ta', 'text-align'],
        {
            l: 'left',
            r: 'right',
            c: 'center',
            e: 'end',
            j: 'justify',
            re: 'revert',
            s: 'start',
            u: 'unset'
        },
        toCSSRuleHandler
    ],
    [
        ['td', 'text-decoration'],
        {
            ...getFalseNone(),
            u: 'underline',
            o: 'overline',
            t: 'line-through'
        },
        toCSSRuleHandler
    ],
    [['ti', 'text-indent'], nil, fromArrayToCSSRuleHandler],
    [
        ['to', 'text-overflow'],
        {
            c: 'clip',
            e: 'ellipsis'
        },
        toCSSRuleHandler
    ],
    [['ts', 'text-shadow'], nil, toCSSRuleHandler],
    [
        ['tt', 'text-transform'],
        {
            ...getFalseNone(),
            c: 'capitalize',
            u: 'uppercase',
            l: 'lowercase'
        },
        toCSSRuleHandler
    ],
    [
        ['va', 'vertical-align'],
        {
            b: 'baseline',
            sub: 'sub',
            sup: 'super',
            t: 'top',
            tt: 'text-top',
            m: 'middle',
            bot: 'bottom',
            tb: 'text-bottom'
        },
        toCSSRuleHandler
    ],
    [
        ['ws', 'white-space'],
        {
            n: 'normal',
            nw: 'nowrap',
            p: 'pre',
            pl: 'pre-line',
            pw: 'pre-wrap'
        },
        toCSSRuleHandler
    ],
    [
        ['wb', 'word-break'],
        {
            n: 'normal',
            ba: 'break-all',
            ka: 'keep-all',
            bw: 'break-word'
        },
        toCSSRuleHandler
    ],
    [['wS', 'word-spacing'], nil, fromArrayToCSSRuleHandler],
    [
        ['ww', 'word-wrap'],
        {
            n: 'normal',
            b: 'break-word'
        },
        toCSSRuleHandler
    ],

    // List
    [
        ['l', 'list-style'],
        {
            ...getFalseNone()
        },
        toCSSRuleHandler
    ],
    [['li', 'list-style-image'], nil, toCSSRuleHandler],
    [['lp', 'list-style-position'], nil, toCSSRuleHandler],
    [['lt', 'list-style-type'], nil, toCSSRuleHandler],

    // Margin
    [['m', 'margin'], nil, fromArrayToCSSRuleHandler],
    [['mT', 'margin-top'], nil, fromArrayToCSSRuleHandler],
    [['mR', 'margin-right'], nil, fromArrayToCSSRuleHandler],
    [['mB', 'margin-bottom'], nil, fromArrayToCSSRuleHandler],
    [['mL', 'margin-left'], nil, fromArrayToCSSRuleHandler],

    // Padding
    [['p', 'pad', 'padding'], nil, fromArrayToCSSRuleHandler],
    [['pT', 'pad-top', 'padding-top'], nil, fromArrayToCSSRuleHandler],
    [['pR', 'pad-right', 'padding-right'], nil, fromArrayToCSSRuleHandler],
    [['pB', 'pad-bottom', 'padding-bottom'], nil, fromArrayToCSSRuleHandler],
    [['pL', 'pad-left', 'padding-left'], nil, fromArrayToCSSRuleHandler],

    // Background
    [
        ['bg', 'background'],
        {
            t: 'transparent',
            n: 'none',
            // @ts-ignore
            [false]: 'none'
        },
        fromArrayToCSSRuleHandler
    ],
    [['bgi', 'background-image'], nil, toCSSRuleHandler],
    [
        ['bgc', 'background-color'],
        {
            t: 'transparent'
        },
        toCSSRuleHandler
    ],
    [
        ['bgs', 'background-size'],
        {
            a: 'auto',
            cr: 'cover',
            cn: 'contain'
        },
        fromArrayToCSSRuleHandler
    ],
    [
        ['bgr', 'background-repeat'],
        {
            // @ts-ignore
            [true]: 'repeat',
            x: 'repeat-x',
            y: 'repeat-y',
            // @ts-ignore
            [false]: 'no-repeat',
            n: 'no-repeat',
            s: 'space',
            r: 'round'
        },
        toCSSRuleHandler
    ],
    [['bgp', 'background-position'], getTfoBgpPos(), fromArrayToCSSRuleHandler],
    [
        ['bga', 'background-attachment'],
        {
            s: 'scroll',
            f: 'fixed',
            l: 'local'
        },
        toCSSRuleHandler
    ],
    [
        ['bgbm', 'background-blend-mode'],
        {
            n: 'normal',
            m: 'multiply',
            sc: 'screen',
            o: 'overlay',
            d: 'darken',
            li: 'lighten',
            cd: 'color-dodge',
            sa: 'saturation',
            c: 'color',
            lu: 'luminosity'
        },
        toCSSRuleHandler
    ],
    [['bgC', 'background-clip'], nil, fromArrayToCSSRuleHandler],
    [
        ['bgo', 'background-origin'],
        {
            b: 'border-box',
            p: 'padding-box',
            c: 'content-box'
        },
        toCSSRuleHandler
    ],
    [['bf', 'backdrop-filter'], nil, fromArrayToCSSRuleHandler],

    // Dimension
    [['w', 'width'], nil, fromArrayToCSSRuleHandler],
    [['h', 'height'], nil, fromArrayToCSSRuleHandler],
    [['minW', 'min-width'], nil, fromArrayToCSSRuleHandler],
    [['minH', 'min-height'], nil, fromArrayToCSSRuleHandler],
    [['maxW', 'max-width'], nil, fromArrayToCSSRuleHandler],
    [['maxH', 'max-height'], nil, fromArrayToCSSRuleHandler],

    // Grid
    [['g', 'grid'], nil, toCSSRuleHandler],
    [['ga', 'grid-area'], nil, toCSSRuleHandler],
    [['gac', 'grid-auto-columns'], nil, fromArrayToCSSRuleHandler],
    [['gaf', 'grid-auto-flow'], nil, toCSSRuleHandler],
    [['gar', 'grid-auto-rows'], nil, fromArrayToCSSRuleHandler],
    [['gc', 'grid-column'], nil, fromArrayToCSSRuleHandler],
    [['gce', 'grid-column-end'], nil, toCSSRuleHandler],
    [['gcg', 'grid-column-gap'], nil, fromArrayToCSSRuleHandler],
    [['gcs', 'grid-column-start'], nil, toCSSRuleHandler],
    [['gg', 'grid-gap'], nil, fromArrayToCSSRuleHandler],
    [['gr', 'grid-row'], nil, fromArrayToCSSRuleHandler],
    [['gre', 'grid-row-end'], nil, toCSSRuleHandler],
    [['grg', 'grid-row-gap'], nil, fromArrayToCSSRuleHandler],
    [['grs', 'grid-row-start'], nil, toCSSRuleHandler],
    [['gt', 'grid-template'], nil, toCSSRuleHandler],
    [['gta', 'grid-template-areas'], nil, toCSSRuleHandler],
    [['gtc', 'grid-template-columns'], auto(), fromArrayToCSSRuleHandler],
    [['gtr', 'grid-template-rows'], auto(), fromArrayToCSSRuleHandler],

    // Border
    [['b', 'border'], nil, fromArrayToCSSRuleHandler],
    [['bB', 'border-bottom'], nil, fromArrayToCSSRuleHandler],
    [['bBc', 'border-bottom-color'], nil, toCSSRuleHandler],
    [['bBlr', 'border-bottom-left-radius'], nil, fromArrayToCSSRuleHandler],
    [['bBrr', 'border-bottom-right-radius'], nil, fromArrayToCSSRuleHandler],
    [['bBs', 'border-bottom-style'], nil, toCSSRuleHandler],
    [['bBw', 'border-bottom-width'], nil, fromArrayToCSSRuleHandler],
    [['bC', 'border-collapse'], nil, toCSSRuleHandler],
    [['bc', 'border-color'], nil, toCSSRuleHandler],
    [['bi', 'border-image'], nil, toCSSRuleHandler],
    [['bio', 'border-image-outset'], nil, toCSSRuleHandler],
    [['bir', 'border-image-repeat'], nil, toCSSRuleHandler],
    [['bis', 'border-image-slice'], nil, toCSSRuleHandler],
    [['biSrc', 'border-image-source'], nil, toCSSRuleHandler],
    [['biw', 'border-image-width'], nil, fromArrayToCSSRuleHandler],
    [['bL', 'border-left'], nil, fromArrayToCSSRuleHandler],
    [['bLc', 'border-left-color'], nil, toCSSRuleHandler],
    [['bLs', 'border-left-style'], nil, toCSSRuleHandler],
    [['bLw', 'border-left-width'], nil, fromArrayToCSSRuleHandler],
    [['br', 'border-radius'], nil, fromArrayToCSSRuleHandler],
    [['bR', 'border-right'], nil, fromArrayToCSSRuleHandler],
    [['bRc', 'border-right-color'], nil, toCSSRuleHandler],
    [['bRs', 'border-right-style'], nil, toCSSRuleHandler],
    [['bRw', 'border-right-width'], nil, fromArrayToCSSRuleHandler],
    [['bs', 'border-spacing'], nil, fromArrayToCSSRuleHandler],
    [['bS', 'border-style'], nil, toCSSRuleHandler],
    [['bT', 'border-top'], nil, fromArrayToCSSRuleHandler],
    [['bTc', 'border-top-color'], nil, toCSSRuleHandler],
    [['bTlr', 'border-top-left-radius'], nil, fromArrayToCSSRuleHandler],
    [['bTrr', 'border-top-right-radius'], nil, fromArrayToCSSRuleHandler],
    [['bTs', 'border-top-style'], nil, toCSSRuleHandler],
    [['bTw', 'border-top-width'], nil, fromArrayToCSSRuleHandler],
    [['bw', 'border-width'], nil, fromArrayToCSSRuleHandler],

    // Clip
    [['clp', 'clip'], nil, fromArrayToCSSRuleHandler],
    [['clpp', 'clip-path'], nil, toCSSRuleHandler],

    // General
    [
        ['dp', 'display'],
        {
            ...getFalseNone(),
            i: 'inline',
            if: 'inline-flex',
            ib: 'inline-block',
            ig: 'inline-grid',
            b: 'block',
            f: 'flex',
            g: 'grid',
            t: 'table'
        },
        toCSSRuleHandler
    ],
    [
        ['P', 'position'],
        {
            a: 'absolute',
            f: 'fixed',
            r: 'relative',
            s: 'static',
            sy: 'sticky'
        },
        toCSSRuleHandler
    ],
    [['T', 'top'], nil, fromArrayToCSSRuleHandler],
    [['R', 'right'], nil, fromArrayToCSSRuleHandler],
    [['B', 'bottom'], nil, fromArrayToCSSRuleHandler],
    [['L', 'left'], nil, fromArrayToCSSRuleHandler],
    [['zi', 'z-index'], nil, toCSSRuleHandler],
    [['c', 'color'], nil, toCSSRuleHandler],
    [['o', 'overflow'], getOverflows(), toCSSRuleHandler],
    [['ox', 'overflow-x'], getOverflows(), toCSSRuleHandler],
    [['oy', 'overflow-y'], getOverflows(), toCSSRuleHandler],
    [
        ['oa', 'overflow-anchor'],
        {
            ...getFalseNone(),
            a: 'auto'
        },
        toCSSRuleHandler
    ],
    [
        ['ow', 'overflow-wrap'],
        {
            n: 'normal',
            bw: 'break-word',
            a: 'anywhere'
        },
        toCSSRuleHandler
    ],
    [
        ['fl', 'float'],
        {
            ...getFalseNone(),
            l: 'left',
            r: 'right'
        },
        toCSSRuleHandler
    ],
    [
        ['clr', 'clear'],
        {
            l: 'left',
            r: 'right',
            // @ts-ignore
            [true]: 'both',
            b: 'both'
        },
        toCSSRuleHandler
    ],
    [
        ['v', 'visibility'],
        {
            // @ts-ignore
            [true]: 'visible',
            v: 'visible',
            // @ts-ignore
            [false]: 'hidden',
            h: 'hidden',
            c: 'collapse'
        },
        toCSSRuleHandler
    ],

    // Columns
    [['col', 'columns'], nil, toCSSRuleHandler],
    [['cc', 'column-count'], nil, toCSSRuleHandler],
    [['cf', 'column-fill'], nil, toCSSRuleHandler],
    [['cg', 'column-gap'], nil, fromArrayToCSSRuleHandler],
    [['cr', 'column-rule'], nil, toCSSRuleHandler],
    [['crc', 'column-rule-color'], nil, toCSSRuleHandler],
    [['crs', 'column-rule-style'], nil, toCSSRuleHandler],
    [['crw', 'column-rule-width'], nil, fromArrayToCSSRuleHandler],
    [['cs', 'column-span'], nil, toCSSRuleHandler],
    [['cw', 'column-width'], nil, fromArrayToCSSRuleHandler],
    [['pba', 'page-break-after'], nil, toCSSRuleHandler],
    [['pbb', 'page-break-before'], nil, toCSSRuleHandler],
    [['pbi', 'page-break-inside'], nil, toCSSRuleHandler],

    // Box
    [
        ['shd', 'box-shadow'],
        {
            ...getFalseNone()
        },
        fromArrayToCSSRuleHandler
    ],
    [['siz', 'box-sizing'], nil, toCSSRuleHandler],

    // Misc
    [['cn', 'contain'], nil, toCSSRuleHandler],
    [['dir', 'direction'], nil, toCSSRuleHandler],
    [
        ['of', 'object-fit'],
        {
            f: 'fill',
            cn: 'contain',
            cr: 'cover',
            sd: 'scale-down',
            // @ts-ignore
            [false]: 'none',
            n: 'none'
        },
        toCSSRuleHandler
    ],
    [['oP', 'object-position'], nil, toCSSRuleHandler],
    [
        ['op', 'opacity'],
        {
            // @ts-ignore
            [true]: 1,
            // @ts-ignore
            false: 0
        },
        toCSSRuleHandler
    ],
    [['or', 'order'], nil, toCSSRuleHandler],
    [['ol', 'outline'], nil, toCSSRuleHandler],
    [
        ['mbm', 'mix-blend-mode'],
        {
            n: 'normal',
            m: 'multiply',
            scr: 'screen',
            o: 'overlay',
            dn: 'darken',
            ln: 'lighten',
            cd: 'color-dodge',
            cb: 'color-burn',
            de: 'difference',
            e: 'exclusion',
            h: 'hue',
            sat: 'saturation',
            c: 'color',
            l: 'luminosity'
        },
        toCSSRuleHandler
    ],
    [['ct', 'content'], nil, toCSSRuleHandler],
    [
        ['cur', 'cursor'],
        {
            al: 'alias',
            all: 'all-scroll',
            a: 'auto',
            cl: 'cell',
            cm: 'context-menu',
            cr: 'col-resize',
            c: 'copy',
            ch: 'crosshair',
            d: 'default',
            er: 'e-resize',
            ewr: 'ew-resize',
            g: 'grab',
            gb: 'grabbing',
            h: 'help',
            m: 'move',
            nr: 'n-resize',
            ner: 'ne-resize',
            neswr: 'nesw-resize',
            nsr: 'ns-resize',
            nwr: 'nw-resize',
            nwser: 'nwse-resize',
            nd: 'no-drop',
            n: 'none',
            na: 'not-allowed',
            p: 'pointer',
            pr: 'progress',
            rr: 'row-resize',
            sr: 's-resize',
            ser: 'se-resize',
            swr: 'sw-resize',
            t: 'text',
            vt: 'vertical-text',
            wr: 'w-resize',
            w: 'wait',
            zi: 'zoom-in',
            zo: 'zoom-out'
        },
        toCSSRuleHandler
    ],
    [
        ['pe', 'pointer-events'],
        {
            // @ts-ignore
            [true]: 'auto',
            a: 'auto',
            ...getFalseNone()
        },
        toCSSRuleHandler
    ],
    [['fil', 'filter'], nil, fromArrayToCSSRuleHandler],
    [
        ['sb', 'scroll-behavior'],
        {
            a: 'auto',
            s: 'smooth'
        },
        toCSSRuleHandler
    ],
    [
        ['sw', 'scrollbar-width'],
        {
            n: 'none'
        },
        fromArrayToCSSRuleHandler
    ],
    [
        ['sh', 'scrollbar-height'],
        {
            n: 'none'
        },
        fromArrayToCSSRuleHandler
    ],
    [
        ['us', 'user-select'],
        {
            a: 'auto',
            n: 'none',
            t: 'text',
            all: 'all'
        },
        toCSSRuleHandler
    ],
    [['cac', 'caret-color'], nil, toCSSRuleHandler],
    [['rs', 'resize'], nil, toCSSRuleHandler],
    [['raw'], nil, [(i) => i]],
    [['child'], nil, [child]],
    [['ccss', 'css'], nil, [self]],

    // Webkit
    [
        ['wtc', 'webkit-touch-callout', '-webkit-touch-callout'],
        {
            d: 'default',
            n: 'none'
        },
        toCSSRuleHandler
    ],
    [
        ['wos', 'webkit-overflow-scrolling', '-webkit-overflow-scrolling'],
        {
            a: 'auto',
            t: 'touch'
        },
        toCSSRuleHandler
    ],
    [['wthc', 'webkit-tap-highlight-color', '-webkit-tap-highlight-color'], nil, toCSSRuleHandler],
    [['wtfc', 'webkit-text-fill-color', '-webkit-text-fill-color'], nil, toCSSRuleHandler],
    [
        ['wud', 'webkit-user-drag', '-webkit-user-drag'],
        {
            a: 'auto',
            e: 'element',
            n: 'none'
        },
        toCSSRuleHandler
    ],
    [
        ['wbf', 'webkit-backdrop-filter', '-webkit-backdrop-filter'],
        {
            n: 'none',
            s: 'strict',
            c: 'content',
            si: 'size',
            l: 'layout',
            st: 'style',
            p: 'paint'
        },
        fromArrayToCSSRuleHandler
    ],

    // Pseudo selectors
    [[':a', ':active'], nil, pseudoHandler],
    [['::a', '::after'], nil, pseudoHandler],
    [['::a, ::b', '::after, ::before'], nil, pseudoHandler],
    [[':al', ':any-link'], nil, pseudoHandler],
    [['::b', '::before'], nil, pseudoHandler],
    [[':b', ':blank'], nil, pseudoHandler],
    [[':c', ':checked'], nil, pseudoHandler],
    [[':cur', ':current'], nil, pseudoHandler],
    [[':def', ':default'], nil, pseudoHandler],
    [[':Def', ':defined'], nil, pseudoHandler],
    [[':dir', ':dir'], nil, pseudoHandler],
    [[':dis', ':disabled'], nil, pseudoHandler],
    [[':dr', ':drop'], nil, pseudoHandler],
    [[':em', ':empty'], nil, pseudoHandler],
    [[':en', ':enabled'], nil, pseudoHandler],
    [[':f', ':first'], nil, pseudoHandler],
    [[':fc', ':first-child'], nil, pseudoHandler],
    [[':fot', ':first-of-type'], nil, pseudoHandler],
    [[':fs', ':fullscreen'], nil, pseudoHandler],
    [[':fu', ':future'], nil, pseudoHandler],
    [[':fo', ':focus'], nil, pseudoHandler],
    [[':fov', ':focus-visible'], nil, pseudoHandler],
    [[':fow', ':focus-within'], nil, pseudoHandler],
    [[':has', ':has'], nil, pseudoHandler],
    [[':ho', ':host'], nil, pseudoHandler],
    [[':hoc', ':host-context'], nil, pseudoHandler],
    [[':h', ':hover'], nil, pseudoHandler],
    [[':i', ':indeterminate'], nil, pseudoHandler],
    [[':ir', ':in-range'], nil, pseudoHandler],
    [[':in', ':invalid'], nil, pseudoHandler],
    [[':is', ':is'], nil, pseudoHandler],
    [[':l', ':lang'], nil, pseudoHandler],
    [[':lc', ':last-child'], nil, pseudoHandler],
    [[':lot', ':last-of-type'], nil, pseudoHandler],
    [[':L', ':left'], nil, pseudoHandler],
    [[':lk', ':link'], nil, pseudoHandler],
    [[':llk', ':local-link'], nil, pseudoHandler],
    [[':n', ':not'], nil, pseudoHandler],
    [[':nc', ':nth-child'], nil, pseudoHandler],
    [[':nC', ':nth-col'], nil, pseudoHandler],
    [[':nlc', ':nth-last-child'], nil, pseudoHandler],
    [[':nlC', ':nth-last-col'], nil, pseudoHandler],
    [[':nlot', ':nth-last-of-type'], nil, pseudoHandler],
    [[':not', ':nth-of-type'], nil, pseudoHandler],
    [[':oc', ':only-child'], nil, pseudoHandler],
    [[':oof', ':only-of-type'], nil, pseudoHandler],
    [[':o', ':optional'], nil, pseudoHandler],
    [[':our', ':out-of-range'], nil, pseudoHandler],
    [[':p', ':past'], nil, pseudoHandler],
    [[':ps', ':placeholder-shown'], nil, pseudoHandler],
    [[':ro', ':read-only'], nil, pseudoHandler],
    [[':rw', ':read-write'], nil, pseudoHandler],
    [[':req', ':required'], nil, pseudoHandler],
    [[':R', ':right'], nil, pseudoHandler],
    [[':r', ':root'], nil, pseudoHandler],
    [[':s', ':scope'], nil, pseudoHandler],
    [[':t', ':target'], nil, pseudoHandler],
    [[':tw', ':target-within'], nil, pseudoHandler],
    [[':ui', ':user-invalid'], nil, pseudoHandler],
    [[':v', ':valid'], nil, pseudoHandler],
    [[':vis', ':visited'], nil, pseudoHandler],
    [[':w', ':where'], nil, pseudoHandler]
]

export default defaultProps
