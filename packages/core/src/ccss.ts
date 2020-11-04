import { CCSSFunction, CCSSInput, CCSSProps, CCSSOptions } from './types'
import inOut from './transformed'
import { stringOutputTransformer } from './outputTransformers'
import defaultProps from './props'
import defaultOptions from './options'

export const createCCSS = ({
    outputTransformer = stringOutputTransformer,
    options = defaultOptions(),
    props = defaultProps()
} = {}) => inOut().setOutputTransformer(outputTransformer).setOptions(options).setProps(props)

export const ccss = createCCSS()
