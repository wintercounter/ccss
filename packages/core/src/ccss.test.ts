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
            expect(ccss({ ti: 2 })).toBe('text-indent: calc(2 * var(--px));')
        })
        it('parseMultipart', () => {
            expect(ccss({ m: [1, 2, 3, 4] })).toBe(
                'margin: calc(16 * var(--px)) calc(32 * var(--px)) calc(48 * var(--px)) calc(64 * var(--px)) ;'
            )
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: calc(16 * var(--px)) 300% ;')
            expect(ccss({ m: 10 })).toBe('margin: calc(10 * var(--px));')
            expect(ccss({ m: '1:2' })).toBe('margin: 200%;')
            expect(ccss({ m: ['1:2'] })).toBe('margin: 200% ;')
            expect(ccss({ mt: '1:2' })).toBe('margin-top: 200%;')
        })
        it('pipe', () => {
            expect(ccss({ r: 'global' })).toBe('border-radius: calc(6 * var(--px));')
        })
        it('undefined', () => {
            expect(ccss({ a: undefined })).toBe('')
        })
    })
})
