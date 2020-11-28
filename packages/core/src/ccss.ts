import transformed from 'transformed'
import { stringOutputTransformer } from './outputTransformers'
import defaultProps from './props'
import defaultOptions from './options'
import { CCSSTransformedFn } from './types'

export const createCCSS = ({
    outputTransformer = stringOutputTransformer,
    options = defaultOptions(),
    props = defaultProps()
} = {}) => {
    const fn = transformed()
        .setOutputTransformer(outputTransformer)
        .setOptions(options)
        .setProps(props) as CCSSTransformedFn
    globalThis.__ccss = fn
    return fn
}
export const ccss = createCCSS()
