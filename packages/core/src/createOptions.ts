import { mergeDeep } from './utils'
import { IOptions } from './types'
import { stringOutputTransformer } from './outputTransformers'
import { createProps } from './createProps'
import { createPseudoMap, createValueMap } from './createMaps'
import { parsePseudo } from './parsers'

export const createOptions = (overrides?): Partial<IOptions> => {
    const options = {
        unit: 'rem',
        applyUnit: n => `${n}${options.unit}`,
        outputTransformer: stringOutputTransformer,
        props: createProps(),
        valueMap: createValueMap(),
        pseudoMap: createPseudoMap()
    }

    // Add pseudos
    for (const k of Object.keys(options.pseudoMap)) {
        options.props[k] = parsePseudo
    }

    return mergeDeep(options, overrides)
}
