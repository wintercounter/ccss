import { toCamelCase } from './utils'
import { mapValue } from './handlers'

export const compose = function (handlers) {
    return (input, prop, instance, original, definition) => {
        for (const f of handlers) {
            input = f(input, prop, instance, original, definition)
        }
        return input
    }
}

export default function transformed() {
    const props = new Map()
    const options = {
        autoCamelCase: false,
        hasOwnPropertyCheck: false,
        props,
        // TODO Set default output transformer
        outputTransformer: {}
    }

    const transformedFn = inputObject => {
        const ot = options.outputTransformer
        let generated = ot.defaultOutput()

        // Iterate through each key
        // eslint-disable-next-line no-restricted-syntax
        for (const prop in inputObject) {
            if (options.hasOwnPropertyCheck && !Object.prototype.hasOwnProperty.call(prop, inputObject)) continue

            const definition = props.get(prop)

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
                const value = definition.fn(inputValue, prop, transformedFn, inputObject, definition)
                // We don't handle undefined values
                if (value !== undefined) {
                    generated = ot(generated, value, prop, inputObject, transformedFn)
                }
            }
            // Handle unsupported only if key is allowed
            else if (
                inputObject.unsupported === true ||
                (Array.isArray(inputObject.unsupported) && inputObject.unsupported.includes(prop))
            ) {
                generated = ot.unsupportedHandler
                    ? ot.unsupportedHandler(generated, inputObject[prop], prop, inputObject, transformedFn)
                    : generated
            }
        }
        return generated
    }
    transformedFn.options = options
    transformedFn.setOptions = _ => {
        Object.assign(options, _)
        return transformedFn
    }
    transformedFn.setOutputTransformer = _ => {
        options.outputTransformer = _
        return transformedFn
    }
    transformedFn.setProps = _ => {
        for (const [__keys, map = null, _handlers = []] of _) {
            const existing = props.get(__keys[0])
            const handlers = existing ? [...existing.handlers, ..._handlers] : _handlers

            // Add value map functionality if map is defined for this prop
            const fn = compose(map ? [mapValue, ...handlers] : handlers)

            // Let's just use existing keys if already exists
            const _keys = existing?.keys || __keys
            const keys = options.autoCamelCase
                ? // Convert to camel case if needed
                  _keys.reduce((acc, k, i) => {
                      let cc = toCamelCase(k)
                      // Only store keys that are different when it's converted
                      if (cc !== k) {
                          if (options.outputTransformer.camelCaseReducer) {
                              acc = options.outputTransformer.camelCaseReducer(acc, cc, i)
                          } else {
                              acc.push(cc)
                          }
                      }
                      return acc
                  }, _keys)
                : _keys
            for (const key of keys) {
                props.set(key, {
                    key,
                    keys,
                    map: { ...map, ...existing?.map },
                    handlers,
                    fn
                })
            }
        }
        return transformedFn
    }
    transformedFn.toValue = (prop, value) => {
        const definition = props.get(prop)
        return definition ? definition.fn(value, prop, transformedFn, {}) : value
    }
    transformedFn.getProp = prop => props.get(prop)
    return transformedFn
}
