---
id: plugin-ratio
title: '@cryptic-css/plugin-ratio'
---

Adds support for the well-known _"padding hack"_ for keeping aspect-ratios.

## Supported props

-   padding (p, pad)
-   padding-top (pt, pad-top)
-   padding-right (pr, pad-right)
-   padding-bottom (pb, pad-bottom)
-   padding-left (pl, pad-left)
-   margin (m, mar)
-   margin-top (mt, mar-top)
-   margin-right (mar-right)
-   margin-bottom (mb, mar-bottom)
-   margin-left (ml, mar-left)

## Usage

```js live
ccss({
    pt: '16:9'
})
```

## Configuration

> The plugin is already included in the package `ccss` pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPluginRatio from '@cryptic-css/plugin-ratio'

const options = createOptions()
applyPluginRatio(options)
const ccss = createCCSS(options)

ccss({
    pt: '16:9'
})
```
