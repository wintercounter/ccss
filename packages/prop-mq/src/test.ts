// @ts-nocheck

import { createCCSS, createOptions, objectOutputTransformer } from '@cryptic-css/core'
import applyPropMq from '.'

const options = createOptions()
const optionsObject = createOptions({
    outputTransformer: objectOutputTransformer
})
const ccss = createCCSS(options)
const ccssObject = createCCSS(optionsObject)
applyPropMq(options)
applyPropMq(optionsObject)

describe('prop-mq', () => {
    it('should run ccss through values', () => {
        expect(
            ccss({
                m: 1,
                mq: [
                    ['mobile', { m: 2 }],
                    ['tablet', { m: 3 }]
                ]
            })
        ).toBe(
            'margin: 1rem;@media screen and (min-width: 376px) and (max-width: 639px) { margin: 2rem; }@media screen and (min-width: 640px) and (max-width: 1023px) { margin: 3rem; }'
        )
    })

    it('should run ccss through values:object', () => {
        expect(
            ccssObject({
                m: 1,
                mq: [
                    ['mobile', { m: 2 }],
                    ['tablet', { m: 3 }]
                ]
            })
        ).toStrictEqual({
            margin: '1rem',
            '@media screen and (min-width: 376px) and (max-width: 639px) ': {
                margin: '2rem'
            },
            '@media screen and (min-width: 640px) and (max-width: 1023px) ': { margin: '3rem' }
        })
    })
})
