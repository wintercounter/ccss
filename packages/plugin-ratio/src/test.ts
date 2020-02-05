import ccss from '@cryptic-css/core'
import '@'

describe('plugin-ratio tests', () => {
    describe('Evaluations', () => {
        it('parseSingle', () => {
            expect(ccss({ m: 10 })).toBe('margin: 10rem;')
            expect(ccss({ m: '1:2' })).toBe('margin: 200%;')
            expect(ccss({ mt: '1:2' })).toBe('margin-top: 200%;')
        })
        it('parseMultipart', () => {
            expect(ccss({ m: [1, 2, 3, 4] })).toBe('margin: 1rem 2rem 3rem 4rem ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1rem 300% ;')
            expect(ccss({ m: ['1:2'] })).toBe('margin: 200% ;')
        })
    })
})
