---
id: plugin-gutter
title: '@cryptic-css/plugin-gutter'
---

Adds support to use predefined gutter values. This important in design systems for spacing consistency.

## Supported properties

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
-   grid-gap (gg)
-   grid-row-gap (grg)
-   grid-column-gap (gcg)

## Usage

```js
import ccss from '@cryptic-css/core'
import pluginGutter from '@cryptic-css/plugin-gutter'

ccss.use(pluginGutter)
```

```js live
ccss({
    p: 2,
    marginLeft: true,
    margin: [1, 0, 2, 3]
})
```

### Opt-out

Sometimes you still want to use the supported props without gutter values.
For such cases simply pass your value as string.

```js live
ccss({
    paddingTop: 10,
    marginTop: '10'
})
```

## Configuration

The plugin introduces the option key `gutter`. Default value is `5`.
It defines the size of 1 gutter (uses the defined `applyUnit` core option).

> The plugin is included in the `ccss` package pre-configured.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import ccss from '@cryptic-css/core'
import pluginGutter from '@cryptic-css/plugin-gutter'

ccss.setOptions({
    gutter: 10
})

ccss({
    margin: 1 // margin: 10rem;
})
```
