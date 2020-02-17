import React from 'react'
import scssfmt from 'scssfmt'
import CodeBlock from '../../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index'

// Extend live code's scope
import * as ccssAll from 'cryptic-css'
import styled, { ccssd, Ui } from '@cryptic-css/styled-components'

const { default: ccss, ...rest } = ccssAll

React.ccss = p => {
    const output = scssfmt(ccss(p))
    return p.hasOwnProperty('children') ? output : <CodeBlock className="scss">{output}</CodeBlock>
}

ccssAll.setOptions({
    unit: 'px'
})

Object.assign(React, rest)
Object.assign(React, {
    styled,
    ccssd,
    Ui
})
