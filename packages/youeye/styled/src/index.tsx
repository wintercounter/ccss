import { createCreator } from '@/factory'

import defaultCCSS from '@cryptic-css/core'
import styled from 'styled-components'

export const createStyledCCSS = createCreator(styled)

const defaultStyled = createStyledCCSS(defaultCCSS)

export const ccss = defaultCCSS
// Keep for backward compatibility
export const Ui = defaultStyled.Ui
export const $ = defaultStyled.Ui

export * from '@/factory'
export * from 'styled-components'
export * from '@cryptic-css/core'
export { default as styled } from 'styled-components'

export default $
