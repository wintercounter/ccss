import generate from '.'

import { setValueMap, valueMap } from './maps'

setValueMap({
    'border-radius': {
        global: 6
    }
})

describe('Generate tests', () => {
    describe('Evaluations', () => {
        it('normal', () => {
            expect(generate({ a: 'example 5s linear 2s infinite alternate' })).toBe(
                'animation: example 5s linear 2s infinite alternate;'
            )
        })
        it('mapValue', () => {
            expect(generate({ fd: 'c' })).toBe('flex-direction: column;')
        })
        it('parseSingle', () => {
            expect(generate({ ti: 2 })).toBe('text-indent: calc(2 * var(--px));')
        })
        it('parseMultipart', () => {
            expect(generate({ m: [1, 2, 3, 4] })).toBe(
                'margin: calc(16 * var(--px)) calc(32 * var(--px)) calc(48 * var(--px)) calc(64 * var(--px)) ;'
            )
            expect(generate({ m: [1, '1:3'] })).toBe('margin: calc(16 * var(--px)) 300% ;')
            expect(generate({ m: 10 })).toBe('margin: calc(10 * var(--px));')
            expect(generate({ m: '1:2' })).toBe('margin: 200%;')
            expect(generate({ m: ['1:2'] })).toBe('margin: 200% ;')
            expect(generate({ mt: '1:2' })).toBe('margin-top: 200%;')
        })
        it('pipe', () => {
            expect(generate({ r: 'global' })).toBe('border-radius: calc(6 * var(--px));')
        })
        it('undefined', () => {
            expect(generate({ a: undefined })).toBe('')
        })
    })
})
