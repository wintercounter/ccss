/**
 * Performs a deep merge of `source` into `target` keeping references all along.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 * @source https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6#gistcomment-2930530
 */
export function mergeDeep(target, source) {
    const isObject = obj => obj && typeof obj === 'object'

    if (!isObject(target) || !isObject(source)) {
        return source
    }

    Object.keys(source).forEach(key => {
        const targetValue = target[key]
        const sourceValue = source[key]

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
            target[key] = targetValue.concat(sourceValue)
        } else if (isObject(targetValue) && isObject(sourceValue)) {
            target[key] = mergeDeep(targetValue, sourceValue)
        } else {
            target[key] = sourceValue
        }
    })

    return target
}
