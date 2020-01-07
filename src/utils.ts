/**
 * Performs a quick check on the provided value to see if it is an object.
 *
 * @example
 * isObject({ a:1 }) // true
 * isObject('hello') // false
 */
export const isObject = <T>(obj: T): boolean => obj && typeof obj === 'object'

/**
 * Performs a deep merge of `source` into `target` keeping references all along.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 * @source [link](https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6#gistcomment-2930530)
 */
export default function mergeDeep<T>(target: T, source: Partial<T>): Partial<T> {
    if (!isObject(target) || !isObject(source)) {
        return source
    }

    const _target = {}

    Object.keys(source).forEach(key => {
        const targetValue = target[key]
        const sourceValue = source[key]

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            _target[key] = targetValue.concat(sourceValue)
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            _target[key] = mergeDeep(targetValue, sourceValue)
        } else {
            _target[key] = sourceValue
        }
    })

    return _target
}
