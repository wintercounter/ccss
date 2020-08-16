import React from 'react'
import scssfmt from 'scssfmt'
import CodeBlock from '../../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index'

// Extend live code's scope
import * as ccssAll from '@cryptic-css/styled'

const { default: styled, ...rest } = ccssAll

const options = rest.createOptions({
    unit: 'px'
})
rest.createCCSS(options)
const { ccss, Ui, ccssd } = rest.createStyledCCSS(options)

Object.assign(window, rest)

window.CCSS = ccss
window.ccss = p => {
    const output = scssfmt(ccss(p))
    return p.hasOwnProperty('children') ? output : <CodeBlock className="scss">{output}</CodeBlock>
}

Object.assign(window, {
    styled,
    ccssd,
    Ui,
    options
})
