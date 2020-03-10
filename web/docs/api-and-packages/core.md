---
id: core
title: '@cryptic-css/core'
---

Core of **CCSS** and APIs for extending it with new features.

## Install

```sh
npm i @cryptic-css/core
```

## Usage

By default core can be used on it's own if you don't want the
extra features coming with the full package. To make everything faster,
the default export is a configured **CCSS** instance, so you can use
it right away.

```js
import ccss from '@cryptic-css/core'

ccss({
    c: '#fff'
})
```

### Options

To allow certain customizations, you can either change (mutate) the default options
coming with the package or create you own, custom-configured **CCSS** function.

> Mutating `defaultOptions` is **NOT RECOMMENDED** as it can cause issues in certain
situations. For example you have to support multiple **CCSS** configurations and you are
using SSR, you would overwrite the same instance's configuration.

#### `unit`

A unit you want to use for your values.

Default: `rem`

#### `applyUnit`

A function which will transform your number values to the desired unit.

Default: `n => \`${n}${options.unit}\``

#### `outputTransformer`

You can specify how to form the final output.
By default there are 2 transformers:

- `stringOutputTransformer` (default): output is a CSS string
- `objectOutputTransformer`: output is a style object

You may also implement your own `outputTransformer`.
Please consult the API docs for more details.

#### `props`

Props object created by `createProps()`.

#### `valueMap`

Value Map object created by `createValueMap()`.

#### `pseudoMap`

Pseudo Map object created by `createPseudoMap()`.

#### `__ccss`

This property is dynamically added on `createCCSS` call which
is the `ccss` instance used by the current options object. You can use this
to be able to call the correct `ccss` function in you props and such places.

### Customization

You can customize these options (or add new options).

This is usually being called on the top level of your app only once,
where you setup your own **CCSS** function.

```js
import { createCCSS, createOptions, objectOutputTransformer } from 'ccss'

const options = createOptions({
    unit: 'var(--px)',
    applyUnit: v => `calc(${v} * ${options.unit})`,
    foo: 'bar',
    outputTransformer: objectOutputTransformer
})
// Use this function from now on
const ccss = createCCSS(options)
```

### API

#### `ccss` (default)

Awaits a style object and returns a CSS string.
Not registered keys will be used will be ignores, unless
you're using the `unsupported` prop,
values not existing in a map will be "printed" as-is.

```js
import ccss from 'ccss'
```

```js live
ccss({
    d: 'f'
})
```

#### `createCCSS([options])`

Creates a custom **CCSS** function with your own configuration.
It awaits an options object (usually created by `createOptions()`).

```js
import { createCCSS } from '@cryptic-css/core'

const ccss = createCCSS()
```

#### `createOptions([overrides])`

Options are the most important part. One option object is
tied to one **CCSS** function.

Allows you to add support for custom properties
or override existing ones, set value maps, etc...

```js
import { createCCSS, createOptions } from 'ccss'

const options = createOptions({
    unit: 'px'
})
const ccss = createCCSS(options)
```

#### `createProps([overrides])`

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

##### Prop function arguments

The `props` object is awaiting a function for your custom property.

- `input`: The input value of the property.
- `prop`: The property's name.
- `options`: The options object used with this call.
- `original`: The complete object passed initially to CCSS.

#### `creteValueMap([overrides])`

Creates the default value map object and adds support for extending it
with your own values. It's simply matching a prop and it's value
with another value.

```js
import { createCCSS, createOptions, createProps, pipe, mapValue } from 'ccss'

const props = createProps({
    // First find mapped value in valueMap, then apply **CCSS** on that value
    scheme: pipe(mapValue, (input, prop, options) => options.__ccss(input)),
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

By default unsupported props (not found in props objects) are ignored.
However, there edge cases when you need to pass custom stuff. You can
do that with using a prop name `unsupported` which can be:

- `true`: All unsupported props are processed.
- Array of prop names supported

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

- Short: default, 1-2-3 letter substitutes of the original version (bgc)
- Light: shorter, but still meaningful names (bgColor).
- Full: full style object names, just like in any other libraries (backgroundColor).