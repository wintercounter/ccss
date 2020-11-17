import { createCreator } from '@/factory'

import defaultCCSS from '@cryptic-css/core'
import styled from 'styled-components'

export const createStyledCCSS = createCreator(styled)

const defaultStyled = createStyledCCSS(defaultCCSS)

export const ccss = defaultCCSS
export const Ui = defaultStyled.Ui
export const ccssd = defaultStyled.ccssd

export * from '@/factory'
export * from 'styled-components'
export * from '@cryptic-css/core'
export { default } from 'styled-components'
