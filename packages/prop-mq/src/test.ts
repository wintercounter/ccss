// @ts-nocheck

import { createCCSS, objectOutputTransformer } from '@cryptic-css/core'
import usePropMq from '.'

const ccss = createCCSS()
const ccssObject = createCCSS({ outputTransformer: objectOutputTransformer })
usePropMq(ccss)
usePropMq(ccssObject)

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
