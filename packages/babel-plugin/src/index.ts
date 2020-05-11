import path from 'path'

const supportedAttributes = {
    display: {
        long: 'display',
        short: 'd'
    },
    d: {
        long: 'display',
        short: 'd'
    },
    disp: {
        long: 'display',
        short: 'd'
    }
}

const valueMap = {
    b: 'block'
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
let ccss

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
        },
        post(path, state) {
            console.log(state)
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
                path.node.attributes = path.node.attributes.filter(attr => {
                    // Only if it's a CCSS attribute
                    if (attr?.name?.name && supportedAttributes[attr.name.name]) {
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
                        }
                    }

                    return true
                })

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
