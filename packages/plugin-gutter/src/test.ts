import ccss from '@cryptic-css/core'
import './'

describe('gutter-plugin', () => {
    it('can use numeric values', () => {
        expect(ccss({ m: 1 })).toBe('margin: 5rem;')
    })

    it('can use none numeric values', () => {
        expect(ccss({ m: ['15rem', 2] })).toBe('margin: 15rem 10rem ;')
    })
})
