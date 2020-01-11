import ccss, { setValueMap } from '@'

setValueMap({
    'border-radius': {
        global: 6
    }
})

describe('ccss tests', () => {
    describe('Evaluations', () => {
        it('normal', () => {
            expect(ccss({ a: 'example 5s linear 2s infinite alternate' })).toBe(
                'animation: example 5s linear 2s infinite alternate;'
            )
        })
        it('mapValue', () => {
            expect(ccss({ fd: 'c' })).toBe('flex-direction: column;')
        })
        it('parseSingle', () => {
            expect(ccss({ ti: 2 })).toBe('text-indent: 2rem;')
        })
        it('parseMultipart', () => {
            expect(ccss({ m: [1, 2, 3, 4] })).toBe('margin: 1rem 2rem 3rem 4rem ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1rem 1:3 ;')
            expect(ccss({ m: 10 })).toBe('margin: 10rem;')
        })
        it('pipe', () => {
            expect(ccss({ r: 'global' })).toBe('border-radius: 6rem;')
        })
        it('undefined', () => {
            expect(ccss({ a: undefined })).toBe('')
        })
    })
})
