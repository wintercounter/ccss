const getIdentifierByValueType = (value, t) => {
    if (typeof value === 'string') {
        return t.stringLiteral(value)
    }

    if (typeof value === 'boolean') {
        return t.jsxExpressionContainer(t.booleanLiteral(value))
    }

    if (typeof value === 'number') {
        return t.jsxExpressionContainer(t.numericLiteral(value))
    }

    return null
}

/**
 * TODO
 * - If no css, no Ui
 * - If only static props, no Ui
 * - Handle Ui.tagName
 * - Add support for more custom tags
 * - Handle className when className is not a string
 * - Handle cases when it's number
 * - Handle cases when it's non primitive, it has to stay dynamic
 * - Check can we precompile something dynamic?
 * - Handle tagged literal strings
 */

const styles = new Map()
let charCode = 161
let ccss, ccssOptions
const ccssPropMap = {}

export default api => {
    const { types: t } = api

    return {
        pre(state) {
            if (ccss) return

            const {
                opts: {
                    expressions = {
                        ccss: `require('ccss').default`,
                        options: `require('ccss').defaultOptions`
                    }
                } = {}
            } = state
            ccss = eval(expressions.ccss)
            ccssOptions = eval(expressions.options)
            for (const [short, light, long] of ccssOptions.props._propTable) {
                const camelShort = toCamelCase(short)
                const camelLight = toCamelCase(light)
                const camelLong = toCamelCase(long)
                ccssPropMap[camelShort] = { short, light, long, camelShort, camelLight, camelLong }
                ccssPropMap[camelLight] = { short, light, long, camelShort, camelLight, camelLong }
                ccssPropMap[camelLong] = { short, light, long, camelShort, camelLight, camelLong }
            }
        },
        post(path, state) {
            //console.log(state)
        },
        visitor: {
            JSXOpeningElement(path, state) {
                const classNames = []
                const classNameNode = path.node.attributes.find(node => node.name && node.name.name === 'className')
                const { opts: { identifiers } = { identifiers: [] } } = state

                // Not supported JSX tagName
                if (!identifiers.includes(path.node.name.name)) {
                    return
                }

                // Filter will remove unnecessary attributes
                path.node.attributes = path.node.attributes
                    .map(attr => {
                        // Not supported attr, keep it as is
                        if (!attr?.name?.name || !ccssPropMap[attr.name.name]) return attr

                        const attrName = attr.name.name

                        switch (true) {
                            // Simple string
                            case attr.value && attr.value.type === 'StringLiteral':
                                const css = ccss({ [attrName]: attr.value.value })
                                let selector = styles.get(css)

                                if (!selector) {
                                    selector = String.fromCharCode(charCode++)
                                    styles.set(css, selector)
                                }

                                classNames.push(selector)
                                return false

                            // Not static value
                            default:
                                return t.jSXAttribute(
                                    t.jSXIdentifier(ccssPropMap[attrName].camelShort),
                                    getIdentifierByValueType(attr.value.expression.value, t)
                                )
                        }
                    })
                    .filter(x => x)

                if (!classNames) return

                if (classNameNode) {
                    classNameNode.value.value += ` ${classNames.join(' ')}`
                    return
                }

                const newProp = t.jSXAttribute(t.jSXIdentifier('className'), t.stringLiteral(classNames.join(' ')))
                path.node.attributes.push(newProp)
            }
        }
    }
}

const toCamelCase = (t: string): string => t.replace(/^-+/, '').replace(/-./g, ([, l]) => l.toUpperCase())
