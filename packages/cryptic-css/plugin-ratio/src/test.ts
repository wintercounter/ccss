// @ts-nocheck

import { createCCSS, objectOutputTransformer } from '@cryptic-css/core'
import pluginRatio from './'

const ccss = createCCSS().use(pluginRatio)
const ccssObject = createCCSS({ outputTransformer: objectOutputTransformer }).use(pluginRatio)

describe('plugin-ratio tests', () => {
    describe('Evaluations', () => {
        it('parseSingle', () => {
            expect(ccss({ m: 10 })).toBe('margin: 10px;')
            expect(ccss({ m: '1:2' })).toBe('margin: 200%;')
            expect(ccss({ mT: '1:2' })).toBe('margin-top: 200%;')
        })

        it('parseSingle:object', () => {
            expect(ccssObject({ m: 10 })).toStrictEqual({ margin: '10px' })
            expect(ccssObject({ m: '1:2' })).toStrictEqual({ margin: '200%' })
            expect(ccssObject({ mT: '1:2' })).toStrictEqual({ marginTop: '200%' })
        })

        it('parseMultipart', () => {
            expect(ccss({ m: [5, 1, 3, 4] })).toBe('margin: 5px 1px 3px 4px ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1px 300% ;')
            expect(ccss({ m: ['1:2'] })).toBe('margin: 200% ;')
        })

        it('parseMultipart:object', () => {
            expect(ccssObject({ m: [5, 1, 3, 4] })).toStrictEqual({ margin: '5px 1px 3px 4px ' })
            expect(ccssObject({ m: [1, '1:3'] })).toStrictEqual({ margin: '1px 300% ' })
            expect(ccssObject({ m: ['1:2'] })).toStrictEqual({ margin: '200% ' })
        })
    })
})
