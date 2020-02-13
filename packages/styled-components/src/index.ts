import ccss, { ICCSSProps } from '@cryptic-css/core'
import styled from 'styled-components'

const s = styled

export const Ui = s.div(ccss)

const tagged = (tag = 'div') => (p: ICCSSProps) => {
    const css = ccss(p)
    return s[tag]<ICCSSProps>(() => css, ccss)
}

export const ccssd = tagged('div')

// Recreates supported HTML tags (eg: Ui.section, Ui.ul)
// eslint-disable-next-line no-restricted-syntax
for (const tag in styled) {
    if (Object.prototype.hasOwnProperty.call(styled, tag)) {
        Ui[tag] = s[tag](ccss)
        ccssd[tag] = tagged(tag)
    }
}

export { ccss }
export * from 'styled-components'
export { default } from 'styled-components'
