---
id: plugin-gutter
title: '@cryptic-css/plugin-gutter'
---

Adds support to use predefined gutter values.

## Supported properties

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
-   grid-gap (gg, gr-gap)
-   grid-row-gap (grg, gr-row-gap)
-   grid-column-gap (gcg, gr-col-gap)

## Usage

```js
import ccss from 'ccss'

ccss({
    p: 2, // padding: 10rem;
    mL: true, // margin-left: 5rem;
    m: [1, 0, 2, 3] // margin: 5rem 0 10rem 15rem;
})
```

## Configuration

The plugin introduces the option key `gutter`. Default value is `5`.
It defines the size of 1 gutter (uses the defined `unit` core option).

> The plugin included in the `ccss` package pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPluginGutter from '@cryptic-css/plugin-gutter'

const options = createOptions({
    gutter: 10 // 10 * gutter = 50rem
})
applyPluginGutter(options)
const ccss = createCCSS(options)

ccss({
   m: 1 // margin: 10rem;
})
```
