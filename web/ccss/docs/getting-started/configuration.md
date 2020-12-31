---
id: configuration
title: Configuration
---

## Defaults

By default, the CCSS package provides everything to get started. You don't
need to configure anything.

```js
import ccss from 'ccss'
```

```js live
ccss({
    dp: 'f',
    ai: 's'
})
```

## Options

To allow certain customizations, you can either change (mutate) the default options
coming with the package or create you own, custom-configured **CCSS** function.

Customization lives around the `options` object. At the end when creating your own `ccss` function,
the system will use the passed `options` object's reference.

> Mutating `defaultOptions` is **NOT RECOMMENDED** as it can cause issues in certain
> situations. For example, you have to support multiple **CCSS** configurations, and you are
> using SSR, you would overwrite the same instance's configuration.

```js
import { createOptions, createProps, createCCSS, createValueMap } from '@cryptic-css/core'

const props = createProps({ customProp: input => input })
const valueMap = createValueMap({ c: { dark: '#000' } })
const options = createOptions({ unit: 'px', props, valueMap })
const ccss = createCCSS(options)

ccss({
    width: 100,
    color: 'dark',
    customProp: 'active'
})
```

### `unit`

A unit you want to use for your numeric values. For example `width: 100` becomes `100 + unit`, `100px`.

Default unit: `rem`

### `applyUnit`

A function which will transform your number values to the desired unit.

Default: `n =>`${n}${options.unit}``

Example: in case you want to use the
[62.5% root font-size technique](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/),
you can define you function as such:
`n => \`${n / 10}${options.unit}\``

### `outputTransformer`

How CCSS objects should be transformer, what type the output should have.
There are 2 transformers included:

-   `stringOutputTransformer` (default): output is a CSS string;
-   `objectOutputTransformer`: output is a style object.

You may also implement your own `outputTransformer`.

### `props`

Props object created by `createProps()`.

### `valueMap`

Value Map object created by `createValueMap()`.

### `pseudoMap`

Pseudo Map object created by `createPseudoMap()`.

### `__ccss`

This property dynamically assigned by `createCCSS` call.
It is the `ccss` instance used by the current options object. You can use this
to be able to call the correct `ccss` function in your custom prop handlers and such places.
