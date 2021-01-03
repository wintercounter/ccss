import path from 'path'
import fs from 'fs'

import { getPropTable } from '@/createProps'
import { toCamelCase } from '@/utils'

const DIST = path.resolve(__dirname, '../src/types.ts')
const defaultProps = `
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported?: boolean | string[]
    
    /**
     * Define custom CSS text.
     */
    styleText?: (v: string) => string
    
    /**
     * You can pass children to your ccss supporting both pseudo classes and nested selectors.
     *
     * @example
     * \`\`\`js
     * child({
     *   h: { dp: 'b' },
     *   '.childDiv': { p: 10 }
     * })
     * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
     * \`\`\`
     */
    child?: CCSSProp
`
const warningMessage = `
/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
`

// const createPropDefinition = (acronym: string, short: string, name: string, propType = 'CCSSProp'): string => `
const createPropDefinition = (
    propName: string,
    short: string,
    long: string,
    propList: string[],
    propType = 'CCSSProp'
): string => `
    /**
     * @propDocStart
     * {
     *     long: '${long}',
     *     props: [${propList.map((p) => `'${p}'`).join(', ')}],
     *     short: '${short}'
     * }
     * @propDocEnd
     */
    ${toCamelCase(propName)}?: ${propType}
`

const done = new Set()
const generateCCSSPropEntries = ([short, light, long]: [string, string, string, ...any[]]): string => {
    const list = [short, light, long]
    // Any of these already exists, skip
    if (list.some((a) => done.has(a) || done.has(toCamelCase(a)))) return ''

    return list.reduce((acc, curr) => {
        // This already exists, skip
        if (done.has(curr)) return acc

        // Mark as done
        done.add(curr)
        done.add(toCamelCase(curr))

        // It starts with -, skip it
        if (curr[0] === '-') return acc

        return acc.concat(createPropDefinition(curr, list[0], list[2], list))
    }, '')
}

const generateCCSSProps = (): string => {
    return getPropTable().reduce((acc, curr) => {
        return acc.concat(generateCCSSPropEntries(curr))
    }, defaultProps)
}

const writeGeneratedPropsOnFile = () => {
    const content = fs.readFileSync(DIST).toString()
    const generatedPropsContent = `${generateCCSSProps()}}\n${warningMessage}`

    const replacement = content.replace(
        /(?<=export interface CCSSProps extends AnyProp \{)(.*)/s,
        generatedPropsContent
    )
    fs.writeFileSync(DIST, replacement)
}

writeGeneratedPropsOnFile()
