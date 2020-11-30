import * as t from '@babel/types'
import traverse from '@babel/traverse'

export const deepCSSVars = (processor, prop, extractor) => {
    traverse(
        prop.value,
        {
            ObjectExpression(path) {
                processor.shortifyProps(path.node)
                path.node.properties = path.node.properties.map(el => {
                    if (
                        !['ArrayExpression', 'ObjectExpression'].includes(el.value.type) &&
                        processor.isValueComputed(el.value)
                    ) {
                        // Create CSS var
                        const cssVarName = extractor.getCSSVar(el.key.name)
                        const cssVar = `var(${cssVarName})`

                        // Computed, move value into variable and assign it to a CSS variable
                        const variableId = processor.createVariable(el)
                        extractor.styleProps.push([cssVarName, variableId])
                        el.value = t.stringLiteral(cssVar)
                    }
                    return el
                })
            }
        },
        processor.path,
        processor.path.scope
    )
    /*processor.walkTree(
        prop.value,
        v => {
            if (!processor.isValueComputed(v)) {
                return v
            } else {
                return
            }
        },
        'map'
    )*/
}
