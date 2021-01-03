import { createCreator } from '@/factory'

import defaultCCSS from '@cryptic-css/core'
import styled from 'styled-components/native'

export const createStyledCCSS = createCreator(styled, true)

const defaultStyled = createStyledCCSS(defaultCCSS)

export const ccss = defaultStyled.ccss
export const Ui = defaultStyled.Ui

export * from '@/factory'
export * from 'styled-components/native'
export * from '@cryptic-css/core'
export { default } from 'styled-components/native'
