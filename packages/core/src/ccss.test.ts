// @ts-nocheck

import { createCCSS } from '@'
import { objectOutputTransformer } from './outputTransformers'

const props = [
    [
        ['size'],
        {
            small: {
                fts: 10
            },
            large: {
                fts: 32
            }
        },
        [
            (input, prop, transformedFn) => {
                return transformedFn(input)
            }
        ]
    ],
    [['br'], { global: 6 }]
]

const ccss = createCCSS().setProps(props)
const ccssObject = createCCSS({ outputTransformer: objectOutputTransformer }).setProps(props)

describe('ccss tests', () => {
    describe('Evaluations', () => {
        it('normal', () => {
            expect(ccss({ a: 'example 5s linear 2s infinite alternate' })).toBe(
                'animation: example 5s linear 2s infinite alternate;'
            )
        })
        it('normal:object', () => {
            expect(ccssObject({ a: 'example 5s linear 2s infinite alternate' })).toStrictEqual({
                animation: 'example 5s linear 2s infinite alternate'
            })
        })
        it('mapValue', () => {
            expect(ccss({ fd: 'c' })).toBe('flex-direction: column;')
        })
        it('mapValue:object', () => {
            expect(ccssObject({ fd: 'c' })).toStrictEqual({
                flexDirection: 'column'
            })
        })
        it('parseSingle', () => {
            expect(ccss({ ti: 2 })).toBe('text-indent: 2rem;')
        })
        it('parseSingle:object', () => {
            expect(ccssObject({ ti: 2 })).toStrictEqual({ textIndent: '2rem' })
        })
        it('parseMultipart', () => {
            expect(ccss({ m: [1, 2, 3, 4] })).toBe('margin: 1rem 2rem 3rem 4rem ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1rem 1:3 ;')
            expect(ccss({ m: 10 })).toBe('margin: 10rem;')
        })
        it('parseMultipart:object', () => {
            expect(ccssObject({ m: [1, 2, 3, 4] })).toStrictEqual({ margin: '1rem 2rem 3rem 4rem ' })
            expect(ccssObject({ m: [1, '1:3'] })).toStrictEqual({ margin: '1rem 1:3 ' })
            expect(ccssObject({ m: 10 })).toStrictEqual({ margin: '10rem' })
        })
        it('pipe', () => {
            expect(ccss({ br: 'global' })).toBe('border-radius: 6rem;')
        })
        it('pipe:object', () => {
            expect(ccssObject({ br: 'global' })).toStrictEqual({ borderRadius: '6rem' })
        })
        it('pipe:object with long name', () => {
            expect(ccssObject({ borderRadius: 'global' })).toStrictEqual({ borderRadius: '6rem' })
        })
        it('pseudo', () => {
            expect(
                ccss({
                    '::b': { d: 'b' }
                }).trim()
            ).toBe(`&::before {
        display: block;
    }`)
        })
        it('pseudo:object', () => {
            expect(
                ccssObject({
                    '::b': { d: 'b' }
                })
            ).toStrictEqual({
                '&::before': {
                    display: 'block'
                }
            })
        })
        it('pseudo:long', () => {
            expect(
                ccss({
                    '::before': { d: 'b' }
                }).trim()
            ).toBe(`&::before {
        display: block;
    }`)
        })
        it('pseudo:long 2', () => {
            expect(
                ccss({
                    ':hover': { d: 'b' }
                }).trim()
            ).toBe(`&:hover {
        display: block;
    }`)
        })
        it('child/pseudo', () => {
            expect(
                ccss({
                    child: {
                        ':h': { c: 'white' },
                        '> div': {
                            bg: '#fff'
                        }
                    }
                }).trim()
            ).toBe(`&:hover {
        color: white;
    }
    > div {
        background: #fff;
    }`)
        })
        it('child/pseudo:object', () => {
            expect(
                ccssObject({
                    child: {
                        ':h': { c: 'white' },
                        '> div': {
                            bg: '#fff'
                        }
                    }
                })
            ).toStrictEqual({
                '&:hover': {
                    color: 'white'
                },
                '> div': {
                    background: '#fff'
                }
            })
        })

        it('can use custom prop', () => {
            expect(
                ccss({
                    size: 'large'
                }).trim()
            ).toBe(`font-size: 32rem;`)
        })

        it('can use custom prop:object', () => {
            expect(
                ccssObject({
                    size: 'large'
                })
            ).toStrictEqual({ fontSize: '32rem' })
        })

        it('can handle disabled unsupported props', () => {
            expect(
                ccss({
                    foo: 'bar'
                }).trim()
            ).toBe(``)
        })

        it('can handle disabled unsupported props:object', () => {
            expect(
                ccssObject({
                    foo: 'bar'
                })
            ).toStrictEqual({})
        })

        it('can handle enabled unsupported props', () => {
            expect(
                ccss({
                    foo: 'bar',
                    unsupported: true
                }).trim()
            ).toBe(`foo: bar;`)
        })

        it('can handle enabled unsupported props:object', () => {
            expect(
                ccssObject({
                    foo: 'bar',
                    unsupported: true
                })
            ).toStrictEqual({ foo: 'bar' })
        })

        it('can handle array enabled unsupported props', () => {
            expect(
                ccss({
                    foo: 'bar',
                    bic: 'buc',
                    unsupported: ['foo']
                }).trim()
            ).toBe(`foo: bar;`)
        })

        it('can handle array enabled unsupported props:object', () => {
            expect(
                ccssObject({
                    foo: 'bar',
                    bic: 'buc',
                    unsupported: ['foo']
                })
            ).toStrictEqual({ foo: 'bar' })
        })

        it('can handle functions as value', () => {
            expect(
                ccssObject({
                    d: () => 'b'
                })
            ).toStrictEqual({ display: 'block' })
        })

        it('can handle functions as value:object', () => {
            expect(
                ccss({
                    d: () => 'b'
                })
            ).toBe(`display: block;`)
        })
    })
})
