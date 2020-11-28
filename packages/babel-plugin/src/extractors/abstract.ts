import * as t from '@babel/types'
import { unicode, shortest, MurmurHash2, testing } from '@/classNameStrategies'
import { getIdentifierByValueType } from '@/utils'

export default class ExtractorAbstract {
    cache = new Map()
    entries
    options
    processor
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
        this.entries.add(className)

        return className
    }
    toDOM(processor) {
        processor.path.node.arguments[0] = t.stringLiteral(processor.path.node.arguments[0]?.property?.name || 'div')
    }
    getCSSVar() {
        return `--v-${shortest()}`
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
}
