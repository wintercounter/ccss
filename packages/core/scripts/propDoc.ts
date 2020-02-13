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

import { valueMap } from '../src/maps'

const DIST = path.resolve(__dirname, '../dist')
const REGEXP = /@propDocStart([\s\S]+?)@propDocEnd/gm

const debug = 1

const turndownService = new TurndownService()

const build = async descriptor => {
    const { prop, short } = descriptor
    const seeURL = `https://developer.mozilla.org/en-US/docs/Web/CSS/${prop}`
    console.log('Fetching URL:', seeURL)
    const $ = await fetch(seeURL)
    const descriptionEl = $('#wikiArticle > p:first-of-type')
    const description = descriptionEl.html().trim()
    debug && console.log(`Fetched description for '${prop}':`, description)
    return `# ${prop} (${short})
 * ${turndownService.turndown(description.replace(/ href="/g, ' href="https://developer.mozilla.org'))}
${valueMap[prop] ? ' *\n * --- \n * ## Shorthands' : ''}
${Object.entries({ ...valueMap[prop] })
    .map(([k, v]) => ` * - **${k}**: \`${v}\``)
    .join('\n')}
 *
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
