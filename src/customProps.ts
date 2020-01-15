import { mediaQuery } from '@w11r/use-breakpoint'
import generate from './generate'
import { pseudoMap } from './maps'
import { TNestedInput, TMediaQueryInput, TCSSSimplePropValue } from './types'

/**
 * PSeudo. It will return a string with the provided input value.
 * @example
 * ```js
 * ps({ h: { d: 'b' } }) // ':hover{ display: block; }'
 * ```
 */
export const ps = (i: TNestedInput): string => {
    let generated = ''
    // eslint-disable-next-line no-restricted-syntax
    for (const k in i) {
        if (Object.prototype.hasOwnProperty.call(i, k)) {
            generated += `
            :${pseudoMap[k] || k} {
                ${generate(i[k])}
            }`
        }
    }
    return generated
}

/**
 * MediaQuery.This function will create a CSS media query string for you
 * based on the parameter given.
 *
 * @example
 * ```js
 * mq([[EBreakpoint.MOBILE, 'content']])
 * // CSS return
 * `
 *     media screen and (min-width: 376px) and (max-width: 639px) { content }
 * `
 * mq([['mobile', 'content']]) // same as above
 * ```
 */
export const mq = (input: TMediaQueryInput): string | undefined => mediaQuery(input)

/**
 * Horizontal Scroll. It will make a block have scroll on the x-axis (horizontal).
 *
 * @example
 * ```js
 * hScroll(undefined, { maxw: '100vw' })
 * // CSS return
 * `
 *     max-width: 100vw;
 *     user-select: none;
 *     overflow-x: auto !important;
 *     scrollbar-width: none;
 *     scrollbar-height: none;
 *     -ms-overflow-style: none;
 *     -webkit-overflow-scrolling: touch;
 *     &::-webkit-scrollbar {
 *         display: none;
 *     }
 * `
 * ```
 */

export const hScroll = (input, { maxw = '100vw' }) => `
    max-width: ${maxw};
    user-select: none;
    overflow-x: auto !important;
    scrollbar-width: none;
    scrollbar-height: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
`

/**
 * Middle. It output CSS core to force center a block.
 *
 * @example
 * ```js
 * mid() // { top: 50%; left: 50%; transform: translate(-50%, -50%); }
 * ```
 */
export const mid: TCSSSimplePropValue = () => `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
