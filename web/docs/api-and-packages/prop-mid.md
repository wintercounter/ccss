---
id: prop-mid
title: '@cryptic-css/prop-mid'
---

Adds support for custom prop `mid` which will apply the common middle
positioning technique:

```css
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

## Usage

```js live
ccss({
    mid: true
})
```

## Configuration

> The plugin is already included in the package `ccss` pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPropMid from '@cryptic-css/prop-mid'

const options = createOptions()
applyPropMid(options)
const ccss = createCCSS(options)
```
