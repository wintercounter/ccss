import path from 'path'
import fs from 'fs'

import { getPropTable } from '../src/createProps'

const DIST = path.resolve(__dirname, '../src/types.ts')
const defaultProps = `
    /**
     * Tells CCSS should let through unsupported properties in the output.
     * In an array you can specify a list of a properties should be let through.
     *
     * @example -webkit-transform
     */
    unsupported: boolean | string[]
    
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
     *   h: { d: 'b' },
     *   '.childDiv': { p: 10 }
     * })
     * // Output: ':hover{ display: block; } .childDiv { padding: 10rem; }'
     * \`\`\`
     */
    child?: TCSSSimplePropValue
`
const warningMessage = `
/*
 *  ************************** WARNING **************************
 *  Please **DO NOT** add anything after this comment on this file
 *  Please check the scripts/generateCCSSProps.ts file.
 *  ************************** WARNING **************************
 */
`

// const createPropDefinition = (acronym: string, short: string, name: string, propType = 'TCSSPropValue'): string => `
const createPropDefinition = (
    propName: string,
    short: string,
    long: string,
    propList: string[],
    propType = 'TCSSPropValue'
): string => `
    /**
     * @propDocStart
     * {
     *     long: '${long}',
     *     props: [${propList.map(p => `'${p}'`).join(', ')}],
     *     short: '${short}'
     * }
     * @propDocEnd
     */
    ${/[-_\[\]]/g.test(propName) ? `'${propName}'` : propName}?: ${propType}
`

const generateCCSSPropEntries = ([short, light, long]: [string, string, string, ...any[]]): string => {
    const propList = Array.from(new Set([short, light, long]))
    return propList.reduce((acc, curr) => acc.concat(createPropDefinition(curr, short, long, propList)), '')
}

const generateCCSSProps = (): string =>
    getPropTable().reduce((acc, curr) => acc.concat(generateCCSSPropEntries(curr)), defaultProps)

const writeGeneratedPropsOnFile = () => {
    const content = fs.readFileSync(DIST).toString()
    const generatedPropsContent = `${generateCCSSProps()}}\n${warningMessage}`

    const replacement = content.replace(/(?<=export interface CCSSProps \{)(.*)/s, generatedPropsContent)
    fs.writeFileSync(DIST, replacement)
}

writeGeneratedPropsOnFile()
