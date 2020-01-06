import { mergeDeep } from './utils'

const aligns = {
    s: 'start',
    fs: 'flex-start',
    e: 'end',
    fe: 'flex-end',
    st: 'stretch',
    c: 'center'
}

const overflows = {
    // @ts-ignore
    [false]: 'hidden',
    h: 'hidden',
    // @ts-ignore
    [true]: 'visible',
    v: 'visible',
    s: 'scroll',
    a: 'auto'
}

export const valueMap = {
    'animation-direction': {
        n: 'normal',
        r: 'reverse',
        a: 'alternate',
        ar: 'alternate-reverse'
    },
    'animation-fill-mode': {
        n: 'none',
        // @ts-ignore
        [false]: 'none',
        fwd: 'forwards',
        bwd: 'backwards',
        b: 'both'
    },
    'animation-play-state': {
        p: 'paused',
        r: 'running'
    },
    'backface-visibility': {
        v: 'visible',
        h: 'hidden'
    },
    'align-items': aligns,
    'justify-items': aligns,
    'justify-content': aligns,
    'align-content': aligns,
    'align-self': aligns,
    'justify-self': aligns,
    'flex-direction': {
        r: 'row',
        rr: 'row-reverse',
        c: 'column',
        cr: 'column-reverse'
    },
    'flex-wrap': {
        w: 'wrap'
    },
    position: {
        a: 'absolute',
        f: 'fixed',
        r: 'relative',
        s: 'sticky'
    },
    display: {
        // @ts-ignore
        [false]: 'none',
        n: 'none',
        i: 'inline',
        if: 'inline-flex',
        ib: 'inline-block',
        ig: 'inline-grid',
        b: 'block',
        f: 'flex',
        g: 'grid',
        t: 'table'
    },
    overflow: overflows,
    'overflow-x': overflows,
    'overflow-y': overflows,
    float: {
        // @ts-ignore
        [false]: 'none',
        n: 'none',
        l: 'left',
        r: 'right'
    },
    clear: {
        // @ts-ignore
        [false]: 'none',
        n: 'none',
        l: 'left',
        r: 'right',
        // @ts-ignore
        [true]: 'both',
        b: 'both'
    },
    visibility: {
        // @ts-ignore
        [true]: 'visible',
        v: 'visible',
        // @ts-ignore
        [false]: 'hidden',
        h: 'hidden',
        c: 'collapse'
    },
    'text-align': {
        l: 'left',
        c: 'center',
        j: 'justify',
        r: 'right'
    },
    'text-decoration': {
        n: 'none',
        // @ts-ignore
        [false]: 'none',
        u: 'underline',
        o: 'overline',
        t: 'line-through'
    },
    'text-overflow': {
        c: 'clip',
        e: 'ellipsis'
    },
    'text-transform': {
        n: 'none',
        // @ts-ignore
        [false]: 'none',
        c: 'capitalize',
        u: 'uppercase',
        l: 'lowercase'
    },
    'vertical-align': {
        b: 'baseline',
        sub: 'sub',
        sup: 'super',
        t: 'top',
        tt: 'text-top',
        m: 'middle',
        bot: 'bottom',
        tb: 'text-bottom'
    },
    'font-stretch': {
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
    'font-style': {
        n: 'normal',
        i: 'italic',
        o: 'oblique'
    },
    'font-variant': {
        n: 'normal',
        sc: 'small-caps'
    },
    'font-weight': {
        n: 'normal',
        b: 'bold',
        br: 'bolder',
        l: 'lighter'
    },
    'white-space': {
        n: 'normal',
        nw: 'nowrap',
        p: 'pre',
        pl: 'pre-line',
        pw: 'pre-wrap'
    },
    'word-break': {
        n: 'normal',
        ba: 'break-all',
        ka: 'keep-all',
        bw: 'break-word'
    },
    'word-wrap': {
        n: 'normal',
        b: 'break-word'
    },
    'list-style': {
        // @ts-ignore
        [false]: 'none'
    },
    'list-style-type': {
        // @ts-ignore
        [false]: 'none'
    },
    'background-size': {
        cr: 'cover',
        cn: 'contain'
    },
    'background-repeat': {
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
    'background-position': {
        c: 'center'
    },
    'background-attachment': {
        s: 'scroll',
        f: 'fixed',
        l: 'local'
    },
    'background-blend-mode': {
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
    'background-clip': {
        b: 'border-box',
        p: 'padding-box',
        c: 'content-box'
    },
    'background-origin': {
        b: 'border-box',
        p: 'padding-box',
        c: 'content-box'
    },
    'object-fit': {
        f: 'fill',
        cn: 'contain',
        cr: 'cover',
        sd: 'scale-down',
        // @ts-ignore
        [false]: 'none',
        n: 'none'
    },
    'mix-blend-mode': {
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
    cursor: {
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
    'pointer-events': {
        // @ts-ignore
        [true]: 'auto',
        a: 'auto',
        // @ts-ignore
        [false]: 'none',
        n: 'none'
    },
    'scroll-behavior': {
        a: 'auto',
        s: 'smooth'
    },
    'user-select': {
        a: 'auto',
        n: 'none',
        t: 'text',
        all: 'all'
    }
}

export const setValueMap = c => {
    mergeDeep(valueMap, c)
}

export const pseudoMap = {
    a: 'active',
    al: 'any-link',
    b: 'blank',
    c: 'checked',
    cur: 'current',
    def: 'default',
    Def: 'defined',
    dir: 'dir',
    dis: 'disabled',
    dr: 'drop',
    em: 'empty',
    en: 'enabled',
    f: 'first',
    fc: 'first-child',
    fot: 'first-of-type',
    fs: 'fullscreen',
    fu: 'future',
    fo: 'focus',
    fov: 'focus-visible',
    fow: 'focus-within',
    has: 'has',
    ho: 'host',
    hoc: 'host-context',
    h: 'hover',
    i: 'indeterminate',
    ir: 'in-range',
    in: 'invalid',
    is: 'is',
    l: 'lang',
    lc: 'last-child',
    lot: 'last-of-type',
    L: 'left',
    lk: 'link',
    llk: 'local-link',
    n: 'not',
    nc: 'nth-child',
    nC: 'nth-col',
    nlc: 'nth-last-child',
    nlC: 'nth-last-col',
    nlot: 'nth-last-of-type',
    not: 'nth-of-type',
    oc: 'only-child',
    oof: 'only-of-type',
    o: 'optional',
    our: 'out-of-range',
    p: 'past',
    ps: 'placeholder-shown',
    ro: 'read-only',
    rw: 'read-write',
    req: 'required',
    R: 'right',
    r: 'root',
    s: 'scope',
    t: 'target',
    tw: 'target-within',
    ui: 'user-invalid',
    v: 'valid',
    vis: 'visited',
    w: 'where'
}

export const setPseudoMap = c => {
    mergeDeep(pseudoMap, c)
}
