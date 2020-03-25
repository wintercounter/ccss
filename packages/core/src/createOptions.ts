import { mergeDeep } from './utils'
import { CCSSOptions } from './types'
import { stringOutputTransformer } from './outputTransformers'
import { createProps } from './createProps'
import { createPseudoMap, createValueMap } from './createMaps'
import { parsePseudo } from './parsers'

export const createOptions = <T>(overrides?: T): T => {
    const options: Partial<CCSSOptions> = {
        unit: 'rem',
        applyUnit: n => `${n}${options.unit}`,
        outputTransformer: stringOutputTransformer,
        props: createProps(),
        valueMap: createValueMap(),
        pseudoMap: createPseudoMap()
    }

    // Add pseudos
    if (options.pseudoMap) {
        for (const k of Object.keys(options.pseudoMap)) {
            if (options.props) options.props[k] = parsePseudo
        }
    }

    return overrides !== undefined ? mergeDeep(options, overrides) : options
}
