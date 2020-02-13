import ccss from '@cryptic-css/core'
import './'

describe('gutter-plugin', () => {
    it('can use none numeric values', () => {
        expect(ccss({ m: ['15rem', 2] })).toBe('margin: 15rem 10rem ;')
    })
})
