import transformed from 'transformed'
import { stringOutputTransformer } from './outputTransformers'
import defaultProps from './props'
import defaultOptions from './options'
import { CCSSTransformedFn } from './types'

export const createCCSS = ({
    outputTransformer = stringOutputTransformer,
    options = defaultOptions(),
    props = defaultProps()
} = {}) =>
    transformed().setOutputTransformer(outputTransformer).setOptions(options).setProps(props) as CCSSTransformedFn

export const ccss = createCCSS()
