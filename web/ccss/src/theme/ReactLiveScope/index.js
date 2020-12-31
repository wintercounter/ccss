/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'

import scssfmt from 'scssfmt'
import CodeBlock from '@theme/CodeBlock'
import { ccss, Ui, styled } from '../../js/ui'

const assignee = {
    CCSS: ccss,
    ccss: (p) => {
        const output = scssfmt(ccss(p))
        return p.hasOwnProperty('children') ? output : <CodeBlock className="scss">{output}</CodeBlock>
    },
    styled,
    Ui,
    options: ccss.options,
    formatCSS: scssfmt
}

// Add react-live imports you need here
const ReactLiveScope = {
    React,
    ...React,
    ...assignee
}

export default ReactLiveScope
