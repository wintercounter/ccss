import path from 'path'
import crypto from 'crypto'
import fg from 'fast-glob'
import fs from 'fs'
import { compile, serialize, stringify } from 'stylis'
import template from '@babel/template'
import * as t from '@babel/types'
import { unicode, shortest, MurmurHash2, testing } from '@/classNameStrategies'
import Processor from '@/processor'
import { convertCharStr2CSS } from '@/utils'

export default class ExtractorAbstract {
    cache = new Map()
    entries
    options
    // @ts-ignore
    processor: Processor
    constructor(options) {
        this.options = options
        this.resetEntries()
    }
    onCallExpression(processor) {
        this.processor = processor
    }
    resetEntries() {
        this.entries = new Set()
    }
    getClassName(attr, value, css) {
        if (this.cache.has(css)) {
            return this.cache.get(css)
        }
        let className
        switch (this.options.classNameStrategy) {
            case 'unicode':
                className = unicode()
                break
            case 'shortest':
                className = shortest()
                break
            case 'testing':
                className = testing(attr, value)
                break
            case 'MurmurHash2':
            default:
                className = MurmurHash2(css)
                break
        }

        this.cache.set(css, className)
        this.entries.add([css, className])

        return className
    }
    toDOM(processor) {
        processor.path.node.arguments[0] = t.stringLiteral(processor.path.node.arguments[0]?.property?.name || 'div')
    }
    getCSSVar(name) {
        if (process.env.TEST) {
            return `--v-${name}`
        } else if (process.env.NODE_ENV === 'production') {
            return `--v-${shortest()}`
        }
        return `--v-${name}-${shortest()}`
    }
    addClassNames(classNames) {
        const { processor } = this
        const classNameProp = processor.getProp('className', '')
        if (classNames.length) {
            if (t.isStringLiteral(classNameProp.value)) {
                classNameProp.value.value += ` ${classNames.join(' ')}`
            } else {
                classNameProp.value = t.binaryExpression(
                    '+',
                    t.stringLiteral(`${classNames.join(' ')} `),
                    classNameProp.value
                )
            }
        }
    }
    addStyleProps(props) {
        const { processor } = this
        const styleProp = processor.getProp('style', {})
        for (const [k, v] of props) {
            styleProp.value.properties.push(t.objectProperty(t.stringLiteral(k), v))
        }
    }
    writeFile(filename, program) {
        if (!filename) return

        const { classNameStrategy, output, module } = this.options
        const folderPath = filename.split(path.sep)
        const file = folderPath.pop()
        let content = ''
        for (const [rules, className] of this.entries) {
            content += `.${className}{${
                // If it's unicode, we'll keep as is,
                // if not, we will convert all character into a safe CSS form
                classNameStrategy === 'unicode'
                    ? rules
                    : rules.replace(/content:.?"([^\\"]+?|.+)"/g, (full, content) => {
                          return full.replace(content, convertCharStr2CSS(content))
                      })
            }}`
        }
        const style = serialize(compile(content), stringify)
        const checksum = crypto.createHash('md5').update(style, 'utf8').digest('hex')
        //  __[filename].[contenthash].css
        const cssFilename = output
            .replace('[filename]', module ? file : 'styles')
            .replace('[contenthash]', module ? checksum : 'global')

        const cssPath = module
            ? `${folderPath.join(path.sep)}${path.sep}${cssFilename}`
            : path.resolve(process.cwd(), path.dirname(cssFilename), cssFilename)

        // Delete old files
        fg.sync([...folderPath, `__${filename}*.css`].join('/')).forEach(p => fs.unlinkSync(p))

        fs.writeFileSync(cssPath, style, { mode: 0o755 })

        if (module) {
            const buildImport = template(`import './${cssFilename}'`)
            program.unshiftContainer('body', buildImport())

            // We need to remove entries after it's written when using modules
            this.resetEntries()
        }
    }
}
