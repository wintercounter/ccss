---
id: plugin-ratio
title: '@cryptic-css/plugin-ratio'
---

Adds support for the well-known _"padding hack"_ for keeping aspect ratios.

## Supported props

-   padding (p)
-   padding-top (pT)
-   padding-right (pR)
-   padding-bottom (pB)
-   padding-left (pL)
-   margin (m)
-   margin-top (mT)
-   margin-right (mR)
-   margin-bottom (mB)
-   margin-left (mL)

## Usage

```js live
ccss({
    paddingTop: '16:9'
})
```

## Configuration

> The plugin is included in the `ccss` package pre-configured.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import ccss from 'packages/cryptic-css/core/dist/cjs/index'
import pluginRatio from 'packages/cryptic-css/plugin-ratio/dist/index'

ccss.use(pluginRatio)
```
