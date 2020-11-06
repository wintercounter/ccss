import { Parser } from './types'

/**
 * Will turn any string kebab-case into camel-case.
 *
 * @example
 * toCamelCase('dark-blue') // darkBlue
 * toCamelCase('--color-light-pink') // colorLightPink
 * toCamelCase('yellow') // yellow
 */
export const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())

/**
 * Composes multiple functions into one
 * @param parsers
 */
export const compose: (...fn: Parser[]) => Parser = (parsers) => {
    return (input, prop, instance, original, definition) => {
        for (const f of parsers) {
            input = f(input, prop, instance, original, definition)
        }
        return input
    }
}
