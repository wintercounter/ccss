// @ts-nocheck

import * as t from '@babel/types'
import * as babylon from '@babel/parser'
import traverse from '@babel/traverse'
import { getIdentifierByValueType } from './utils'

export default class Processor {
    options
    ccss
    path
    constructor({ options, api, path }) {
        this.api = api
        this.options = options
        this.componentNames = Object.keys(options.components)
        this.ccss = typeof options.ccss === 'string' ? eval(options.ccss) : options.ccss
        this.path = path
    }

    isCCSSElement = () => {
        const { node } = this.path
        return (
            t.isCallExpression(node) &&
            t.isMemberExpression(node.callee) &&
            t.isIdentifier(node.callee.object, { name: 'React' }) &&
            t.isIdentifier(node.callee.property, { name: 'createElement' }) &&
            this.componentNames.some(name => t.isIdentifier(node.arguments[0], { name })) &&
            !node.callee.computed
        )
    }

    shortifyProps = (ObjectExpression = this.path.node.arguments[1]) => {
        // No props, leave it
        if (t.isNullLiteral(ObjectExpression)) {
            return ObjectExpression
        }

        ObjectExpression.properties = ObjectExpression.properties.map(prop => {
            if (t.isIdentifier(prop.key) && !prop.computed) {
                const name = prop.key.name
                const definition = this.ccss.registry.get(name)

                // this is a CCSS prop
                if (definition) {
                    // Let's find the shortest key
                    prop.key.name = definition.keys.reduce((a, b) => (a.length <= b.length ? a : b))
                    if (prop.value.value !== undefined && definition.map) {
                        const entry = Object.entries(definition.map).find(([k, v]) => v === prop.value.value)
                        if (entry) {
                            prop.value = getIdentifierByValueType(entry[0])
                        }
                    }
                }
            } else {
                // Set path to computed, we cannot replace with static tag :(
                this.setComputed(true)
            }
            return prop
        })

        return ObjectExpression
    }

    getCCSSProps = node => {
        return Object.entries(node.arguments[1]?.properties || []).reduce((acc, entry) => {
            if (ccss.registry.get(entry[0])) {
                delete node.arguments[1]?.properties
            }
        }, [])
    }

    setComputed(v) {
        if (this.path) {
            this.path.isComputed = true
        }
    }
}
