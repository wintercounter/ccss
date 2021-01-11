---
id: configuration
title: Configuration
---

## Defaults

By default, the `ccss` package provides everything to get started. You don't
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

You can re-configure CCSS instances, which means the default exported instance can be re-configured also.

```js
import ccss from 'ccss'

// Set a custom prop
ccss.setProps([
    // Set custom property with handler
    [['customProp'], null, (input) => input],
    // Create value-map for a property
    [['color'], { dark: '#000' }]
])

ccss({
    color: 'dark',
    customProp: 'active'
})
```

> For more details see the documentation of [transformed](https://www.npmjs.com/package/transformed), the library CCSS is built on top.

### `applyUnit`

A function which will transform your number values to the desired unit.

Default: `n => \`${n}px\``

Example: in case you want to use the
[62.5% root font-size technique](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/),
you can define you function as such: `n => \`${n / 10}rem\``

### `outputTransformer`

It tells how `transformed` should transform your output.
There are 2 transformers provided by CCSS, but you can create your own:

-   `stringOutputTransformer` (default): output is a CSS string;
-   `objectOutputTransformer`: output is a style object.
