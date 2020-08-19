import { pipe, mapValue, parseArray, parseSingle, toCSSRule, child } from './parsers'
import { CCSSProps, CCSSParser } from './types'
import { mergeDeep, toCamelCase } from './utils'

type PropTable = [string, string, string, CCSSParser?, CCSSParser?][]

export const getPropTable = (): PropTable => {
    return [
        // SVG presentational attributes
        ['ab', 'align-b', 'alignment-baseline'],
        ['bls', 'bl-shift', 'baseline-shift'],
        ['cpr', 'clip-r', 'clip-rule'],
        ['cif', 'color-i-f', 'color-interpolation-filters'],
        ['ci', 'color-i', 'color-interpolation'],
        ['cpf', 'color-p', 'color-profile'],
        ['crd', 'color-r', 'color-rendering'],
        ['db', 'dom-base', 'dominant-baseline'],
        ['eb', 'enable-bg', 'enable-background'],
        ['fo', 'fill-op', 'fill-opacity'],
        ['fr', 'fill-rule', 'fill-rule'],
        ['fi', 'fill', 'fill', mapValue],
        ['fdc', 'flood-c', 'flood-color', mapValue],
        ['fdo', 'flood-o', 'flood-opacity'],
        ['fsa', 'font-s-a', 'font-size-adjust'],
        ['goh', 'glyph-o-h', 'glyph-orientation-horizontal'],
        ['ir', 'img-r', 'image-rendering'],
        ['k', 'kern', 'kerning'],
        ['lc', 'l-color', 'lighting-color', mapValue],
        ['me', 'm-end', 'marker-end'],
        ['mm', 'm-mid', 'marker-mid'],
        ['ms', 'm-start', 'marker-start'],
        ['msk', 'mask', 'mask'],
        ['sr', 'shape-rdr', 'shape-rendering'],
        ['sc', 'stop-c', 'stop-color'],
        ['sda', 'stroke-da', 'stroke-dasharray'],
        ['sdo', 'stroke-do', 'stroke-dashoffset'],
        ['slc', 'stroke-lc', 'stroke-linecap'],
        ['slj', 'stroke-lj', 'stroke-linejoin'],
        ['sml', 'stroke-ml', 'stroke-miterlimit'],
        ['sop', 'stroke-o', 'stroke-opacity'],
        ['swt', 'stroke-w', 'stroke-width'],
        ['st', 'stroke', 'stroke'],
        ['txa', 'txt-anchor', 'text-anchor'],
        ['txr', 'txt-render', 'text-rendering'],
        ['ub', 'uni-bidi', 'unicode-bidi'],
        ['wm', 'writing', 'writing-mode'],

        // Animation + 3D
        ['a', 'anim', 'animation'],
        ['ad', 'anim-del', 'animation-delay', mapValue],
        ['aDir', 'anim-dir', 'animation-direction', mapValue],
        ['aD', 'anim-dur', 'animation-duration', mapValue],
        ['afm', 'anim-fill', 'animation-fill-mode', mapValue],
        ['aic', 'anim-count', 'animation-iteration-count'],
        ['an', 'anim-name', 'animation-name'],
        ['aps', 'anim-state', 'animation-play-state', mapValue],
        ['ats', 'anim-timing', 'animation-timing-function', mapValue],
        ['bv', 'bf-visibility', 'backface-visibility', mapValue],
        ['per', 'pers', 'perspective'],
        ['pero', 'pers-org', 'perspective-origin'],
        ['tf', 'tran', 'transform'],
        ['tfo', 'tran-org', 'transform-origin'],
        ['tfs', 'tran-style', 'transform-style'],
        ['tr', 'trans', 'transition', mapValue],
        ['trD', 'trans-del', 'transition-delay', mapValue],
        ['trd', 'trans-dur', 'transition-duration', mapValue],
        ['trp', 'trans-prop', 'transition-property'],
        ['trt', 'trans-timing', 'transition-timing-function'],

        // Flex
        ['f', 'fx', 'flex'],
        ['fd', 'fx-dir', 'flex-direction', mapValue],
        ['fw', 'fx-wrap', 'flex-wrap', mapValue],
        ['fb', 'fx-base', 'flex-basis', parseSingle],
        ['ff', 'fx-flow', 'flex-flow'],
        ['fg', 'fx-grow', 'flex-grow'],
        ['fs', 'fx-shrink', 'flex-shrink'],
        ['ai', 'al-items', 'align-items', mapValue],
        ['ac', 'al-content', 'align-content', mapValue],
        ['ji', 'just-items', 'justify-items', mapValue],
        ['jc', 'just-content', 'justify-content', mapValue],
        ['aS', 'al-self', 'align-self', mapValue],
        ['jS', 'just-self', 'justify-self', mapValue],

        // Font + text related
        ['ft', 'ft', 'font'],
        ['ftf', 'ft-family', 'font-family', mapValue],
        ['ftk', 'ft-kern', 'font-kerning'],
        ['fts', 'ft-size', 'font-size', mapValue, parseSingle],
        ['ftStr', 'ft-stretch', 'font-stretch', mapValue],
        ['ftSty', 'ft-style', 'font-style', mapValue],
        ['ftv', 'ft-variant', 'font-variant', mapValue],
        ['ftw', 'ft-weight', 'font-weight', mapValue],
        ['ls', 'ltr-spacing', 'letter-spacing', parseSingle],
        ['lh', 'line-h', 'line-height'],

        ['ta', 'txt-align', 'text-align', mapValue],
        ['td', 'txt-decor', 'text-decoration', mapValue],
        ['ti', 'txt-in', 'text-indent', parseSingle],
        ['to', 'txt-flow', 'text-overflow', mapValue],
        ['ts', 'txt-shad', 'text-shadow'],
        ['tt', 'txt-tranf', 'text-transform', mapValue],

        ['va', 'v-align', 'vertical-align', mapValue],
        ['ws', 'w-space', 'white-space', mapValue],
        ['wb', 'w-break', 'word-break', mapValue],
        ['wS', 'w-spacing', 'word-spacing', parseSingle],
        ['ww', 'w-wrap', 'word-wrap', mapValue],

        // List
        ['l', 'list', 'list-style', mapValue],
        ['li', 'list-img', 'list-style-image'],
        ['lp', 'list-pos', 'list-style-position'],
        ['lt', 'list-type', 'list-style-type', mapValue],

        // Margin
        ['m', 'mar', 'margin', parseArray],
        ['mT', 'mar-top', 'margin-top', parseSingle],
        ['mR', 'mar-right', 'margin-right', parseSingle],
        ['mB', 'mar-bottom', 'margin-bottom', parseSingle],
        ['mL', 'mar-left', 'margin-left', parseSingle],

        // Padding
        ['p', 'pad', 'padding', parseArray],
        ['pT', 'pad-top', 'padding-top', parseSingle],
        ['pR', 'pad-right', 'padding-right', parseSingle],
        ['pB', 'pad-bottom', 'padding-bottom', parseSingle],
        ['pL', 'pad-left', 'padding-left', parseSingle],

        // Background
        ['bg', 'bg', 'background', mapValue, parseArray],
        ['bgi', 'bg-img', 'background-image', mapValue],
        ['bgc', 'bg-color', 'background-color', mapValue],
        ['bgs', 'bg-size', 'background-size', mapValue, parseArray],
        ['bgr', 'bg-repeat', 'background-repeat', mapValue],
        ['bgp', 'bg-pos', 'background-position', mapValue, parseArray],
        ['bga', 'bg-attach', 'background-attachment', mapValue],
        ['bgbm', 'bg-blend', 'background-blend-mode', mapValue],
        ['bgC', 'bg-clip', 'background-clip', mapValue, parseArray],
        ['bgo', 'bg-org', 'background-origin', mapValue],
        ['bf', 'bd-filter', 'backdrop-filter'],

        // Dimension
        ['w', 'wid', 'width', mapValue, parseSingle],
        ['h', 'hei', 'height', mapValue, parseSingle],
        ['minW', 'min-wid', 'min-width', mapValue, parseSingle],
        ['minH', 'min-hei', 'min-height', mapValue, parseSingle],
        ['maxW', 'max-wid', 'max-width', mapValue, parseSingle],
        ['maxH', 'max-hei', 'max-height', mapValue, parseSingle],

        // Grid
        ['g', 'grd', 'grid'],
        ['ga', 'gr-area', 'grid-area'],
        ['gac', 'gr-auto-cols', 'grid-auto-columns', parseArray],
        ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
        ['gar', 'gr-auto-rows', 'grid-auto-rows', parseArray],
        ['gc', 'gr-col', 'grid-column', parseArray],
        ['gce', 'gr-col-end', 'grid-column-end'],
        ['gcg', 'gr-col-gap', 'grid-column-gap', parseSingle],
        ['gcs', 'gr-col-start', 'grid-column-start'],
        ['gg', 'gr-gap', 'grid-gap', parseArray],
        ['gr', 'gr-row', 'grid-row', parseArray],
        ['gre', 'gr-row-end', 'grid-row-end'],
        ['grg', 'gr-row-gap', 'grid-row-gap', parseSingle],
        ['grs', 'gr-row-start', 'grid-row-start'],
        ['gt', 'gr-tmpl', 'grid-template'],
        ['gta', 'gr-areas', 'grid-template-areas'],
        ['gtc', 'gr-cols', 'grid-template-columns', parseArray],
        ['gtr', 'gr-rows', 'grid-template-rows', parseArray],

        // Border
        ['b', 'bd', 'border', parseArray],
        ['bB', 'bd-bot', 'border-bottom', parseArray],
        ['bBc', 'bd-bot-color', 'border-bottom-color'],
        ['bBlr', 'bd-bot-left-radius', 'border-bottom-left-radius', parseSingle],
        ['bBrr', 'bd-bot-right-radius', 'border-bottom-right-radius', parseSingle],
        ['bBs', 'bd-bot-style', 'border-bottom-style'],
        ['bBw', 'bd-bot-wid', 'border-bottom-width', parseSingle],
        ['bC', 'bd-coll', 'border-collapse'],
        ['bc', 'bd-color', 'border-color', mapValue],
        ['bi', 'bd-img', 'border-image', mapValue],
        ['bio', 'bd-img-outset', 'border-image-outset'],
        ['bir', 'bd-img-repeat', 'border-image-repeat'],
        ['bis', 'bd-img-slice', 'border-image-slice'],
        ['biSrc', 'bd-img-src', 'border-image-source'],
        ['biw', 'bd-img-width', 'border-image-width', parseSingle],
        ['bL', 'bd-left', 'border-left', parseArray],
        ['bLc', 'bd-left-color', 'border-left-color', mapValue],
        ['bLs', 'bd-left-style', 'border-left-style'],
        ['bLw', 'bd-left-width', 'border-left-width', parseSingle],
        ['br', 'bd-radius', 'border-radius', mapValue, parseArray],
        ['bR', 'bd-right', 'border-right', parseArray],
        ['bRc', 'bd-right-color', 'border-right-color', mapValue],
        ['bRs', 'bd-right-style', 'border-right-style'],
        ['bRw', 'bd-right-width', 'border-right-width', parseSingle],
        ['bs', 'bd-spacing', 'border-spacing'],
        ['bS', 'bd-style', 'border-style'],
        ['bT', 'bd-top', 'border-top', parseArray],
        ['bTc', 'bd-top-color', 'border-top-color', mapValue],
        ['bTlr', 'bd-top-left-radius', 'border-top-left-radius', mapValue, parseSingle],
        ['bTrr', 'bd-top-right-radius', 'border-top-right-radius', mapValue, parseSingle],
        ['bTs', 'bd-top-style', 'border-top-style'],
        ['bTw', 'bd-top-width', 'border-top-width', parseSingle],
        ['bw', 'bd-width', 'border-width', parseArray],

        // Clip
        ['clip', 'clip', 'clip', parseArray],
        ['clipPath', 'clip-path', 'clip-path'],

        // General
        ['d', 'dsp', 'display', mapValue],
        ['P', 'pos', 'position', mapValue],
        ['T', 'top', 'top', parseSingle],
        ['R', 'right', 'right', parseSingle],
        ['B', 'bottom', 'bottom', parseSingle],
        ['L', 'left', 'left', parseSingle],
        ['zi', 'z-index', 'z-index'],
        ['c', 'color', 'color', mapValue],
        ['o', 'over', 'overflow', mapValue],
        ['ox', 'over-x', 'overflow-x', mapValue],
        ['oy', 'over-y', 'overflow-y', mapValue],
        ['oa', 'over-a', 'overflow-anchor', mapValue],
        ['fl', 'float', 'float', mapValue],
        ['clr', 'clr', 'clear', mapValue],
        ['v', 'visibility', 'visibility', mapValue],

        // Columns
        ['col', 'col', 'columns'],
        ['cc', 'col-count', 'column-count'],
        ['cf', 'col-fill', 'column-fill'],
        ['cg', 'col-gap', 'column-gap', parseSingle],
        ['cr', 'col-rule', 'column-rule'],
        ['crc', 'col-rule-color', 'column-rule-color', mapValue],
        ['crs', 'col-rule-style', 'column-rule-style'],
        ['crw', 'col-rule-width', 'column-rule-width', parseSingle],
        ['cs', 'col-span', 'column-span'],
        ['cw', 'col-width', 'column-width', parseSingle],
        ['pba', 'pb-after', 'page-break-after'],
        ['pbb', 'pb-before', 'page-break-before'],
        ['pbi', 'pb-inside', 'page-break-inside'],

        // Box
        ['shd', 'shadow', 'box-shadow', mapValue, parseArray],
        ['siz', 'sizing', 'box-sizing', mapValue],

        // Misc
        ['cn', 'cont', 'contain', mapValue],
        ['dir', 'dir', 'direction', mapValue],
        ['of', 'obj-fit', 'object-fit', mapValue],
        ['oP', 'obj-pos', 'object-position'],
        ['op', 'opacity', 'opacity', mapValue],
        ['or', 'order', 'order'],
        ['ol', 'outline', 'outline'],
        ['mbm', 'blend-mode', 'mix-blend-mode', mapValue],
        ['ct', 'content', 'content'],
        ['cur', 'cur', 'cursor', mapValue],
        ['pe', 'p-events', 'pointer-events', mapValue],
        ['fil', 'filter', 'filter'],
        ['sb', 's-behavior', 'scroll-behavior', mapValue],
        ['sw', 's-width', 'scrollbar-width', mapValue],
        ['sh', 's-height', 'scrollbar-height', mapValue],
        ['us', 'u-select', 'user-select', mapValue],
        ['carc', 'car-color', 'caret-color', mapValue],

        // Webkit
        ['wtc', 'webkit-touch-callout', '-webkit-touch-callout', mapValue],
        ['wos', 'webkit-overflow-scrolling', '-webkit-overflow-scrolling', mapValue],
        ['wthc', 'webkit-tap-highlight-color', '-webkit-tap-highlight-color', mapValue],
        ['wtfc', 'webkit-text-fill-color', '-webkit-text-fill-color', mapValue],
        ['wud', 'webkit-user-drag', '-webkit-user-drag', mapValue],
        ['wbf', 'webkit-backdrop-filter', '-webkit-backdrop-filter']
    ]
}

const getPropTableObject = () => {
    const tableObject = {} as Partial<CCSSProps & { _propTable: PropTable }>
    const table = getPropTable()
    tableObject._propTable = table

    for (const [short, light, long, ...modifiers] of table) {
        const longCamel = toCamelCase(long)
        const lightCamel = toCamelCase(light)
        tableObject[short] = modifiers.length
            ? pipe(...(modifiers as CCSSParser[]), toCSSRule(long, longCamel))
            : toCSSRule(long, longCamel)
        const thatFn = function (this: CCSSProps, a, b, c, d, e, f, g, h) {
            return this[short](a, short, c, d, e, f, g, h)
        }
        tableObject[lightCamel] = tableObject[lightCamel] || thatFn
        tableObject[longCamel] = tableObject[longCamel] || thatFn
    }

    return tableObject
}

export const createProps = <T>(overrides?: T & Partial<CCSSProps>): T & Partial<CCSSProps> => {
    const table = getPropTableObject()
    // Customs
    Object.assign(table, {
        raw: i => i,
        child
    })
    return overrides !== undefined ? mergeDeep(table, overrides) : table
}
