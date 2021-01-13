// @ts-nocheck

import { createCCSS } from '@cryptic-css/core'
import usePropKeyframes from './'

const ccss = createCCSS()
usePropKeyframes(ccss)

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
    width: 100px;
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
    width: 100px;
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
    width: 101px;
}

}`)
        })
    })
})
