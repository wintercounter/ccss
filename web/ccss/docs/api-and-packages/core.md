---
id: core
title: '@cryptic-css/core'
---

Core of **CCSS** and APIs for extending it with new features.

## `ccss` (default)

Awaits a style object and returns a CSS string.
Not registered keys will be used will be ignores, unless
you're using the `unsupported` prop,
values not existing in a map will be "printed" as-is.

```js
import ccss from 'ccss'
```

```js live
ccss({
    dp: 'f'
})
```

## `createCCSS([options])`

Creates a custom **CCSS** function with your own configuration.
It awaits an options object (usually created by `createOptions()`).

```js
import { createCCSS } from '@cryptic-css/core'

const ccss = createCCSS()
```

## `createOptions([overrides])`

Options are the most important part. One option object is
tied to one **CCSS** function.

Allows you to add support for custom properties
or override existing ones, set value maps, set custom units, etc.

```js
import { createCCSS, createOptions } from 'ccss'

const options = createOptions({
    unit: 'px'
})
const ccss = createCCSS(options)
```

## `createProps([overrides])`

Creates the default properties object and adds support for extending it
with your own props.

```js
import { createCCSS, createOptions, createProps } from 'ccss'

const props = createProps({
    popOut: () => {
        return options.__ccss({
            boxShadow: '0 0 10px 10px #fff',
            border: '1px solid yellow'
        })
    }
})

const options = createOptions({
    props
})

const ccss = createCCSS(options)

ccss({
    popOut: true
})
```

### Prop function arguments

The `props` object is awaiting a function for your custom property.

-   `input`: The input value of the property.
-   `prop`: The property's name.
-   `options`: The options object used with this call.
-   `original`: The complete object passed initially to CCSS.

#### `creteValueMap([overrides])`

Creates the default value map object and adds support for extending it
with your own values. It's simply matching a prop and it's value
with another value.

```js
import { createCCSS, createOptions, createProps, pipe, mapValue } from 'ccss'

const props = createProps({
    scheme: pipe(
        // utility to merge together the defined functions into one
        // find mapped value in valueMap
        mapValue,
        // Apply CCSS transformation on the input (input here is the resolved value from the map)
        (input, prop, options) => options.__ccss(input)
    )
})

const valueMap = createValueMap({
    scheme: {
        light: {
            bg: '#fff',
            c: '#000'
        },
        dark: {
            bg: '#000',
            c: '#fff'
        }
    }
})

const options = createOptions({
    props,
    valueMap
})

const ccss = createCCSS(options)

ccss({
    scheme: 'dark'
})
```

#### `createPseudoMap([overrides])`

Creates the default pseudo map and allows you to add your own pseudo
selectors.

### Custom `outputTransformer`

Output transformers are describing how **CCSS** should assemble your final output.

Let's create an `outputTransformer` which will output your results as an array:

```js
// Base function that will tell, how to append each rule to the final output.
const arrayOutputTransformer = (generated, descriptor) => {
    return generated.push(descriptor)
}

// Returns the default output which will be used from the beginning
arrayOutputTransformer.defaultOutput = () => ''

// Type of the output. **CCSS** does not use this internally, but it helps
// to 3rd party scripts to tell what kind of output is expected.
arrayOutputTransformer.type = Array

// It tells in which format it should "print one rule"
// cssProp: CSS property string
// objectCSSProp: styleObject property name
// input: input value
arrayOutputTransformer.toCSSRule = (cssProp, objectCSSProp, input) => {
    return { [objectCSSProp]: input }
}

// Tells how to handle pseudo selector
arrayOutputTransformer.toPseudo = (input, prop, options) => {
    return { [`:${options.pseudoMap[prop]}`]: input }
}

// Tells what do when an unsupported prop arrives (doesn't exist on `props`)
arrayOutputTransformer.unsupportedHandler = input => {
    return null
}
```

## Special props

### `unsupported`

By default, unsupported props (not found in props objects) are ignored.
However, there edge cases when you need to pass custom stuff. You can
do that with using a prop name `unsupported` which can be:

-   `true`: All unsupported props are processed.
-   Array of prop names supported

```js
// Empty
ccss({
    foo: 'bar',
    bic: 'bac'
})

// Both foo and bic are in the output
ccss({
    foo: 'bar',
    bic: 'bac',
    unsupported: true
})

// Only foo is in the output
ccss({
    foo: 'bar',
    bic: 'bac',
    unsupported: ['foo']
})
```

## Prop names

**CCSS** supports 3 types of namings. These are for those who don't
really like to use the shorthands and would like to use
long naming instead.

`background-color`

-   Short: default, 1-2-3 letter substitutes of the original version (bgc)
-   Light: shorter, but still meaningful names (bgColor).
-   Full: full style object names, just like in any other libraries (backgroundColor).
