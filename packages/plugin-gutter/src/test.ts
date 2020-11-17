// @ts-nocheck

import { createCCSS, objectOutputTransformer } from '@cryptic-css/core'
import useGutterPlugin from './'

const ccss = createCCSS()
const ccssObject = createCCSS({ outputTransformer: objectOutputTransformer })

useGutterPlugin(ccss)
useGutterPlugin(ccssObject)

describe('gutter-plugin', () => {
    it('can use numeric values', () => {
        expect(ccss({ m: 1 })).toBe('margin: 5rem;')
    })

    it('can use numeric values:object', () => {
        expect(ccssObject({ m: 1 })).toStrictEqual({ margin: '5rem' })
    })

    it('can use none numeric values', () => {
        expect(ccss({ m: ['15rem', 2] })).toBe('margin: 15rem 10rem ;')
    })

    it('can use none numeric values:object', () => {
        expect(ccssObject({ m: ['15rem', 2] })).toStrictEqual({ margin: '15rem 10rem ' })
    })

    it('can use numeric values as string => no unit', () => {
        expect(ccss({ m: ['15', 2] })).toBe('margin: 15rem 10rem ;')
    })

    it('can use numeric values as string => no unit:object', () => {
        expect(ccssObject({ m: ['15', 2] })).toStrictEqual({ margin: '15rem 10rem ' })
    })
})
