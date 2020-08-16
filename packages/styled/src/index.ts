import { CCSSProps, CCSSPrivateFunction, defaultOptions } from '@cryptic-css/core'
import styled from 'styled-components'

const s = styled

const noop = () => {}

const isNative = (typeof navigator != 'undefined' && navigator.product == 'ReactNative')
const defaultTag = isNative ? 'View' : 'div'

// Do not use deprecated stuff please
const skipNativeTags = ['DatePickerIOS', 'DatePickerAndroid']

const isSupportedTag = (s, tag) => {
    if (!isNative) return true
    else if (skipNativeTags.includes(tag)) {
        return false
    }

    try {
        s[tag]('')
        return
    } catch {
        return false
    }
}

export const createStyledCCSS = ({ defaultProps = undefined, ...rest }) => {
    const __ccss = rest.__ccss as CCSSPrivateFunction
    const props = rest.props as CCSSProps

    // Handle React stuff!
    // @ts-ignore
    props.theme = props.theme || noop
    // @ts-ignore
    props.children = props.children || noop

    const Ui = s[defaultTag](__ccss)
    Ui.defaultProps = defaultProps
    const tagged = (tag = defaultTag) => (p: CCSSProps) => {
        const css = __ccss(p)
        return s[tag]<CCSSProps>(() => css, __ccss)
    }
    const ccssd = tagged(defaultTag)

    // Recreates supported HTML tags (eg: Ui.section, Ui.ul)
    // eslint-disable-next-line no-restricted-syntax
    for (const tag in styled) {
        if (Object.prototype.hasOwnProperty.call(styled, tag) && isSupportedTag(s, tag)) {
            try {
                Ui[tag] = s[tag](__ccss)
                Ui[tag].defaultProps = defaultProps
                ccssd[tag] = tagged(tag)
                ccssd[tag].defaultProps = defaultProps
            }
        }
    }
    return {
        Ui,
        ccssd,
        ccss: __ccss
    }
}

const defaultStyled = createStyledCCSS(defaultOptions)

export const ccss = defaultStyled.ccss
export const Ui = defaultStyled.Ui
export const ccssd = defaultStyled.ccssd

export * from 'styled-components'
export { default } from 'styled-components'
export * from '@cryptic-css/core'
