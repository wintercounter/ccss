/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import scssfmt from 'scssfmt'
import CodeBlock from '@theme/CodeBlock'

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

const assignee = {
    ...rest,
    CCSS: ccss,
    ccss: (p) => {
        const output = scssfmt(ccss(p))
        return p.hasOwnProperty('children') ? output : <CodeBlock className="scss">{output}</CodeBlock>
    },
    styled,
    ccssd,
    Ui,
    options,
    formatCSS: scssfmt
}

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ...assignee
}

export default ReactLiveScope
