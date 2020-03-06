import { mediaQuery } from '@w11r/use-breakpoint'

export default ({ props }) => {
    props.mq = (input, prop, options) => {
        if (typeof input[0] === 'string') {
            input = [input]
        }
        for (const bpv of input) {
            bpv[1] = options.__ccss(bpv[1])
        }
        return mediaQuery(input, options.outputTransformer.type)
    }
}
