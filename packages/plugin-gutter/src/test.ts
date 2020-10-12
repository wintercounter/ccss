// @ts-nocheck

import { createCCSS, createOptions, objectOutputTransformer } from '@cryptic-css/core'
import applyPluginGutter from './'

const options = createOptions()
applyPluginGutter(options)
const ccss = createCCSS(options)
const ccssObject = createCCSS({ ...options, outputTransformer: objectOutputTransformer })

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
