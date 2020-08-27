import React, {FC, ComponentType, ReactElement} from 'react'
import { CCSSProps, CCSSFunction, defaultOptions } from '@cryptic-css/core'
import styled from 'styled-components'


export interface IUi extends FC<CCSSProps> {
    a: (props: CCSSProps & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => ReactElement | null
    abbr: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    address: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    area: (props: CCSSProps & React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>) => ReactElement | null
    article: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    aside: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    audio: (props: CCSSProps & React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>) => ReactElement | null
    b: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    base: (props: CCSSProps & React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>) => ReactElement | null
    bdi: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    bdo: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    big: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    blockquote: (props: CCSSProps & React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    body: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>) => ReactElement | null
    br: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>) => ReactElement | null
    button: (props: CCSSProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => ReactElement | null
    canvas: (props: CCSSProps & React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>) => ReactElement | null
    caption: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    cite: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    code: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    col: (props: CCSSProps & React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>) => ReactElement | null
    colgroup: (props: CCSSProps & React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>) => ReactElement | null
    data: (props: CCSSProps & React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>) => ReactElement | null
    datalist: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>) => ReactElement | null
    dd: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    del: (props: CCSSProps & React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    details: (props: CCSSProps & React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    dfn: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    dialog: (props: CCSSProps & React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>) => ReactElement | null
    div: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => ReactElement | null
    dl: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>) => ReactElement | null
    dt: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    em: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    embed: (props: CCSSProps & React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>) => ReactElement | null
    fieldset: (props: CCSSProps & React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>) => ReactElement | null
    figcaption: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    figure: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    footer: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    form: (props: CCSSProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => ReactElement | null
    h1: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    h2: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    h3: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    h4: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    h5: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    h6: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => ReactElement | null
    head: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>) => ReactElement | null
    header: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    hgroup: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    hr: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>) => ReactElement | null
    html: (props: CCSSProps & React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>) => ReactElement | null
    i: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    iframe: (props: CCSSProps & React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>) => ReactElement | null
    img: (props: CCSSProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => ReactElement | null
    input: (props: CCSSProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => ReactElement | null
    ins: (props: CCSSProps & React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>) => ReactElement | null
    kbd: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    keygen: (props: CCSSProps & React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    label: (props: CCSSProps & React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => ReactElement | null
    legend: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>) => ReactElement | null
    li: (props: CCSSProps & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => ReactElement | null
    link: (props: CCSSProps & React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>) => ReactElement | null
    main: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    map: (props: CCSSProps & React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>) => ReactElement | null
    mark: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    menu: (props: CCSSProps & React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    menuitem: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    meta: (props: CCSSProps & React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>) => ReactElement | null
    meter: (props: CCSSProps & React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    nav: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    noindex: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    noscript: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    object: (props: CCSSProps & React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>) => ReactElement | null
    ol: (props: CCSSProps & React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) => ReactElement | null
    optgroup: (props: CCSSProps & React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>) => ReactElement | null
    option: (props: CCSSProps & React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>) => ReactElement | null
    output: (props: CCSSProps & React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    p: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => ReactElement | null
    param: (props: CCSSProps & React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>) => ReactElement | null
    picture: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    pre: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => ReactElement | null
    progress: (props: CCSSProps & React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>) => ReactElement | null
    q: (props: CCSSProps & React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) => ReactElement | null
    rp: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    rt: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    ruby: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    s: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    samp: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    slot: (props: CCSSProps & React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>) => ReactElement | null
    script: (props: CCSSProps & React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>) => ReactElement | null
    section: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    select: (props: CCSSProps & React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>) => ReactElement | null
    small: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    source: (props: CCSSProps & React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>) => ReactElement | null
    span: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => ReactElement | null
    strong: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    style: (props: CCSSProps & React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>) => ReactElement | null
    sub: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    summary: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    sup: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    table: (props: CCSSProps & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => ReactElement | null
    template: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>) => ReactElement | null
    tbody: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => ReactElement | null
    td: (props: CCSSProps & React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => ReactElement | null
    textarea: (props: CCSSProps & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => ReactElement | null
    tfoot: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => ReactElement | null
    th: (props: CCSSProps & React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>) => ReactElement | null
    thead: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>) => ReactElement | null
    time: (props: CCSSProps & React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    title: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>) => ReactElement | null
    tr: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>) => ReactElement | null
    track: (props: CCSSProps & React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>) => ReactElement | null
    u: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    ul: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => ReactElement | null
    var: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    video: (props: CCSSProps & React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) => ReactElement | null
    wbr: (props: CCSSProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => ReactElement | null
    webview: (props: CCSSProps & React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>) => ReactElement | null

    // SVG
    svg: (props: CCSSProps & React.SVGProps<SVGSVGElement>) => ReactElement | null

    animate: (props: CCSSProps & React.SVGProps<SVGElement>) => ReactElement | null
    animateMotion: (props: CCSSProps & React.SVGProps<SVGElement>) => ReactElement | null
    animateTransform: (props: CCSSProps & React.SVGProps<SVGElement>) => ReactElement | null
    circle: (props: CCSSProps & React.SVGProps<SVGCircleElement>) => ReactElement | null
    clipPath: (props: CCSSProps & React.SVGProps<SVGClipPathElement>) => ReactElement | null
    defs: (props: CCSSProps & React.SVGProps<SVGDefsElement>) => ReactElement | null
    desc: (props: CCSSProps & React.SVGProps<SVGDescElement>) => ReactElement | null
    ellipse: (props: CCSSProps & React.SVGProps<SVGEllipseElement>) => ReactElement | null
    feBlend: (props: CCSSProps & React.SVGProps<SVGFEBlendElement>) => ReactElement | null
    feColorMatrix: (props: CCSSProps & React.SVGProps<SVGFEColorMatrixElement>) => ReactElement | null
    feComponentTransfer: (props: CCSSProps & React.SVGProps<SVGFEComponentTransferElement>) => ReactElement | null
    feComposite: (props: CCSSProps & React.SVGProps<SVGFECompositeElement>) => ReactElement | null
    feConvolveMatrix: (props: CCSSProps & React.SVGProps<SVGFEConvolveMatrixElement>) => ReactElement | null
    feDiffuseLighting: (props: CCSSProps & React.SVGProps<SVGFEDiffuseLightingElement>) => ReactElement | null
    feDisplacementMap: (props: CCSSProps & React.SVGProps<SVGFEDisplacementMapElement>) => ReactElement | null
    feDistantLight: (props: CCSSProps & React.SVGProps<SVGFEDistantLightElement>) => ReactElement | null
    feDropShadow: (props: CCSSProps & React.SVGProps<SVGFEDropShadowElement>) => ReactElement | null
    feFlood: (props: CCSSProps & React.SVGProps<SVGFEFloodElement>) => ReactElement | null
    feFuncA: (props: CCSSProps & React.SVGProps<SVGFEFuncAElement>) => ReactElement | null
    feFuncB: (props: CCSSProps & React.SVGProps<SVGFEFuncBElement>) => ReactElement | null
    feFuncG: (props: CCSSProps & React.SVGProps<SVGFEFuncGElement>) => ReactElement | null
    feFuncR: (props: CCSSProps & React.SVGProps<SVGFEFuncRElement>) => ReactElement | null
    feGaussianBlur: (props: CCSSProps & React.SVGProps<SVGFEGaussianBlurElement>) => ReactElement | null
    feImage: (props: CCSSProps & React.SVGProps<SVGFEImageElement>) => ReactElement | null
    feMerge: (props: CCSSProps & React.SVGProps<SVGFEMergeElement>) => ReactElement | null
    feMergeNode: (props: CCSSProps & React.SVGProps<SVGFEMergeNodeElement>) => ReactElement | null
    feMorphology: (props: CCSSProps & React.SVGProps<SVGFEMorphologyElement>) => ReactElement | null
    feOffset: (props: CCSSProps & React.SVGProps<SVGFEOffsetElement>) => ReactElement | null
    fePointLight: (props: CCSSProps & React.SVGProps<SVGFEPointLightElement>) => ReactElement | null
    feSpecularLighting: (props: CCSSProps & React.SVGProps<SVGFESpecularLightingElement>) => ReactElement | null
    feSpotLight: (props: CCSSProps & React.SVGProps<SVGFESpotLightElement>) => ReactElement | null
    feTile: (props: CCSSProps & React.SVGProps<SVGFETileElement>) => ReactElement | null
    feTurbulence: (props: CCSSProps & React.SVGProps<SVGFETurbulenceElement>) => ReactElement | null
    filter: (props: CCSSProps & React.SVGProps<SVGFilterElement>) => ReactElement | null
    foreignObject: (props: CCSSProps & React.SVGProps<SVGForeignObjectElement>) => ReactElement | null
    g: (props: CCSSProps & React.SVGProps<SVGGElement>) => ReactElement | null
    image: (props: CCSSProps & React.SVGProps<SVGImageElement>) => ReactElement | null
    line: (props: CCSSProps & React.SVGProps<SVGLineElement>) => ReactElement | null
    linearGradient: (props: CCSSProps & React.SVGProps<SVGLinearGradientElement>) => ReactElement | null
    marker: (props: CCSSProps & React.SVGProps<SVGMarkerElement>) => ReactElement | null
    mask: (props: CCSSProps & React.SVGProps<SVGMaskElement>) => ReactElement | null
    metadata: (props: CCSSProps & React.SVGProps<SVGMetadataElement>) => ReactElement | null
    mpath: (props: CCSSProps & React.SVGProps<SVGElement>) => ReactElement | null
    path: (props: CCSSProps & React.SVGProps<SVGPathElement>) => ReactElement | null
    pattern: (props: CCSSProps & React.SVGProps<SVGPatternElement>) => ReactElement | null
    polygon: (props: CCSSProps & React.SVGProps<SVGPolygonElement>) => ReactElement | null
    polyline: (props: CCSSProps & React.SVGProps<SVGPolylineElement>) => ReactElement | null
    radialGradient: (props: CCSSProps & React.SVGProps<SVGRadialGradientElement>) => ReactElement | null
    rect: (props: CCSSProps & React.SVGProps<SVGRectElement>) => ReactElement | null
    stop: (props: CCSSProps & React.SVGProps<SVGStopElement>) => ReactElement | null
    switch: (props: CCSSProps & React.SVGProps<SVGSwitchElement>) => ReactElement | null
    symbol: (props: CCSSProps & React.SVGProps<SVGSymbolElement>) => ReactElement | null
    text: (props: CCSSProps & React.SVGProps<SVGTextElement>) => ReactElement | null
    textPath: (props: CCSSProps & React.SVGProps<SVGTextPathElement>) => ReactElement | null
    tspan: (props: CCSSProps & React.SVGProps<SVGTSpanElement>) => ReactElement | null
    use: (props: CCSSProps & React.SVGProps<SVGUseElement>) => ReactElement | null
    view: (props: CCSSProps & React.SVGProps<SVGViewElement>) => ReactElement | null
}

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

export const createStyledCCSS = ({ defaultProps = undefined, ...rest }): {
    Ui: IUi,
    ccssd: any,
    ccss: any
} => {
    const __ccss = rest.__ccss as CCSSFunction
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
                // @ts-ignore
                Ui[tag].defaultProps = defaultProps
                ccssd[tag] = tagged(tag)
                ccssd[tag].defaultProps = defaultProps
            } catch(e) {
                console.log(e)
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
