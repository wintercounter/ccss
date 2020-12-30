// @ts-nocheck

import { createOptions, createCCSS, objectOutputTransformer } from '@cryptic-css/core'
import applyPluginRatio from './'

const options = createOptions()
applyPluginRatio(options)
const ccss = createCCSS(options)
const ccssObject = createCCSS({ ...options, outputTransformer: objectOutputTransformer })

describe('plugin-ratio tests', () => {
    describe('Evaluations', () => {
        it('parseSingle', () => {
            expect(ccss({ m: 10 })).toBe('margin: 10rem;')
            expect(ccss({ m: '1:2' })).toBe('margin: 200%;')
            expect(ccss({ mT: '1:2' })).toBe('margin-top: 200%;')
        })

        it('parseSingle:object', () => {
            expect(ccssObject({ m: 10 })).toStrictEqual({ margin: '10rem' })
            expect(ccssObject({ m: '1:2' })).toStrictEqual({ margin: '200%' })
            expect(ccssObject({ mT: '1:2' })).toStrictEqual({ marginTop: '200%' })
        })

        it('parseMultipart', () => {
            expect(ccss({ m: [5, 1, 3, 4] })).toBe('margin: 5rem 1rem 3rem 4rem ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1rem 300% ;')
            expect(ccss({ m: ['1:2'] })).toBe('margin: 200% ;')
        })

        it('parseMultipart:object', () => {
            expect(ccssObject({ m: [5, 1, 3, 4] })).toStrictEqual({ margin: '5rem 1rem 3rem 4rem ' })
            expect(ccssObject({ m: [1, '1:3'] })).toStrictEqual({ margin: '1rem 300% ' })
            expect(ccssObject({ m: ['1:2'] })).toStrictEqual({ margin: '200% ' })
        })
    })
})
