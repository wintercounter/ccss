---
id: core
title: '@cryptic-css/core'
---

The core of **CCSS** and APIs for extending it with new features. It includes support for all CSS properties.

## `ccss` (default export)

Awaits a style object and returns a CSS string.
Not registered keys will be ignored.

```js
import ccss from 'ccss'
```

```js live
ccss({
    display: 'f'
})
```

## `createCCSS(defaultOptions?)`

Creates a custom **CCSS** function with your own configuration. Calling this in most cases is completely
unnecessary, it's only needed if you want to use multiple CCSS instances at once.

```js
import { createCCSS } from 'packages/cryptic-css/core/dist/cjs/index'

const ccss = createCCSS()
```

## Options

### `applyUnit`

A function that's being called with number values to apply certain unit.

It receives the value as an arguments, and it should return the desired output.

```js
ccss.setOptions({
    applyUnit: (x) => `${x}cm`
})
```

> All other [transformed](https://www.npmjs.com/package/transformed) options are available.
