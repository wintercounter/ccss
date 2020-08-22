import { Properties as CSSProperties } from 'csstype'
export declare type StringTransformer = (generated: string, descriptor: string) => string
export declare type ObjectTransformer = (generated: CSSProperties, descriptor: CSSProperties) => CSSProperties
export declare type CCSSInput = any
export declare type CCSSFunction = (input: CCSSProps) => string | CSSProperties
export declare type CCSSToCSSRule = (
    cssProp: string,
    objectProp: string,
    input: CCSSInput,
    prop: string,
    options: CCSSOptions
) => CSSProperties | string
export declare type CCSSToPseudoChild = (
    input: CCSSInput,
    prop: string,
    options: CCSSOptions
) => CSSProperties | CCSSInput
export interface CCSSDefaultOutputFunction {
    (): Object
    (): string
}
export interface CCSSOutputTransformer {
    (generated: string, descriptor: string): string
    (generated: CSSProperties, descriptor: CSSProperties): CSSProperties
    toCSSRule: CCSSToCSSRule
    defaultOutput: CCSSDefaultOutputFunction
    toChild: CCSSToPseudoChild
    unsupportedHandler: (generated: any, input: any, prop: any) => Object | string
}
export interface CCSSOptions {
    [key: string]: any
    /**
     * Unit to use globally for number values.
     */
    unit: string
    /**
     * Function the applies unit to a value
     */
    applyUnit: (value: number) => string
    /**
     * Tells how to transform the final output
     */
    outputTransformer: CCSSOutputTransformer
    /**
     * All supported properties
     */
    props: Partial<CCSSProps>
    /**
     * Keys and values to `mapValue` against
     */
    valueMap: Partial<CCSSValueMap>
    /**
     * Map of supported pseudo selectors
     */
    pseudoMap: Partial<CCSSPseudoMap>
    __ccss: CCSSFunction
}
export declare type CCSSParser = (
    input: CCSSInput,
    prop: string,
    options: CCSSOptions,
    original?: CCSSInput
) => CCSSInput
export declare type CCSSPipe = (...fn: CCSSParser[]) => CCSSParser
export declare type CCSSValueMap = {
    [key: string]: any
}
export declare type CCSSPseudoMap = {
    [key: string]: string
}
export declare type CCSSPropValue = string | number | boolean | (string | number | boolean)[] | undefined
export declare type CCSSPropFunction = <T>(v: CCSSPropValue, o?: T) => string
export declare type CCSSProp = CCSSPropValue | CCSSPropFunction
export interface IOptions extends Partial<any> {
    unit: string
    applyUnit: (n: number) => string
}
export interface AnyProp {
    [key: string]: any
}
export interface CCSSProps extends AnyProp {
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported?: boolean | string[]
    /**
     * Define custom CSS text.
     */
    styleText?: (v: string) => string
    /**
     * You can pass children to your ccss supporting both pseudo classes and nested selectors.
     *
     * @example
     * ```js
     * child({
     *   h: { d: 'b' },
     *   '.childDiv': { p: 10 }
     * })
     * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
     * ```
     */
    child?: CCSSProp
    /**
     * # alignment-baseline (ab)
     *


     *
     * ---
     * ## Aliases
     *	- `ab`
     *	- `align-b`
     *	- `alignment-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline
     */
    ab?: CCSSProp
    /**
     * # alignment-baseline (ab)
     *


     *
     * ---
     * ## Aliases
     *	- `ab`
     *	- `align-b`
     *	- `alignment-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline
     */
    alignB?: CCSSProp
    /**
     * # alignment-baseline (ab)
     *


     *
     * ---
     * ## Aliases
     *	- `ab`
     *	- `align-b`
     *	- `alignment-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline
     */
    alignmentBaseline?: CCSSProp
    /**
     * # baseline-shift (bls)
     *


     *
     * ---
     * ## Aliases
     *	- `bls`
     *	- `bl-shift`
     *	- `baseline-shift`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/baseline-shift
     */
    bls?: CCSSProp
    /**
     * # baseline-shift (bls)
     *


     *
     * ---
     * ## Aliases
     *	- `bls`
     *	- `bl-shift`
     *	- `baseline-shift`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/baseline-shift
     */
    blShift?: CCSSProp
    /**
     * # baseline-shift (bls)
     *


     *
     * ---
     * ## Aliases
     *	- `bls`
     *	- `bl-shift`
     *	- `baseline-shift`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/baseline-shift
     */
    baselineShift?: CCSSProp
    /**
     * # clip-rule (cpr)
     *


     *
     * ---
     * ## Aliases
     *	- `cpr`
     *	- `clip-r`
     *	- `clip-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule
     */
    cpr?: CCSSProp
    /**
     * # clip-rule (cpr)
     *


     *
     * ---
     * ## Aliases
     *	- `cpr`
     *	- `clip-r`
     *	- `clip-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule
     */
    clipR?: CCSSProp
    /**
     * # clip-rule (cpr)
     *


     *
     * ---
     * ## Aliases
     *	- `cpr`
     *	- `clip-r`
     *	- `clip-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-rule
     */
    clipRule?: CCSSProp
    /**
     * # color-interpolation-filters (cif)
     * The **`color-interpolation-filters`** attribute specifies the color space for imaging operations performed via filter effects.


     *
     * ---
     * ## Aliases
     *	- `cif`
     *	- `color-i-f`
     *	- `color-interpolation-filters`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation-filters
     */
    cif?: CCSSProp
    /**
     * # color-interpolation-filters (cif)
     * The **`color-interpolation-filters`** attribute specifies the color space for imaging operations performed via filter effects.


     *
     * ---
     * ## Aliases
     *	- `cif`
     *	- `color-i-f`
     *	- `color-interpolation-filters`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation-filters
     */
    colorIF?: CCSSProp
    /**
     * # color-interpolation-filters (cif)
     * The **`color-interpolation-filters`** attribute specifies the color space for imaging operations performed via filter effects.


     *
     * ---
     * ## Aliases
     *	- `cif`
     *	- `color-i-f`
     *	- `color-interpolation-filters`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation-filters
     */
    colorInterpolationFilters?: CCSSProp
    /**
     * # color-interpolation (ci)
     * The **`color-interpolation`** attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.


     *
     * ---
     * ## Aliases
     *	- `ci`
     *	- `color-i`
     *	- `color-interpolation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation
     */
    ci?: CCSSProp
    /**
     * # color-interpolation (ci)
     * The **`color-interpolation`** attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.


     *
     * ---
     * ## Aliases
     *	- `ci`
     *	- `color-i`
     *	- `color-interpolation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation
     */
    colorI?: CCSSProp
    /**
     * # color-interpolation (ci)
     * The **`color-interpolation`** attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.


     *
     * ---
     * ## Aliases
     *	- `ci`
     *	- `color-i`
     *	- `color-interpolation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation
     */
    colorInterpolation?: CCSSProp
    /**
     * # color-profile (cpf)
     *


     *
     * ---
     * ## Aliases
     *	- `cpf`
     *	- `color-p`
     *	- `color-profile`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-profile
     */
    cpf?: CCSSProp
    /**
     * # color-profile (cpf)
     *


     *
     * ---
     * ## Aliases
     *	- `cpf`
     *	- `color-p`
     *	- `color-profile`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-profile
     */
    colorP?: CCSSProp
    /**
     * # color-profile (cpf)
     *


     *
     * ---
     * ## Aliases
     *	- `cpf`
     *	- `color-p`
     *	- `color-profile`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-profile
     */
    colorProfile?: CCSSProp
    /**
     * # color-rendering (crd)
     *


     *
     * ---
     * ## Aliases
     *	- `crd`
     *	- `color-r`
     *	- `color-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-rendering
     */
    crd?: CCSSProp
    /**
     * # color-rendering (crd)
     *


     *
     * ---
     * ## Aliases
     *	- `crd`
     *	- `color-r`
     *	- `color-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-rendering
     */
    colorR?: CCSSProp
    /**
     * # color-rendering (crd)
     *


     *
     * ---
     * ## Aliases
     *	- `crd`
     *	- `color-r`
     *	- `color-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-rendering
     */
    colorRendering?: CCSSProp
    /**
     * # dominant-baseline (db)
     * The **`dominant-baseline`** attribute specifies the dominant baseline, which is the baseline used to align the box’s text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box’s alignment context.


     *
     * ---
     * ## Aliases
     *	- `db`
     *	- `dom-base`
     *	- `dominant-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
     */
    db?: CCSSProp
    /**
     * # dominant-baseline (db)
     * The **`dominant-baseline`** attribute specifies the dominant baseline, which is the baseline used to align the box’s text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box’s alignment context.


     *
     * ---
     * ## Aliases
     *	- `db`
     *	- `dom-base`
     *	- `dominant-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
     */
    domBase?: CCSSProp
    /**
     * # dominant-baseline (db)
     * The **`dominant-baseline`** attribute specifies the dominant baseline, which is the baseline used to align the box’s text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box’s alignment context.


     *
     * ---
     * ## Aliases
     *	- `db`
     *	- `dom-base`
     *	- `dominant-baseline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
     */
    dominantBaseline?: CCSSProp
    /**
     * # enable-background (eb)
     *


     *
     * ---
     * ## Aliases
     *	- `eb`
     *	- `enable-bg`
     *	- `enable-background`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/enable-background
     */
    eb?: CCSSProp
    /**
     * # enable-background (eb)
     *


     *
     * ---
     * ## Aliases
     *	- `eb`
     *	- `enable-bg`
     *	- `enable-background`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/enable-background
     */
    enableBg?: CCSSProp
    /**
     * # enable-background (eb)
     *


     *
     * ---
     * ## Aliases
     *	- `eb`
     *	- `enable-bg`
     *	- `enable-background`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/enable-background
     */
    enableBackground?: CCSSProp
    /**
     * # fill-opacity (fo)
     * The **`fill-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to a shape.


     *
     * ---
     * ## Aliases
     *	- `fo`
     *	- `fill-op`
     *	- `fill-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
     */
    fo?: CCSSProp
    /**
     * # fill-opacity (fo)
     * The **`fill-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to a shape.


     *
     * ---
     * ## Aliases
     *	- `fo`
     *	- `fill-op`
     *	- `fill-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
     */
    fillOp?: CCSSProp
    /**
     * # fill-opacity (fo)
     * The **`fill-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to a shape.


     *
     * ---
     * ## Aliases
     *	- `fo`
     *	- `fill-op`
     *	- `fill-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-opacity
     */
    fillOpacity?: CCSSProp
    /**
     * # fill-rule (fr)
     * The **`fill-rule`** attribute is a presentation attribute defining the algorithm to use to determine the _inside_ part of a shape.


     *
     * ---
     * ## Aliases
     *	- `fr`
     *	- `fill-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule
     */
    fr?: CCSSProp
    /**
     * # fill-rule (fr)
     * The **`fill-rule`** attribute is a presentation attribute defining the algorithm to use to determine the _inside_ part of a shape.


     *
     * ---
     * ## Aliases
     *	- `fr`
     *	- `fill-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill-rule
     */
    fillRule?: CCSSProp
    /**
     * # fill (fi)
     * The **`fill`** attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (_or any SVG paint servers like gradients or patterns_) used to paint the element; for animation it defines the final state of the animation.


     *
     * ---
     * ## Aliases
     *	- `fi`
     *	- `fill`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill
     */
    fi?: CCSSProp
    /**
     * # fill (fi)
     * The **`fill`** attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (_or any SVG paint servers like gradients or patterns_) used to paint the element; for animation it defines the final state of the animation.


     *
     * ---
     * ## Aliases
     *	- `fi`
     *	- `fill`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fill
     */
    fill?: CCSSProp
    /**
     * # flood-color (fdc)
     * The **`flood-color`** attribute indicates what color to use to flood the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdc`
     *	- `flood-c`
     *	- `flood-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-color
     */
    fdc?: CCSSProp
    /**
     * # flood-color (fdc)
     * The **`flood-color`** attribute indicates what color to use to flood the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdc`
     *	- `flood-c`
     *	- `flood-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-color
     */
    floodC?: CCSSProp
    /**
     * # flood-color (fdc)
     * The **`flood-color`** attribute indicates what color to use to flood the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdc`
     *	- `flood-c`
     *	- `flood-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-color
     */
    floodColor?: CCSSProp
    /**
     * # flood-opacity (fdo)
     * The **`flood-opacity`** attribute indicates the opacity value to use across the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdo`
     *	- `flood-o`
     *	- `flood-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-opacity
     */
    fdo?: CCSSProp
    /**
     * # flood-opacity (fdo)
     * The **`flood-opacity`** attribute indicates the opacity value to use across the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdo`
     *	- `flood-o`
     *	- `flood-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-opacity
     */
    floodO?: CCSSProp
    /**
     * # flood-opacity (fdo)
     * The **`flood-opacity`** attribute indicates the opacity value to use across the current filter primitive subregion.


     *
     * ---
     * ## Aliases
     *	- `fdo`
     *	- `flood-o`
     *	- `flood-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flood-opacity
     */
    floodOpacity?: CCSSProp
    /**
     * # font-size-adjust (fsa)
     * The **`font-size-adjust`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).


     *
     * ---
     * ## Aliases
     *	- `fsa`
     *	- `font-s-a`
     *	- `font-size-adjust`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
     */
    fsa?: CCSSProp
    /**
     * # font-size-adjust (fsa)
     * The **`font-size-adjust`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).


     *
     * ---
     * ## Aliases
     *	- `fsa`
     *	- `font-s-a`
     *	- `font-size-adjust`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
     */
    fontSA?: CCSSProp
    /**
     * # font-size-adjust (fsa)
     * The **`font-size-adjust`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).


     *
     * ---
     * ## Aliases
     *	- `fsa`
     *	- `font-s-a`
     *	- `font-size-adjust`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust
     */
    fontSizeAdjust?: CCSSProp
    /**
     * # glyph-orientation-horizontal (goh)
     *


     *
     * ---
     * ## Aliases
     *	- `goh`
     *	- `glyph-o-h`
     *	- `glyph-orientation-horizontal`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/glyph-orientation-horizontal
     */
    goh?: CCSSProp
    /**
     * # glyph-orientation-horizontal (goh)
     *


     *
     * ---
     * ## Aliases
     *	- `goh`
     *	- `glyph-o-h`
     *	- `glyph-orientation-horizontal`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/glyph-orientation-horizontal
     */
    glyphOH?: CCSSProp
    /**
     * # glyph-orientation-horizontal (goh)
     *


     *
     * ---
     * ## Aliases
     *	- `goh`
     *	- `glyph-o-h`
     *	- `glyph-orientation-horizontal`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/glyph-orientation-horizontal
     */
    glyphOrientationHorizontal?: CCSSProp
    /**
     * # image-rendering (ir)
     * The **`image-rendering`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.


     *
     * ---
     * ## Aliases
     *	- `ir`
     *	- `img-r`
     *	- `image-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
     */
    ir?: CCSSProp
    /**
     * # image-rendering (ir)
     * The **`image-rendering`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.


     *
     * ---
     * ## Aliases
     *	- `ir`
     *	- `img-r`
     *	- `image-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
     */
    imgR?: CCSSProp
    /**
     * # image-rendering (ir)
     * The **`image-rendering`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.


     *
     * ---
     * ## Aliases
     *	- `ir`
     *	- `img-r`
     *	- `image-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
     */
    imageRendering?: CCSSProp
    /**
     * # kerning (k)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `k`
     *	- `kern`
     *	- `kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/kerning
     */
    k?: CCSSProp
    /**
     * # kerning (k)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `k`
     *	- `kern`
     *	- `kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/kerning
     */
    kern?: CCSSProp
    /**
     * # kerning (k)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `k`
     *	- `kern`
     *	- `kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/kerning
     */
    kerning?: CCSSProp
    /**
     * # lighting-color (lc)
     * The **`lighting-color`** attribute defines the color of the light source for lighting filter primitives.


     *
     * ---
     * ## Aliases
     *	- `lc`
     *	- `l-color`
     *	- `lighting-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/lighting-color
     */
    lc?: CCSSProp
    /**
     * # lighting-color (lc)
     * The **`lighting-color`** attribute defines the color of the light source for lighting filter primitives.


     *
     * ---
     * ## Aliases
     *	- `lc`
     *	- `l-color`
     *	- `lighting-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/lighting-color
     */
    lColor?: CCSSProp
    /**
     * # lighting-color (lc)
     * The **`lighting-color`** attribute defines the color of the light source for lighting filter primitives.


     *
     * ---
     * ## Aliases
     *	- `lc`
     *	- `l-color`
     *	- `lighting-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/lighting-color
     */
    lightingColor?: CCSSProp
    /**
     * # marker-end (me)
     * The **`marker-end`** attribute defines the arrowhead or polymarker that will be drawn at the final vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `me`
     *	- `m-end`
     *	- `marker-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-end
     */
    me?: CCSSProp
    /**
     * # marker-end (me)
     * The **`marker-end`** attribute defines the arrowhead or polymarker that will be drawn at the final vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `me`
     *	- `m-end`
     *	- `marker-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-end
     */
    mEnd?: CCSSProp
    /**
     * # marker-end (me)
     * The **`marker-end`** attribute defines the arrowhead or polymarker that will be drawn at the final vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `me`
     *	- `m-end`
     *	- `marker-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-end
     */
    markerEnd?: CCSSProp
    /**
     * # marker-mid (mm)
     * The **`marker-mid`** attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `mm`
     *	- `m-mid`
     *	- `marker-mid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-mid
     */
    mm?: CCSSProp
    /**
     * # marker-mid (mm)
     * The **`marker-mid`** attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `mm`
     *	- `m-mid`
     *	- `marker-mid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-mid
     */
    mMid?: CCSSProp
    /**
     * # marker-mid (mm)
     * The **`marker-mid`** attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `mm`
     *	- `m-mid`
     *	- `marker-mid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-mid
     */
    markerMid?: CCSSProp
    /**
     * # marker-start (ms)
     * The **`marker-start`** attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `ms`
     *	- `m-start`
     *	- `marker-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-start
     */
    ms?: CCSSProp
    /**
     * # marker-start (ms)
     * The **`marker-start`** attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `ms`
     *	- `m-start`
     *	- `marker-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-start
     */
    mStart?: CCSSProp
    /**
     * # marker-start (ms)
     * The **`marker-start`** attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given [shape](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Shape_elements).


     *
     * ---
     * ## Aliases
     *	- `ms`
     *	- `m-start`
     *	- `marker-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/marker-start
     */
    markerStart?: CCSSProp
    /**
     * # mask (msk)
     * The **`mask`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) hides an element (partially or fully) by masking or clipping the image at specific points.


     *
     * ---
     * ## Aliases
     *	- `msk`
     *	- `mask`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask
     */
    msk?: CCSSProp
    /**
     * # mask (msk)
     * The **`mask`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) hides an element (partially or fully) by masking or clipping the image at specific points.


     *
     * ---
     * ## Aliases
     *	- `msk`
     *	- `mask`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mask
     */
    mask?: CCSSProp
    /**
     * # shape-rendering (sr)
     * The **`shape-rendering`** attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.


     *
     * ---
     * ## Aliases
     *	- `sr`
     *	- `shape-rdr`
     *	- `shape-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/shape-rendering
     */
    sr?: CCSSProp
    /**
     * # shape-rendering (sr)
     * The **`shape-rendering`** attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.


     *
     * ---
     * ## Aliases
     *	- `sr`
     *	- `shape-rdr`
     *	- `shape-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/shape-rendering
     */
    shapeRdr?: CCSSProp
    /**
     * # shape-rendering (sr)
     * The **`shape-rendering`** attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.


     *
     * ---
     * ## Aliases
     *	- `sr`
     *	- `shape-rdr`
     *	- `shape-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/shape-rendering
     */
    shapeRendering?: CCSSProp
    /**
     * # stop-color (sc)
     * The **`stop-color`** attribute indicates what color to use at a gradient stop.


     *
     * ---
     * ## Aliases
     *	- `sc`
     *	- `stop-c`
     *	- `stop-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color
     */
    sc?: CCSSProp
    /**
     * # stop-color (sc)
     * The **`stop-color`** attribute indicates what color to use at a gradient stop.


     *
     * ---
     * ## Aliases
     *	- `sc`
     *	- `stop-c`
     *	- `stop-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color
     */
    stopC?: CCSSProp
    /**
     * # stop-color (sc)
     * The **`stop-color`** attribute indicates what color to use at a gradient stop.


     *
     * ---
     * ## Aliases
     *	- `sc`
     *	- `stop-c`
     *	- `stop-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stop-color
     */
    stopColor?: CCSSProp
    /**
     * # stroke-dasharray (sda)
     * The **`stroke-dasharray`** attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;


     *
     * ---
     * ## Aliases
     *	- `sda`
     *	- `stroke-da`
     *	- `stroke-dasharray`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dasharray
     */
    sda?: CCSSProp
    /**
     * # stroke-dasharray (sda)
     * The **`stroke-dasharray`** attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;


     *
     * ---
     * ## Aliases
     *	- `sda`
     *	- `stroke-da`
     *	- `stroke-dasharray`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dasharray
     */
    strokeDa?: CCSSProp
    /**
     * # stroke-dasharray (sda)
     * The **`stroke-dasharray`** attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;


     *
     * ---
     * ## Aliases
     *	- `sda`
     *	- `stroke-da`
     *	- `stroke-dasharray`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dasharray
     */
    strokeDasharray?: CCSSProp
    /**
     * # stroke-dashoffset (sdo)
     * The **`stroke-dashoffset`** attribute is a presentation attribute defining an offset on the rendering of the associated dash array.


     *
     * ---
     * ## Aliases
     *	- `sdo`
     *	- `stroke-do`
     *	- `stroke-dashoffset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dashoffset
     */
    sdo?: CCSSProp
    /**
     * # stroke-dashoffset (sdo)
     * The **`stroke-dashoffset`** attribute is a presentation attribute defining an offset on the rendering of the associated dash array.


     *
     * ---
     * ## Aliases
     *	- `sdo`
     *	- `stroke-do`
     *	- `stroke-dashoffset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dashoffset
     */
    strokeDo?: CCSSProp
    /**
     * # stroke-dashoffset (sdo)
     * The **`stroke-dashoffset`** attribute is a presentation attribute defining an offset on the rendering of the associated dash array.


     *
     * ---
     * ## Aliases
     *	- `sdo`
     *	- `stroke-do`
     *	- `stroke-dashoffset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-dashoffset
     */
    strokeDashoffset?: CCSSProp
    /**
     * # stroke-linecap (slc)
     * The **`stroke-linecap`** attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slc`
     *	- `stroke-lc`
     *	- `stroke-linecap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linecap
     */
    slc?: CCSSProp
    /**
     * # stroke-linecap (slc)
     * The **`stroke-linecap`** attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slc`
     *	- `stroke-lc`
     *	- `stroke-linecap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linecap
     */
    strokeLc?: CCSSProp
    /**
     * # stroke-linecap (slc)
     * The **`stroke-linecap`** attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slc`
     *	- `stroke-lc`
     *	- `stroke-linecap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linecap
     */
    strokeLinecap?: CCSSProp
    /**
     * # stroke-linejoin (slj)
     * The **`stroke-linejoin`** attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slj`
     *	- `stroke-lj`
     *	- `stroke-linejoin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linejoin
     */
    slj?: CCSSProp
    /**
     * # stroke-linejoin (slj)
     * The **`stroke-linejoin`** attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slj`
     *	- `stroke-lj`
     *	- `stroke-linejoin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linejoin
     */
    strokeLj?: CCSSProp
    /**
     * # stroke-linejoin (slj)
     * The **`stroke-linejoin`** attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.


     *
     * ---
     * ## Aliases
     *	- `slj`
     *	- `stroke-lj`
     *	- `stroke-linejoin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-linejoin
     */
    strokeLinejoin?: CCSSProp
    /**
     * # stroke-miterlimit (sml)
     * The **`stroke-miterlimit`** attribute is a presentation attribute defining a limit on the ratio of the miter length to the `[stroke-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)` used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.


     *
     * ---
     * ## Aliases
     *	- `sml`
     *	- `stroke-ml`
     *	- `stroke-miterlimit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-miterlimit
     */
    sml?: CCSSProp
    /**
     * # stroke-miterlimit (sml)
     * The **`stroke-miterlimit`** attribute is a presentation attribute defining a limit on the ratio of the miter length to the `[stroke-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)` used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.


     *
     * ---
     * ## Aliases
     *	- `sml`
     *	- `stroke-ml`
     *	- `stroke-miterlimit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-miterlimit
     */
    strokeMl?: CCSSProp
    /**
     * # stroke-miterlimit (sml)
     * The **`stroke-miterlimit`** attribute is a presentation attribute defining a limit on the ratio of the miter length to the `[stroke-width](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width)` used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.


     *
     * ---
     * ## Aliases
     *	- `sml`
     *	- `stroke-ml`
     *	- `stroke-miterlimit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-miterlimit
     */
    strokeMiterlimit?: CCSSProp
    /**
     * # stroke-opacity (sop)
     * The **`stroke-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to the stroke of a shape.


     *
     * ---
     * ## Aliases
     *	- `sop`
     *	- `stroke-o`
     *	- `stroke-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-opacity
     */
    sop?: CCSSProp
    /**
     * # stroke-opacity (sop)
     * The **`stroke-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to the stroke of a shape.


     *
     * ---
     * ## Aliases
     *	- `sop`
     *	- `stroke-o`
     *	- `stroke-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-opacity
     */
    strokeO?: CCSSProp
    /**
     * # stroke-opacity (sop)
     * The **`stroke-opacity`** attribute is a presentation attribute defining the opacity of the paint server (_color_, _gradient_, _pattern_, etc) applied to the stroke of a shape.


     *
     * ---
     * ## Aliases
     *	- `sop`
     *	- `stroke-o`
     *	- `stroke-opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-opacity
     */
    strokeOpacity?: CCSSProp
    /**
     * # stroke-width (swt)
     * The **`stroke-width`** attribute is a presentation attribute defining the width of the stroke to be applied to the shape.


     *
     * ---
     * ## Aliases
     *	- `swt`
     *	- `stroke-w`
     *	- `stroke-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width
     */
    swt?: CCSSProp
    /**
     * # stroke-width (swt)
     * The **`stroke-width`** attribute is a presentation attribute defining the width of the stroke to be applied to the shape.


     *
     * ---
     * ## Aliases
     *	- `swt`
     *	- `stroke-w`
     *	- `stroke-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width
     */
    strokeW?: CCSSProp
    /**
     * # stroke-width (swt)
     * The **`stroke-width`** attribute is a presentation attribute defining the width of the stroke to be applied to the shape.


     *
     * ---
     * ## Aliases
     *	- `swt`
     *	- `stroke-w`
     *	- `stroke-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width
     */
    strokeWidth?: CCSSProp
    /**
     * # stroke (st)
     * The **`stroke`** attribute is a presentation attribute defining the color (_or any SVG paint servers like gradients or patterns_) used to paint the outline of the shape;


     *
     * ---
     * ## Aliases
     *	- `st`
     *	- `stroke`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke
     */
    st?: CCSSProp
    /**
     * # stroke (st)
     * The **`stroke`** attribute is a presentation attribute defining the color (_or any SVG paint servers like gradients or patterns_) used to paint the outline of the shape;


     *
     * ---
     * ## Aliases
     *	- `st`
     *	- `stroke`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/stroke
     */
    stroke?: CCSSProp
    /**
     * # text-anchor (txa)
     * The **`text-anchor`** attribute is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the `[inline-size](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/inline-size)` property relative to a given point. It is not applicable to other types of auto-wrapped text. For those cases you should use [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction."). For multi-line text, the alignment takes place for each line.


     *
     * ---
     * ## Aliases
     *	- `txa`
     *	- `txt-anchor`
     *	- `text-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
     */
    txa?: CCSSProp
    /**
     * # text-anchor (txa)
     * The **`text-anchor`** attribute is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the `[inline-size](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/inline-size)` property relative to a given point. It is not applicable to other types of auto-wrapped text. For those cases you should use [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction."). For multi-line text, the alignment takes place for each line.


     *
     * ---
     * ## Aliases
     *	- `txa`
     *	- `txt-anchor`
     *	- `text-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
     */
    txtAnchor?: CCSSProp
    /**
     * # text-anchor (txa)
     * The **`text-anchor`** attribute is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the `[inline-size](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/inline-size)` property relative to a given point. It is not applicable to other types of auto-wrapped text. For those cases you should use [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction."). For multi-line text, the alignment takes place for each line.


     *
     * ---
     * ## Aliases
     *	- `txa`
     *	- `txt-anchor`
     *	- `text-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-anchor
     */
    textAnchor?: CCSSProp
    /**
     * # text-rendering (txr)
     * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.


     *
     * ---
     * ## Aliases
     *	- `txr`
     *	- `txt-render`
     *	- `text-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
     */
    txr?: CCSSProp
    /**
     * # text-rendering (txr)
     * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.


     *
     * ---
     * ## Aliases
     *	- `txr`
     *	- `txt-render`
     *	- `text-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
     */
    txtRender?: CCSSProp
    /**
     * # text-rendering (txr)
     * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.


     *
     * ---
     * ## Aliases
     *	- `txr`
     *	- `txt-render`
     *	- `text-rendering`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
     */
    textRendering?: CCSSProp
    /**
     * # unicode-bidi (ub)
     * The **`unicode-bidi`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property, together with the [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction "The direction CSS property sets the direction of text, table columns, and horizontal overflow.") property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.


     *
     * ---
     * ## Aliases
     *	- `ub`
     *	- `uni-bidi`
     *	- `unicode-bidi`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi
     */
    ub?: CCSSProp
    /**
     * # unicode-bidi (ub)
     * The **`unicode-bidi`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property, together with the [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction "The direction CSS property sets the direction of text, table columns, and horizontal overflow.") property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.


     *
     * ---
     * ## Aliases
     *	- `ub`
     *	- `uni-bidi`
     *	- `unicode-bidi`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi
     */
    uniBidi?: CCSSProp
    /**
     * # unicode-bidi (ub)
     * The **`unicode-bidi`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property, together with the [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction "The direction CSS property sets the direction of text, table columns, and horizontal overflow.") property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.


     *
     * ---
     * ## Aliases
     *	- `ub`
     *	- `uni-bidi`
     *	- `unicode-bidi`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi
     */
    unicodeBidi?: CCSSProp
    /**
     * # writing-mode (wm)
     * The **`writing-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).


     *
     * ---
     * ## Aliases
     *	- `wm`
     *	- `writing`
     *	- `writing-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
     */
    wm?: CCSSProp
    /**
     * # writing-mode (wm)
     * The **`writing-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).


     *
     * ---
     * ## Aliases
     *	- `wm`
     *	- `writing`
     *	- `writing-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
     */
    writing?: CCSSProp
    /**
     * # writing-mode (wm)
     * The **`writing-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).


     *
     * ---
     * ## Aliases
     *	- `wm`
     *	- `writing`
     *	- `writing-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
     */
    writingMode?: CCSSProp
    /**
     * # animation (a)
     * The **`animation`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name "The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element."), [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle."), [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function "The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle."), [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation."), [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count "The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping."), [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction "The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward."), [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode "The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution."), and [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state "The animation-play-state CSS property sets whether an animation is running or paused.").


     *
     * ---
     * ## Aliases
     *	- `a`
     *	- `anim`
     *	- `animation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
     */
    a?: CCSSProp
    /**
     * # animation (a)
     * The **`animation`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name "The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element."), [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle."), [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function "The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle."), [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation."), [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count "The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping."), [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction "The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward."), [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode "The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution."), and [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state "The animation-play-state CSS property sets whether an animation is running or paused.").


     *
     * ---
     * ## Aliases
     *	- `a`
     *	- `anim`
     *	- `animation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
     */
    anim?: CCSSProp
    /**
     * # animation (a)
     * The **`animation`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies an animation between styles. It is a shorthand for [`animation-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name "The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element."), [`animation-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration "The animation-duration CSS property sets the length of time that an animation takes to complete one cycle."), [`animation-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function "The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle."), [`animation-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay "The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation."), [`animation-iteration-count`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count "The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping."), [`animation-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction "The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward."), [`animation-fill-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode "The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution."), and [`animation-play-state`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state "The animation-play-state CSS property sets whether an animation is running or paused.").


     *
     * ---
     * ## Aliases
     *	- `a`
     *	- `anim`
     *	- `animation`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation
     */
    animation?: CCSSProp
    /**
     * # animation-delay (ad)
     * The **`animation-delay`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.


     *
     * ---
     * ## Aliases
     *	- `ad`
     *	- `anim-del`
     *	- `animation-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
     */
    ad?: CCSSProp
    /**
     * # animation-delay (ad)
     * The **`animation-delay`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.


     *
     * ---
     * ## Aliases
     *	- `ad`
     *	- `anim-del`
     *	- `animation-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
     */
    animDel?: CCSSProp
    /**
     * # animation-delay (ad)
     * The **`animation-delay`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.


     *
     * ---
     * ## Aliases
     *	- `ad`
     *	- `anim-del`
     *	- `animation-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
     */
    animationDelay?: CCSSProp
    /**
     * # animation-direction (aDir)
     * The **`animation-direction`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **r**: `reverse`
     *	- **a**: `alternate`
     *	- **ar**: `alternate-reverse`
     *
     * ---
     * ## Aliases
     *	- `aDir`
     *	- `anim-dir`
     *	- `animation-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
     */
    aDir?: CCSSProp
    /**
     * # animation-direction (aDir)
     * The **`animation-direction`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **r**: `reverse`
     *	- **a**: `alternate`
     *	- **ar**: `alternate-reverse`
     *
     * ---
     * ## Aliases
     *	- `aDir`
     *	- `anim-dir`
     *	- `animation-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
     */
    animDir?: CCSSProp
    /**
     * # animation-direction (aDir)
     * The **`animation-direction`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **r**: `reverse`
     *	- **a**: `alternate`
     *	- **ar**: `alternate-reverse`
     *
     * ---
     * ## Aliases
     *	- `aDir`
     *	- `anim-dir`
     *	- `animation-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
     */
    animationDirection?: CCSSProp
    /**
     * # animation-duration (aD)
     * The **`animation-duration`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the length of time that an animation takes to complete one cycle.


     *
     * ---
     * ## Aliases
     *	- `aD`
     *	- `anim-dur`
     *	- `animation-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
     */
    aD?: CCSSProp
    /**
     * # animation-duration (aD)
     * The **`animation-duration`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the length of time that an animation takes to complete one cycle.


     *
     * ---
     * ## Aliases
     *	- `aD`
     *	- `anim-dur`
     *	- `animation-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
     */
    animDur?: CCSSProp
    /**
     * # animation-duration (aD)
     * The **`animation-duration`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the length of time that an animation takes to complete one cycle.


     *
     * ---
     * ## Aliases
     *	- `aD`
     *	- `anim-dur`
     *	- `animation-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
     */
    animationDuration?: CCSSProp
    /**
     * # animation-fill-mode (afm)
     * The **`animation-fill-mode`** [CSS](https://developer.mozilla.org/en/CSS) property sets how a CSS animation applies styles to its target before and after its execution.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **fwd**: `forwards`
     *	- **bwd**: `backwards`
     *	- **b**: `both`
     *
     * ---
     * ## Aliases
     *	- `afm`
     *	- `anim-fill`
     *	- `animation-fill-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
     */
    afm?: CCSSProp
    /**
     * # animation-fill-mode (afm)
     * The **`animation-fill-mode`** [CSS](https://developer.mozilla.org/en/CSS) property sets how a CSS animation applies styles to its target before and after its execution.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **fwd**: `forwards`
     *	- **bwd**: `backwards`
     *	- **b**: `both`
     *
     * ---
     * ## Aliases
     *	- `afm`
     *	- `anim-fill`
     *	- `animation-fill-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
     */
    animFill?: CCSSProp
    /**
     * # animation-fill-mode (afm)
     * The **`animation-fill-mode`** [CSS](https://developer.mozilla.org/en/CSS) property sets how a CSS animation applies styles to its target before and after its execution.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **fwd**: `forwards`
     *	- **bwd**: `backwards`
     *	- **b**: `both`
     *
     * ---
     * ## Aliases
     *	- `afm`
     *	- `anim-fill`
     *	- `animation-fill-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
     */
    animationFillMode?: CCSSProp
    /**
     * # animation-iteration-count (aic)
     * The **`animation-iteration-count`** [CSS](https://developer.mozilla.org/en/CSS) property sets the number of times an animation sequence should be played before stopping.


     *
     * ---
     * ## Aliases
     *	- `aic`
     *	- `anim-count`
     *	- `animation-iteration-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
     */
    aic?: CCSSProp
    /**
     * # animation-iteration-count (aic)
     * The **`animation-iteration-count`** [CSS](https://developer.mozilla.org/en/CSS) property sets the number of times an animation sequence should be played before stopping.


     *
     * ---
     * ## Aliases
     *	- `aic`
     *	- `anim-count`
     *	- `animation-iteration-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
     */
    animCount?: CCSSProp
    /**
     * # animation-iteration-count (aic)
     * The **`animation-iteration-count`** [CSS](https://developer.mozilla.org/en/CSS) property sets the number of times an animation sequence should be played before stopping.


     *
     * ---
     * ## Aliases
     *	- `aic`
     *	- `anim-count`
     *	- `animation-iteration-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
     */
    animationIterationCount?: CCSSProp
    /**
     * # animation-name (an)
     * The **`animation-name`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the names of one or more [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes "The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.") at-rules describing the animation or animations to apply to the element.


     *
     * ---
     * ## Aliases
     *	- `an`
     *	- `anim-name`
     *	- `animation-name`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
     */
    an?: CCSSProp
    /**
     * # animation-name (an)
     * The **`animation-name`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the names of one or more [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes "The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.") at-rules describing the animation or animations to apply to the element.


     *
     * ---
     * ## Aliases
     *	- `an`
     *	- `anim-name`
     *	- `animation-name`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
     */
    animName?: CCSSProp
    /**
     * # animation-name (an)
     * The **`animation-name`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property specifies the names of one or more [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes "The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.") at-rules describing the animation or animations to apply to the element.


     *
     * ---
     * ## Aliases
     *	- `an`
     *	- `anim-name`
     *	- `animation-name`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
     */
    animationName?: CCSSProp
    /**
     * # animation-play-state (aps)
     * The **`animation-play-state`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation is running or paused.
     *
     * ---
     * ## Shorthands
     *	- **p**: `paused`
     *	- **r**: `running`
     *
     * ---
     * ## Aliases
     *	- `aps`
     *	- `anim-state`
     *	- `animation-play-state`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
     */
    aps?: CCSSProp
    /**
     * # animation-play-state (aps)
     * The **`animation-play-state`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation is running or paused.
     *
     * ---
     * ## Shorthands
     *	- **p**: `paused`
     *	- **r**: `running`
     *
     * ---
     * ## Aliases
     *	- `aps`
     *	- `anim-state`
     *	- `animation-play-state`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
     */
    animState?: CCSSProp
    /**
     * # animation-play-state (aps)
     * The **`animation-play-state`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether an animation is running or paused.
     *
     * ---
     * ## Shorthands
     *	- **p**: `paused`
     *	- **r**: `running`
     *
     * ---
     * ## Aliases
     *	- `aps`
     *	- `anim-state`
     *	- `animation-play-state`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
     */
    animationPlayState?: CCSSProp
    /**
     * # animation-timing-function (ats)
     * The **`animation-timing-function`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an animation progresses through the duration of each cycle.


     *
     * ---
     * ## Aliases
     *	- `ats`
     *	- `anim-timing`
     *	- `animation-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
     */
    ats?: CCSSProp
    /**
     * # animation-timing-function (ats)
     * The **`animation-timing-function`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an animation progresses through the duration of each cycle.


     *
     * ---
     * ## Aliases
     *	- `ats`
     *	- `anim-timing`
     *	- `animation-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
     */
    animTiming?: CCSSProp
    /**
     * # animation-timing-function (ats)
     * The **`animation-timing-function`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an animation progresses through the duration of each cycle.


     *
     * ---
     * ## Aliases
     *	- `ats`
     *	- `anim-timing`
     *	- `animation-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
     */
    animationTimingFunction?: CCSSProp
    /**
     * # backface-visibility (bv)
     * The **`backface-visibility`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether the back face of an element is visible when turned towards the user.
     *
     * ---
     * ## Shorthands
     *	- **v**: `visible`
     *	- **h**: `hidden`
     *
     * ---
     * ## Aliases
     *	- `bv`
     *	- `bf-visibility`
     *	- `backface-visibility`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
     */
    bv?: CCSSProp
    /**
     * # backface-visibility (bv)
     * The **`backface-visibility`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether the back face of an element is visible when turned towards the user.
     *
     * ---
     * ## Shorthands
     *	- **v**: `visible`
     *	- **h**: `hidden`
     *
     * ---
     * ## Aliases
     *	- `bv`
     *	- `bf-visibility`
     *	- `backface-visibility`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
     */
    bfVisibility?: CCSSProp
    /**
     * # backface-visibility (bv)
     * The **`backface-visibility`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether the back face of an element is visible when turned towards the user.
     *
     * ---
     * ## Shorthands
     *	- **v**: `visible`
     *	- **h**: `hidden`
     *
     * ---
     * ## Aliases
     *	- `bv`
     *	- `bf-visibility`
     *	- `backface-visibility`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
     */
    backfaceVisibility?: CCSSProp
    /**
     * # perspective (per)
     * The **`perspective`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.


     *
     * ---
     * ## Aliases
     *	- `per`
     *	- `pers`
     *	- `perspective`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
     */
    per?: CCSSProp
    /**
     * # perspective (per)
     * The **`perspective`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.


     *
     * ---
     * ## Aliases
     *	- `per`
     *	- `pers`
     *	- `perspective`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
     */
    pers?: CCSSProp
    /**
     * # perspective (per)
     * The **`perspective`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.


     *
     * ---
     * ## Aliases
     *	- `per`
     *	- `pers`
     *	- `perspective`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
     */
    perspective?: CCSSProp
    /**
     * # perspective-origin (pero)
     * The **`perspective-origin`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective "The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.") property.


     *
     * ---
     * ## Aliases
     *	- `pero`
     *	- `pers-org`
     *	- `perspective-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
     */
    pero?: CCSSProp
    /**
     * # perspective-origin (pero)
     * The **`perspective-origin`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective "The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.") property.


     *
     * ---
     * ## Aliases
     *	- `pero`
     *	- `pers-org`
     *	- `perspective-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
     */
    persOrg?: CCSSProp
    /**
     * # perspective-origin (pero)
     * The **`perspective-origin`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective "The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.") property.


     *
     * ---
     * ## Aliases
     *	- `pero`
     *	- `pers-org`
     *	- `perspective-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin
     */
    perspectiveOrigin?: CCSSProp
    /**
     * # transform (tf)
     * The **`transform`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).


     *
     * ---
     * ## Aliases
     *	- `tf`
     *	- `tran`
     *	- `transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform
     */
    tf?: CCSSProp
    /**
     * # transform (tf)
     * The **`transform`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).


     *
     * ---
     * ## Aliases
     *	- `tf`
     *	- `tran`
     *	- `transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform
     */
    tran?: CCSSProp
    /**
     * # transform (tf)
     * The **`transform`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).


     *
     * ---
     * ## Aliases
     *	- `tf`
     *	- `tran`
     *	- `transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform
     */
    transform?: CCSSProp
    /**
     * # transform-origin (tfo)
     * The **`transform-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the origin for an element's transformations.
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `tfo`
     *	- `tran-org`
     *	- `transform-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    tfo?: CCSSProp
    /**
     * # transform-origin (tfo)
     * The **`transform-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the origin for an element's transformations.
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `tfo`
     *	- `tran-org`
     *	- `transform-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    tranOrg?: CCSSProp
    /**
     * # transform-origin (tfo)
     * The **`transform-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the origin for an element's transformations.
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `tfo`
     *	- `tran-org`
     *	- `transform-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    transformOrigin?: CCSSProp
    /**
     * # transform-style (tfs)
     * The **`transform-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.


     *
     * ---
     * ## Aliases
     *	- `tfs`
     *	- `tran-style`
     *	- `transform-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style
     */
    tfs?: CCSSProp
    /**
     * # transform-style (tfs)
     * The **`transform-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.


     *
     * ---
     * ## Aliases
     *	- `tfs`
     *	- `tran-style`
     *	- `transform-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style
     */
    tranStyle?: CCSSProp
    /**
     * # transform-style (tfs)
     * The **`transform-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.


     *
     * ---
     * ## Aliases
     *	- `tfs`
     *	- `tran-style`
     *	- `transform-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style
     */
    transformStyle?: CCSSProp
    /**
     * # transition (tr)
     * The **`transition`** [CSS](https://developer.mozilla.org/en/CSS "CSS") property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties "/en-US/docs/CSS/Shorthand_properties") for [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property "The transition-property CSS property sets the CSS properties to which a transition effect should be applied."), [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration "The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur."), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function "The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect."), and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.").


     *
     * ---
     * ## Aliases
     *	- `tr`
     *	- `trans`
     *	- `transition`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition
     */
    tr?: CCSSProp
    /**
     * # transition (tr)
     * The **`transition`** [CSS](https://developer.mozilla.org/en/CSS "CSS") property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties "/en-US/docs/CSS/Shorthand_properties") for [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property "The transition-property CSS property sets the CSS properties to which a transition effect should be applied."), [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration "The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur."), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function "The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect."), and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.").


     *
     * ---
     * ## Aliases
     *	- `tr`
     *	- `trans`
     *	- `transition`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition
     */
    trans?: CCSSProp
    /**
     * # transition (tr)
     * The **`transition`** [CSS](https://developer.mozilla.org/en/CSS "CSS") property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties "/en-US/docs/CSS/Shorthand_properties") for [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property "The transition-property CSS property sets the CSS properties to which a transition effect should be applied."), [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration "The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur."), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function "The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect."), and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay "The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.").


     *
     * ---
     * ## Aliases
     *	- `tr`
     *	- `trans`
     *	- `transition`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition
     */
    transition?: CCSSProp
    /**
     * # transition-delay (trD)
     * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) when its value changes.


     *
     * ---
     * ## Aliases
     *	- `trD`
     *	- `trans-del`
     *	- `transition-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
     */
    trD?: CCSSProp
    /**
     * # transition-delay (trD)
     * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) when its value changes.


     *
     * ---
     * ## Aliases
     *	- `trD`
     *	- `trans-del`
     *	- `transition-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
     */
    transDel?: CCSSProp
    /**
     * # transition-delay (trD)
     * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) when its value changes.


     *
     * ---
     * ## Aliases
     *	- `trD`
     *	- `trans-del`
     *	- `transition-delay`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay
     */
    transitionDelay?: CCSSProp
    /**
     * # transition-duration (trd)
     * The **`transition-duration`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.


     *
     * ---
     * ## Aliases
     *	- `trd`
     *	- `trans-dur`
     *	- `transition-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
     */
    trd?: CCSSProp
    /**
     * # transition-duration (trd)
     * The **`transition-duration`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.


     *
     * ---
     * ## Aliases
     *	- `trd`
     *	- `trans-dur`
     *	- `transition-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
     */
    transDur?: CCSSProp
    /**
     * # transition-duration (trd)
     * The **`transition-duration`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.


     *
     * ---
     * ## Aliases
     *	- `trd`
     *	- `trans-dur`
     *	- `transition-duration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration
     */
    transitionDuration?: CCSSProp
    /**
     * # transition-property (trp)
     * The **`transition-property`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the CSS properties to which a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) should be applied.


     *
     * ---
     * ## Aliases
     *	- `trp`
     *	- `trans-prop`
     *	- `transition-property`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    trp?: CCSSProp
    /**
     * # transition-property (trp)
     * The **`transition-property`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the CSS properties to which a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) should be applied.


     *
     * ---
     * ## Aliases
     *	- `trp`
     *	- `trans-prop`
     *	- `transition-property`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transProp?: CCSSProp
    /**
     * # transition-property (trp)
     * The **`transition-property`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the CSS properties to which a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) should be applied.


     *
     * ---
     * ## Aliases
     *	- `trp`
     *	- `trans-prop`
     *	- `transition-property`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property
     */
    transitionProperty?: CCSSProp
    /**
     * # transition-timing-function (trt)
     * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).


     *
     * ---
     * ## Aliases
     *	- `trt`
     *	- `trans-timing`
     *	- `transition-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    trt?: CCSSProp
    /**
     * # transition-timing-function (trt)
     * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).


     *
     * ---
     * ## Aliases
     *	- `trt`
     *	- `trans-timing`
     *	- `transition-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    transTiming?: CCSSProp
    /**
     * # transition-timing-function (trt)
     * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a [transition effect](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).


     *
     * ---
     * ## Aliases
     *	- `trt`
     *	- `trans-timing`
     *	- `transition-timing-function`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
     */
    transitionTimingFunction?: CCSSProp
    /**
     * # flex (f)
     * The **`flex`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets how a flex _item_ will grow or shrink to fit the space available in its flex container.


     *
     * ---
     * ## Aliases
     *	- `f`
     *	- `fx`
     *	- `flex`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     */
    f?: CCSSProp
    /**
     * # flex (f)
     * The **`flex`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets how a flex _item_ will grow or shrink to fit the space available in its flex container.


     *
     * ---
     * ## Aliases
     *	- `f`
     *	- `fx`
     *	- `flex`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     */
    fx?: CCSSProp
    /**
     * # flex (f)
     * The **`flex`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets how a flex _item_ will grow or shrink to fit the space available in its flex container.


     *
     * ---
     * ## Aliases
     *	- `f`
     *	- `fx`
     *	- `flex`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     */
    flex?: CCSSProp
    /**
     * # flex-direction (fd)
     * The **`flex-direction`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
     *
     * ---
     * ## Shorthands
     *	- **r**: `row`
     *	- **rr**: `row-reverse`
     *	- **c**: `column`
     *	- **cr**: `column-reverse`
     *
     * ---
     * ## Aliases
     *	- `fd`
     *	- `fx-dir`
     *	- `flex-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    fd?: CCSSProp
    /**
     * # flex-direction (fd)
     * The **`flex-direction`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
     *
     * ---
     * ## Shorthands
     *	- **r**: `row`
     *	- **rr**: `row-reverse`
     *	- **c**: `column`
     *	- **cr**: `column-reverse`
     *
     * ---
     * ## Aliases
     *	- `fd`
     *	- `fx-dir`
     *	- `flex-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    fxDir?: CCSSProp
    /**
     * # flex-direction (fd)
     * The **`flex-direction`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
     *
     * ---
     * ## Shorthands
     *	- **r**: `row`
     *	- **rr**: `row-reverse`
     *	- **c**: `column`
     *	- **cr**: `column-reverse`
     *
     * ---
     * ## Aliases
     *	- `fd`
     *	- `fx-dir`
     *	- `flex-direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    flexDirection?: CCSSProp
    /**
     * # flex-wrap (fw)
     * The **`flex-wrap`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * ---
     * ## Shorthands
     *	- **w**: `wrap`
     *
     * ---
     * ## Aliases
     *	- `fw`
     *	- `fx-wrap`
     *	- `flex-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    fw?: CCSSProp
    /**
     * # flex-wrap (fw)
     * The **`flex-wrap`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * ---
     * ## Shorthands
     *	- **w**: `wrap`
     *
     * ---
     * ## Aliases
     *	- `fw`
     *	- `fx-wrap`
     *	- `flex-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    fxWrap?: CCSSProp
    /**
     * # flex-wrap (fw)
     * The **`flex-wrap`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * ---
     * ## Shorthands
     *	- **w**: `wrap`
     *
     * ---
     * ## Aliases
     *	- `fw`
     *	- `fx-wrap`
     *	- `flex-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    flexWrap?: CCSSProp
    /**
     * # flex-basis (fb)
     * The **`flex-basis`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.").


     *
     * ---
     * ## Aliases
     *	- `fb`
     *	- `fx-base`
     *	- `flex-basis`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    fb?: CCSSProp
    /**
     * # flex-basis (fb)
     * The **`flex-basis`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.").


     *
     * ---
     * ## Aliases
     *	- `fb`
     *	- `fx-base`
     *	- `flex-basis`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    fxBase?: CCSSProp
    /**
     * # flex-basis (fb)
     * The **`flex-basis`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.").


     *
     * ---
     * ## Aliases
     *	- `fb`
     *	- `fx-base`
     *	- `flex-basis`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    flexBasis?: CCSSProp
    /**
     * # flex-flow (ff)
     * The **`flex-flow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies the direction of a flex container, as well as its wrapping behavior.


     *
     * ---
     * ## Aliases
     *	- `ff`
     *	- `fx-flow`
     *	- `flex-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
     */
    ff?: CCSSProp
    /**
     * # flex-flow (ff)
     * The **`flex-flow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies the direction of a flex container, as well as its wrapping behavior.


     *
     * ---
     * ## Aliases
     *	- `ff`
     *	- `fx-flow`
     *	- `flex-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
     */
    fxFlow?: CCSSProp
    /**
     * # flex-flow (ff)
     * The **`flex-flow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies the direction of a flex container, as well as its wrapping behavior.


     *
     * ---
     * ## Aliases
     *	- `ff`
     *	- `fx-flow`
     *	- `flex-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
     */
    flexFlow?: CCSSProp
    /**
     * # flex-grow (fg)
     * The **`flex-grow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex grow factor of a flex item [main size](https://developer.mozilla.orghttps://www.w3.org/TR/css-flexbox/#main-size).


     *
     * ---
     * ## Aliases
     *	- `fg`
     *	- `fx-grow`
     *	- `flex-grow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    fg?: CCSSProp
    /**
     * # flex-grow (fg)
     * The **`flex-grow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex grow factor of a flex item [main size](https://developer.mozilla.orghttps://www.w3.org/TR/css-flexbox/#main-size).


     *
     * ---
     * ## Aliases
     *	- `fg`
     *	- `fx-grow`
     *	- `flex-grow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    fxGrow?: CCSSProp
    /**
     * # flex-grow (fg)
     * The **`flex-grow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex grow factor of a flex item [main size](https://developer.mozilla.orghttps://www.w3.org/TR/css-flexbox/#main-size).


     *
     * ---
     * ## Aliases
     *	- `fg`
     *	- `fx-grow`
     *	- `flex-grow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    flexGrow?: CCSSProp
    /**
     * # flex-shrink (fs)
     * The **`flex-shrink`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.


     *
     * ---
     * ## Aliases
     *	- `fs`
     *	- `fx-shrink`
     *	- `flex-shrink`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    fs?: CCSSProp
    /**
     * # flex-shrink (fs)
     * The **`flex-shrink`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.


     *
     * ---
     * ## Aliases
     *	- `fs`
     *	- `fx-shrink`
     *	- `flex-shrink`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    fxShrink?: CCSSProp
    /**
     * # flex-shrink (fs)
     * The **`flex-shrink`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.


     *
     * ---
     * ## Aliases
     *	- `fs`
     *	- `fx-shrink`
     *	- `flex-shrink`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    flexShrink?: CCSSProp
    /**
     * # align-items (ai)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-items`** property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.") value on all direct children as a group. In Flexbox, it controls the alignment of items on the [Cross Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis). In Grid Layout, it controls the alignment of items on the Block Axis within their [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ai`
     *	- `al-items`
     *	- `align-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    ai?: CCSSProp
    /**
     * # align-items (ai)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-items`** property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.") value on all direct children as a group. In Flexbox, it controls the alignment of items on the [Cross Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis). In Grid Layout, it controls the alignment of items on the Block Axis within their [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ai`
     *	- `al-items`
     *	- `align-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alItems?: CCSSProp
    /**
     * # align-items (ai)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-items`** property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.") value on all direct children as a group. In Flexbox, it controls the alignment of items on the [Cross Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis). In Grid Layout, it controls the alignment of items on the Block Axis within their [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ai`
     *	- `al-items`
     *	- `align-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alignItems?: CCSSProp
    /**
     * # align-content (ac)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)'s cross-axis or a [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)'s block axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ac`
     *	- `al-content`
     *	- `align-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    ac?: CCSSProp
    /**
     * # align-content (ac)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)'s cross-axis or a [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)'s block axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ac`
     *	- `al-content`
     *	- `align-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    alContent?: CCSSProp
    /**
     * # align-content (ac)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`align-content`** property sets the distribution of space between and around content items along a [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)'s cross-axis or a [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)'s block axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ac`
     *	- `al-content`
     *	- `align-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    alignContent?: CCSSProp
    /**
     * # justify-items (ji)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-items`** property defines the default [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self "The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.") for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ji`
     *	- `just-items`
     *	- `justify-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    ji?: CCSSProp
    /**
     * # justify-items (ji)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-items`** property defines the default [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self "The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.") for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ji`
     *	- `just-items`
     *	- `justify-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    justItems?: CCSSProp
    /**
     * # justify-items (ji)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-items`** property defines the default [`justify-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self "The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.") for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `ji`
     *	- `just-items`
     *	- `justify-items`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    justifyItems?: CCSSProp
    /**
     * # justify-content (jc)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container, and the inline axis of a grid container.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jc`
     *	- `just-content`
     *	- `justify-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    jc?: CCSSProp
    /**
     * # justify-content (jc)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container, and the inline axis of a grid container.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jc`
     *	- `just-content`
     *	- `justify-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justContent?: CCSSProp
    /**
     * # justify-content (jc)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-content`** property defines how the browser distributes space between and around content items along the [main-axis](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of a flex container, and the inline axis of a grid container.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jc`
     *	- `just-content`
     *	- `justify-content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justifyContent?: CCSSProp
    /**
     * # align-self (aS)
     * The **`align-self`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property overrides a grid or flex item's [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items "The CSS align-items property sets the align-self value on all direct children as a group.") value. In Grid, it aligns the item inside the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas). In Flexbox, it aligns the item on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/cross_axis).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `aS`
     *	- `al-self`
     *	- `align-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    aS?: CCSSProp
    /**
     * # align-self (aS)
     * The **`align-self`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property overrides a grid or flex item's [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items "The CSS align-items property sets the align-self value on all direct children as a group.") value. In Grid, it aligns the item inside the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas). In Flexbox, it aligns the item on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/cross_axis).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `aS`
     *	- `al-self`
     *	- `align-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    alSelf?: CCSSProp
    /**
     * # align-self (aS)
     * The **`align-self`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property overrides a grid or flex item's [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items "The CSS align-items property sets the align-self value on all direct children as a group.") value. In Grid, it aligns the item inside the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas). In Flexbox, it aligns the item on the [cross axis](https://developer.mozilla.org/en-US/docs/Glossary/cross_axis).
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `aS`
     *	- `al-self`
     *	- `align-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    alignSelf?: CCSSProp
    /**
     * # justify-self (jS)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jS`
     *	- `just-self`
     *	- `justify-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    jS?: CCSSProp
    /**
     * # justify-self (jS)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jS`
     *	- `just-self`
     *	- `justify-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    justSelf?: CCSSProp
    /**
     * # justify-self (jS)
     * The [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
     *
     * ---
     * ## Shorthands
     *	- **s**: `start`
     *	- **fs**: `flex-start`
     *	- **e**: `end`
     *	- **fe**: `flex-end`
     *	- **st**: `stretch`
     *	- **c**: `center`
     *	- **n**: `normal`
     *	- **sb**: `space-between`
     *	- **as**: `space-around`
     *	- **se**: `space-evenly`
     *
     * ---
     * ## Aliases
     *	- `jS`
     *	- `just-self`
     *	- `justify-self`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    justifySelf?: CCSSProp
    /**
     * # font (ft)
     * The **`font`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.


     *
     * ---
     * ## Aliases
     *	- `ft`
     *	- `font`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
     */
    ft?: CCSSProp
    /**
     * # font (ft)
     * The **`font`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.


     *
     * ---
     * ## Aliases
     *	- `ft`
     *	- `font`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
     */
    font?: CCSSProp
    /**
     * # font-family (ftf)
     * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.


     *
     * ---
     * ## Aliases
     *	- `ftf`
     *	- `ft-family`
     *	- `font-family`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    ftf?: CCSSProp
    /**
     * # font-family (ftf)
     * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.


     *
     * ---
     * ## Aliases
     *	- `ftf`
     *	- `ft-family`
     *	- `font-family`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    ftFamily?: CCSSProp
    /**
     * # font-family (ftf)
     * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.


     *
     * ---
     * ## Aliases
     *	- `ftf`
     *	- `ft-family`
     *	- `font-family`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
     */
    fontFamily?: CCSSProp
    /**
     * # font-kerning (ftk)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `ftk`
     *	- `ft-kern`
     *	- `font-kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
     */
    ftk?: CCSSProp
    /**
     * # font-kerning (ftk)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `ftk`
     *	- `ft-kern`
     *	- `font-kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
     */
    ftKern?: CCSSProp
    /**
     * # font-kerning (ftk)
     * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.


     *
     * ---
     * ## Aliases
     *	- `ftk`
     *	- `ft-kern`
     *	- `font-kerning`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning
     */
    fontKerning?: CCSSProp
    /**
     * # font-size (fts)
     * The **`font-size`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the font. Changing the font size also updates the sizes of the font size-relative [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.") units, such as `em`, `ex`, and so forth.


     *
     * ---
     * ## Aliases
     *	- `fts`
     *	- `ft-size`
     *	- `font-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    fts?: CCSSProp
    /**
     * # font-size (fts)
     * The **`font-size`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the font. Changing the font size also updates the sizes of the font size-relative [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.") units, such as `em`, `ex`, and so forth.


     *
     * ---
     * ## Aliases
     *	- `fts`
     *	- `ft-size`
     *	- `font-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    ftSize?: CCSSProp
    /**
     * # font-size (fts)
     * The **`font-size`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the font. Changing the font size also updates the sizes of the font size-relative [`<length>`](https://developer.mozilla.org/en-US/docs/Web/CSS/length "The <length> CSS data type represents a distance value. Lengths can be used in numerous CSS properties, such as width, height, margin, padding, border-width, font-size, and text-shadow.") units, such as `em`, `ex`, and so forth.


     *
     * ---
     * ## Aliases
     *	- `fts`
     *	- `ft-size`
     *	- `font-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
     */
    fontSize?: CCSSProp
    /**
     * # font-stretch (ftStr)
     * The **`font-stretch`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.
     *
     * ---
     * ## Shorthands
     *	- **uc**: `ultra-condensed`
     *	- **ec**: `extra-condensed`
     *	- **c**: `condensed`
     *	- **sc**: `semi-condensed`
     *	- **n**: `normal`
     *	- **se**: `semi-expanded`
     *	- **e**: `expanded`
     *	- **ee**: `extra-expanded`
     *	- **ue**: `ultra-expanded`
     *
     * ---
     * ## Aliases
     *	- `ftStr`
     *	- `ft-stretch`
     *	- `font-stretch`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
     */
    ftStr?: CCSSProp
    /**
     * # font-stretch (ftStr)
     * The **`font-stretch`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.
     *
     * ---
     * ## Shorthands
     *	- **uc**: `ultra-condensed`
     *	- **ec**: `extra-condensed`
     *	- **c**: `condensed`
     *	- **sc**: `semi-condensed`
     *	- **n**: `normal`
     *	- **se**: `semi-expanded`
     *	- **e**: `expanded`
     *	- **ee**: `extra-expanded`
     *	- **ue**: `ultra-expanded`
     *
     * ---
     * ## Aliases
     *	- `ftStr`
     *	- `ft-stretch`
     *	- `font-stretch`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
     */
    ftStretch?: CCSSProp
    /**
     * # font-stretch (ftStr)
     * The **`font-stretch`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property selects a normal, condensed, or expanded face from a font.
     *
     * ---
     * ## Shorthands
     *	- **uc**: `ultra-condensed`
     *	- **ec**: `extra-condensed`
     *	- **c**: `condensed`
     *	- **sc**: `semi-condensed`
     *	- **n**: `normal`
     *	- **se**: `semi-expanded`
     *	- **e**: `expanded`
     *	- **ee**: `extra-expanded`
     *	- **ue**: `ultra-expanded`
     *
     * ---
     * ## Aliases
     *	- `ftStr`
     *	- `ft-stretch`
     *	- `font-stretch`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch
     */
    fontStretch?: CCSSProp
    /**
     * # font-style (ftSty)
     * The **`font-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a font should be styled with a normal, italic, or oblique face from its [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.").
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **i**: `italic`
     *	- **o**: `oblique`
     *
     * ---
     * ## Aliases
     *	- `ftSty`
     *	- `ft-style`
     *	- `font-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
     */
    ftSty?: CCSSProp
    /**
     * # font-style (ftSty)
     * The **`font-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a font should be styled with a normal, italic, or oblique face from its [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.").
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **i**: `italic`
     *	- **o**: `oblique`
     *
     * ---
     * ## Aliases
     *	- `ftSty`
     *	- `ft-style`
     *	- `font-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
     */
    ftStyle?: CCSSProp
    /**
     * # font-style (ftSty)
     * The **`font-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a font should be styled with a normal, italic, or oblique face from its [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.").
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **i**: `italic`
     *	- **o**: `oblique`
     *
     * ---
     * ## Aliases
     *	- `ftSty`
     *	- `ft-style`
     *	- `font-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
     */
    fontStyle?: CCSSProp
    /**
     * # font-variant (ftv)
     * The **font-variant** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the font variants for a font.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **sc**: `small-caps`
     *
     * ---
     * ## Aliases
     *	- `ftv`
     *	- `ft-variant`
     *	- `font-variant`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
     */
    ftv?: CCSSProp
    /**
     * # font-variant (ftv)
     * The **font-variant** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the font variants for a font.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **sc**: `small-caps`
     *
     * ---
     * ## Aliases
     *	- `ftv`
     *	- `ft-variant`
     *	- `font-variant`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
     */
    ftVariant?: CCSSProp
    /**
     * # font-variant (ftv)
     * The **font-variant** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the font variants for a font.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **sc**: `small-caps`
     *
     * ---
     * ## Aliases
     *	- `ftv`
     *	- `ft-variant`
     *	- `font-variant`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant
     */
    fontVariant?: CCSSProp
    /**
     * # font-weight (ftw)
     * The **`font-weight`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.") that is currently set.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `bold`
     *	- **br**: `bolder`
     *	- **l**: `lighter`
     *
     * ---
     * ## Aliases
     *	- `ftw`
     *	- `ft-weight`
     *	- `font-weight`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    ftw?: CCSSProp
    /**
     * # font-weight (ftw)
     * The **`font-weight`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.") that is currently set.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `bold`
     *	- **br**: `bolder`
     *	- **l**: `lighter`
     *
     * ---
     * ## Aliases
     *	- `ftw`
     *	- `ft-weight`
     *	- `font-weight`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    ftWeight?: CCSSProp
    /**
     * # font-weight (ftw)
     * The **`font-weight`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the weight (or boldness) of the font. The weights available depend on the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family "The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.") that is currently set.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `bold`
     *	- **br**: `bolder`
     *	- **l**: `lighter`
     *
     * ---
     * ## Aliases
     *	- `ftw`
     *	- `ft-weight`
     *	- `font-weight`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
     */
    fontWeight?: CCSSProp
    /**
     * # letter-spacing (ls)
     * The **`letter-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.


     *
     * ---
     * ## Aliases
     *	- `ls`
     *	- `ltr-spacing`
     *	- `letter-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
     */
    ls?: CCSSProp
    /**
     * # letter-spacing (ls)
     * The **`letter-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.


     *
     * ---
     * ## Aliases
     *	- `ls`
     *	- `ltr-spacing`
     *	- `letter-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
     */
    ltrSpacing?: CCSSProp
    /**
     * # letter-spacing (ls)
     * The **`letter-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.


     *
     * ---
     * ## Aliases
     *	- `ls`
     *	- `ltr-spacing`
     *	- `letter-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
     */
    letterSpacing?: CCSSProp
    /**
     * # line-height (lh)
     * The **`line-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-[replaced](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) inline elements, it specifies the height that is used to calculate line box height.


     *
     * ---
     * ## Aliases
     *	- `lh`
     *	- `line-h`
     *	- `line-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    lh?: CCSSProp
    /**
     * # line-height (lh)
     * The **`line-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-[replaced](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) inline elements, it specifies the height that is used to calculate line box height.


     *
     * ---
     * ## Aliases
     *	- `lh`
     *	- `line-h`
     *	- `line-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    lineH?: CCSSProp
    /**
     * # line-height (lh)
     * The **`line-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-[replaced](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element) inline elements, it specifies the height that is used to calculate line box height.


     *
     * ---
     * ## Aliases
     *	- `lh`
     *	- `line-h`
     *	- `line-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     */
    lineHeight?: CCSSProp
    /**
     * # text-align (ta)
     * The **`text-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal alignment of a block element or table-cell box. This means it works like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align "The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.") but in the horizontal direction.
     *
     * ---
     * ## Shorthands
     *	- **l**: `left`
     *	- **c**: `center`
     *	- **j**: `justify`
     *	- **r**: `right`
     *
     * ---
     * ## Aliases
     *	- `ta`
     *	- `txt-align`
     *	- `text-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    ta?: CCSSProp
    /**
     * # text-align (ta)
     * The **`text-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal alignment of a block element or table-cell box. This means it works like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align "The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.") but in the horizontal direction.
     *
     * ---
     * ## Shorthands
     *	- **l**: `left`
     *	- **c**: `center`
     *	- **j**: `justify`
     *	- **r**: `right`
     *
     * ---
     * ## Aliases
     *	- `ta`
     *	- `txt-align`
     *	- `text-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    txtAlign?: CCSSProp
    /**
     * # text-align (ta)
     * The **`text-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the horizontal alignment of a block element or table-cell box. This means it works like [`vertical-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align "The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.") but in the horizontal direction.
     *
     * ---
     * ## Shorthands
     *	- **l**: `left`
     *	- **c**: `center`
     *	- **j**: `justify`
     *	- **r**: `right`
     *
     * ---
     * ## Aliases
     *	- `ta`
     *	- `txt-align`
     *	- `text-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
     */
    textAlign?: CCSSProp
    /**
     * # text-decoration (td)
     * The **`text-decoration`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the appearance of decorative lines on text. It is a shorthand for [`text-decoration-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline."), [`text-decoration-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line."), [`text-decoration-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line."), and the newer [`text-decoration-thickness`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness "The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.") property.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **u**: `underline`
     *	- **o**: `overline`
     *	- **t**: `line-through`
     *
     * ---
     * ## Aliases
     *	- `td`
     *	- `txt-decor`
     *	- `text-decoration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    td?: CCSSProp
    /**
     * # text-decoration (td)
     * The **`text-decoration`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the appearance of decorative lines on text. It is a shorthand for [`text-decoration-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline."), [`text-decoration-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line."), [`text-decoration-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line."), and the newer [`text-decoration-thickness`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness "The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.") property.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **u**: `underline`
     *	- **o**: `overline`
     *	- **t**: `line-through`
     *
     * ---
     * ## Aliases
     *	- `td`
     *	- `txt-decor`
     *	- `text-decoration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    txtDecor?: CCSSProp
    /**
     * # text-decoration (td)
     * The **`text-decoration`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the appearance of decorative lines on text. It is a shorthand for [`text-decoration-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line "The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline."), [`text-decoration-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color "The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line."), [`text-decoration-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style "The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line."), and the newer [`text-decoration-thickness`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness "The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.") property.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **u**: `underline`
     *	- **o**: `overline`
     *	- **t**: `line-through`
     *
     * ---
     * ## Aliases
     *	- `td`
     *	- `txt-decor`
     *	- `text-decoration`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
     */
    textDecoration?: CCSSProp
    /**
     * # text-indent (ti)
     * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.


     *
     * ---
     * ## Aliases
     *	- `ti`
     *	- `txt-in`
     *	- `text-indent`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent
     */
    ti?: CCSSProp
    /**
     * # text-indent (ti)
     * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.


     *
     * ---
     * ## Aliases
     *	- `ti`
     *	- `txt-in`
     *	- `text-indent`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent
     */
    txtIn?: CCSSProp
    /**
     * # text-indent (ti)
     * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.


     *
     * ---
     * ## Aliases
     *	- `ti`
     *	- `txt-in`
     *	- `text-indent`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent
     */
    textIndent?: CCSSProp
    /**
     * # text-overflow (to)
     * The **`text-overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
     *
     * ---
     * ## Shorthands
     *	- **c**: `clip`
     *	- **e**: `ellipsis`
     *
     * ---
     * ## Aliases
     *	- `to`
     *	- `txt-flow`
     *	- `text-overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
     */
    to?: CCSSProp
    /**
     * # text-overflow (to)
     * The **`text-overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
     *
     * ---
     * ## Shorthands
     *	- **c**: `clip`
     *	- **e**: `ellipsis`
     *
     * ---
     * ## Aliases
     *	- `to`
     *	- `txt-flow`
     *	- `text-overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
     */
    txtFlow?: CCSSProp
    /**
     * # text-overflow (to)
     * The **`text-overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
     *
     * ---
     * ## Shorthands
     *	- **c**: `clip`
     *	- **e**: `ellipsis`
     *
     * ---
     * ## Aliases
     *	- `to`
     *	- `txt-flow`
     *	- `text-overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
     */
    textOverflow?: CCSSProp
    /**
     * # text-shadow (ts)
     * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `[decorations](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.


     *
     * ---
     * ## Aliases
     *	- `ts`
     *	- `txt-shad`
     *	- `text-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
     */
    ts?: CCSSProp
    /**
     * # text-shadow (ts)
     * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `[decorations](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.


     *
     * ---
     * ## Aliases
     *	- `ts`
     *	- `txt-shad`
     *	- `text-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
     */
    txtShad?: CCSSProp
    /**
     * # text-shadow (ts)
     * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `[decorations](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.


     *
     * ---
     * ## Aliases
     *	- `ts`
     *	- `txt-shad`
     *	- `text-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
     */
    textShadow?: CCSSProp
    /**
     * # text-transform (tt)
     * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **c**: `capitalize`
     *	- **u**: `uppercase`
     *	- **l**: `lowercase`
     *
     * ---
     * ## Aliases
     *	- `tt`
     *	- `txt-tranf`
     *	- `text-transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    tt?: CCSSProp
    /**
     * # text-transform (tt)
     * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **c**: `capitalize`
     *	- **u**: `uppercase`
     *	- **l**: `lowercase`
     *
     * ---
     * ## Aliases
     *	- `tt`
     *	- `txt-tranf`
     *	- `text-transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    txtTranf?: CCSSProp
    /**
     * # text-transform (tt)
     * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **c**: `capitalize`
     *	- **u**: `uppercase`
     *	- **l**: `lowercase`
     *
     * ---
     * ## Aliases
     *	- `tt`
     *	- `txt-tranf`
     *	- `text-transform`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
     */
    textTransform?: CCSSProp
    /**
     * # vertical-align (va)
     * The **`vertical-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets vertical alignment of an inline, inline-block or table-cell box.
     *
     * ---
     * ## Shorthands
     *	- **b**: `baseline`
     *	- **sub**: `sub`
     *	- **sup**: `super`
     *	- **t**: `top`
     *	- **tt**: `text-top`
     *	- **m**: `middle`
     *	- **bot**: `bottom`
     *	- **tb**: `text-bottom`
     *
     * ---
     * ## Aliases
     *	- `va`
     *	- `v-align`
     *	- `vertical-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
     */
    va?: CCSSProp
    /**
     * # vertical-align (va)
     * The **`vertical-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets vertical alignment of an inline, inline-block or table-cell box.
     *
     * ---
     * ## Shorthands
     *	- **b**: `baseline`
     *	- **sub**: `sub`
     *	- **sup**: `super`
     *	- **t**: `top`
     *	- **tt**: `text-top`
     *	- **m**: `middle`
     *	- **bot**: `bottom`
     *	- **tb**: `text-bottom`
     *
     * ---
     * ## Aliases
     *	- `va`
     *	- `v-align`
     *	- `vertical-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
     */
    vAlign?: CCSSProp
    /**
     * # vertical-align (va)
     * The **`vertical-align`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets vertical alignment of an inline, inline-block or table-cell box.
     *
     * ---
     * ## Shorthands
     *	- **b**: `baseline`
     *	- **sub**: `sub`
     *	- **sup**: `super`
     *	- **t**: `top`
     *	- **tt**: `text-top`
     *	- **m**: `middle`
     *	- **bot**: `bottom`
     *	- **tb**: `text-bottom`
     *
     * ---
     * ## Aliases
     *	- `va`
     *	- `v-align`
     *	- `vertical-align`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align
     */
    verticalAlign?: CCSSProp
    /**
     * # white-space (ws)
     * The **`white-space`** CSS property sets how [white space](https://developer.mozilla.org/en-US/docs/Glossary/whitespace) inside an element is handled.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **nw**: `nowrap`
     *	- **p**: `pre`
     *	- **pl**: `pre-line`
     *	- **pw**: `pre-wrap`
     *
     * ---
     * ## Aliases
     *	- `ws`
     *	- `w-space`
     *	- `white-space`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
     */
    ws?: CCSSProp
    /**
     * # white-space (ws)
     * The **`white-space`** CSS property sets how [white space](https://developer.mozilla.org/en-US/docs/Glossary/whitespace) inside an element is handled.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **nw**: `nowrap`
     *	- **p**: `pre`
     *	- **pl**: `pre-line`
     *	- **pw**: `pre-wrap`
     *
     * ---
     * ## Aliases
     *	- `ws`
     *	- `w-space`
     *	- `white-space`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
     */
    wSpace?: CCSSProp
    /**
     * # white-space (ws)
     * The **`white-space`** CSS property sets how [white space](https://developer.mozilla.org/en-US/docs/Glossary/whitespace) inside an element is handled.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **nw**: `nowrap`
     *	- **p**: `pre`
     *	- **pl**: `pre-line`
     *	- **pw**: `pre-wrap`
     *
     * ---
     * ## Aliases
     *	- `ws`
     *	- `w-space`
     *	- `white-space`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
     */
    whiteSpace?: CCSSProp
    /**
     * # word-break (wb)
     * The **`word-break`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether line breaks appear wherever the text would otherwise overflow its content box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **ba**: `break-all`
     *	- **ka**: `keep-all`
     *	- **bw**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `wb`
     *	- `w-break`
     *	- `word-break`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
     */
    wb?: CCSSProp
    /**
     * # word-break (wb)
     * The **`word-break`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether line breaks appear wherever the text would otherwise overflow its content box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **ba**: `break-all`
     *	- **ka**: `keep-all`
     *	- **bw**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `wb`
     *	- `w-break`
     *	- `word-break`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
     */
    wBreak?: CCSSProp
    /**
     * # word-break (wb)
     * The **`word-break`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether line breaks appear wherever the text would otherwise overflow its content box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **ba**: `break-all`
     *	- **ka**: `keep-all`
     *	- **bw**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `wb`
     *	- `w-break`
     *	- `word-break`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
     */
    wordBreak?: CCSSProp
    /**
     * # word-spacing (wS)
     * The **`word-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of space between words and between tags.


     *
     * ---
     * ## Aliases
     *	- `wS`
     *	- `w-spacing`
     *	- `word-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
     */
    wS?: CCSSProp
    /**
     * # word-spacing (wS)
     * The **`word-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of space between words and between tags.


     *
     * ---
     * ## Aliases
     *	- `wS`
     *	- `w-spacing`
     *	- `word-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
     */
    wSpacing?: CCSSProp
    /**
     * # word-spacing (wS)
     * The **`word-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the length of space between words and between tags.


     *
     * ---
     * ## Aliases
     *	- `wS`
     *	- `w-spacing`
     *	- `word-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing
     */
    wordSpacing?: CCSSProp
    /**
     * # word-wrap (ww)
     * The `**overflow-wrap**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `ww`
     *	- `w-wrap`
     *	- `word-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap
     */
    ww?: CCSSProp
    /**
     * # word-wrap (ww)
     * The `**overflow-wrap**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `ww`
     *	- `w-wrap`
     *	- `word-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap
     */
    wWrap?: CCSSProp
    /**
     * # word-wrap (ww)
     * The `**overflow-wrap**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **b**: `break-word`
     *
     * ---
     * ## Aliases
     *	- `ww`
     *	- `w-wrap`
     *	- `word-wrap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/word-wrap
     */
    wordWrap?: CCSSProp
    /**
     * # list-style (l)
     * The **`list-style`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you set all the list style properties at once.


     *
     * ---
     * ## Aliases
     *	- `l`
     *	- `list`
     *	- `list-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
     */
    l?: CCSSProp
    /**
     * # list-style (l)
     * The **`list-style`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you set all the list style properties at once.


     *
     * ---
     * ## Aliases
     *	- `l`
     *	- `list`
     *	- `list-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
     */
    list?: CCSSProp
    /**
     * # list-style (l)
     * The **`list-style`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) allows you set all the list style properties at once.


     *
     * ---
     * ## Aliases
     *	- `l`
     *	- `list`
     *	- `list-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style
     */
    listStyle?: CCSSProp
    /**
     * # list-style-image (li)
     * The **`list-style-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image to be used as the list item marker.


     *
     * ---
     * ## Aliases
     *	- `li`
     *	- `list-img`
     *	- `list-style-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
     */
    li?: CCSSProp
    /**
     * # list-style-image (li)
     * The **`list-style-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image to be used as the list item marker.


     *
     * ---
     * ## Aliases
     *	- `li`
     *	- `list-img`
     *	- `list-style-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
     */
    listImg?: CCSSProp
    /**
     * # list-style-image (li)
     * The **`list-style-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an image to be used as the list item marker.


     *
     * ---
     * ## Aliases
     *	- `li`
     *	- `list-img`
     *	- `list-style-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
     */
    listStyleImage?: CCSSProp
    /**
     * # list-style-position (lp)
     * The **`list-style-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the position of the [`::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker "The ::marker CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number.") relative to a list item.


     *
     * ---
     * ## Aliases
     *	- `lp`
     *	- `list-pos`
     *	- `list-style-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
     */
    lp?: CCSSProp
    /**
     * # list-style-position (lp)
     * The **`list-style-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the position of the [`::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker "The ::marker CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number.") relative to a list item.


     *
     * ---
     * ## Aliases
     *	- `lp`
     *	- `list-pos`
     *	- `list-style-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
     */
    listPos?: CCSSProp
    /**
     * # list-style-position (lp)
     * The **`list-style-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the position of the [`::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker "The ::marker CSS pseudo-element selects the marker box of a list item, which typically contains a bullet or number.") relative to a list item.


     *
     * ---
     * ## Aliases
     *	- `lp`
     *	- `list-pos`
     *	- `list-style-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position
     */
    listStylePosition?: CCSSProp
    /**
     * # list-style-type (lt)
     * The **`list-style-type`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the marker (such as a disc, character, or custom counter style) of a list item element.


     *
     * ---
     * ## Aliases
     *	- `lt`
     *	- `list-type`
     *	- `list-style-type`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    lt?: CCSSProp
    /**
     * # list-style-type (lt)
     * The **`list-style-type`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the marker (such as a disc, character, or custom counter style) of a list item element.


     *
     * ---
     * ## Aliases
     *	- `lt`
     *	- `list-type`
     *	- `list-style-type`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listType?: CCSSProp
    /**
     * # list-style-type (lt)
     * The **`list-style-type`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the marker (such as a disc, character, or custom counter style) of a list item element.


     *
     * ---
     * ## Aliases
     *	- `lt`
     *	- `list-type`
     *	- `list-style-type`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
     */
    listStyleType?: CCSSProp
    /**
     * # margin (m)
     * The **`margin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on all four sides of an element. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), and [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.").


     *
     * ---
     * ## Aliases
     *	- `m`
     *	- `mar`
     *	- `margin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    m?: CCSSProp
    /**
     * # margin (m)
     * The **`margin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on all four sides of an element. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), and [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.").


     *
     * ---
     * ## Aliases
     *	- `m`
     *	- `mar`
     *	- `margin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    mar?: CCSSProp
    /**
     * # margin (m)
     * The **`margin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on all four sides of an element. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer."), and [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.").


     *
     * ---
     * ## Aliases
     *	- `m`
     *	- `mar`
     *	- `margin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
     */
    margin?: CCSSProp
    /**
     * # margin-top (mT)
     * The **`margin-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mT`
     *	- `mar-top`
     *	- `margin-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
     */
    mT?: CCSSProp
    /**
     * # margin-top (mT)
     * The **`margin-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mT`
     *	- `mar-top`
     *	- `margin-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
     */
    marTop?: CCSSProp
    /**
     * # margin-top (mT)
     * The **`margin-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mT`
     *	- `mar-top`
     *	- `margin-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
     */
    marginTop?: CCSSProp
    /**
     * # margin-right (mR)
     * The **`margin-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mR`
     *	- `mar-right`
     *	- `margin-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
     */
    mR?: CCSSProp
    /**
     * # margin-right (mR)
     * The **`margin-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mR`
     *	- `mar-right`
     *	- `margin-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
     */
    marRight?: CCSSProp
    /**
     * # margin-right (mR)
     * The **`margin-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mR`
     *	- `mar-right`
     *	- `margin-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
     */
    marginRight?: CCSSProp
    /**
     * # margin-bottom (mB)
     * The **`margin-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mB`
     *	- `mar-bottom`
     *	- `margin-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
     */
    mB?: CCSSProp
    /**
     * # margin-bottom (mB)
     * The **`margin-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mB`
     *	- `mar-bottom`
     *	- `margin-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
     */
    marBottom?: CCSSProp
    /**
     * # margin-bottom (mB)
     * The **`margin-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mB`
     *	- `mar-bottom`
     *	- `margin-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
     */
    marginBottom?: CCSSProp
    /**
     * # margin-left (mL)
     * The **`margin-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mL`
     *	- `mar-left`
     *	- `margin-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
     */
    mL?: CCSSProp
    /**
     * # margin-left (mL)
     * The **`margin-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mL`
     *	- `mar-left`
     *	- `margin-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
     */
    marLeft?: CCSSProp
    /**
     * # margin-left (mL)
     * The **`margin-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the [margin area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.


     *
     * ---
     * ## Aliases
     *	- `mL`
     *	- `mar-left`
     *	- `margin-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
     */
    marginLeft?: CCSSProp
    /**
     * # padding (p)
     * The **`padding`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on all four sides of an element at once.


     *
     * ---
     * ## Aliases
     *	- `p`
     *	- `pad`
     *	- `padding`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    p?: CCSSProp
    /**
     * # padding (p)
     * The **`padding`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on all four sides of an element at once.


     *
     * ---
     * ## Aliases
     *	- `p`
     *	- `pad`
     *	- `padding`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    pad?: CCSSProp
    /**
     * # padding (p)
     * The **`padding`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on all four sides of an element at once.


     *
     * ---
     * ## Aliases
     *	- `p`
     *	- `pad`
     *	- `padding`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    padding?: CCSSProp
    /**
     * # padding-top (pT)
     * The **`padding-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the top of an element.


     *
     * ---
     * ## Aliases
     *	- `pT`
     *	- `pad-top`
     *	- `padding-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
     */
    pT?: CCSSProp
    /**
     * # padding-top (pT)
     * The **`padding-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the top of an element.


     *
     * ---
     * ## Aliases
     *	- `pT`
     *	- `pad-top`
     *	- `padding-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
     */
    padTop?: CCSSProp
    /**
     * # padding-top (pT)
     * The **`padding-top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the top of an element.


     *
     * ---
     * ## Aliases
     *	- `pT`
     *	- `pad-top`
     *	- `padding-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
     */
    paddingTop?: CCSSProp
    /**
     * # padding-right (pR)
     * The **`padding-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the right of an element.


     *
     * ---
     * ## Aliases
     *	- `pR`
     *	- `pad-right`
     *	- `padding-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
     */
    pR?: CCSSProp
    /**
     * # padding-right (pR)
     * The **`padding-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the right of an element.


     *
     * ---
     * ## Aliases
     *	- `pR`
     *	- `pad-right`
     *	- `padding-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
     */
    padRight?: CCSSProp
    /**
     * # padding-right (pR)
     * The **`padding-right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the right of an element.


     *
     * ---
     * ## Aliases
     *	- `pR`
     *	- `pad-right`
     *	- `padding-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
     */
    paddingRight?: CCSSProp
    /**
     * # padding-bottom (pB)
     * The **`padding-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the bottom of an element.


     *
     * ---
     * ## Aliases
     *	- `pB`
     *	- `pad-bottom`
     *	- `padding-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
     */
    pB?: CCSSProp
    /**
     * # padding-bottom (pB)
     * The **`padding-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the bottom of an element.


     *
     * ---
     * ## Aliases
     *	- `pB`
     *	- `pad-bottom`
     *	- `padding-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
     */
    padBottom?: CCSSProp
    /**
     * # padding-bottom (pB)
     * The **`padding-bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the height of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) on the bottom of an element.


     *
     * ---
     * ## Aliases
     *	- `pB`
     *	- `pad-bottom`
     *	- `padding-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
     */
    paddingBottom?: CCSSProp
    /**
     * # padding-left (pL)
     * The **`padding-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) to the left of an element.


     *
     * ---
     * ## Aliases
     *	- `pL`
     *	- `pad-left`
     *	- `padding-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
     */
    pL?: CCSSProp
    /**
     * # padding-left (pL)
     * The **`padding-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) to the left of an element.


     *
     * ---
     * ## Aliases
     *	- `pL`
     *	- `pad-left`
     *	- `padding-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
     */
    padLeft?: CCSSProp
    /**
     * # padding-left (pL)
     * The **`padding-left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the [padding area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area) to the left of an element.


     *
     * ---
     * ## Aliases
     *	- `pL`
     *	- `pad-left`
     *	- `padding-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
     */
    paddingLeft?: CCSSProp
    /**
     * # background (bg)
     * The **`background`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets all background style properties at once, such as color, image, origin and size, or repeat method.
     *
     * ---
     * ## Shorthands
     *	- **t**: `transparent`
     *
     * ---
     * ## Aliases
     *	- `bg`
     *	- `background`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background
     */
    bg?: CCSSProp
    /**
     * # background (bg)
     * The **`background`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets all background style properties at once, such as color, image, origin and size, or repeat method.
     *
     * ---
     * ## Shorthands
     *	- **t**: `transparent`
     *
     * ---
     * ## Aliases
     *	- `bg`
     *	- `background`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background
     */
    background?: CCSSProp
    /**
     * # background-image (bgi)
     * The **`background-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets one or more background images on an element.


     *
     * ---
     * ## Aliases
     *	- `bgi`
     *	- `bg-img`
     *	- `background-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    bgi?: CCSSProp
    /**
     * # background-image (bgi)
     * The **`background-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets one or more background images on an element.


     *
     * ---
     * ## Aliases
     *	- `bgi`
     *	- `bg-img`
     *	- `background-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    bgImg?: CCSSProp
    /**
     * # background-image (bgi)
     * The **`background-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets one or more background images on an element.


     *
     * ---
     * ## Aliases
     *	- `bgi`
     *	- `bg-img`
     *	- `background-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    backgroundImage?: CCSSProp
    /**
     * # background-color (bgc)
     * The **`background-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background color of an element.
     *
     * ---
     * ## Shorthands
     *	- **t**: `transparent`
     *
     * ---
     * ## Aliases
     *	- `bgc`
     *	- `bg-color`
     *	- `background-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgc?: CCSSProp
    /**
     * # background-color (bgc)
     * The **`background-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background color of an element.
     *
     * ---
     * ## Shorthands
     *	- **t**: `transparent`
     *
     * ---
     * ## Aliases
     *	- `bgc`
     *	- `bg-color`
     *	- `background-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgColor?: CCSSProp
    /**
     * # background-color (bgc)
     * The **`background-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background color of an element.
     *
     * ---
     * ## Shorthands
     *	- **t**: `transparent`
     *
     * ---
     * ## Aliases
     *	- `bgc`
     *	- `bg-color`
     *	- `background-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    backgroundColor?: CCSSProp
    /**
     * # background-size (bgs)
     * The **`background-size`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **cr**: `cover`
     *	- **cn**: `contain`
     *
     * ---
     * ## Aliases
     *	- `bgs`
     *	- `bg-size`
     *	- `background-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
     */
    bgs?: CCSSProp
    /**
     * # background-size (bgs)
     * The **`background-size`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **cr**: `cover`
     *	- **cn**: `contain`
     *
     * ---
     * ## Aliases
     *	- `bgs`
     *	- `bg-size`
     *	- `background-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
     */
    bgSize?: CCSSProp
    /**
     * # background-size (bgs)
     * The **`background-size`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **cr**: `cover`
     *	- **cn**: `contain`
     *
     * ---
     * ## Aliases
     *	- `bgs`
     *	- `bg-size`
     *	- `background-size`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
     */
    backgroundSize?: CCSSProp
    /**
     * # background-repeat (bgr)
     * The **`background-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * ---
     * ## Shorthands
     *	- **true**: `repeat`
     *	- **x**: `repeat-x`
     *	- **y**: `repeat-y`
     *	- **false**: `no-repeat`
     *	- **n**: `no-repeat`
     *	- **s**: `space`
     *	- **r**: `round`
     *
     * ---
     * ## Aliases
     *	- `bgr`
     *	- `bg-repeat`
     *	- `background-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
     */
    bgr?: CCSSProp
    /**
     * # background-repeat (bgr)
     * The **`background-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * ---
     * ## Shorthands
     *	- **true**: `repeat`
     *	- **x**: `repeat-x`
     *	- **y**: `repeat-y`
     *	- **false**: `no-repeat`
     *	- **n**: `no-repeat`
     *	- **s**: `space`
     *	- **r**: `round`
     *
     * ---
     * ## Aliases
     *	- `bgr`
     *	- `bg-repeat`
     *	- `background-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
     */
    bgRepeat?: CCSSProp
    /**
     * # background-repeat (bgr)
     * The **`background-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * ---
     * ## Shorthands
     *	- **true**: `repeat`
     *	- **x**: `repeat-x`
     *	- **y**: `repeat-y`
     *	- **false**: `no-repeat`
     *	- **n**: `no-repeat`
     *	- **s**: `space`
     *	- **r**: `round`
     *
     * ---
     * ## Aliases
     *	- `bgr`
     *	- `bg-repeat`
     *	- `background-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
     */
    backgroundRepeat?: CCSSProp
    /**
     * # background-position (bgp)
     * The **`background-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial position for each background image. The position is relative to the position layer set by [`background-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin "The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.").
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `bgp`
     *	- `bg-pos`
     *	- `background-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    bgp?: CCSSProp
    /**
     * # background-position (bgp)
     * The **`background-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial position for each background image. The position is relative to the position layer set by [`background-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin "The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.").
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `bgp`
     *	- `bg-pos`
     *	- `background-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    bgPos?: CCSSProp
    /**
     * # background-position (bgp)
     * The **`background-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the initial position for each background image. The position is relative to the position layer set by [`background-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin "The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.").
     *
     * ---
     * ## Shorthands
     *	- **c**: `center`
     *	- **t**: `top`
     *	- **tr**: `top right`
     *	- **r**: `right`
     *	- **br**: `bottom right`
     *	- **b**: `bottom`
     *	- **bl**: `bottom left`
     *	- **l**: `left`
     *	- **tl**: `top left`
     *
     * ---
     * ## Aliases
     *	- `bgp`
     *	- `bg-pos`
     *	- `background-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    backgroundPosition?: CCSSProp
    /**
     * # background-attachment (bga)
     * The **`background-attachment`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport), or scrolls with its containing block.
     *
     * ---
     * ## Shorthands
     *	- **s**: `scroll`
     *	- **f**: `fixed`
     *	- **l**: `local`
     *
     * ---
     * ## Aliases
     *	- `bga`
     *	- `bg-attach`
     *	- `background-attachment`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
     */
    bga?: CCSSProp
    /**
     * # background-attachment (bga)
     * The **`background-attachment`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport), or scrolls with its containing block.
     *
     * ---
     * ## Shorthands
     *	- **s**: `scroll`
     *	- **f**: `fixed`
     *	- **l**: `local`
     *
     * ---
     * ## Aliases
     *	- `bga`
     *	- `bg-attach`
     *	- `background-attachment`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
     */
    bgAttach?: CCSSProp
    /**
     * # background-attachment (bga)
     * The **`background-attachment`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport), or scrolls with its containing block.
     *
     * ---
     * ## Shorthands
     *	- **s**: `scroll`
     *	- **f**: `fixed`
     *	- **l**: `local`
     *
     * ---
     * ## Aliases
     *	- `bga`
     *	- `bg-attach`
     *	- `background-attachment`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
     */
    backgroundAttachment?: CCSSProp
    /**
     * # background-blend-mode (bgbm)
     * The **`background-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's background images should blend with each other and with the element's background color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **sc**: `screen`
     *	- **o**: `overlay`
     *	- **d**: `darken`
     *	- **li**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **sa**: `saturation`
     *	- **c**: `color`
     *	- **lu**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `bgbm`
     *	- `bg-blend`
     *	- `background-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
     */
    bgbm?: CCSSProp
    /**
     * # background-blend-mode (bgbm)
     * The **`background-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's background images should blend with each other and with the element's background color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **sc**: `screen`
     *	- **o**: `overlay`
     *	- **d**: `darken`
     *	- **li**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **sa**: `saturation`
     *	- **c**: `color`
     *	- **lu**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `bgbm`
     *	- `bg-blend`
     *	- `background-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
     */
    bgBlend?: CCSSProp
    /**
     * # background-blend-mode (bgbm)
     * The **`background-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's background images should blend with each other and with the element's background color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **sc**: `screen`
     *	- **o**: `overlay`
     *	- **d**: `darken`
     *	- **li**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **sa**: `saturation`
     *	- **c**: `color`
     *	- **lu**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `bgbm`
     *	- `bg-blend`
     *	- `background-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
     */
    backgroundBlendMode?: CCSSProp
    /**
     * # background-clip (bgC)
     * The **`background-clip`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element's background extends underneath its border box, padding box, or content box.


     *
     * ---
     * ## Aliases
     *	- `bgC`
     *	- `bg-clip`
     *	- `background-clip`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    bgC?: CCSSProp
    /**
     * # background-clip (bgC)
     * The **`background-clip`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element's background extends underneath its border box, padding box, or content box.


     *
     * ---
     * ## Aliases
     *	- `bgC`
     *	- `bg-clip`
     *	- `background-clip`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    bgClip?: CCSSProp
    /**
     * # background-clip (bgC)
     * The **`background-clip`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element's background extends underneath its border box, padding box, or content box.


     *
     * ---
     * ## Aliases
     *	- `bgC`
     *	- `bg-clip`
     *	- `background-clip`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    backgroundClip?: CCSSProp
    /**
     * # background-origin (bgo)
     * The **`background-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * ---
     * ## Shorthands
     *	- **b**: `border-box`
     *	- **p**: `padding-box`
     *	- **c**: `content-box`
     *
     * ---
     * ## Aliases
     *	- `bgo`
     *	- `bg-org`
     *	- `background-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
     */
    bgo?: CCSSProp
    /**
     * # background-origin (bgo)
     * The **`background-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * ---
     * ## Shorthands
     *	- **b**: `border-box`
     *	- **p**: `padding-box`
     *	- **c**: `content-box`
     *
     * ---
     * ## Aliases
     *	- `bgo`
     *	- `bg-org`
     *	- `background-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
     */
    bgOrg?: CCSSProp
    /**
     * # background-origin (bgo)
     * The **`background-origin`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * ---
     * ## Shorthands
     *	- **b**: `border-box`
     *	- **p**: `padding-box`
     *	- **c**: `content-box`
     *
     * ---
     * ## Aliases
     *	- `bgo`
     *	- `bg-org`
     *	- `background-origin`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin
     */
    backgroundOrigin?: CCSSProp
    /**
     * # backdrop-filter (bf)
     * The **`backdrop-filter`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.


     *
     * ---
     * ## Aliases
     *	- `bf`
     *	- `bd-filter`
     *	- `backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
     */
    bf?: CCSSProp
    /**
     * # backdrop-filter (bf)
     * The **`backdrop-filter`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.


     *
     * ---
     * ## Aliases
     *	- `bf`
     *	- `bd-filter`
     *	- `backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
     */
    bdFilter?: CCSSProp
    /**
     * # backdrop-filter (bf)
     * The **`backdrop-filter`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.


     *
     * ---
     * ## Aliases
     *	- `bf`
     *	- `bd-filter`
     *	- `backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
     */
    backdropFilter?: CCSSProp
    /**
     * # width (w)
     * The **`width`** CSS property sets an element's width. By default, it sets the width of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area), but if [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, it sets the width of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `w`
     *	- `wid`
     *	- `width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
     */
    w?: CCSSProp
    /**
     * # width (w)
     * The **`width`** CSS property sets an element's width. By default, it sets the width of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area), but if [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, it sets the width of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `w`
     *	- `wid`
     *	- `width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
     */
    wid?: CCSSProp
    /**
     * # width (w)
     * The **`width`** CSS property sets an element's width. By default, it sets the width of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area), but if [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, it sets the width of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `w`
     *	- `wid`
     *	- `width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
     */
    width?: CCSSProp
    /**
     * # height (h)
     * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area). If [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, however, it instead determines the height of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `h`
     *	- `hei`
     *	- `height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
     */
    h?: CCSSProp
    /**
     * # height (h)
     * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area). If [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, however, it instead determines the height of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `h`
     *	- `hei`
     *	- `height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
     */
    hei?: CCSSProp
    /**
     * # height (h)
     * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area). If [`box-sizing`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "The box-sizing CSS property sets how the total width and height of an element is calculated.") is set to `border-box`, however, it instead determines the height of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area).


     *
     * ---
     * ## Aliases
     *	- `h`
     *	- `hei`
     *	- `height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
     */
    height?: CCSSProp
    /**
     * # min-width (minW)
     * The **`min-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming smaller than the value specified for `min-width`.


     *
     * ---
     * ## Aliases
     *	- `minW`
     *	- `min-wid`
     *	- `min-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
     */
    minW?: CCSSProp
    /**
     * # min-width (minW)
     * The **`min-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming smaller than the value specified for `min-width`.


     *
     * ---
     * ## Aliases
     *	- `minW`
     *	- `min-wid`
     *	- `min-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
     */
    minWid?: CCSSProp
    /**
     * # min-width (minW)
     * The **`min-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming smaller than the value specified for `min-width`.


     *
     * ---
     * ## Aliases
     *	- `minW`
     *	- `min-wid`
     *	- `min-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
     */
    minWidth?: CCSSProp
    /**
     * # min-height (minH)
     * The **`min-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming smaller than the value specified for `min-height`.


     *
     * ---
     * ## Aliases
     *	- `minH`
     *	- `min-hei`
     *	- `min-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
     */
    minH?: CCSSProp
    /**
     * # min-height (minH)
     * The **`min-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming smaller than the value specified for `min-height`.


     *
     * ---
     * ## Aliases
     *	- `minH`
     *	- `min-hei`
     *	- `min-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
     */
    minHei?: CCSSProp
    /**
     * # min-height (minH)
     * The **`min-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the minimum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming smaller than the value specified for `min-height`.


     *
     * ---
     * ## Aliases
     *	- `minH`
     *	- `min-hei`
     *	- `min-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
     */
    minHeight?: CCSSProp
    /**
     * # max-width (maxW)
     * The **`max-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming larger than the value specified by `max-width`.


     *
     * ---
     * ## Aliases
     *	- `maxW`
     *	- `max-wid`
     *	- `max-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
     */
    maxW?: CCSSProp
    /**
     * # max-width (maxW)
     * The **`max-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming larger than the value specified by `max-width`.


     *
     * ---
     * ## Aliases
     *	- `maxW`
     *	- `max-wid`
     *	- `max-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
     */
    maxWid?: CCSSProp
    /**
     * # max-width (maxW)
     * The **`max-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum width of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") property from becoming larger than the value specified by `max-width`.


     *
     * ---
     * ## Aliases
     *	- `maxW`
     *	- `max-wid`
     *	- `max-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
     */
    maxWidth?: CCSSProp
    /**
     * # max-height (maxH)
     * The **`max-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming larger than the value specified for `max-height`.


     *
     * ---
     * ## Aliases
     *	- `maxH`
     *	- `max-hei`
     *	- `max-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
     */
    maxH?: CCSSProp
    /**
     * # max-height (maxH)
     * The **`max-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming larger than the value specified for `max-height`.


     *
     * ---
     * ## Aliases
     *	- `maxH`
     *	- `max-hei`
     *	- `max-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
     */
    maxHei?: CCSSProp
    /**
     * # max-height (maxH)
     * The **`max-height`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the maximum height of an element. It prevents the [used value](https://developer.mozilla.org/en-US/docs/Web/CSS/used_value) of the [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height "The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.") property from becoming larger than the value specified for `max-height`.


     *
     * ---
     * ## Aliases
     *	- `maxH`
     *	- `max-hei`
     *	- `max-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
     */
    maxHeight?: CCSSProp
    /**
     * # grid (g)
     * The **`grid`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) that sets all of the explicit and implicit grid properties in a single declaration.


     *
     * ---
     * ## Aliases
     *	- `g`
     *	- `grd`
     *	- `grid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid
     */
    g?: CCSSProp
    /**
     * # grid (g)
     * The **`grid`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) that sets all of the explicit and implicit grid properties in a single declaration.


     *
     * ---
     * ## Aliases
     *	- `g`
     *	- `grd`
     *	- `grid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid
     */
    grd?: CCSSProp
    /**
     * # grid (g)
     * The **`grid`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) that sets all of the explicit and implicit grid properties in a single declaration.


     *
     * ---
     * ## Aliases
     *	- `g`
     *	- `grd`
     *	- `grid`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid
     */
    grid?: CCSSProp
    /**
     * # grid-area (ga)
     * The **`grid-area`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within a [grid](https://developer.mozilla.org/en-US/docs/Glossary/grid) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `ga`
     *	- `gr-area`
     *	- `grid-area`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
     */
    ga?: CCSSProp
    /**
     * # grid-area (ga)
     * The **`grid-area`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within a [grid](https://developer.mozilla.org/en-US/docs/Glossary/grid) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `ga`
     *	- `gr-area`
     *	- `grid-area`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
     */
    grArea?: CCSSProp
    /**
     * # grid-area (ga)
     * The **`grid-area`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within a [grid](https://developer.mozilla.org/en-US/docs/Glossary/grid) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `ga`
     *	- `gr-area`
     *	- `grid-area`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
     */
    gridArea?: CCSSProp
    /**
     * # grid-auto-columns (gac)
     * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gac`
     *	- `gr-auto-cols`
     *	- `grid-auto-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     */
    gac?: CCSSProp
    /**
     * # grid-auto-columns (gac)
     * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gac`
     *	- `gr-auto-cols`
     *	- `grid-auto-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     */
    grAutoCols?: CCSSProp
    /**
     * # grid-auto-columns (gac)
     * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gac`
     *	- `gr-auto-cols`
     *	- `grid-auto-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns
     */
    gridAutoColumns?: CCSSProp
    /**
     * # grid-auto-flow (gaf)
     * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.


     *
     * ---
     * ## Aliases
     *	- `gaf`
     *	- `gr-auto-flow`
     *	- `grid-auto-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     */
    gaf?: CCSSProp
    /**
     * # grid-auto-flow (gaf)
     * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.


     *
     * ---
     * ## Aliases
     *	- `gaf`
     *	- `gr-auto-flow`
     *	- `grid-auto-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     */
    grAutoFlow?: CCSSProp
    /**
     * # grid-auto-flow (gaf)
     * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.


     *
     * ---
     * ## Aliases
     *	- `gaf`
     *	- `gr-auto-flow`
     *	- `grid-auto-flow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow
     */
    gridAutoFlow?: CCSSProp
    /**
     * # grid-auto-rows (gar)
     * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gar`
     *	- `gr-auto-rows`
     *	- `grid-auto-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     */
    gar?: CCSSProp
    /**
     * # grid-auto-rows (gar)
     * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gar`
     *	- `gr-auto-rows`
     *	- `grid-auto-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     */
    grAutoRows?: CCSSProp
    /**
     * # grid-auto-rows (gar)
     * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row [track](https://developer.mozilla.org/en-US/docs/Glossary/grid_tracks) or pattern of tracks.


     *
     * ---
     * ## Aliases
     *	- `gar`
     *	- `gr-auto-rows`
     *	- `grid-auto-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows
     */
    gridAutoRows?: CCSSProp
    /**
     * # grid-column (gc)
     * The **`grid-column`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item's size and location within a [grid column](https://developer.mozilla.org/en-US/docs/Glossary/grid_column) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gc`
     *	- `gr-col`
     *	- `grid-column`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     */
    gc?: CCSSProp
    /**
     * # grid-column (gc)
     * The **`grid-column`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item's size and location within a [grid column](https://developer.mozilla.org/en-US/docs/Glossary/grid_column) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gc`
     *	- `gr-col`
     *	- `grid-column`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     */
    grCol?: CCSSProp
    /**
     * # grid-column (gc)
     * The **`grid-column`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item's size and location within a [grid column](https://developer.mozilla.org/en-US/docs/Glossary/grid_column) by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gc`
     *	- `gr-col`
     *	- `grid-column`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
     */
    gridColumn?: CCSSProp
    /**
     * # grid-column-end (gce)
     * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gce`
     *	- `gr-col-end`
     *	- `grid-column-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     */
    gce?: CCSSProp
    /**
     * # grid-column-end (gce)
     * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gce`
     *	- `gr-col-end`
     *	- `grid-column-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     */
    grColEnd?: CCSSProp
    /**
     * # grid-column-end (gce)
     * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gce`
     *	- `gr-col-end`
     *	- `grid-column-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
     */
    gridColumnEnd?: CCSSProp
    /**
     * # grid-column-gap (gcg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `gcg`
     *	- `gr-col-gap`
     *	- `grid-column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     */
    gcg?: CCSSProp
    /**
     * # grid-column-gap (gcg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `gcg`
     *	- `gr-col-gap`
     *	- `grid-column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     */
    grColGap?: CCSSProp
    /**
     * # grid-column-gap (gcg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `gcg`
     *	- `gr-col-gap`
     *	- `grid-column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap
     */
    gridColumnGap?: CCSSProp
    /**
     * # grid-column-start (gcs)
     * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gcs`
     *	- `gr-col-start`
     *	- `grid-column-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     */
    gcs?: CCSSProp
    /**
     * # grid-column-start (gcs)
     * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gcs`
     *	- `gr-col-start`
     *	- `grid-column-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     */
    grColStart?: CCSSProp
    /**
     * # grid-column-start (gcs)
     * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gcs`
     *	- `gr-col-start`
     *	- `grid-column-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
     */
    gridColumnStart?: CCSSProp
    /**
     * # grid-gap (gg)
     * The **`gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the gaps ([gutters](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between rows and columns. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.") and [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap "The column-gap CSS property sets the size of the gap (gutter) between an element's columns.").


     *
     * ---
     * ## Aliases
     *	- `gg`
     *	- `gr-gap`
     *	- `grid-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     */
    gg?: CCSSProp
    /**
     * # grid-gap (gg)
     * The **`gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the gaps ([gutters](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between rows and columns. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.") and [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap "The column-gap CSS property sets the size of the gap (gutter) between an element's columns.").


     *
     * ---
     * ## Aliases
     *	- `gg`
     *	- `gr-gap`
     *	- `grid-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     */
    grGap?: CCSSProp
    /**
     * # grid-gap (gg)
     * The **`gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the gaps ([gutters](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between rows and columns. It is a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`row-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.") and [`column-gap`](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap "The column-gap CSS property sets the size of the gap (gutter) between an element's columns.").


     *
     * ---
     * ## Aliases
     *	- `gg`
     *	- `gr-gap`
     *	- `grid-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-gap
     */
    gridGap?: CCSSProp
    /**
     * # grid-row (gr)
     * The **`grid-row`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gr`
     *	- `gr-row`
     *	- `grid-row`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     */
    gr?: CCSSProp
    /**
     * # grid-row (gr)
     * The **`grid-row`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gr`
     *	- `gr-row`
     *	- `grid-row`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     */
    grRow?: CCSSProp
    /**
     * # grid-row (gr)
     * The **`grid-row`** CSS [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gr`
     *	- `gr-row`
     *	- `grid-row`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
     */
    gridRow?: CCSSProp
    /**
     * # grid-row-end (gre)
     * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gre`
     *	- `gr-row-end`
     *	- `grid-row-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     */
    gre?: CCSSProp
    /**
     * # grid-row-end (gre)
     * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gre`
     *	- `gr-row-end`
     *	- `grid-row-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     */
    grRowEnd?: CCSSProp
    /**
     * # grid-row-end (gre)
     * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gre`
     *	- `gr-row-end`
     *	- `grid-row-end`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
     */
    gridRowEnd?: CCSSProp
    /**
     * # grid-row-gap (grg)
     * The **`row-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between an element's grid rows.


     *
     * ---
     * ## Aliases
     *	- `grg`
     *	- `gr-row-gap`
     *	- `grid-row-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     */
    grg?: CCSSProp
    /**
     * # grid-row-gap (grg)
     * The **`row-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between an element's grid rows.


     *
     * ---
     * ## Aliases
     *	- `grg`
     *	- `gr-row-gap`
     *	- `grid-row-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     */
    grRowGap?: CCSSProp
    /**
     * # grid-row-gap (grg)
     * The **`row-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/gutters)) between an element's grid rows.


     *
     * ---
     * ## Aliases
     *	- `grg`
     *	- `gr-row-gap`
     *	- `grid-row-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap
     */
    gridRowGap?: CCSSProp
    /**
     * # grid-row-start (grs)
     * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `grs`
     *	- `gr-row-start`
     *	- `grid-row-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     */
    grs?: CCSSProp
    /**
     * # grid-row-start (grs)
     * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `grs`
     *	- `gr-row-start`
     *	- `grid-row-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     */
    grRowStart?: CCSSProp
    /**
     * # grid-row-start (grs)
     * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its [grid area](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `grs`
     *	- `gr-row-start`
     *	- `grid-row-start`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
     */
    gridRowStart?: CCSSProp
    /**
     * # grid-template (gt)
     * The **`grid-template`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for defining [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column), [rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows), and [areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gt`
     *	- `gr-tmpl`
     *	- `grid-template`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
     */
    gt?: CCSSProp
    /**
     * # grid-template (gt)
     * The **`grid-template`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for defining [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column), [rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows), and [areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gt`
     *	- `gr-tmpl`
     *	- `grid-template`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
     */
    grTmpl?: CCSSProp
    /**
     * # grid-template (gt)
     * The **`grid-template`** CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for defining [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column), [rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows), and [areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas).


     *
     * ---
     * ## Aliases
     *	- `gt`
     *	- `gr-tmpl`
     *	- `grid-template`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template
     */
    gridTemplate?: CCSSProp
    /**
     * # grid-template-areas (gta)
     * The **`grid-template-areas`** CSS property specifies named [grid areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas), establishing the cells in the grid and assigning them names.


     *
     * ---
     * ## Aliases
     *	- `gta`
     *	- `gr-areas`
     *	- `grid-template-areas`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
     */
    gta?: CCSSProp
    /**
     * # grid-template-areas (gta)
     * The **`grid-template-areas`** CSS property specifies named [grid areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas), establishing the cells in the grid and assigning them names.


     *
     * ---
     * ## Aliases
     *	- `gta`
     *	- `gr-areas`
     *	- `grid-template-areas`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
     */
    grAreas?: CCSSProp
    /**
     * # grid-template-areas (gta)
     * The **`grid-template-areas`** CSS property specifies named [grid areas](https://developer.mozilla.org/en-US/docs/Glossary/grid_areas), establishing the cells in the grid and assigning them names.


     *
     * ---
     * ## Aliases
     *	- `gta`
     *	- `gr-areas`
     *	- `grid-template-areas`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
     */
    gridTemplateAreas?: CCSSProp
    /**
     * # grid-template-columns (gtc)
     * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column).


     *
     * ---
     * ## Aliases
     *	- `gtc`
     *	- `gr-cols`
     *	- `grid-template-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     */
    gtc?: CCSSProp
    /**
     * # grid-template-columns (gtc)
     * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column).


     *
     * ---
     * ## Aliases
     *	- `gtc`
     *	- `gr-cols`
     *	- `grid-template-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     */
    grCols?: CCSSProp
    /**
     * # grid-template-columns (gtc)
     * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the [grid columns](https://developer.mozilla.org/en-US/docs/Glossary/grid_column).


     *
     * ---
     * ## Aliases
     *	- `gtc`
     *	- `gr-cols`
     *	- `grid-template-columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
     */
    gridTemplateColumns?: CCSSProp
    /**
     * # grid-template-rows (gtr)
     * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows).


     *
     * ---
     * ## Aliases
     *	- `gtr`
     *	- `gr-rows`
     *	- `grid-template-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     */
    gtr?: CCSSProp
    /**
     * # grid-template-rows (gtr)
     * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows).


     *
     * ---
     * ## Aliases
     *	- `gtr`
     *	- `gr-rows`
     *	- `grid-template-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     */
    grRows?: CCSSProp
    /**
     * # grid-template-rows (gtr)
     * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the [grid rows](https://developer.mozilla.org/en-US/docs/Glossary/grid_rows).


     *
     * ---
     * ## Aliases
     *	- `gtr`
     *	- `gr-rows`
     *	- `grid-template-rows`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows
     */
    gridTemplateRows?: CCSSProp
    /**
     * # border (b)
     * The **`border`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's border. It sets the values of [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width "The border-width shorthand CSS property sets the width of an element's border."), [`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style "The border-style shorthand CSS property sets the line style for all four sides of an element's border."), and [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.").


     *
     * ---
     * ## Aliases
     *	- `b`
     *	- `bd`
     *	- `border`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border
     */
    b?: CCSSProp
    /**
     * # border (b)
     * The **`border`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's border. It sets the values of [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width "The border-width shorthand CSS property sets the width of an element's border."), [`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style "The border-style shorthand CSS property sets the line style for all four sides of an element's border."), and [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.").


     *
     * ---
     * ## Aliases
     *	- `b`
     *	- `bd`
     *	- `border`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border
     */
    bd?: CCSSProp
    /**
     * # border (b)
     * The **`border`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's border. It sets the values of [`border-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width "The border-width shorthand CSS property sets the width of an element's border."), [`border-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style "The border-style shorthand CSS property sets the line style for all four sides of an element's border."), and [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.").


     *
     * ---
     * ## Aliases
     *	- `b`
     *	- `bd`
     *	- `border`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border
     */
    border?: CCSSProp
    /**
     * # border-bottom (bB)
     * The **`border-bottom`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It sets the values of [`border-bottom-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width "The border-bottom-width CSS property sets the width of the bottom border of an element."), [`border-bottom-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of an element's bottom border.") and [`border-bottom-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bB`
     *	- `bd-bot`
     *	- `border-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    bB?: CCSSProp
    /**
     * # border-bottom (bB)
     * The **`border-bottom`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It sets the values of [`border-bottom-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width "The border-bottom-width CSS property sets the width of the bottom border of an element."), [`border-bottom-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of an element's bottom border.") and [`border-bottom-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bB`
     *	- `bd-bot`
     *	- `border-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    bdBot?: CCSSProp
    /**
     * # border-bottom (bB)
     * The **`border-bottom`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It sets the values of [`border-bottom-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width "The border-bottom-width CSS property sets the width of the bottom border of an element."), [`border-bottom-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style "The border-bottom-style CSS property sets the line style of an element's bottom border.") and [`border-bottom-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color "The border-bottom-color CSS property sets the color of an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bB`
     *	- `bd-bot`
     *	- `border-bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    borderBottom?: CCSSProp
    /**
     * # border-bottom-color (bBc)
     * The **`border-bottom-color`** CSS property sets the color of an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom "The border-bottom shorthand CSS property sets an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bBc`
     *	- `bd-bot-color`
     *	- `border-bottom-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
     */
    bBc?: CCSSProp
    /**
     * # border-bottom-color (bBc)
     * The **`border-bottom-color`** CSS property sets the color of an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom "The border-bottom shorthand CSS property sets an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bBc`
     *	- `bd-bot-color`
     *	- `border-bottom-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
     */
    bdBotColor?: CCSSProp
    /**
     * # border-bottom-color (bBc)
     * The **`border-bottom-color`** CSS property sets the color of an element's bottom [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom "The border-bottom shorthand CSS property sets an element's bottom border.").


     *
     * ---
     * ## Aliases
     *	- `bBc`
     *	- `bd-bot-color`
     *	- `border-bottom-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
     */
    borderBottomColor?: CCSSProp
    /**
     * # border-bottom-left-radius (bBlr)
     * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBlr`
     *	- `bd-bot-left-radius`
     *	- `border-bottom-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     */
    bBlr?: CCSSProp
    /**
     * # border-bottom-left-radius (bBlr)
     * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBlr`
     *	- `bd-bot-left-radius`
     *	- `border-bottom-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     */
    bdBotLeftRadius?: CCSSProp
    /**
     * # border-bottom-left-radius (bBlr)
     * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBlr`
     *	- `bd-bot-left-radius`
     *	- `border-bottom-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     */
    borderBottomLeftRadius?: CCSSProp
    /**
     * # border-bottom-right-radius (bBrr)
     * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBrr`
     *	- `bd-bot-right-radius`
     *	- `border-bottom-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    bBrr?: CCSSProp
    /**
     * # border-bottom-right-radius (bBrr)
     * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBrr`
     *	- `bd-bot-right-radius`
     *	- `border-bottom-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    bdBotRightRadius?: CCSSProp
    /**
     * # border-bottom-right-radius (bBrr)
     * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element.


     *
     * ---
     * ## Aliases
     *	- `bBrr`
     *	- `bd-bot-right-radius`
     *	- `border-bottom-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    borderBottomRightRadius?: CCSSProp
    /**
     * # border-bottom-style (bBs)
     * The **`border-bottom-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's bottom [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bBs`
     *	- `bd-bot-style`
     *	- `border-bottom-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
     */
    bBs?: CCSSProp
    /**
     * # border-bottom-style (bBs)
     * The **`border-bottom-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's bottom [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bBs`
     *	- `bd-bot-style`
     *	- `border-bottom-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
     */
    bdBotStyle?: CCSSProp
    /**
     * # border-bottom-style (bBs)
     * The **`border-bottom-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's bottom [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bBs`
     *	- `bd-bot-style`
     *	- `border-bottom-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
     */
    borderBottomStyle?: CCSSProp
    /**
     * # border-bottom-width (bBw)
     * The **`border-bottom-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the bottom border of an element.


     *
     * ---
     * ## Aliases
     *	- `bBw`
     *	- `bd-bot-wid`
     *	- `border-bottom-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
     */
    bBw?: CCSSProp
    /**
     * # border-bottom-width (bBw)
     * The **`border-bottom-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the bottom border of an element.


     *
     * ---
     * ## Aliases
     *	- `bBw`
     *	- `bd-bot-wid`
     *	- `border-bottom-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
     */
    bdBotWid?: CCSSProp
    /**
     * # border-bottom-width (bBw)
     * The **`border-bottom-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the bottom border of an element.


     *
     * ---
     * ## Aliases
     *	- `bBw`
     *	- `bd-bot-wid`
     *	- `border-bottom-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
     */
    borderBottomWidth?: CCSSProp
    /**
     * # border-collapse (bC)
     * The **`border-collapse`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether cells inside a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") have shared or separate borders.


     *
     * ---
     * ## Aliases
     *	- `bC`
     *	- `bd-coll`
     *	- `border-collapse`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
     */
    bC?: CCSSProp
    /**
     * # border-collapse (bC)
     * The **`border-collapse`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether cells inside a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") have shared or separate borders.


     *
     * ---
     * ## Aliases
     *	- `bC`
     *	- `bd-coll`
     *	- `border-collapse`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
     */
    bdColl?: CCSSProp
    /**
     * # border-collapse (bC)
     * The **`border-collapse`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether cells inside a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") have shared or separate borders.


     *
     * ---
     * ## Aliases
     *	- `bC`
     *	- `bd-coll`
     *	- `border-collapse`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse
     */
    borderCollapse?: CCSSProp
    /**
     * # border-color (bc)
     * The **`border-color`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bc`
     *	- `bd-color`
     *	- `border-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    bc?: CCSSProp
    /**
     * # border-color (bc)
     * The **`border-color`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bc`
     *	- `bd-color`
     *	- `border-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    bdColor?: CCSSProp
    /**
     * # border-color (bc)
     * The **`border-color`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bc`
     *	- `bd-color`
     *	- `border-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderColor?: CCSSProp
    /**
     * # border-image (bi)
     * The **`border-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property draws an image around a given element. It replaces the element's regular [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bi`
     *	- `bd-img`
     *	- `border-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
     */
    bi?: CCSSProp
    /**
     * # border-image (bi)
     * The **`border-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property draws an image around a given element. It replaces the element's regular [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bi`
     *	- `bd-img`
     *	- `border-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
     */
    bdImg?: CCSSProp
    /**
     * # border-image (bi)
     * The **`border-image`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property draws an image around a given element. It replaces the element's regular [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bi`
     *	- `bd-img`
     *	- `border-image`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
     */
    borderImage?: CCSSProp
    /**
     * # border-image-outset (bio)
     * The **`border-image-outset`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance by which an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) is set out from its border box.


     *
     * ---
     * ## Aliases
     *	- `bio`
     *	- `bd-img-outset`
     *	- `border-image-outset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset
     */
    bio?: CCSSProp
    /**
     * # border-image-outset (bio)
     * The **`border-image-outset`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance by which an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) is set out from its border box.


     *
     * ---
     * ## Aliases
     *	- `bio`
     *	- `bd-img-outset`
     *	- `border-image-outset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset
     */
    bdImgOutset?: CCSSProp
    /**
     * # border-image-outset (bio)
     * The **`border-image-outset`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance by which an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) is set out from its border box.


     *
     * ---
     * ## Aliases
     *	- `bio`
     *	- `bd-img-outset`
     *	- `border-image-outset`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset
     */
    borderImageOutset?: CCSSProp
    /**
     * # border-image-repeat (bir)
     * The **`border-image-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property defines how the [edge regions](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice#edge-regions) of a source image are adjusted to fit the dimensions of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bir`
     *	- `bd-img-repeat`
     *	- `border-image-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat
     */
    bir?: CCSSProp
    /**
     * # border-image-repeat (bir)
     * The **`border-image-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property defines how the [edge regions](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice#edge-regions) of a source image are adjusted to fit the dimensions of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bir`
     *	- `bd-img-repeat`
     *	- `border-image-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat
     */
    bdImgRepeat?: CCSSProp
    /**
     * # border-image-repeat (bir)
     * The **`border-image-repeat`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property defines how the [edge regions](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice#edge-regions) of a source image are adjusted to fit the dimensions of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bir`
     *	- `bd-img-repeat`
     *	- `border-image-repeat`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat
     */
    borderImageRepeat?: CCSSProp
    /**
     * # border-image-slice (bis)
     * The **`border-image-slice`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property divides the image specified by [`border-image-source`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source "The border-image-source CSS property sets the source image used to create an element's border image.") into regions. These regions form the components of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bis`
     *	- `bd-img-slice`
     *	- `border-image-slice`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
     */
    bis?: CCSSProp
    /**
     * # border-image-slice (bis)
     * The **`border-image-slice`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property divides the image specified by [`border-image-source`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source "The border-image-source CSS property sets the source image used to create an element's border image.") into regions. These regions form the components of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bis`
     *	- `bd-img-slice`
     *	- `border-image-slice`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
     */
    bdImgSlice?: CCSSProp
    /**
     * # border-image-slice (bis)
     * The **`border-image-slice`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property divides the image specified by [`border-image-source`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source "The border-image-source CSS property sets the source image used to create an element's border image.") into regions. These regions form the components of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `bis`
     *	- `bd-img-slice`
     *	- `border-image-slice`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
     */
    borderImageSlice?: CCSSProp
    /**
     * # border-image-source (biSrc)
     * The **`border-image-source`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the source image used to create an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biSrc`
     *	- `bd-img-src`
     *	- `border-image-source`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
     */
    biSrc?: CCSSProp
    /**
     * # border-image-source (biSrc)
     * The **`border-image-source`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the source image used to create an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biSrc`
     *	- `bd-img-src`
     *	- `border-image-source`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
     */
    bdImgSrc?: CCSSProp
    /**
     * # border-image-source (biSrc)
     * The **`border-image-source`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the source image used to create an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biSrc`
     *	- `bd-img-src`
     *	- `border-image-source`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source
     */
    borderImageSource?: CCSSProp
    /**
     * # border-image-width (biw)
     * The **`border-image-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biw`
     *	- `bd-img-width`
     *	- `border-image-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
     */
    biw?: CCSSProp
    /**
     * # border-image-width (biw)
     * The **`border-image-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biw`
     *	- `bd-img-width`
     *	- `border-image-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
     */
    bdImgWidth?: CCSSProp
    /**
     * # border-image-width (biw)
     * The **`border-image-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's [border image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image).


     *
     * ---
     * ## Aliases
     *	- `biw`
     *	- `bd-img-width`
     *	- `border-image-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width
     */
    borderImageWidth?: CCSSProp
    /**
     * # border-left (bL)
     * The **`border-left`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property set an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bL`
     *	- `bd-left`
     *	- `border-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    bL?: CCSSProp
    /**
     * # border-left (bL)
     * The **`border-left`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property set an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bL`
     *	- `bd-left`
     *	- `border-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    bdLeft?: CCSSProp
    /**
     * # border-left (bL)
     * The **`border-left`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property set an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bL`
     *	- `bd-left`
     *	- `border-left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    borderLeft?: CCSSProp
    /**
     * # border-left-color (bLc)
     * The **`border-left-color`** CSS property sets the color of an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left "The border-left shorthand CSS property set an element's left border.").


     *
     * ---
     * ## Aliases
     *	- `bLc`
     *	- `bd-left-color`
     *	- `border-left-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
     */
    bLc?: CCSSProp
    /**
     * # border-left-color (bLc)
     * The **`border-left-color`** CSS property sets the color of an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left "The border-left shorthand CSS property set an element's left border.").


     *
     * ---
     * ## Aliases
     *	- `bLc`
     *	- `bd-left-color`
     *	- `border-left-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
     */
    bdLeftColor?: CCSSProp
    /**
     * # border-left-color (bLc)
     * The **`border-left-color`** CSS property sets the color of an element's left [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left "The border-left shorthand CSS property set an element's left border.").


     *
     * ---
     * ## Aliases
     *	- `bLc`
     *	- `bd-left-color`
     *	- `border-left-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
     */
    borderLeftColor?: CCSSProp
    /**
     * # border-left-style (bLs)
     * The **`border-left-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's left [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bLs`
     *	- `bd-left-style`
     *	- `border-left-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
     */
    bLs?: CCSSProp
    /**
     * # border-left-style (bLs)
     * The **`border-left-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's left [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bLs`
     *	- `bd-left-style`
     *	- `border-left-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
     */
    bdLeftStyle?: CCSSProp
    /**
     * # border-left-style (bLs)
     * The **`border-left-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's left [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bLs`
     *	- `bd-left-style`
     *	- `border-left-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
     */
    borderLeftStyle?: CCSSProp
    /**
     * # border-left-width (bLw)
     * The **`border-left-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the left border of an element.


     *
     * ---
     * ## Aliases
     *	- `bLw`
     *	- `bd-left-width`
     *	- `border-left-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
     */
    bLw?: CCSSProp
    /**
     * # border-left-width (bLw)
     * The **`border-left-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the left border of an element.


     *
     * ---
     * ## Aliases
     *	- `bLw`
     *	- `bd-left-width`
     *	- `border-left-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
     */
    bdLeftWidth?: CCSSProp
    /**
     * # border-left-width (bLw)
     * The **`border-left-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the left border of an element.


     *
     * ---
     * ## Aliases
     *	- `bLw`
     *	- `bd-left-width`
     *	- `border-left-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
     */
    borderLeftWidth?: CCSSProp
    /**
     * # border-radius (br)
     * The **`border-radius`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.


     *
     * ---
     * ## Aliases
     *	- `br`
     *	- `bd-radius`
     *	- `border-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    br?: CCSSProp
    /**
     * # border-radius (br)
     * The **`border-radius`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.


     *
     * ---
     * ## Aliases
     *	- `br`
     *	- `bd-radius`
     *	- `border-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    bdRadius?: CCSSProp
    /**
     * # border-radius (br)
     * The **`border-radius`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.


     *
     * ---
     * ## Aliases
     *	- `br`
     *	- `bd-radius`
     *	- `border-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    borderRadius?: CCSSProp
    /**
     * # border-right (bR)
     * The **`border-right`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the properties of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bR`
     *	- `bd-right`
     *	- `border-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     */
    bR?: CCSSProp
    /**
     * # border-right (bR)
     * The **`border-right`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the properties of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bR`
     *	- `bd-right`
     *	- `border-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     */
    bdRight?: CCSSProp
    /**
     * # border-right (bR)
     * The **`border-right`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the properties of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bR`
     *	- `bd-right`
     *	- `border-right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     */
    borderRight?: CCSSProp
    /**
     * # border-right-color (bRc)
     * The **`border-right-color`** CSS property sets the color of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right "The border-right shorthand CSS property sets the properties of an element's right border.").


     *
     * ---
     * ## Aliases
     *	- `bRc`
     *	- `bd-right-color`
     *	- `border-right-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
     */
    bRc?: CCSSProp
    /**
     * # border-right-color (bRc)
     * The **`border-right-color`** CSS property sets the color of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right "The border-right shorthand CSS property sets the properties of an element's right border.").


     *
     * ---
     * ## Aliases
     *	- `bRc`
     *	- `bd-right-color`
     *	- `border-right-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
     */
    bdRightColor?: CCSSProp
    /**
     * # border-right-color (bRc)
     * The **`border-right-color`** CSS property sets the color of an element's right [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right "The border-right shorthand CSS property sets the properties of an element's right border.").


     *
     * ---
     * ## Aliases
     *	- `bRc`
     *	- `bd-right-color`
     *	- `border-right-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
     */
    borderRightColor?: CCSSProp
    /**
     * # border-right-style (bRs)
     * The **`border-right-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's right [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bRs`
     *	- `bd-right-style`
     *	- `border-right-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
     */
    bRs?: CCSSProp
    /**
     * # border-right-style (bRs)
     * The **`border-right-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's right [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bRs`
     *	- `bd-right-style`
     *	- `border-right-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
     */
    bdRightStyle?: CCSSProp
    /**
     * # border-right-style (bRs)
     * The **`border-right-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's right [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bRs`
     *	- `bd-right-style`
     *	- `border-right-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
     */
    borderRightStyle?: CCSSProp
    /**
     * # border-right-width (bRw)
     * The **`border-right-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the right border of an element.


     *
     * ---
     * ## Aliases
     *	- `bRw`
     *	- `bd-right-width`
     *	- `border-right-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
     */
    bRw?: CCSSProp
    /**
     * # border-right-width (bRw)
     * The **`border-right-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the right border of an element.


     *
     * ---
     * ## Aliases
     *	- `bRw`
     *	- `bd-right-width`
     *	- `border-right-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
     */
    bdRightWidth?: CCSSProp
    /**
     * # border-right-width (bRw)
     * The **`border-right-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the right border of an element.


     *
     * ---
     * ## Aliases
     *	- `bRw`
     *	- `bd-right-width`
     *	- `border-right-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
     */
    borderRightWidth?: CCSSProp
    /**
     * # border-spacing (bs)
     * The **`border-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance between the borders of adjacent [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") cells. This property applies only when [`border-collapse`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse "The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.") is `separate`.


     *
     * ---
     * ## Aliases
     *	- `bs`
     *	- `bd-spacing`
     *	- `border-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
     */
    bs?: CCSSProp
    /**
     * # border-spacing (bs)
     * The **`border-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance between the borders of adjacent [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") cells. This property applies only when [`border-collapse`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse "The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.") is `separate`.


     *
     * ---
     * ## Aliases
     *	- `bs`
     *	- `bd-spacing`
     *	- `border-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
     */
    bdSpacing?: CCSSProp
    /**
     * # border-spacing (bs)
     * The **`border-spacing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the distance between the borders of adjacent [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") cells. This property applies only when [`border-collapse`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse "The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.") is `separate`.


     *
     * ---
     * ## Aliases
     *	- `bs`
     *	- `bd-spacing`
     *	- `border-spacing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing
     */
    borderSpacing?: CCSSProp
    /**
     * # border-style (bS)
     * The **`border-style`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en/CSS "CSS") property sets the line style for all four sides of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bS`
     *	- `bd-style`
     *	- `border-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    bS?: CCSSProp
    /**
     * # border-style (bS)
     * The **`border-style`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en/CSS "CSS") property sets the line style for all four sides of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bS`
     *	- `bd-style`
     *	- `border-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    bdStyle?: CCSSProp
    /**
     * # border-style (bS)
     * The **`border-style`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en/CSS "CSS") property sets the line style for all four sides of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bS`
     *	- `bd-style`
     *	- `border-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderStyle?: CCSSProp
    /**
     * # border-top (bT)
     * The **`border-top`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets all the properties of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bT`
     *	- `bd-top`
     *	- `border-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     */
    bT?: CCSSProp
    /**
     * # border-top (bT)
     * The **`border-top`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets all the properties of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bT`
     *	- `bd-top`
     *	- `border-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     */
    bdTop?: CCSSProp
    /**
     * # border-top (bT)
     * The **`border-top`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets all the properties of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border).


     *
     * ---
     * ## Aliases
     *	- `bT`
     *	- `bd-top`
     *	- `border-top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     */
    borderTop?: CCSSProp
    /**
     * # border-top-color (bTc)
     * The **`border-top-color`** CSS property sets the color of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top "The border-top shorthand CSS property sets all the properties of an element's top border.").


     *
     * ---
     * ## Aliases
     *	- `bTc`
     *	- `bd-top-color`
     *	- `border-top-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
     */
    bTc?: CCSSProp
    /**
     * # border-top-color (bTc)
     * The **`border-top-color`** CSS property sets the color of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top "The border-top shorthand CSS property sets all the properties of an element's top border.").


     *
     * ---
     * ## Aliases
     *	- `bTc`
     *	- `bd-top-color`
     *	- `border-top-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
     */
    bdTopColor?: CCSSProp
    /**
     * # border-top-color (bTc)
     * The **`border-top-color`** CSS property sets the color of an element's top [border](https://developer.mozilla.org/en-US/docs/Web/CSS/border). It can also be set with the shorthand CSS properties [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.") or [`border-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top "The border-top shorthand CSS property sets all the properties of an element's top border.").


     *
     * ---
     * ## Aliases
     *	- `bTc`
     *	- `bd-top-color`
     *	- `border-top-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
     */
    borderTopColor?: CCSSProp
    /**
     * # border-top-left-radius (bTlr)
     * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTlr`
     *	- `bd-top-left-radius`
     *	- `border-top-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     */
    bTlr?: CCSSProp
    /**
     * # border-top-left-radius (bTlr)
     * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTlr`
     *	- `bd-top-left-radius`
     *	- `border-top-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     */
    bdTopLeftRadius?: CCSSProp
    /**
     * # border-top-left-radius (bTlr)
     * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTlr`
     *	- `bd-top-left-radius`
     *	- `border-top-left-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     */
    borderTopLeftRadius?: CCSSProp
    /**
     * # border-top-right-radius (bTrr)
     * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTrr`
     *	- `bd-top-right-radius`
     *	- `border-top-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    bTrr?: CCSSProp
    /**
     * # border-top-right-radius (bTrr)
     * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTrr`
     *	- `bd-top-right-radius`
     *	- `border-top-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    bdTopRightRadius?: CCSSProp
    /**
     * # border-top-right-radius (bTrr)
     * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.


     *
     * ---
     * ## Aliases
     *	- `bTrr`
     *	- `bd-top-right-radius`
     *	- `border-top-right-radius`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    borderTopRightRadius?: CCSSProp
    /**
     * # border-top-style (bTs)
     * The **`border-top-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's top [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bTs`
     *	- `bd-top-style`
     *	- `border-top-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
     */
    bTs?: CCSSProp
    /**
     * # border-top-style (bTs)
     * The **`border-top-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's top [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bTs`
     *	- `bd-top-style`
     *	- `border-top-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
     */
    bdTopStyle?: CCSSProp
    /**
     * # border-top-style (bTs)
     * The **`border-top-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the line style of an element's top [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border "The border shorthand CSS property sets an element's border.").


     *
     * ---
     * ## Aliases
     *	- `bTs`
     *	- `bd-top-style`
     *	- `border-top-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
     */
    borderTopStyle?: CCSSProp
    /**
     * # border-top-width (bTw)
     * The **`border-top-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the top border of an element.


     *
     * ---
     * ## Aliases
     *	- `bTw`
     *	- `bd-top-width`
     *	- `border-top-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
     */
    bTw?: CCSSProp
    /**
     * # border-top-width (bTw)
     * The **`border-top-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the top border of an element.


     *
     * ---
     * ## Aliases
     *	- `bTw`
     *	- `bd-top-width`
     *	- `border-top-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
     */
    bdTopWidth?: CCSSProp
    /**
     * # border-top-width (bTw)
     * The **`border-top-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the top border of an element.


     *
     * ---
     * ## Aliases
     *	- `bTw`
     *	- `bd-top-width`
     *	- `border-top-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
     */
    borderTopWidth?: CCSSProp
    /**
     * # border-width (bw)
     * The **`border-width`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bw`
     *	- `bd-width`
     *	- `border-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    bw?: CCSSProp
    /**
     * # border-width (bw)
     * The **`border-width`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bw`
     *	- `bd-width`
     *	- `border-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    bdWidth?: CCSSProp
    /**
     * # border-width (bw)
     * The **`border-width`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of an element's border.


     *
     * ---
     * ## Aliases
     *	- `bw`
     *	- `bd-width`
     *	- `border-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderWidth?: CCSSProp
    /**
     * # clip (clip)
     * The **`clip`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with [`position:absolute`](https://developer.mozilla.org/en-US/docs/Web/CSS/position "The documentation about this has not yet been written; please consider contributing!") or [`position:fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/position "The documentation about this has not yet been written; please consider contributing!").


     *
     * ---
     * ## Aliases
     *	- `clip`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip
     */
    clip?: CCSSProp
    /**
     * # clip-path (clipPath)
     * The `**clip-path**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.


     *
     * ---
     * ## Aliases
     *	- `clipPath`
     *	- `clip-path`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
     */
    clipPath?: CCSSProp
    /**
     * # clip-path (clipPath)
     * The `**clip-path**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.


     *
     * ---
     * ## Aliases
     *	- `clipPath`
     *	- `clip-path`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
     */
    clipPath?: CCSSProp
    /**
     * # display (d)
     * The **`display`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline element](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **i**: `inline`
     *	- **if**: `inline-flex`
     *	- **ib**: `inline-block`
     *	- **ig**: `inline-grid`
     *	- **b**: `block`
     *	- **f**: `flex`
     *	- **g**: `grid`
     *	- **t**: `table`
     *
     * ---
     * ## Aliases
     *	- `d`
     *	- `dsp`
     *	- `display`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    d?: CCSSProp
    /**
     * # display (d)
     * The **`display`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline element](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **i**: `inline`
     *	- **if**: `inline-flex`
     *	- **ib**: `inline-block`
     *	- **ig**: `inline-grid`
     *	- **b**: `block`
     *	- **f**: `flex`
     *	- **g**: `grid`
     *	- **t**: `table`
     *
     * ---
     * ## Aliases
     *	- `d`
     *	- `dsp`
     *	- `display`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    dsp?: CCSSProp
    /**
     * # display (d)
     * The **`display`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element is treated as a [block or inline element](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout) and the layout used for its children, such as [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout), [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout).
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **i**: `inline`
     *	- **if**: `inline-flex`
     *	- **ib**: `inline-block`
     *	- **ig**: `inline-grid`
     *	- **b**: `block`
     *	- **f**: `flex`
     *	- **g**: `grid`
     *	- **t**: `table`
     *
     * ---
     * ## Aliases
     *	- `d`
     *	- `dsp`
     *	- `display`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    display?: CCSSProp
    /**
     * # position (P)
     * The **`position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property sets how an element is positioned in a document. The [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top "The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements."), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right "The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements."), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom "The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements."), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left "The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.") properties determine the final location of positioned elements.
     *
     * ---
     * ## Shorthands
     *	- **a**: `absolute`
     *	- **f**: `fixed`
     *	- **r**: `relative`
     *	- **s**: `sticky`
     *
     * ---
     * ## Aliases
     *	- `P`
     *	- `pos`
     *	- `position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    P?: CCSSProp
    /**
     * # position (P)
     * The **`position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property sets how an element is positioned in a document. The [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top "The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements."), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right "The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements."), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom "The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements."), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left "The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.") properties determine the final location of positioned elements.
     *
     * ---
     * ## Shorthands
     *	- **a**: `absolute`
     *	- **f**: `fixed`
     *	- **r**: `relative`
     *	- **s**: `sticky`
     *
     * ---
     * ## Aliases
     *	- `P`
     *	- `pos`
     *	- `position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    pos?: CCSSProp
    /**
     * # position (P)
     * The **`position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property sets how an element is positioned in a document. The [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top "The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements."), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right "The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements."), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom "The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements."), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left "The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.") properties determine the final location of positioned elements.
     *
     * ---
     * ## Shorthands
     *	- **a**: `absolute`
     *	- **f**: `fixed`
     *	- **r**: `relative`
     *	- **s**: `sticky`
     *
     * ---
     * ## Aliases
     *	- `P`
     *	- `pos`
     *	- `position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
     */
    position?: CCSSProp
    /**
     * # top (T)
     * The **`top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the vertical position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `T`
     *	- `top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/top
     */
    T?: CCSSProp
    /**
     * # top (T)
     * The **`top`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the vertical position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `T`
     *	- `top`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/top
     */
    top?: CCSSProp
    /**
     * # right (R)
     * The **`right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the horizontal position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `R`
     *	- `right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/right
     */
    R?: CCSSProp
    /**
     * # right (R)
     * The **`right`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the horizontal position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `R`
     *	- `right`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/right
     */
    right?: CCSSProp
    /**
     * # bottom (B)
     * The **`bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property participates in setting the vertical position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `B`
     *	- `bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
     */
    B?: CCSSProp
    /**
     * # bottom (B)
     * The **`bottom`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property participates in setting the vertical position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `B`
     *	- `bottom`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
     */
    bottom?: CCSSProp
    /**
     * # left (L)
     * The **`left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the horizontal position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `L`
     *	- `left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/left
     */
    L?: CCSSProp
    /**
     * # left (L)
     * The **`left`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS") property participates in specifying the horizontal position of a [positioned element](https://developer.mozilla.org/en-US/docs/Web/CSS/position). It has no effect on non-positioned elements.


     *
     * ---
     * ## Aliases
     *	- `L`
     *	- `left`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/left
     */
    left?: CCSSProp
    /**
     * # z-index (zi)
     * The **`z-index`** CSS property sets the z-order of a [positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position) element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.


     *
     * ---
     * ## Aliases
     *	- `zi`
     *	- `z-index`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
     */
    zi?: CCSSProp
    /**
     * # z-index (zi)
     * The **`z-index`** CSS property sets the z-order of a [positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position) element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.


     *
     * ---
     * ## Aliases
     *	- `zi`
     *	- `z-index`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
     */
    zIndex?: CCSSProp
    /**
     * # color (c)
     * The **`color`** CSS property sets the foreground [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of an element's text and [text decorations](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration), and sets the [`currentcolor`](https://developer.mozilla.org/en-US/docs/Web/CSS/currentcolor "REDIRECT https://wiki.developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword") value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.").


     *
     * ---
     * ## Aliases
     *	- `c`
     *	- `color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    c?: CCSSProp
    /**
     * # color (c)
     * The **`color`** CSS property sets the foreground [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of an element's text and [text decorations](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration), and sets the [`currentcolor`](https://developer.mozilla.org/en-US/docs/Web/CSS/currentcolor "REDIRECT https://wiki.developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword") value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as [`border-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color "The border-color shorthand CSS property sets the color of an element's border.").


     *
     * ---
     * ## Aliases
     *	- `c`
     *	- `color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    color?: CCSSProp
    /**
     * # overflow (o)
     * The **`overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its [block formatting context](https://developer.mozilla.org/en-US/docs/CSS/block_formatting_context) — in both directions.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `o`
     *	- `over`
     *	- `overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    o?: CCSSProp
    /**
     * # overflow (o)
     * The **`overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its [block formatting context](https://developer.mozilla.org/en-US/docs/CSS/block_formatting_context) — in both directions.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `o`
     *	- `over`
     *	- `overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    over?: CCSSProp
    /**
     * # overflow (o)
     * The **`overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its [block formatting context](https://developer.mozilla.org/en-US/docs/CSS/block_formatting_context) — in both directions.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `o`
     *	- `over`
     *	- `overflow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
     */
    overflow?: CCSSProp
    /**
     * # overflow-x (ox)
     * The **`overflow-x`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `ox`
     *	- `over-x`
     *	- `overflow-x`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    ox?: CCSSProp
    /**
     * # overflow-x (ox)
     * The **`overflow-x`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `ox`
     *	- `over-x`
     *	- `overflow-x`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overX?: CCSSProp
    /**
     * # overflow-x (ox)
     * The **`overflow-x`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `ox`
     *	- `over-x`
     *	- `overflow-x`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
     */
    overflowX?: CCSSProp
    /**
     * # overflow-y (oy)
     * The **`overflow-y`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oy`
     *	- `over-y`
     *	- `overflow-y`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    oy?: CCSSProp
    /**
     * # overflow-y (oy)
     * The **`overflow-y`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oy`
     *	- `over-y`
     *	- `overflow-y`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overY?: CCSSProp
    /**
     * # overflow-y (oy)
     * The **`overflow-y`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * ---
     * ## Shorthands
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **s**: `scroll`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oy`
     *	- `over-y`
     *	- `overflow-y`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
     */
    overflowY?: CCSSProp
    /**
     * # overflow-anchor (oa)
     * The **`overflow-anchor`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oa`
     *	- `over-a`
     *	- `overflow-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
     */
    oa?: CCSSProp
    /**
     * # overflow-anchor (oa)
     * The **`overflow-anchor`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oa`
     *	- `over-a`
     *	- `overflow-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
     */
    overA?: CCSSProp
    /**
     * # overflow-anchor (oa)
     * The **`overflow-anchor`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **a**: `auto`
     *
     * ---
     * ## Aliases
     *	- `oa`
     *	- `over-a`
     *	- `overflow-anchor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
     */
    overflowAnchor?: CCSSProp
    /**
     * # float (fl)
     * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to [absolute positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning)).
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **l**: `left`
     *	- **r**: `right`
     *
     * ---
     * ## Aliases
     *	- `fl`
     *	- `float`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/float
     */
    fl?: CCSSProp
    /**
     * # float (fl)
     * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to [absolute positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position#Absolute_positioning)).
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **l**: `left`
     *	- **r**: `right`
     *
     * ---
     * ## Aliases
     *	- `fl`
     *	- `float`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/float
     */
    float?: CCSSProp
    /**
     * # clear (clr)
     * The **`clear`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element must be moved below (cleared) [floating](https://developer.mozilla.org/en-US/docs/Web/CSS/float) elements that precede it. The `clear` property applies to floating and non-floating elements.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **l**: `left`
     *	- **r**: `right`
     *	- **true**: `both`
     *	- **b**: `both`
     *
     * ---
     * ## Aliases
     *	- `clr`
     *	- `clear`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clear
     */
    clr?: CCSSProp
    /**
     * # clear (clr)
     * The **`clear`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether an element must be moved below (cleared) [floating](https://developer.mozilla.org/en-US/docs/Web/CSS/float) elements that precede it. The `clear` property applies to floating and non-floating elements.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *	- **l**: `left`
     *	- **r**: `right`
     *	- **true**: `both`
     *	- **b**: `both`
     *
     * ---
     * ## Aliases
     *	- `clr`
     *	- `clear`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/clear
     */
    clear?: CCSSProp
    /**
     * # visibility (v)
     * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.").
     *
     * ---
     * ## Shorthands
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **c**: `collapse`
     *
     * ---
     * ## Aliases
     *	- `v`
     *	- `visibility`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    v?: CCSSProp
    /**
     * # visibility (v)
     * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.").
     *
     * ---
     * ## Shorthands
     *	- **true**: `visible`
     *	- **v**: `visible`
     *	- **false**: `hidden`
     *	- **h**: `hidden`
     *	- **c**: `collapse`
     *
     * ---
     * ## Aliases
     *	- `v`
     *	- `visibility`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/visibility
     */
    visibility?: CCSSProp
    /**
     * # columns (col)
     * The **`columns`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.


     *
     * ---
     * ## Aliases
     *	- `col`
     *	- `columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/columns
     */
    col?: CCSSProp
    /**
     * # columns (col)
     * The **`columns`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.


     *
     * ---
     * ## Aliases
     *	- `col`
     *	- `columns`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/columns
     */
    columns?: CCSSProp
    /**
     * # column-count (cc)
     * The **`column-count`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property breaks an element's content into the specified number of columns.


     *
     * ---
     * ## Aliases
     *	- `cc`
     *	- `col-count`
     *	- `column-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
     */
    cc?: CCSSProp
    /**
     * # column-count (cc)
     * The **`column-count`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property breaks an element's content into the specified number of columns.


     *
     * ---
     * ## Aliases
     *	- `cc`
     *	- `col-count`
     *	- `column-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
     */
    colCount?: CCSSProp
    /**
     * # column-count (cc)
     * The **`column-count`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property breaks an element's content into the specified number of columns.


     *
     * ---
     * ## Aliases
     *	- `cc`
     *	- `col-count`
     *	- `column-count`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-count
     */
    columnCount?: CCSSProp
    /**
     * # column-fill (cf)
     * The **`column-fill`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls how an element's contents are balanced when broken into columns.


     *
     * ---
     * ## Aliases
     *	- `cf`
     *	- `col-fill`
     *	- `column-fill`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
     */
    cf?: CCSSProp
    /**
     * # column-fill (cf)
     * The **`column-fill`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls how an element's contents are balanced when broken into columns.


     *
     * ---
     * ## Aliases
     *	- `cf`
     *	- `col-fill`
     *	- `column-fill`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
     */
    colFill?: CCSSProp
    /**
     * # column-fill (cf)
     * The **`column-fill`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls how an element's contents are balanced when broken into columns.


     *
     * ---
     * ## Aliases
     *	- `cf`
     *	- `col-fill`
     *	- `column-fill`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill
     */
    columnFill?: CCSSProp
    /**
     * # column-gap (cg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `cg`
     *	- `col-gap`
     *	- `column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
     */
    cg?: CCSSProp
    /**
     * # column-gap (cg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `cg`
     *	- `col-gap`
     *	- `column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
     */
    colGap?: CCSSProp
    /**
     * # column-gap (cg)
     * The **`column-gap`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the size of the gap ([gutter](https://developer.mozilla.org/en-US/docs/Glossary/Gutters)) between an element's columns.


     *
     * ---
     * ## Aliases
     *	- `cg`
     *	- `col-gap`
     *	- `column-gap`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
     */
    columnGap?: CCSSProp
    /**
     * # column-rule (cr)
     * The **`column-rule`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `cr`
     *	- `col-rule`
     *	- `column-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
     */
    cr?: CCSSProp
    /**
     * # column-rule (cr)
     * The **`column-rule`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `cr`
     *	- `col-rule`
     *	- `column-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
     */
    colRule?: CCSSProp
    /**
     * # column-rule (cr)
     * The **`column-rule`** [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width, style, and color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `cr`
     *	- `col-rule`
     *	- `column-rule`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule
     */
    columnRule?: CCSSProp
    /**
     * # column-rule-color (crc)
     * The **`column-rule-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crc`
     *	- `col-rule-color`
     *	- `column-rule-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
     */
    crc?: CCSSProp
    /**
     * # column-rule-color (crc)
     * The **`column-rule-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crc`
     *	- `col-rule-color`
     *	- `column-rule-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
     */
    colRuleColor?: CCSSProp
    /**
     * # column-rule-color (crc)
     * The **`column-rule-color`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the color of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crc`
     *	- `col-rule-color`
     *	- `column-rule-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color
     */
    columnRuleColor?: CCSSProp
    /**
     * # column-rule-style (crs)
     * The **`column-rule-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the style of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crs`
     *	- `col-rule-style`
     *	- `column-rule-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style
     */
    crs?: CCSSProp
    /**
     * # column-rule-style (crs)
     * The **`column-rule-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the style of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crs`
     *	- `col-rule-style`
     *	- `column-rule-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style
     */
    colRuleStyle?: CCSSProp
    /**
     * # column-rule-style (crs)
     * The **`column-rule-style`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the style of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crs`
     *	- `col-rule-style`
     *	- `column-rule-style`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style
     */
    columnRuleStyle?: CCSSProp
    /**
     * # column-rule-width (crw)
     * The **`column-rule-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crw`
     *	- `col-rule-width`
     *	- `column-rule-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
     */
    crw?: CCSSProp
    /**
     * # column-rule-width (crw)
     * The **`column-rule-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crw`
     *	- `col-rule-width`
     *	- `column-rule-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
     */
    colRuleWidth?: CCSSProp
    /**
     * # column-rule-width (crw)
     * The **`column-rule-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the width of the line drawn between columns in a multi-column layout.


     *
     * ---
     * ## Aliases
     *	- `crw`
     *	- `col-rule-width`
     *	- `column-rule-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width
     */
    columnRuleWidth?: CCSSProp
    /**
     * # column-span (cs)
     * The **`column-span`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property makes it possible for an element to span across all columns when its value is set to `all`.


     *
     * ---
     * ## Aliases
     *	- `cs`
     *	- `col-span`
     *	- `column-span`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
     */
    cs?: CCSSProp
    /**
     * # column-span (cs)
     * The **`column-span`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property makes it possible for an element to span across all columns when its value is set to `all`.


     *
     * ---
     * ## Aliases
     *	- `cs`
     *	- `col-span`
     *	- `column-span`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
     */
    colSpan?: CCSSProp
    /**
     * # column-span (cs)
     * The **`column-span`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property makes it possible for an element to span across all columns when its value is set to `all`.


     *
     * ---
     * ## Aliases
     *	- `cs`
     *	- `col-span`
     *	- `column-span`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-span
     */
    columnSpan?: CCSSProp
    /**
     * # column-width (cw)
     * The **`column-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.


     *
     * ---
     * ## Aliases
     *	- `cw`
     *	- `col-width`
     *	- `column-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
     */
    cw?: CCSSProp
    /**
     * # column-width (cw)
     * The **`column-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.


     *
     * ---
     * ## Aliases
     *	- `cw`
     *	- `col-width`
     *	- `column-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
     */
    colWidth?: CCSSProp
    /**
     * # column-width (cw)
     * The **`column-width`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.


     *
     * ---
     * ## Aliases
     *	- `cw`
     *	- `col-width`
     *	- `column-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
     */
    columnWidth?: CCSSProp
    /**
     * # page-break-after (pba)
     * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pba`
     *	- `pb-after`
     *	- `page-break-after`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
     */
    pba?: CCSSProp
    /**
     * # page-break-after (pba)
     * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pba`
     *	- `pb-after`
     *	- `page-break-after`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
     */
    pbAfter?: CCSSProp
    /**
     * # page-break-after (pba)
     * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pba`
     *	- `pb-after`
     *	- `page-break-after`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after
     */
    pageBreakAfter?: CCSSProp
    /**
     * # page-break-before (pbb)
     * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbb`
     *	- `pb-before`
     *	- `page-break-before`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
     */
    pbb?: CCSSProp
    /**
     * # page-break-before (pbb)
     * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbb`
     *	- `pb-before`
     *	- `page-break-before`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
     */
    pbBefore?: CCSSProp
    /**
     * # page-break-before (pbb)
     * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbb`
     *	- `pb-before`
     *	- `page-break-before`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before
     */
    pageBreakBefore?: CCSSProp
    /**
     * # page-break-inside (pbi)
     * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbi`
     *	- `pb-inside`
     *	- `page-break-inside`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
     */
    pbi?: CCSSProp
    /**
     * # page-break-inside (pbi)
     * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbi`
     *	- `pb-inside`
     *	- `page-break-inside`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
     */
    pbInside?: CCSSProp
    /**
     * # page-break-inside (pbi)
     * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.


     *
     * ---
     * ## Aliases
     *	- `pbi`
     *	- `pb-inside`
     *	- `page-break-inside`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside
     */
    pageBreakInside?: CCSSProp
    /**
     * # box-shadow (shd)
     * The **`box-shadow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `shd`
     *	- `shadow`
     *	- `box-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shd?: CCSSProp
    /**
     * # box-shadow (shd)
     * The **`box-shadow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `shd`
     *	- `shadow`
     *	- `box-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadow?: CCSSProp
    /**
     * # box-shadow (shd)
     * The **`box-shadow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `shd`
     *	- `shadow`
     *	- `box-shadow`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    boxShadow?: CCSSProp
    /**
     * # box-sizing (siz)
     * The **`box-sizing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the total width and height of an element is calculated.


     *
     * ---
     * ## Aliases
     *	- `siz`
     *	- `sizing`
     *	- `box-sizing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    siz?: CCSSProp
    /**
     * # box-sizing (siz)
     * The **`box-sizing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the total width and height of an element is calculated.


     *
     * ---
     * ## Aliases
     *	- `siz`
     *	- `sizing`
     *	- `box-sizing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    sizing?: CCSSProp
    /**
     * # box-sizing (siz)
     * The **`box-sizing`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the total width and height of an element is calculated.


     *
     * ---
     * ## Aliases
     *	- `siz`
     *	- `sizing`
     *	- `box-sizing`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
     */
    boxSizing?: CCSSProp
    /**
     * # contain (cn)
     * The **`contain`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **s**: `strict`
     *	- **c**: `content`
     *	- **si**: `size`
     *	- **l**: `layout`
     *	- **st**: `style`
     *	- **p**: `paint`
     *
     * ---
     * ## Aliases
     *	- `cn`
     *	- `cont`
     *	- `contain`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/contain
     */
    cn?: CCSSProp
    /**
     * # contain (cn)
     * The **`contain`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **s**: `strict`
     *	- **c**: `content`
     *	- **si**: `size`
     *	- **l**: `layout`
     *	- **st**: `style`
     *	- **p**: `paint`
     *
     * ---
     * ## Aliases
     *	- `cn`
     *	- `cont`
     *	- `contain`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/contain
     */
    cont?: CCSSProp
    /**
     * # contain (cn)
     * The **`contain`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *	- **s**: `strict`
     *	- **c**: `content`
     *	- **si**: `size`
     *	- **l**: `layout`
     *	- **st**: `style`
     *	- **p**: `paint`
     *
     * ---
     * ## Aliases
     *	- `cn`
     *	- `cont`
     *	- `contain`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/contain
     */
    contain?: CCSSProp
    /**
     * # direction (dir)
     * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).


     *
     * ---
     * ## Aliases
     *	- `dir`
     *	- `direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/direction
     */
    dir?: CCSSProp
    /**
     * # direction (dir)
     * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).


     *
     * ---
     * ## Aliases
     *	- `dir`
     *	- `direction`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/direction
     */
    direction?: CCSSProp
    /**
     * # object-fit (of)
     * The **`object-fit`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the content of a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), such as an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img "The HTML <img> element embeds an image into the document.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."), should be resized to fit its container.
     *
     * ---
     * ## Shorthands
     *	- **f**: `fill`
     *	- **cn**: `contain`
     *	- **cr**: `cover`
     *	- **sd**: `scale-down`
     *	- **false**: `none`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `of`
     *	- `obj-fit`
     *	- `object-fit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    of?: CCSSProp
    /**
     * # object-fit (of)
     * The **`object-fit`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the content of a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), such as an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img "The HTML <img> element embeds an image into the document.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."), should be resized to fit its container.
     *
     * ---
     * ## Shorthands
     *	- **f**: `fill`
     *	- **cn**: `contain`
     *	- **cr**: `cover`
     *	- **sd**: `scale-down`
     *	- **false**: `none`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `of`
     *	- `obj-fit`
     *	- `object-fit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    objFit?: CCSSProp
    /**
     * # object-fit (of)
     * The **`object-fit`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how the content of a [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element), such as an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img "The HTML <img> element embeds an image into the document.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."), should be resized to fit its container.
     *
     * ---
     * ## Shorthands
     *	- **f**: `fill`
     *	- **cn**: `contain`
     *	- **cr**: `cover`
     *	- **sd**: `scale-down`
     *	- **false**: `none`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `of`
     *	- `obj-fit`
     *	- `object-fit`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
     */
    objectFit?: CCSSProp
    /**
     * # object-position (oP)
     * The **`object-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property specifies the alignment of the selected [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)'s contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.


     *
     * ---
     * ## Aliases
     *	- `oP`
     *	- `obj-pos`
     *	- `object-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
     */
    oP?: CCSSProp
    /**
     * # object-position (oP)
     * The **`object-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property specifies the alignment of the selected [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)'s contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.


     *
     * ---
     * ## Aliases
     *	- `oP`
     *	- `obj-pos`
     *	- `object-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
     */
    objPos?: CCSSProp
    /**
     * # object-position (oP)
     * The **`object-position`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property specifies the alignment of the selected [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)'s contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.


     *
     * ---
     * ## Aliases
     *	- `oP`
     *	- `obj-pos`
     *	- `object-position`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
     */
    objectPosition?: CCSSProp
    /**
     * # opacity (op)
     * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
     *
     * ---
     * ## Shorthands
     *	- **true**: `1`
     *	- **false**: `0`
     *
     * ---
     * ## Aliases
     *	- `op`
     *	- `opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
     */
    op?: CCSSProp
    /**
     * # opacity (op)
     * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
     *
     * ---
     * ## Shorthands
     *	- **true**: `1`
     *	- **false**: `0`
     *
     * ---
     * ## Aliases
     *	- `op`
     *	- `opacity`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
     */
    opacity?: CCSSProp
    /**
     * # order (or)
     * The **`order`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.


     *
     * ---
     * ## Aliases
     *	- `or`
     *	- `order`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/order
     */
    or?: CCSSProp
    /**
     * # order (or)
     * The **`order`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.


     *
     * ---
     * ## Aliases
     *	- `or`
     *	- `order`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/order
     */
    order?: CCSSProp
    /**
     * # outline (ol)
     * The **`outline`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) set all the outline properties in a single declaration.


     *
     * ---
     * ## Aliases
     *	- `ol`
     *	- `outline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline
     */
    ol?: CCSSProp
    /**
     * # outline (ol)
     * The **`outline`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) set all the outline properties in a single declaration.


     *
     * ---
     * ## Aliases
     *	- `ol`
     *	- `outline`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/outline
     */
    outline?: CCSSProp
    /**
     * # mix-blend-mode (mbm)
     * The **`mix-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's content should blend with the content of the element's parent and the element's background.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **scr**: `screen`
     *	- **o**: `overlay`
     *	- **dn**: `darken`
     *	- **ln**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **cb**: `color-burn`
     *	- **de**: `difference`
     *	- **e**: `exclusion`
     *	- **h**: `hue`
     *	- **sat**: `saturation`
     *	- **c**: `color`
     *	- **l**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `mbm`
     *	- `blend-mode`
     *	- `mix-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
     */
    mbm?: CCSSProp
    /**
     * # mix-blend-mode (mbm)
     * The **`mix-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's content should blend with the content of the element's parent and the element's background.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **scr**: `screen`
     *	- **o**: `overlay`
     *	- **dn**: `darken`
     *	- **ln**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **cb**: `color-burn`
     *	- **de**: `difference`
     *	- **e**: `exclusion`
     *	- **h**: `hue`
     *	- **sat**: `saturation`
     *	- **c**: `color`
     *	- **l**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `mbm`
     *	- `blend-mode`
     *	- `mix-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
     */
    blendMode?: CCSSProp
    /**
     * # mix-blend-mode (mbm)
     * The **`mix-blend-mode`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how an element's content should blend with the content of the element's parent and the element's background.
     *
     * ---
     * ## Shorthands
     *	- **n**: `normal`
     *	- **m**: `multiply`
     *	- **scr**: `screen`
     *	- **o**: `overlay`
     *	- **dn**: `darken`
     *	- **ln**: `lighten`
     *	- **cd**: `color-dodge`
     *	- **cb**: `color-burn`
     *	- **de**: `difference`
     *	- **e**: `exclusion`
     *	- **h**: `hue`
     *	- **sat**: `saturation`
     *	- **c**: `color`
     *	- **l**: `luminosity`
     *
     * ---
     * ## Aliases
     *	- `mbm`
     *	- `blend-mode`
     *	- `mix-blend-mode`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
     */
    mixBlendMode?: CCSSProp
    /**
     * # content (ct)
     * The **`content`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)**_._


     *
     * ---
     * ## Aliases
     *	- `ct`
     *	- `content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/content
     */
    ct?: CCSSProp
    /**
     * # content (ct)
     * The **`content`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous [replaced elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)**_._


     *
     * ---
     * ## Aliases
     *	- `ct`
     *	- `content`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/content
     */
    content?: CCSSProp
    /**
     * # cursor (cur)
     * The **`cursor`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
     *
     * ---
     * ## Shorthands
     *	- **al**: `alias`
     *	- **all**: `all-scroll`
     *	- **a**: `auto`
     *	- **cl**: `cell`
     *	- **cm**: `context-menu`
     *	- **cr**: `col-resize`
     *	- **c**: `copy`
     *	- **ch**: `crosshair`
     *	- **d**: `default`
     *	- **er**: `e-resize`
     *	- **ewr**: `ew-resize`
     *	- **g**: `grab`
     *	- **gb**: `grabbing`
     *	- **h**: `help`
     *	- **m**: `move`
     *	- **nr**: `n-resize`
     *	- **ner**: `ne-resize`
     *	- **neswr**: `nesw-resize`
     *	- **nsr**: `ns-resize`
     *	- **nwr**: `nw-resize`
     *	- **nwser**: `nwse-resize`
     *	- **nd**: `no-drop`
     *	- **n**: `none`
     *	- **na**: `not-allowed`
     *	- **p**: `pointer`
     *	- **pr**: `progress`
     *	- **rr**: `row-resize`
     *	- **sr**: `s-resize`
     *	- **ser**: `se-resize`
     *	- **swr**: `sw-resize`
     *	- **t**: `text`
     *	- **vt**: `vertical-text`
     *	- **wr**: `w-resize`
     *	- **w**: `wait`
     *	- **zi**: `zoom-in`
     *	- **zo**: `zoom-out`
     *
     * ---
     * ## Aliases
     *	- `cur`
     *	- `cursor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cur?: CCSSProp
    /**
     * # cursor (cur)
     * The **`cursor`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.
     *
     * ---
     * ## Shorthands
     *	- **al**: `alias`
     *	- **all**: `all-scroll`
     *	- **a**: `auto`
     *	- **cl**: `cell`
     *	- **cm**: `context-menu`
     *	- **cr**: `col-resize`
     *	- **c**: `copy`
     *	- **ch**: `crosshair`
     *	- **d**: `default`
     *	- **er**: `e-resize`
     *	- **ewr**: `ew-resize`
     *	- **g**: `grab`
     *	- **gb**: `grabbing`
     *	- **h**: `help`
     *	- **m**: `move`
     *	- **nr**: `n-resize`
     *	- **ner**: `ne-resize`
     *	- **neswr**: `nesw-resize`
     *	- **nsr**: `ns-resize`
     *	- **nwr**: `nw-resize`
     *	- **nwser**: `nwse-resize`
     *	- **nd**: `no-drop`
     *	- **n**: `none`
     *	- **na**: `not-allowed`
     *	- **p**: `pointer`
     *	- **pr**: `progress`
     *	- **rr**: `row-resize`
     *	- **sr**: `s-resize`
     *	- **ser**: `se-resize`
     *	- **swr**: `sw-resize`
     *	- **t**: `text`
     *	- **vt**: `vertical-text`
     *	- **wr**: `w-resize`
     *	- **w**: `wait`
     *	- **zi**: `zoom-in`
     *	- **zo**: `zoom-out`
     *
     * ---
     * ## Aliases
     *	- `cur`
     *	- `cursor`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     */
    cursor?: CCSSProp
    /**
     * # pointer-events (pe)
     * The **`pointer-events`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets under what circumstances (if any) a particular graphic element can become the [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) of pointer events.
     *
     * ---
     * ## Shorthands
     *	- **true**: `auto`
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `pe`
     *	- `p-events`
     *	- `pointer-events`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
     */
    pe?: CCSSProp
    /**
     * # pointer-events (pe)
     * The **`pointer-events`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets under what circumstances (if any) a particular graphic element can become the [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) of pointer events.
     *
     * ---
     * ## Shorthands
     *	- **true**: `auto`
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `pe`
     *	- `p-events`
     *	- `pointer-events`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
     */
    pEvents?: CCSSProp
    /**
     * # pointer-events (pe)
     * The **`pointer-events`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets under what circumstances (if any) a particular graphic element can become the [target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) of pointer events.
     *
     * ---
     * ## Shorthands
     *	- **true**: `auto`
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **false**: `none`
     *
     * ---
     * ## Aliases
     *	- `pe`
     *	- `p-events`
     *	- `pointer-events`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events
     */
    pointerEvents?: CCSSProp
    /**
     * # filter (fil)
     * The **`filter`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.


     *
     * ---
     * ## Aliases
     *	- `fil`
     *	- `filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    fil?: CCSSProp
    /**
     * # filter (fil)
     * The **`filter`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.


     *
     * ---
     * ## Aliases
     *	- `fil`
     *	- `filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    filter?: CCSSProp
    /**
     * # scroll-behavior (sb)
     * The **`scroll-behavior`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **s**: `smooth`
     *
     * ---
     * ## Aliases
     *	- `sb`
     *	- `s-behavior`
     *	- `scroll-behavior`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
     */
    sb?: CCSSProp
    /**
     * # scroll-behavior (sb)
     * The **`scroll-behavior`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **s**: `smooth`
     *
     * ---
     * ## Aliases
     *	- `sb`
     *	- `s-behavior`
     *	- `scroll-behavior`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
     */
    sBehavior?: CCSSProp
    /**
     * # scroll-behavior (sb)
     * The **`scroll-behavior`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **s**: `smooth`
     *
     * ---
     * ## Aliases
     *	- `sb`
     *	- `s-behavior`
     *	- `scroll-behavior`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
     */
    scrollBehavior?: CCSSProp
    /**
     * # scrollbar-width (sw)
     * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sw`
     *	- `s-width`
     *	- `scrollbar-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
     */
    sw?: CCSSProp
    /**
     * # scrollbar-width (sw)
     * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sw`
     *	- `s-width`
     *	- `scrollbar-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
     */
    sWidth?: CCSSProp
    /**
     * # scrollbar-width (sw)
     * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sw`
     *	- `s-width`
     *	- `scrollbar-width`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
     */
    scrollbarWidth?: CCSSProp
    /**
     * # scrollbar-height (sh)
     *
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sh`
     *	- `s-height`
     *	- `scrollbar-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-height
     */
    sh?: CCSSProp
    /**
     * # scrollbar-height (sh)
     *
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sh`
     *	- `s-height`
     *	- `scrollbar-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-height
     */
    sHeight?: CCSSProp
    /**
     * # scrollbar-height (sh)
     *
     *
     * ---
     * ## Shorthands
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `sh`
     *	- `s-height`
     *	- `scrollbar-height`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-height
     */
    scrollbarHeight?: CCSSProp
    /**
     * # user-select (us)
     * The `**user-select**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as [chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome), except in textboxes.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **t**: `text`
     *	- **all**: `all`
     *
     * ---
     * ## Aliases
     *	- `us`
     *	- `u-select`
     *	- `user-select`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    us?: CCSSProp
    /**
     * # user-select (us)
     * The `**user-select**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as [chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome), except in textboxes.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **t**: `text`
     *	- **all**: `all`
     *
     * ---
     * ## Aliases
     *	- `us`
     *	- `u-select`
     *	- `user-select`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    uSelect?: CCSSProp
    /**
     * # user-select (us)
     * The `**user-select**` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as [chrome](https://developer.mozilla.org/en-US/docs/Glossary/Chrome), except in textboxes.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **n**: `none`
     *	- **t**: `text`
     *	- **all**: `all`
     *
     * ---
     * ## Aliases
     *	- `us`
     *	- `u-select`
     *	- `user-select`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
     */
    userSelect?: CCSSProp
    /**
     * # caret-color (carc)
     * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. ") or those with the `[contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.


     *
     * ---
     * ## Aliases
     *	- `carc`
     *	- `car-color`
     *	- `caret-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
     */
    carc?: CCSSProp
    /**
     * # caret-color (carc)
     * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. ") or those with the `[contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.


     *
     * ---
     * ## Aliases
     *	- `carc`
     *	- `car-color`
     *	- `caret-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
     */
    carColor?: CCSSProp
    /**
     * # caret-color (carc)
     * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. ") or those with the `[contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-contenteditable)` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.


     *
     * ---
     * ## Aliases
     *	- `carc`
     *	- `car-color`
     *	- `caret-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color
     */
    caretColor?: CCSSProp
    /**
     * # -webkit-touch-callout (wtc)
     * The `-webkit-touch-callout` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls the display of the default callout shown when you touch and hold a touch target.
     *
     * ---
     * ## Shorthands
     *	- **d**: `default`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wtc`
     *	- `webkit-touch-callout`
     *	- `-webkit-touch-callout`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
     */
    wtc?: CCSSProp
    /**
     * # -webkit-touch-callout (wtc)
     * The `-webkit-touch-callout` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls the display of the default callout shown when you touch and hold a touch target.
     *
     * ---
     * ## Shorthands
     *	- **d**: `default`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wtc`
     *	- `webkit-touch-callout`
     *	- `-webkit-touch-callout`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
     */
    webkitTouchCallout?: CCSSProp
    /**
     * # -webkit-touch-callout (wtc)
     * The `-webkit-touch-callout` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls the display of the default callout shown when you touch and hold a touch target.
     *
     * ---
     * ## Shorthands
     *	- **d**: `default`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wtc`
     *	- `webkit-touch-callout`
     *	- `-webkit-touch-callout`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
     */
    webkitTouchCallout?: CCSSProp
    /**
     * # -webkit-overflow-scrolling (wos)
     * The `-webkit-overflow-scrolling` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether or not touch devices use momentum-based scrolling for a given element.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **t**: `touch`
     *
     * ---
     * ## Aliases
     *	- `wos`
     *	- `webkit-overflow-scrolling`
     *	- `-webkit-overflow-scrolling`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
     */
    wos?: CCSSProp
    /**
     * # -webkit-overflow-scrolling (wos)
     * The `-webkit-overflow-scrolling` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether or not touch devices use momentum-based scrolling for a given element.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **t**: `touch`
     *
     * ---
     * ## Aliases
     *	- `wos`
     *	- `webkit-overflow-scrolling`
     *	- `-webkit-overflow-scrolling`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
     */
    webkitOverflowScrolling?: CCSSProp
    /**
     * # -webkit-overflow-scrolling (wos)
     * The `-webkit-overflow-scrolling` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property controls whether or not touch devices use momentum-based scrolling for a given element.
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **t**: `touch`
     *
     * ---
     * ## Aliases
     *	- `wos`
     *	- `webkit-overflow-scrolling`
     *	- `-webkit-overflow-scrolling`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling
     */
    webkitOverflowScrolling?: CCSSProp
    /**
     * # -webkit-tap-highlight-color (wthc)
     * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.


     *
     * ---
     * ## Aliases
     *	- `wthc`
     *	- `webkit-tap-highlight-color`
     *	- `-webkit-tap-highlight-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
     */
    wthc?: CCSSProp
    /**
     * # -webkit-tap-highlight-color (wthc)
     * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.


     *
     * ---
     * ## Aliases
     *	- `wthc`
     *	- `webkit-tap-highlight-color`
     *	- `-webkit-tap-highlight-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
     */
    webkitTapHighlightColor?: CCSSProp
    /**
     * # -webkit-tap-highlight-color (wthc)
     * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.


     *
     * ---
     * ## Aliases
     *	- `wthc`
     *	- `webkit-tap-highlight-color`
     *	- `-webkit-tap-highlight-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
     */
    webkitTapHighlightColor?: CCSSProp
    /**
     * # -webkit-text-fill-color (wtfc)
     * The **`-webkit-text-fill-color`** CSS property specifies the fill [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of characters of text. If this property is not set, the value of the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property is used.


     *
     * ---
     * ## Aliases
     *	- `wtfc`
     *	- `webkit-text-fill-color`
     *	- `-webkit-text-fill-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color
     */
    wtfc?: CCSSProp
    /**
     * # -webkit-text-fill-color (wtfc)
     * The **`-webkit-text-fill-color`** CSS property specifies the fill [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of characters of text. If this property is not set, the value of the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property is used.


     *
     * ---
     * ## Aliases
     *	- `wtfc`
     *	- `webkit-text-fill-color`
     *	- `-webkit-text-fill-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color
     */
    webkitTextFillColor?: CCSSProp
    /**
     * # -webkit-text-fill-color (wtfc)
     * The **`-webkit-text-fill-color`** CSS property specifies the fill [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) of characters of text. If this property is not set, the value of the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.") property is used.


     *
     * ---
     * ## Aliases
     *	- `wtfc`
     *	- `webkit-text-fill-color`
     *	- `-webkit-text-fill-color`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-fill-color
     */
    webkitTextFillColor?: CCSSProp
    /**
     * # -webkit-user-drag (wud)
     *
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **e**: `element`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wud`
     *	- `webkit-user-drag`
     *	- `-webkit-user-drag`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-user-drag
     */
    wud?: CCSSProp
    /**
     * # -webkit-user-drag (wud)
     *
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **e**: `element`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wud`
     *	- `webkit-user-drag`
     *	- `-webkit-user-drag`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-user-drag
     */
    webkitUserDrag?: CCSSProp
    /**
     * # -webkit-user-drag (wud)
     *
     *
     * ---
     * ## Shorthands
     *	- **a**: `auto`
     *	- **e**: `element`
     *	- **n**: `none`
     *
     * ---
     * ## Aliases
     *	- `wud`
     *	- `webkit-user-drag`
     *	- `-webkit-user-drag`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-user-drag
     */
    webkitUserDrag?: CCSSProp
    /**
     * # -webkit-backdrop-filter (wbf)
     *


     *
     * ---
     * ## Aliases
     *	- `wbf`
     *	- `webkit-backdrop-filter`
     *	- `-webkit-backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-backdrop-filter
     */
    wbf?: CCSSProp
    /**
     * # -webkit-backdrop-filter (wbf)
     *


     *
     * ---
     * ## Aliases
     *	- `wbf`
     *	- `webkit-backdrop-filter`
     *	- `-webkit-backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-backdrop-filter
     */
    webkitBackdropFilter?: CCSSProp
    /**
     * # -webkit-backdrop-filter (wbf)
     *


     *
     * ---
     * ## Aliases
     *	- `wbf`
     *	- `webkit-backdrop-filter`
     *	- `-webkit-backdrop-filter`
     * ---
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-backdrop-filter
     */
    webkitBackdropFilter?: CCSSProp
}
