import { toCamelCase, compose } from './utils'
import { parseMapValue } from './parsers'
import { Options, OutputTransformer, TransformedFn } from './types'

const defaultTransformer = (a, b) => Object.assign(a, b)
defaultTransformer.defaultOutput = () => ({})

export default function transformed(): TransformedFn {
    const registry = new Map()
    let outputTransformer: OutputTransformer = defaultTransformer
    const options: Options = {
        autoCamelCase: false,
        hasOwnPropertyCheck: false
    }

    // Main
    const transformedFn: TransformedFn = (inputObject) => {
        let output = outputTransformer.defaultOutput()

        // Iterate through each key
        // eslint-disable-next-line no-restricted-syntax
        for (const prop in inputObject) {
            if (options.hasOwnPropertyCheck && !Object.prototype.hasOwnProperty.call(prop, inputObject)) continue

            const definition = registry.get(prop)

            if (prop === 'unsupported') {
                // skip this key, it doesn't need any processing
            }
            // Found such prop, process it
            else if (definition) {
                // If input value is a function, call it first
                const inputValue =
                    'function' === typeof inputObject[prop]
                        ? inputObject[prop](prop, transformedFn, inputObject)
                        : inputObject[prop]
                // Let's call the composed handler to get our final value
                const value = definition.fn(inputValue, prop, transformedFn, inputObject, definition)

                // We don't handle undefined values
                if (value !== undefined) {
                    output = outputTransformer(output, value, prop, inputObject, transformedFn)
                }
            }
            // Handle unsupported only if key is allowed
            else if (
                inputObject.unsupported === true ||
                (Array.isArray(inputObject.unsupported) && inputObject.unsupported.includes(prop))
            ) {
                output = outputTransformer.unsupportedHandler
                    ? outputTransformer.unsupportedHandler(output, inputObject[prop], prop, inputObject, transformedFn)
                    : output
            }
        }
        return output
    }

    // Set properties
    transformedFn.registry = registry
    transformedFn.outputTransformer = outputTransformer
    transformedFn.options = options

    transformedFn.setOptions = (_) => {
        Object.assign(options, _)
        return transformedFn
    }
    transformedFn.setOutputTransformer = (_) => {
        outputTransformer = _
        return transformedFn
    }
    transformedFn.setProps = (_) => {
        for (const [__keys, map = null, _parsers = []] of _) {
            const existing = registry.get(__keys[0])
            const parsers = existing ? [...existing.parsers, ..._parsers] : _parsers

            // Add value map functionality if map is defined for this prop
            const fn = compose(map ? [parseMapValue, ...parsers] : parsers)

            // Let's just use existing keys if already exists
            const _keys = existing?.keys || __keys
            const keys = options.autoCamelCase
                ? // Convert to camel case if needed
                  _keys.reduce((acc, k, i) => {
                      let cc = toCamelCase(k)
                      // Only store keys that are different when it's converted
                      if (cc !== k) {
                          if (outputTransformer.camelCaseReducer) {
                              acc = outputTransformer.camelCaseReducer(acc, cc, i)
                          } else {
                              acc.push(cc)
                          }
                      }
                      return acc
                  }, _keys)
                : _keys
            // We will save this definition for each key
            const definition = {
                keys,
                map: { ...map, ...existing?.map },
                parsers,
                fn
            }

            for (const key of keys) {
                registry.set(key, definition)
            }
        }
        return transformedFn
    }
    transformedFn.toValue = (prop, value) => {
        const definition = registry.get(prop)
        return definition ? definition.fn(value, prop, transformedFn, {}) : value
    }
    return transformedFn
}
