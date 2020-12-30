// @ts-nocheck

import { createCCSS, objectOutputTransformer } from '@cryptic-css/core'
import tailwind from './'

const ccss = createCCSS().use(tailwind)
const ccssObject = createCCSS({ outputTransformer: objectOutputTransformer }).use(tailwind)

describe('tailwind', () => {
    describe('normal maps', () => {
        it('should support basic color maps', () => {
            expect(ccss({ c: 'black' })).toBe('color: #000;')
            expect(ccss({ c: 'gray-100' })).toBe('color: #f7fafc;')
        })
        it('should support basic color maps:object', () => {
            expect(ccssObject({ c: 'black' })).toStrictEqual({ color: '#000' })
            expect(ccssObject({ c: 'gray-100' })).toStrictEqual({ color: '#f7fafc' })
        })
    })
})
