import { mergeDeep } from './utils'
import { CCSSPseudoMap } from './types'

const getAligns = () => ({
    s: 'start',
    fs: 'flex-start',
    e: 'end',
    fe: 'flex-end',
    st: 'stretch',
    c: 'center',
    n: 'normal',
    sb: 'space-between',
    as: 'space-around',
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

export const createValueMap = (overrides?) =>
    mergeDeep(
        {
            aDir: {
                n: 'normal',
                r: 'reverse',
                a: 'alternate',
                ar: 'alternate-reverse'
            },
            afm: {
                ...getFalseNone(),
                fwd: 'forwards',
                bwd: 'backwards',
                b: 'both'
            },
            aps: {
                p: 'paused',
                r: 'running'
            },
            bv: {
                v: 'visible',
                h: 'hidden'
            },
            ai: getAligns(),
            ji: getAligns(),
            jc: getAligns(),
            ac: getAligns(),
            aS: getAligns(),
            jS: getAligns(),
            fd: {
                r: 'row',
                rr: 'row-reverse',
                c: 'column',
                cr: 'column-reverse'
            },
            fw: {
                w: 'wrap'
            },
            P: {
                a: 'absolute',
                f: 'fixed',
                r: 'relative',
                s: 'sticky'
            },
            d: {
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
            o: getOverflows(),
            ox: getOverflows(),
            oy: getOverflows(),
            fl: {
                ...getFalseNone(),
                l: 'left',
                r: 'right'
            },
            clr: {
                ...getFalseNone(),
                l: 'left',
                r: 'right',
                // @ts-ignore
                [true]: 'both',
                b: 'both'
            },
            v: {
                // @ts-ignore
                [true]: 'visible',
                v: 'visible',
                // @ts-ignore
                [false]: 'hidden',
                h: 'hidden',
                c: 'collapse'
            },
            ta: {
                l: 'left',
                c: 'center',
                j: 'justify',
                r: 'right'
            },
            td: {
                ...getFalseNone(),
                u: 'underline',
                o: 'overline',
                t: 'line-through'
            },
            to: {
                c: 'clip',
                e: 'ellipsis'
            },
            tt: {
                ...getFalseNone(),
                c: 'capitalize',
                u: 'uppercase',
                l: 'lowercase'
            },
            va: {
                b: 'baseline',
                sub: 'sub',
                sup: 'super',
                t: 'top',
                tt: 'text-top',
                m: 'middle',
                bot: 'bottom',
                tb: 'text-bottom'
            },
            ftStr: {
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
            ftSty: {
                n: 'normal',
                i: 'italic',
                o: 'oblique'
            },
            ftv: {
                n: 'normal',
                sc: 'small-caps'
            },
            ftw: {
                n: 'normal',
                b: 'bold',
                br: 'bolder',
                l: 'lighter'
            },
            ws: {
                n: 'normal',
                nw: 'nowrap',
                p: 'pre',
                pl: 'pre-line',
                pw: 'pre-wrap'
            },
            wb: {
                n: 'normal',
                ba: 'break-all',
                ka: 'keep-all',
                bw: 'break-word'
            },
            ww: {
                n: 'normal',
                b: 'break-word'
            },
            lstS: {
                ...getFalseNone()
            },
            lstST: {
                // @ts-ignore
                [false]: 'none',
                n: 'none'
            },
            bgs: {
                a: 'auto',
                cr: 'cover',
                cn: 'contain'
            },
            bgr: {
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
            bgp: getTfoBgpPos(),
            bga: {
                s: 'scroll',
                f: 'fixed',
                l: 'local'
            },
            bgbm: {
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
            bg: {
                t: 'transparent'
            },
            bgc: {
                t: 'transparent'
            },
            bgo: {
                b: 'border-box',
                p: 'padding-box',
                c: 'content-box'
            },
            of: {
                f: 'fill',
                cn: 'contain',
                cr: 'cover',
                sd: 'scale-down',
                // @ts-ignore
                [false]: 'none',
                n: 'none'
            },
            mbm: {
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
            cur: {
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
            pe: {
                // @ts-ignore
                [true]: 'auto',
                a: 'auto',
                ...getFalseNone()
            },
            sb: {
                a: 'auto',
                s: 'smooth'
            },
            us: {
                a: 'auto',
                n: 'none',
                t: 'text',
                all: 'all'
            },
            sw: {
                n: 'none'
            },
            sh: {
                n: 'none'
            },
            op: {
                // @ts-ignore
                [true]: 1,
                // @ts-ignore
                [false]: 0
            },
            tfo: getTfoBgpPos(),
            shd: {
                ...getFalseNone()
            },
            wtc: {
                d: 'default',
                n: 'none'
            },
            wos: {
                a: 'auto',
                t: 'touch'
            },
            wud: {
                a: 'auto',
                e: 'element',
                n: 'none'
            }
        },
        overrides
    )

export const createPseudoMap = (overrides?: Partial<CCSSPseudoMap>): Partial<CCSSPseudoMap> => {
    const pseudoMap = {
        ':a': ':active',
        '::a': '::after',
        '::a, ::b': '::after, ::before',
        ':al': ':any-link',
        '::b': '::before',
        ':b': ':blank',
        ':c': ':checked',
        ':cur': ':current',
        ':def': ':default',
        ':Def': ':defined',
        ':dir': ':dir',
        ':dis': ':disabled',
        ':dr': ':drop',
        ':em': ':empty',
        ':en': ':enabled',
        ':f': ':first',
        ':fc': ':first-child',
        ':fot': ':first-of-type',
        ':fs': ':fullscreen',
        ':fu': ':future',
        ':fo': ':focus',
        ':fov': ':focus-visible',
        ':fow': ':focus-within',
        ':has': ':has',
        ':ho': ':host',
        ':hoc': ':host-context',
        ':h': ':hover',
        ':i': ':indeterminate',
        ':ir': ':in-range',
        ':in': ':invalid',
        ':is': ':is',
        ':l': ':lang',
        ':lc': ':last-child',
        ':lot': ':last-of-type',
        ':L': ':left',
        ':lk': ':link',
        ':llk': ':local-link',
        ':n': ':not',
        ':nc': ':nth-child',
        ':nC': ':nth-col',
        ':nlc': ':nth-last-child',
        ':nlC': ':nth-last-col',
        ':nlot': ':nth-last-of-type',
        ':not': ':nth-of-type',
        ':oc': ':only-child',
        ':oof': ':only-of-type',
        ':o': ':optional',
        ':our': ':out-of-range',
        ':p': ':past',
        ':ps': ':placeholder-shown',
        ':ro': ':read-only',
        ':rw': ':read-write',
        ':req': ':required',
        ':R': ':right',
        ':r': ':root',
        ':s': ':scope',
        ':t': ':target',
        ':tw': ':target-within',
        ':ui': ':user-invalid',
        ':v': ':valid',
        ':vis': ':visited',
        ':w': ':where'
    }

    return overrides !== undefined ? mergeDeep(pseudoMap, overrides) : pseudoMap
}
