/**
 * Will turn any string kebab-case into camel-case.
 *
 * @example
 * toCamelCase('dark-blue') // darkBlue
 * toCamelCase('--color-light-pink') // colorLightPink
 * toCamelCase('yellow') // yellow
 */
export const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())
