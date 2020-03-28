// @ts-nocheck

/**
 * Generates TSDoc documentation for CSS props.
 *
 * Rules:
 * - Wrap your JS Object definition is @propDoc(Start|End) statements
 * - You can use any JavaScript code here, just make sure it has valid syntax.
 * - Return object MUST have a `prop` key with the corresponding CSS property name.
 * - Must have props:
 *      - prop
 *      - short
 */

import path from 'path'
import fs from 'fs'
import glob from 'glob'
import fetch from 'fetch-cheerio-object'
import TurndownService from 'turndown'

import { createValueMap } from '../src/createMaps'
import { memoize } from '../src/utils'
const valueMap = createValueMap()

const DIST = path.resolve(__dirname, '../dist')
const REGEXP = /@propDocStart([\s\S]+?)@propDocEnd/gm

const debug = 1

const turndownService = new TurndownService()

/**
 * Will fetch a property on a given `baseURL`.
 * This function is memoized to avoid fetching
 * again a previous fetched property.
 *
 * @prop prop: string
 * @prop baseURL: string = 'https://developer.mozilla.org/en-US/docs/Web/CSS/'
 */
const fetchProperty: (prop: string, baseURL: string) => { description: string; fetchURL: string } = memoize(
    async (prop: string, baseURL: string = 'https://developer.mozilla.org/en-US/docs/Web/CSS/') => {
        const fetchURL = `${baseURL}${prop}`
        // console.log('Fetching URL:', fetchURL)
        const $ = await fetch(fetchURL)
        const descriptionEl = $('#wikiArticle > p:first-of-type')
        const description = descriptionEl?.html()?.trim() ?? ''
        return { description, fetchURL }
    }
)

const build = async descriptor => {
    const { long: prop, short, props: alias } = descriptor
    const { description, fetchURL: seeURL } = await fetchProperty(prop)
    // const seeURL = `https://developer.mozilla.org/en-US/docs/Web/CSS/${prop}`
    // console.log('Fetching URL:', seeURL)
    // const $ = await fetch(seeURL)
    // const descriptionEl = $('#wikiArticle > p:first-of-type')
    // const description = descriptionEl?.html()?.trim() ?? ''
    // debug && console.log(`Fetched description for '${prop}':`, description)
    console.log('valueMap[short]', short, valueMap[short])
    return `# ${prop} (${short})
     * ${turndownService.turndown(description.replace(/ href="/g, ' href="https://developer.mozilla.org'))}
    ${valueMap[short] ? ' *\n\t * --- \n\t * ## Shorthands' : ''}
    ${Object.entries({ ...valueMap[short] })
        .map(([k, v], i) => `${i === 0 ? ' *' : '\t *'}\t- **${k}**: \`${v}\``)
        .join('\n')}
     *
     * ---
     * ## Aliases
     ${alias.map((a, i) => `${i === 0 ? '*' : '\t *'}\t- \`${a}\``).join('\n')}
     * ---
     * @see ${seeURL}
    `.trim()
}
;(async () => {
    console.log('Searching for propDocs.')
    const files = await new Promise(resolve => {
        glob(`${DIST}/**/*.{js,d.ts}`, {}, (er, files) => resolve(files))
    })
    for (const file of files) {
        const content = fs.readFileSync(file).toString()
        const descriptors = []
        const replacements = []
        content.replace(REGEXP, (x, y) => {
            const json = y.replace(/\*/g, '')
            console.log(file, x, y)
            descriptors.push(new Function(json.replace('{', 'return {'))())
            return ''
        })
        for (const descriptor of descriptors) {
            replacements.push(await build(descriptor))
        }

        const replacement = content.replace(REGEXP, () => replacements.shift())

        // Only write if contents are not identical
        if (content !== replacement) {
            fs.writeFileSync(file /*+ '.doc.js'*/, replacement)
        }
    }
})()
