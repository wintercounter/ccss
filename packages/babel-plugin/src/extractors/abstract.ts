import * as t from '@babel/types'
import { unicode, shortest, MurmurHash2, testing } from '@/classNameStrategies'

export default class ExtractorAbstract {
    cache = new Map()
    entries
    options
    constructor(options) {
        this.options = options
        this.resetEntries()
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
}
