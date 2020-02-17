import React from 'react'
import scssfmt from 'scssfmt'

// Extend live code's scope
import * as ccssAll from 'cryptic-css'
import styled, { ccssd, Ui } from '@cryptic-css/styled-components'

const { default: ccss, ...rest } = ccssAll

window.transformCode = (...args) => {
    console.log('t code', args)
    return ''
}

React.ccss = (...args) => {
    const output = scssfmt(ccss(...args))
    return output
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
