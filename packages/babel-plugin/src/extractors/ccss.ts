import * as t from '@babel/types'
import ExtractorAbstract from './abstract'

export default class CCSSExtractor extends ExtractorAbstract {
    onCallFound(processor) {
        const classNames = []
        let classNameProp
        const propArg = processor.path.node.arguments[1]

        // Only loop of it has props
        if (processor.path.node.arguments[1].properties) {
            propArg.properties = propArg.properties.filter(prop => {
                const propName = prop.key.name
                if (propName === 'className') {
                    classNameProp = prop
                }

                // Not a CCSSProp, we need to keep it for sure
                if (!processor.isCCSSProp(propName)) return true

                const { isComputed, ccssString, pureValue } = processor.getPropDescriptor(prop)

                // Not computed, we can remove it
                if (!isComputed) {
                    const className = this.getClassName(propName, pureValue, ccssString)
                    classNames.push(className)
                    return false
                }
            })
        }

        if (classNames.length) {
            const classNamePropIndex = propArg.properties.indexOf(classNameProp)

            if (classNamePropIndex > -1) {
                const classNameNode = propArg.properties[classNamePropIndex]
                if (t.isStringLiteral(classNameNode.value)) {
                    classNameNode.value.value += ` ${classNames.join(' ')}`
                } else {
                    classNameNode.value = t.binaryExpression(
                        '+',
                        t.stringLiteral(`${classNames.join(' ')} `),
                        classNameNode.value
                    )
                }
            } else {
                // Create className attr
                const newProp = t.objectProperty(t.stringLiteral('className'), t.stringLiteral(classNames.join(' ')))
                propArg.properties.push(newProp)
            }
        }

        if (!processor.path.isComputed) {
            // Convert from component to DOM element
            this.toDOM(processor)
        }
    }
}
