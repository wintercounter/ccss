// @ts-nocheck

import { createOptions, createCCSS } from '@cryptic-css/core'
import applyPropKeyframes from './'

const options = createOptions()
applyPropKeyframes(options)
const ccss = createCCSS(options)

describe('prop-keyframes tests', () => {
    describe('Evaluations', () => {
        it('from-to', () => {
            expect(
                ccss({
                    keyframes: {
                        from: { width: 0 },
                        to: { width: 100 }
                    }
                })
            ).toBe(`animation-name: a1;
@keyframes a1 {
    from {
    width: 0;
}
to {
    width: 100rem;
}

}`)
        })

        it('from-to => same values, same name', () => {
            expect(
                ccss({
                    keyframes: {
                        from: { width: 0 },
                        to: { width: 100 }
                    }
                })
            ).toBe(`animation-name: a1;
@keyframes a1 {
    from {
    width: 0;
}
to {
    width: 100rem;
}

}`)
        })

        it('from-to => different values, different name', () => {
            expect(
                ccss({
                    keyframes: {
                        from: { width: 0 },
                        to: { width: 101 }
                    }
                })
            ).toBe(`animation-name: a2;
@keyframes a2 {
    from {
    width: 0;
}
to {
    width: 101rem;
}

}`)
        })
    })
})
