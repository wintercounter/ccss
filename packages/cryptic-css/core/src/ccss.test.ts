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
            expect(ccss({ ti: 2 })).toBe('text-indent: 2px;')
        })
        it('parseSingle:object', () => {
            expect(ccssObject({ ti: 2 })).toStrictEqual({ textIndent: '2px' })
        })
        it('parseMultipart', () => {
            expect(ccss({ m: [1, 2, 3, 4] })).toBe('margin: 1px 2px 3px 4px ;')
            expect(ccss({ m: [1, '1:3'] })).toBe('margin: 1px 1:3 ;')
            expect(ccss({ m: 10 })).toBe('margin: 10px;')
        })
        it('parseMultipart:object', () => {
            expect(ccssObject({ m: [1, 2, 3, 4] })).toStrictEqual({ margin: '1px 2px 3px 4px ' })
            expect(ccssObject({ m: [1, '1:3'] })).toStrictEqual({ margin: '1px 1:3 ' })
            expect(ccssObject({ m: 10 })).toStrictEqual({ margin: '10px' })
        })
        it('pipe', () => {
            expect(ccss({ br: 'global' })).toBe('border-radius: 6px;')
        })
        it('pipe:object', () => {
            expect(ccssObject({ br: 'global' })).toStrictEqual({ borderRadius: '6px' })
        })
        it('pipe:object with long name', () => {
            expect(ccssObject({ borderRadius: 'global' })).toStrictEqual({ borderRadius: '6px' })
        })
        it('pseudo', () => {
            expect(
                ccss({
                    '::b': { dp: 'b' }
                }).trim()
            ).toBe(`&::before {
        display: block;
    }`)
        })
        it('pseudo:object', () => {
            expect(
                ccssObject({
                    '::b': { dp: 'b' }
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
                    '::before': { dp: 'b' }
                }).trim()
            ).toBe(`&::before {
        display: block;
    }`)
        })
        it('pseudo:long 2', () => {
            expect(
                ccss({
                    ':hover': { dp: 'b' }
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
            ).toBe(`font-size: 32px;`)
        })

        it('can use custom prop:object', () => {
            expect(
                ccssObject({
                    size: 'large'
                })
            ).toStrictEqual({ fontSize: '32px' })
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
                    dp: () => 'b'
                })
            ).toStrictEqual({ display: 'block' })
        })

        it('can handle functions as value:object', () => {
            expect(
                ccss({
                    dp: () => 'b'
                })
            ).toBe(`display: block;`)
        })

        it('can handle true/false maps', () => {
            expect(
                ccss({
                    op: true
                })
            ).toBe(`opacity: 1;`)
            expect(
                ccss({
                    op: false
                })
            ).toBe(`opacity: 0;`)
        })

        it('can handle self parser', () => {
            expect(
                ccss({
                    ccss: {
                        width: 10
                    }
                })
            ).toBe(`width: 10px;`)
        })

        it('can handle css vars: string', () => {
            expect(
                ccss({
                    '--': {
                        foo: 'bar',
                        baz: 12,
                        calc: [`calc(100px -`, 10, ')']
                    },
                    var: {
                        mi: 'ma'
                    }
                })
            ).toBe(`--foo: bar;--baz: 12px;--calc: calc(100px - 10px ) ;--mi: ma;`)
        })

        it('can handle css vars: object', () => {
            expect(
                ccssObject({
                    '--': {
                        foo: 'bar',
                        baz: 12,
                        calc: [`calc(100px -`, 10, ')']
                    }
                })
            ).toStrictEqual({ '--baz': '12px', '--calc': 'calc(100px - 10px ) ', '--foo': 'bar' })
        })
    })
})
