import { CCSSProps, CCSSTransformedFn } from '@cryptic-css/core'
// @ts-ignore
import { StyledComponent, StyledProps, ThemeProviderProps, StyledInterface } from '@types/styled-components'

export type UiProps = StyledProps<CCSSProps>
export type UiPropsWithThemeProviderProps = UiProps & { children: ThemeProviderProps<any>["children"] }
export type UiComponent = StyledComponent<'div', any, UiProps>
export type UiComponentFactories = {
    [TTag in keyof JSX.IntrinsicElements]: StyledComponent<TTag, any, UiProps>
}

export type UiType = UiComponent & UiComponentFactories

const noop = () => {}

// For these we will let through width and height
const widthHeight = ['w', 'h', 'width', 'height']
const exceptionalTags = {
    svg: widthHeight,
    img: widthHeight,
    object: widthHeight,
    iframe: widthHeight,
    canvas: widthHeight,
    embed: widthHeight,
    video: widthHeight,
    input: widthHeight
}

const shouldForwardProp = (transformedFn, exceptions?) => (prop) => {
    return (
        (exceptions && exceptions.includes(prop)) ||
        prop === 'children' ||
        prop === 'theme' ||
        !transformedFn.registry.has(prop) ||
        transformedFn.registry.get(prop).htmlAttr
    )
}

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

const preserveStyledProps = (target: UiPropsWithThemeProviderProps, source: UiPropsWithThemeProviderProps) => {
    target.theme = source.theme
    target.children = source.children

    return target
}

const preservePropsOnCCss = (input, prop, transformedFn, inputObject) => {
    return preserveStyledProps(input, inputObject)
};

const preservePropsOnChild = (input, prop, transformedFn, inputObject) => {
    for (const k in inputObject.child) {
        if (inputObject.child.hasOwnProperty(k)) {
            preserveStyledProps(inputObject.child[k], inputObject)
        }
    }

    return inputObject
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
) => (transformedFn: CCSSTransformedFn, id = 0) => {
    const { defaultProps = undefined } = transformedFn.options
    const defaultTag = isNative ? 'View' : 'div'

    // Just don't do anything with styled stuff
    transformedFn
        .setProps([
            [['theme', 'children'], null, [noop], { ccssContext: false }],
            [['ccss', 'css'], null, [preservePropsOnCCss, '...'], { ccssContext: false }],
            [['child'], null, [preservePropsOnChild, '...'], { ccssContext: false }]
        ])

    const Ui = styled[defaultTag].withConfig({
        componentId: `sc-ui${id}`,
        displayName: 'Ui',
        shouldForwardProp: shouldForwardProp(transformedFn)
    })(transformedFn)
    Ui.defaultProps = defaultProps

    // Recreates supported HTML tags (eg: Ui.section, Ui.ul)
    // eslint-disable-next-line no-restricted-syntax
    for (const tag in styled) {
        if (Object.prototype.hasOwnProperty.call(styled, tag) && isSupportedTag(styled, tag, isNative)) {
            try {
                Ui[tag] = styled[tag].withConfig({
                    componentId: `sc-${tag}${id}`,
                    displayName: `Ui.${tag}`,
                    shouldForwardProp: shouldForwardProp(transformedFn, exceptionalTags[tag])
                })(transformedFn)
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
