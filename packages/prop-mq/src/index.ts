import { mediaQuery } from '@w11r/use-breakpoint'

export default ({ props }) => {
    props.mq = (input, prop, options) => {
        if (typeof input[0] === 'string') {
            input = [input]
        }
        // We need new array references to avoid mutating the original src
        const generated: [string, {}][] = []
        for (let i = 0; i < input.length; i++) {
            generated[i] = [input[i][0], options.__ccss(input[i][1])]
        }

        return mediaQuery(generated, options.outputTransformer.type)
    }
}
