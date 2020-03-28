import { pipe, mapValue, parseArray, parseSingle, toCSSRule, child } from './parsers'
import { CCSSProps, CCSSParser } from './types'
import { mergeDeep, toCamelCase } from './utils'

export const getPropTable = (): [string, string, string, CCSSParser?, CCSSParser?][] => {
    return [
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
        ['bg', 'bg', 'background', mapValue],
        ['bgi', 'bg-img', 'background-image', mapValue],
        ['bgc', 'bg-color', 'background-color', mapValue],
        ['bgs', 'bg-size', 'background-size', mapValue],
        ['bgr', 'bg-repeat', 'background-repeat', mapValue],
        ['bgp', 'bg-pos', 'background-position', mapValue],
        ['bga', 'bg-attach', 'background-attachment', mapValue],
        ['bgbm', 'bg-blend', 'background-blend-mode', mapValue],
        ['bgC', 'bg-clip', 'background-clip', mapValue],
        ['bgo', 'bg-org', 'background-origin', mapValue],

        // Dimension
        ['w', 'wid', 'width', mapValue, parseSingle],
        ['h', 'hei', 'height', mapValue, parseSingle],
        ['minW', 'min-wid', 'min-width', mapValue, parseSingle],
        ['minH', 'min-hei', 'min-height', mapValue, parseSingle],
        ['maxW', 'max-wid', 'max-width', mapValue, parseSingle],
        ['maxH', 'max-hei', 'max-height', mapValue, parseSingle],

        // Grid
        ['g', 'gr', 'grid'],
        ['ga', 'gr-area', 'grid-area'],
        ['gac', 'gr-auto-cols', 'grid-auto-columns'],
        ['gaf', 'gr-auto-flow', 'grid-auto-flow'],
        ['gar', 'gr-auto-rows', 'grid-auto-rows'],
        ['gc', 'gr-col', 'grid-column'],
        ['gce', 'gr-col-end', 'grid-column-end'],
        ['gcg', 'gr-col-gap', 'grid-column-gap', parseSingle],
        ['gcs', 'gr-col-start', 'grid-column-start'],
        ['gg', 'gr-gap', 'grid-gap', parseArray],
        ['gr', 'gr-row', 'grid-row'],
        ['gre', 'gr-row-end', 'grid-row-end'],
        ['grg', 'gr-row-gap', 'grid-row-gap', parseSingle],
        ['grs', 'gr-row-start', 'grid-row-start'],
        ['gt', 'gr-tmpl', 'grid-template'],
        ['gta', 'gr-areas', 'grid-template-areas'],
        ['gtc', 'gr-cols', 'grid-template-columns', parseArray],
        ['gtr', 'gr-rows', 'grid-template-rows', parseArray],

        // Border
        ['b', 'bd', 'border'],
        ['bB', 'bd-bot', 'border-bottom'],
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
        ['bL', 'bd-left', 'border-left'],
        ['bLc', 'bd-left-color', 'border-left-color', mapValue],
        ['bLs', 'bd-left-style', 'border-left-style'],
        ['bLw', 'bd-left-width', 'border-left-width'],
        ['br', 'bd-radius', 'border-radius', mapValue, parseSingle],
        ['bR', 'bd-right', 'border-right'],
        ['bRc', 'bd-right-color', 'border-right-color', mapValue],
        ['bRs', 'bd-right-style', 'border-right-style'],
        ['bRw', 'bd-right-width', 'border-right-width', parseSingle],
        ['bs', 'bd-spacing', 'border-spacing'],
        ['bS', 'bd-style', 'border-style'],
        ['bT', 'bd-top', 'border-top'],
        ['bTc', 'bd-top-color', 'border-top-color', mapValue],
        ['bTlr', 'bd-top-left-radius', 'border-top-left-radius', mapValue, parseSingle],
        ['bTrr', 'bd-top-right-radius', 'border-top-right-radius', mapValue, parseSingle],
        ['bTs', 'bd-top-style', 'border-top-style'],
        ['bTw', 'bd-top-width', 'border-top-width', parseSingle],
        ['bw', 'bd-width', 'border-width', parseSingle],

        // Clip
        ['clip', 'clip', 'clip'],
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
        ['shd', 'shadow', 'box-shadow', mapValue],
        ['siz', 'sizing', 'box-sizing', mapValue],

        // Misc
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
        ['us', 'u-select', 'user-select', mapValue]
    ]
}

const getPropTableObject = () => {
    const tableObject = {} as Partial<CCSSProps>
    const table = getPropTable()

    for (const [short, light, long, ...modifiers] of table) {
        const longCamel = toCamelCase(long)
        const lightCamel = toCamelCase(light)
        tableObject[short] = modifiers.length
            ? pipe(...(modifiers as CCSSParser[]), toCSSRule(long, longCamel))
            : toCSSRule(long, longCamel)
        const thatFn = function(this: CCSSProps, a, b, c, d, e, f, g, h) {
            return this[short](a, short, c, d, e, f, g, h)
        }
        tableObject[lightCamel] = tableObject[lightCamel] || thatFn
        tableObject[longCamel] = tableObject[longCamel] || thatFn
    }

    return tableObject
}

export const createProps = <T>(overrides?: T): T & Partial<CCSSProps> => {
    const table = getPropTableObject()
    // Customs
    Object.assign(table, {
        raw: i => i,
        child
    })
    return overrides !== undefined ? mergeDeep(table, overrides) : table
}
