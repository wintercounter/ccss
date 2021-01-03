// import * as all from './'
import ccss from './'

describe('ccss', () => {
    it('can run', () => {
        expect(
            ccss({
                ta: 'c',
                c: '#fff',
                fts: 40,
                ftw: 'b',
                m: [10, 0]
            })
        ).toBe('text-align: center;color: #fff;font-size: 40px;font-weight: bold;margin: 50px 0 ;')
    })
})
