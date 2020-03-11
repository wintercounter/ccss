---
id: plugin-ratio
title: '@cryptic-css/plugin-ratio'
---

Adds support for the well-known _"padding hack"_ for keeping aspect-ratios.

## Supported props

-   padding (p, pad)
-   padding-top (pT, pad-top)
-   padding-right (pR, pad-right)
-   padding-bottom (pB, pad-bottom)
-   padding-left (pL, pad-left)
-   margin (m, mar)
-   margin-top (mT, mar-top)
-   margin-right (mR, mar-right)
-   margin-bottom (mB, mar-bottom)
-   margin-left (mL, mar-left)

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
    pT: '16:9'
})
```
