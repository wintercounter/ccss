import * as t from '@babel/types'
import ExtractorAbstract from './abstract'
import Processor from '@/processor'

export default class CCSSExtractor extends ExtractorAbstract {
    onCallExpression(processor: Processor) {
        super.onCallExpression(processor)

        const classNames: string[] = []
        const styleProps: [string, string][] = []

        // Only loop of it has props
        if (processor.properties) {
            // Filter and remove CCSS Props
            processor.properties = processor.properties.filter((prop) => {
                const propName = prop.key.name

                // Not a CCSSProp, we need to keep it for sure
                if (!processor.isCCSSProp(propName)) return true

                const { isComputed, ccssString, pureValue, cssVarName } = processor.getPropDescriptor(prop, () => {
                    const cssVarName = this.getCSSVar(prop)
                    const cssVar = `var(${cssVarName})`
                    return {
                        cssVar,
                        cssVarName,
                        pureValue: cssVar,
                        ccssValue: { [propName]: cssVar },
                        ccssString: processor.ccss.toValue(propName, cssVar)
                    }
                })
                const className = this.getClassName(propName, pureValue, ccssString)
                classNames.push(className)

                // Not computed, we're done
                if (!isComputed) return

                // Computed, move value into variable and assign it to a CSS variable
                const variableId = processor.createVariable(prop)
                styleProps.push([cssVarName, variableId])
            })

            // Save classNames
            classNames.length && this.addClassNames(classNames)
            // Save style props
            styleProps.length && this.addStyleProps(styleProps)
        }

        // Convert from component to DOM element
        if (!processor.path.isComputed) {
            this.toDOM(processor)
        }
    }
}
