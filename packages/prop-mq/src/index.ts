import ccss, { setProps } from '@cryptic-css/core'
import { mediaQuery } from '@w11r/use-breakpoint'

setProps({
    mq: (prop, input) => {
        if (typeof input[0] === 'string') {
            input = [input]
        }
        for (const bpv of input) {
            bpv[1] = ccss(bpv[1])
        }
        return mediaQuery(input)
    }
})
