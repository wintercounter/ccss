import * as t from '@babel/types'

export const deepCSSVars = (processor, prop, p, extractor) => {
    p.traverse({
        ObjectExpression(path) {
            // Only if this expression is child of the prop
            if (!path.findParent(p => p.node === prop)) return
            processor.shortifyProps(path)

            path.node.properties = path.node.properties.map(el => {
                if (
                    // ArrayExpressions and ObjectExpressions are handled by visitor
                    !['ArrayExpression', 'ObjectExpression'].includes(el.value.type) &&
                    // Deep nesting with the same key should be skipped, it'll be handled by the next visitor
                    el.key.name !== (prop.key.name || prop.key.value) &&
                    // We only need to extract if value is computed
                    processor.isValueComputed(el.value)
                ) {
                    // Create CSS var
                    const cssVarName = extractor.getCSSVar(el.key.name || el.key.value)
                    const cssVar = `var(${cssVarName})`

                    // Computed, move value into variable and assign it to a CSS variable
                    const variableId = processor.createVariable(el)
                    extractor.styleProps.push([cssVarName, variableId])
                    el.value = t.stringLiteral(cssVar)
                }
                return el
            })
        }
    })
}
