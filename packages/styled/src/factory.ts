import { CCSSProps, CCSSTransformedFn } from '@cryptic-css/core'
// @ts-ignore
import { StyledComponent, StyledProps, StyledInterface } from '@types/styled-components'

export type UiProps = StyledProps<CCSSProps>
export type UiComponent = StyledComponent<'div', any, UiProps>
export type UiComponentFactories = {
    [TTag in keyof JSX.IntrinsicElements]: StyledComponent<TTag, any, UiProps>
}

export type UiType = UiComponent & UiComponentFactories

const noop = () => {}

// Do not use deprecated stuff please
const skipNativeTags = ['DatePickerIOS', 'DatePickerAndroid']

const isSupportedTag = (styled, tag, isNative) => {
    if (!isNative) return true
    else if (skipNativeTags.includes(tag)) {
        return false
    }

    // Non supported tags will simply fail to initialize
    try {
        styled[tag]('')
        return true
    } catch {
        return false
    }
}

type StyledCCSS = {
    Ui: UiType
    ccss: CCSSTransformedFn
}

type CreateStyledCCSS = (transformedFn: CCSSTransformedFn) => StyledCCSS

interface CreateCreator {
    (styled: StyledInterface, isNative?: boolean): CreateStyledCCSS
}

export const createCreator: CreateCreator = (
    styled,
    isNative = typeof navigator != 'undefined' && navigator.product == 'ReactNative'
) => (transformedFn: CCSSTransformedFn) => {
    const { defaultProps = undefined } = transformedFn.options
    const defaultTag = isNative ? 'View' : 'div'

    // Just don't do anything with styled stuff
    transformedFn.setProps([[['theme', 'children'], null, [noop], { ccssContext: false }]])

    const Ui = styled[defaultTag](transformedFn)
    Ui.defaultProps = defaultProps

    // Recreates supported HTML tags (eg: Ui.section, Ui.ul)
    // eslint-disable-next-line no-restricted-syntax
    for (const tag in styled) {
        if (Object.prototype.hasOwnProperty.call(styled, tag) && isSupportedTag(styled, tag, isNative)) {
            try {
                Ui[tag] = styled[tag](transformedFn)
                // @ts-ignore
                Ui[tag].defaultProps = defaultProps
            } catch {}
        }
    }

    return {
        Ui,
        ccss: transformedFn
    }
}
