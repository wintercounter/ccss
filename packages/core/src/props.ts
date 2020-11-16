import { Props } from 'transformed'
import { parseArray, child, parsePseudo, toCSSRule } from './parsers'

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

const defaultProps = (): Props => [
    // SVG presentational attributes
    [['ab', 'alignment-baseline'], null, [toCSSRule]],
    [['bls', 'baseline-shift'], null, [toCSSRule]],
    [['cpr', 'clip-rule'], null, [toCSSRule]],
    [['cif', 'color-interpolation-filters'], null, [toCSSRule]],
    [['ci', 'color-interpolation'], null, [toCSSRule]],
    [['cpf', 'color-profile'], null, [toCSSRule]],
    [['crd', 'color-rendering'], null, [toCSSRule]],
    [['db', 'dominant-baseline'], null, [toCSSRule]],
    [['eb', 'enable-background'], null, [toCSSRule]],
    [['fo', 'fill-opacity'], null, [toCSSRule]],
    [['fr', 'fill-rule'], null, [toCSSRule]],
    [['fi', 'fill'], null, [toCSSRule]],
    [['fdc', 'flood-color'], null, [toCSSRule]],
    [['fdo', 'flood-opacity'], null, [toCSSRule]],
    [['fsa', 'font-size-adjust'], null, [toCSSRule]],
    [['goh', 'glyph-orientation-horizontal'], null, [toCSSRule]],
    [['ir', 'image-rendering'], null, [toCSSRule]],
    [['k', 'kerning'], null, [toCSSRule]],
    [['lc', 'lighting-color'], null, [toCSSRule]],
    [['me', 'marker-end'], null, [toCSSRule]],
    [['mm', 'marker-mid'], null, [toCSSRule]],
    [['ms', 'marker-start'], null, [toCSSRule]],
    [['msk', 'mask'], null, [toCSSRule]],
    [['sr', 'shape-rendering'], null, [toCSSRule]],
    [['sc', 'stop-color'], null, [toCSSRule]],
    [['sda', 'stroke-dasharray'], null, [toCSSRule]],
    [['sdo', 'stroke-dashoffset'], null, [toCSSRule]],
    [['slc', 'stroke-linecap'], null, [toCSSRule]],
    [['slj', 'stroke-linejoin'], null, [toCSSRule]],
    [['sml', 'stroke-miterlimit'], null, [toCSSRule]],
    [['sop', 'stroke-opacity'], null, [toCSSRule]],
    [['swt', 'stroke-width'], null, [toCSSRule]],
    [['st', 'stroke'], null, [toCSSRule]],
    [['txa', 'text-anchor'], null, [toCSSRule]],
    [['txr', 'text-rendering'], null, [toCSSRule]],
    [['ub', 'unicode-bidi'], null, [toCSSRule]],
    [['wm', 'writing-mode'], null, [toCSSRule]],

    // Animation + 3D
    [['a', 'animation'], null, [toCSSRule]],
    [['ad', 'animation-delay'], null, [toCSSRule]],
    [
        ['aDir', 'animation-direction'],
        {
            n: 'normal',
            r: 'reverse',
            a: 'alternate',
            ar: 'alternate-reverse'
        }
    ],
    [['aD', 'animation-duration'], null, [toCSSRule]],
    [
        ['afm', 'animation-fill-mode'],
        {
            ...getFalseNone(),
            fwd: 'forwards',
            bwd: 'backwards',
            b: 'both'
        }
    ],
    [['aic', 'animation-iteration-count'], null, [toCSSRule]],
    [['an', 'animation-name'], null, [toCSSRule]],
    [
        ['aps', 'animation-play-state'],
        {
            p: 'paused',
            r: 'running'
        }
    ],
    [['ats', 'animation-timing-function'], null, [toCSSRule]],
    [
        ['bv', 'backface-visibility'],
        {
            v: 'visible',
            h: 'hidden'
        }
    ],
    [['per', 'perspective'], null, [toCSSRule]],
    [['pero', 'perspective-origin'], null, [toCSSRule]],
    [['tf', 'transform'], null, [toCSSRule]],
    [['tfo', 'transform-origin'], getTfoBgpPos(), [toCSSRule]],
    [['tfs', 'transform-style'], null, [toCSSRule]],
    [['tr', 'transition'], null, [toCSSRule]],
    [['trD', 'transition-delay'], null, [toCSSRule]],
    [['trd', 'transition-duration'], null, [toCSSRule]],
    [['trp', 'transition-property'], null, [toCSSRule]],
    [['trt', 'transition-timing-function'], null, [toCSSRule]],

    // Flex
    [['f', 'flex'], null, [toCSSRule]],
    [
        ['fd', 'flex-direction'],
        {
            r: 'row',
            rr: 'row-reverse',
            c: 'column',
            cr: 'column-reverse'
        },
        [toCSSRule]
    ],
    [
        ['fw', 'flex-wrap'],
        {
            w: 'wrap'
        },
        [toCSSRule]
    ],
    [['fb', 'flex-basis'], null, [parseArray, toCSSRule]],
    [['ff', 'flex-flow'], null, [toCSSRule]],
    [['fg', 'flex-grow'], null, [toCSSRule]],
    [['fs', 'flex-shrink'], null, [toCSSRule]],
    [['ai', 'align-items'], getAligns(), [toCSSRule]],
    [['ac', 'align-content'], getAligns(), [toCSSRule]],
    [['ji', 'justify-items'], getAligns(), [toCSSRule]],
    [['jc', 'justify-content'], getAligns(), [toCSSRule]],
    [['aS', 'align-self'], null, [toCSSRule]],
    [['jS', 'justify-self'], null, [toCSSRule]],

    // Font + text related
    [['ft', 'font'], null, [toCSSRule]],
    [['ftf', 'font-family'], null, [toCSSRule]],
    [['ftk', 'font-kerning'], null, [toCSSRule]],
    [['fts', 'font-size'], null, [parseArray, toCSSRule]],
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
        [toCSSRule]
    ],
    [
        ['ftSty', 'font-style'],
        {
            n: 'normal',
            i: 'italic',
            o: 'oblique'
        },
        [toCSSRule]
    ],
    [
        ['ftv', 'font-variant'],
        {
            n: 'normal',
            sc: 'small-caps'
        },
        [toCSSRule]
    ],
    [
        ['ftw', 'font-weight'],
        {
            n: 'normal',
            b: 'bold',
            br: 'bolder',
            l: 'lighter'
        },
        [toCSSRule]
    ],
    [['ls', 'letter-spacing'], null, [parseArray, toCSSRule]],
    [['lh', 'line-height'], null, [toCSSRule]],

    [
        ['ta', 'text-align'],
        {
            ...getFalseNone(),
            u: 'underline',
            o: 'overline',
            t: 'line-through'
        },
        [toCSSRule]
    ],
    [['td', 'text-decoration'], null, [toCSSRule]],
    [['ti', 'text-indent'], null, [parseArray, toCSSRule]],
    [
        ['to', 'text-overflow'],
        {
            c: 'clip',
            e: 'ellipsis'
        },
        [toCSSRule]
    ],
    [['ts', 'text-shadow'], null, [toCSSRule]],
    [
        ['tt', 'text-transform'],
        {
            ...getFalseNone(),
            c: 'capitalize',
            u: 'uppercase',
            l: 'lowercase'
        },
        [toCSSRule]
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
        [toCSSRule]
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
        [toCSSRule]
    ],
    [
        ['wb', 'word-break'],
        {
            n: 'normal',
            ba: 'break-all',
            ka: 'keep-all',
            bw: 'break-word'
        },
        [toCSSRule]
    ],
    [['wS', 'word-spacing'], null, [parseArray, toCSSRule]],
    [
        ['ww', 'word-wrap'],
        {
            n: 'normal',
            b: 'break-word'
        },
        [toCSSRule]
    ],

    // List
    [
        ['l', 'list-style'],
        {
            ...getFalseNone()
        },
        [toCSSRule]
    ],
    [['li', 'list-style-image'], null, [toCSSRule]],
    [['lp', 'list-style-position'], null, [toCSSRule]],
    [['lt', 'list-style-type'], null, [toCSSRule]],

    // Margin
    [['m', 'margin'], null, [parseArray, toCSSRule]],
    [['mT', 'margin-top'], null, [parseArray, toCSSRule]],
    [['mR', 'margin-right'], null, [parseArray, toCSSRule]],
    [['mB', 'margin-bottom'], null, [parseArray, toCSSRule]],
    [['mL', 'margin-left'], null, [parseArray, toCSSRule]],

    // Padding
    [['p', 'pad', 'padding'], null, [parseArray, toCSSRule]],
    [['pT', 'padding-top'], null, [parseArray, toCSSRule]],
    [['pR', 'padding-right'], null, [parseArray, toCSSRule]],
    [['pB', 'padding-bottom'], null, [parseArray, toCSSRule]],
    [['pL', 'padding-left'], null, [parseArray, toCSSRule]],

    // Background
    [
        ['bg', 'background'],
        {
            t: 'transparent',
            n: 'none',
            // @ts-ignore
            [false]: 'none'
        },
        [parseArray, toCSSRule]
    ],
    [['bgi', 'background-image'], null, [toCSSRule]],
    [
        ['bgc', 'background-color'],
        {
            t: 'transparent'
        },
        [toCSSRule]
    ],
    [
        ['bgs', 'background-size'],
        {
            a: 'auto',
            cr: 'cover',
            cn: 'contain'
        },
        [parseArray, toCSSRule]
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
        [toCSSRule]
    ],
    [['bgp', 'background-position'], getTfoBgpPos(), [parseArray, toCSSRule]],
    [
        ['bga', 'background-attachment'],
        {
            s: 'scroll',
            f: 'fixed',
            l: 'local'
        },
        [toCSSRule]
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
        [toCSSRule]
    ],
    [['bgC', 'background-clip'], null, [parseArray, toCSSRule]],
    [
        ['bgo', 'background-origin'],
        {
            b: 'border-box',
            p: 'padding-box',
            c: 'content-box'
        },
        [toCSSRule]
    ],
    [['bf', 'backdrop-filter'], null, [parseArray, toCSSRule]],

    // Dimension
    [['w', 'width'], null, [parseArray, toCSSRule]],
    [['h', 'height'], null, [parseArray, toCSSRule]],
    [['minW', 'min-width'], null, [parseArray, toCSSRule]],
    [['minH', 'min-height'], null, [parseArray, toCSSRule]],
    [['maxW', 'max-width'], null, [parseArray, toCSSRule]],
    [['maxH', 'max-height'], null, [parseArray, toCSSRule]],

    // Grid
    [['g', 'grid'], null, [toCSSRule]],
    [['ga', 'grid-area'], null, [toCSSRule]],
    [['gac', 'grid-auto-columns'], null, [parseArray, toCSSRule]],
    [['gaf', 'grid-auto-flow'], null, [toCSSRule]],
    [['gar', 'grid-auto-rows'], null, [parseArray, toCSSRule]],
    [['gc', 'grid-column'], null, [parseArray, toCSSRule]],
    [['gce', 'grid-column-end'], null, [toCSSRule]],
    [['gcg', 'grid-column-gap'], null, [parseArray, toCSSRule]],
    [['gcs', 'grid-column-start'], null, [toCSSRule]],
    [['gg', 'grid-gap'], null, [parseArray, toCSSRule]],
    [['gr', 'grid-row'], null, [parseArray, toCSSRule]],
    [['gre', 'grid-row-end'], null, [toCSSRule]],
    [['grg', 'grid-row-gap'], null, [parseArray, toCSSRule]],
    [['grs', 'grid-row-start'], null, [toCSSRule]],
    [['gt', 'grid-template'], null, [toCSSRule]],
    [['gta', 'grid-template-areas'], null, [toCSSRule]],
    [['gtc', 'grid-template-columns'], null, [parseArray, toCSSRule]],
    [['gtr', 'grid-template-rows'], null, [parseArray, toCSSRule]],

    // Border
    [['b', 'border'], null, [parseArray, toCSSRule]],
    [['bB', 'border-bottom'], null, [parseArray, toCSSRule]],
    [['bBc', 'border-bottom-color'], null, [toCSSRule]],
    [['bBlr', 'border-bottom-left-radius'], null, [parseArray, toCSSRule]],
    [['bBrr', 'border-bottom-right-radius'], null, [parseArray, toCSSRule]],
    [['bBs', 'border-bottom-style'], null, [toCSSRule]],
    [['bBw', 'border-bottom-width'], null, [parseArray, toCSSRule]],
    [['bC', 'border-collapse'], null, [toCSSRule]],
    [['bc', 'border-color'], null, [toCSSRule]],
    [['bi', 'border-image'], null, [toCSSRule]],
    [['bio', 'border-image-outset'], null, [toCSSRule]],
    [['bir', 'border-image-repeat'], null, [toCSSRule]],
    [['bis', 'border-image-slice'], null, [toCSSRule]],
    [['biSrc', 'border-image-source'], null, [toCSSRule]],
    [['biw', 'border-image-width'], null, [parseArray, toCSSRule]],
    [['bL', 'border-left'], null, [parseArray, toCSSRule]],
    [['bLc', 'border-left-color'], null, [toCSSRule]],
    [['bLs', 'border-left-style'], null, [toCSSRule]],
    [['bLw', 'border-left-width'], null, [parseArray, toCSSRule]],
    [['br', 'border-radius'], null, [parseArray, toCSSRule]],
    [['bR', 'border-right'], null, [parseArray, toCSSRule]],
    [['bRc', 'border-right-color'], null, [toCSSRule]],
    [['bRs', 'border-right-style'], null, [toCSSRule]],
    [['bRw', 'border-right-width'], null, [parseArray, toCSSRule]],
    [['bs', 'border-spacing'], null, [parseArray, toCSSRule]],
    [['bS', 'border-style'], null, [toCSSRule]],
    [['bT', 'border-top'], null, [parseArray, toCSSRule]],
    [['bTc', 'border-top-color'], null, [toCSSRule]],
    [['bTlr', 'border-top-left-radius'], null, [parseArray, toCSSRule]],
    [['bTrr', 'border-top-right-radius'], null, [parseArray, toCSSRule]],
    [['bTs', 'border-top-style'], null, [toCSSRule]],
    [['bTw', 'border-top-width'], null, [parseArray, toCSSRule]],
    [['bw', 'border-width'], null, [parseArray, toCSSRule]],

    // Clip
    [['clp', 'clip'], null, [parseArray, toCSSRule]],
    [['clpp', 'clip-path'], null, [toCSSRule]],

    // General
    [
        ['d', 'display'],
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
        [toCSSRule]
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
        [toCSSRule]
    ],
    [['T', 'top'], null, [parseArray, toCSSRule]],
    [['R', 'right'], null, [parseArray, toCSSRule]],
    [['B', 'bottom'], null, [parseArray, toCSSRule]],
    [['L', 'left'], null, [parseArray, toCSSRule]],
    [['zi', 'z-index'], null, [toCSSRule]],
    [['c', 'color'], null, [toCSSRule]],
    [['o', 'overflow'], getOverflows(), [toCSSRule]],
    [['ox', 'overflow-x'], getOverflows(), [toCSSRule]],
    [['oy', 'overflow-y'], getOverflows(), [toCSSRule]],
    [
        ['oa', 'overflow-anchor'],
        {
            ...getFalseNone(),
            a: 'auto'
        },
        [toCSSRule]
    ],
    [
        ['fl', 'float'],
        {
            ...getFalseNone(),
            l: 'left',
            r: 'right'
        },
        [toCSSRule]
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
        [toCSSRule]
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
        [toCSSRule]
    ],

    // Columns
    [['col', 'columns'], null, [toCSSRule]],
    [['cc', 'column-count'], null, [toCSSRule]],
    [['cf', 'column-fill'], null, [toCSSRule]],
    [['cg', 'column-gap'], null, [parseArray, toCSSRule]],
    [['cr', 'column-rule'], null, [toCSSRule]],
    [['crc', 'column-rule-color'], null, [toCSSRule]],
    [['crs', 'column-rule-style'], null, [toCSSRule]],
    [['crw', 'column-rule-width'], null, [parseArray, toCSSRule]],
    [['cs', 'column-span'], null, [toCSSRule]],
    [['cw', 'column-width'], null, [parseArray, toCSSRule]],
    [['pba', 'page-break-after'], null, [toCSSRule]],
    [['pbb', 'page-break-before'], null, [toCSSRule]],
    [['pbi', 'page-break-inside'], null, [toCSSRule]],

    // Box
    [
        ['shd', 'box-shadow'],
        {
            ...getFalseNone()
        },
        [parseArray, toCSSRule]
    ],
    [['siz', 'box-sizing'], null, [toCSSRule]],

    // Misc
    [['cn', 'contain'], null, [toCSSRule]],
    [['dir', 'direction'], null, [toCSSRule]],
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
        [toCSSRule]
    ],
    [['oP', 'object-position'], null, [toCSSRule]],
    [
        ['op', 'opacity'],
        {
            // @ts-ignore
            [true]: 1,
            // @ts-ignore
            [false]: 0
        },
        [toCSSRule]
    ],
    [['or', 'order'], null, [toCSSRule]],
    [['ol', 'outline'], null, [toCSSRule]],
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
        [toCSSRule]
    ],
    [['ct', 'content'], null, [toCSSRule]],
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
        [toCSSRule]
    ],
    [
        ['pe', 'pointer-events'],
        {
            // @ts-ignore
            [true]: 'auto',
            a: 'auto',
            ...getFalseNone()
        },
        [toCSSRule]
    ],
    [['fil', 'filter'], null, [parseArray, toCSSRule]],
    [
        ['sb', 'scroll-behavior'],
        {
            a: 'auto',
            s: 'smooth'
        },
        [toCSSRule]
    ],
    [
        ['sw', 'scrollbar-width'],
        {
            n: 'none'
        },
        [parseArray, toCSSRule]
    ],
    [
        ['sh', 'scrollbar-height'],
        {
            n: 'none'
        },
        [parseArray, toCSSRule]
    ],
    [
        ['us', 'user-select'],
        {
            a: 'auto',
            n: 'none',
            t: 'text',
            all: 'all'
        }
    ],
    [['cac', 'caret-color'], null, [toCSSRule]],
    [['rs', 'resize'], null, [toCSSRule]],
    [['raw'], null, [(i) => i]],
    [['child'], null, [child]],

    // Webkit
    [
        ['wtc', 'webkit-touch-callout', '-webkit-touch-callout'],
        {
            d: 'default',
            n: 'none'
        },
        [toCSSRule]
    ],
    [
        ['wos', 'webkit-overflow-scrolling', '-webkit-overflow-scrolling'],
        {
            a: 'auto',
            t: 'touch'
        },
        [toCSSRule]
    ],
    [['wthc', 'webkit-tap-highlight-color', '-webkit-tap-highlight-color'], null, [toCSSRule]],
    [['wtfc', 'webkit-text-fill-color', '-webkit-text-fill-color'], null, [toCSSRule]],
    [
        ['wud', 'webkit-user-drag', '-webkit-user-drag'],
        {
            a: 'auto',
            e: 'element',
            n: 'none'
        },
        [toCSSRule]
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
        [parseArray, toCSSRule]
    ],

    // Pseudo selectors
    [[':a', ':active'], null, [parsePseudo]],
    [['::a', '::after'], null, [parsePseudo]],
    [['::a, ::b', '::after, ::before'], null, [parsePseudo]],
    [[':al', ':any-link'], null, [parsePseudo]],
    [['::b', '::before'], null, [parsePseudo]],
    [[':b', ':blank'], null, [parsePseudo]],
    [[':c', ':checked'], null, [parsePseudo]],
    [[':cur', ':current'], null, [parsePseudo]],
    [[':def', ':default'], null, [parsePseudo]],
    [[':Def', ':defined'], null, [parsePseudo]],
    [[':dir', ':dir'], null, [parsePseudo]],
    [[':dis', ':disabled'], null, [parsePseudo]],
    [[':dr', ':drop'], null, [parsePseudo]],
    [[':em', ':empty'], null, [parsePseudo]],
    [[':en', ':enabled'], null, [parsePseudo]],
    [[':f', ':first'], null, [parsePseudo]],
    [[':fc', ':first-child'], null, [parsePseudo]],
    [[':fot', ':first-of-type'], null, [parsePseudo]],
    [[':fs', ':fullscreen'], null, [parsePseudo]],
    [[':fu', ':future'], null, [parsePseudo]],
    [[':fo', ':focus'], null, [parsePseudo]],
    [[':fov', ':focus-visible'], null, [parsePseudo]],
    [[':fow', ':focus-within'], null, [parsePseudo]],
    [[':has', ':has'], null, [parsePseudo]],
    [[':ho', ':host'], null, [parsePseudo]],
    [[':hoc', ':host-context'], null, [parsePseudo]],
    [[':h', ':hover'], null, [parsePseudo]],
    [[':i', ':indeterminate'], null, [parsePseudo]],
    [[':ir', ':in-range'], null, [parsePseudo]],
    [[':in', ':invalid'], null, [parsePseudo]],
    [[':is', ':is'], null, [parsePseudo]],
    [[':l', ':lang'], null, [parsePseudo]],
    [[':lc', ':last-child'], null, [parsePseudo]],
    [[':lot', ':last-of-type'], null, [parsePseudo]],
    [[':L', ':left'], null, [parsePseudo]],
    [[':lk', ':link'], null, [parsePseudo]],
    [[':llk', ':local-link'], null, [parsePseudo]],
    [[':n', ':not'], null, [parsePseudo]],
    [[':nc', ':nth-child'], null, [parsePseudo]],
    [[':nC', ':nth-col'], null, [parsePseudo]],
    [[':nlc', ':nth-last-child'], null, [parsePseudo]],
    [[':nlC', ':nth-last-col'], null, [parsePseudo]],
    [[':nlot', ':nth-last-of-type'], null, [parsePseudo]],
    [[':not', ':nth-of-type'], null, [parsePseudo]],
    [[':oc', ':only-child'], null, [parsePseudo]],
    [[':oof', ':only-of-type'], null, [parsePseudo]],
    [[':o', ':optional'], null, [parsePseudo]],
    [[':our', ':out-of-range'], null, [parsePseudo]],
    [[':p', ':past'], null, [parsePseudo]],
    [[':ps', ':placeholder-shown'], null, [parsePseudo]],
    [[':ro', ':read-only'], null, [parsePseudo]],
    [[':rw', ':read-write'], null, [parsePseudo]],
    [[':req', ':required'], null, [parsePseudo]],
    [[':R', ':right'], null, [parsePseudo]],
    [[':r', ':root'], null, [parsePseudo]],
    [[':s', ':scope'], null, [parsePseudo]],
    [[':t', ':target'], null, [parsePseudo]],
    [[':tw', ':target-within'], null, [parsePseudo]],
    [[':ui', ':user-invalid'], null, [parsePseudo]],
    [[':v', ':valid'], null, [parsePseudo]],
    [[':vis', ':visited'], null, [parsePseudo]],
    [[':w', ':where'], null, [parsePseudo]]
]

export default defaultProps
