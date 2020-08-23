import React from 'react'
import scssfmt from 'scssfmt'
import CodeBlock from '../../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index'

// Extend live code's scope
import * as ccssAll from '@cryptic-css/styled'
import applyPropMid from '@cryptic-css/prop-mid'
import applyPropMq from '@cryptic-css/prop-mq'
import applyPropScroll from '@cryptic-css/prop-scroll'
import applyPropKeyframes from '@cryptic-css/prop-keyframes'
import applyPluginGutter from '@cryptic-css/plugin-gutter'
import applyPluginRatio from '@cryptic-css/plugin-ratio'

const { default: styled, ...rest } = ccssAll

const options = rest.createOptions({
    unit: 'px'
})
rest.createCCSS(options)
const { ccss, Ui, ccssd } = rest.createStyledCCSS(options)
applyPropMid(options)
applyPropMq(options)
applyPropScroll(options)
applyPropKeyframes(options)
applyPluginGutter(options)
applyPluginRatio(options)

Object.assign(window, rest)

window.CCSS = ccss
window.ccss = (p) => {
    const output = scssfmt(ccss(p))
    return p.hasOwnProperty('children') ? output : <CodeBlock className="scss">{output}</CodeBlock>
}

Object.assign(window, {
    styled,
    ccssd,
    Ui,
    options,
    formatCSS: scssfmt
})
