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
export function mergeDeep(target, source) {
    if (!isObject(target) || !isObject(source)) {
        return target
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

/**
 * Will turn any string kebab-case into camel-case.
 *
 * @example
 * toCamelCase('dark-blue') // darkBlue
 * toCamelCase('--color-light-pink') // colorLightPink
 * toCamelCase('yellow') // yellow
 */
export const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())

export const memoize = (func: typeof Function) => {
    var memo = {} as any
    var slice = Array.prototype.slice

    return function() {
        var args = slice.call(arguments)
        // @ts-ignore
        if (args in memo) return memo[args]
        // @ts-ignore
        else return (memo[args] = func.apply(this, args))
    }
}
