---
id: prop-keyframes
title: '@cryptic-css/prop-keyframes'
---

Adds support for custom prop `keyframes`. It allows you to define a keyframe
animation for your element. You don't need to use `animationName`,
it is automatically generated for you.

## Usage

```js live
ccss({
    keyframes: {
        from: { width: 0 },
        to: { width: '100%' }
    }
})
```

## Configuration

> The plugin already included in the package `ccss` pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPropKeyframes from '@cryptic-css/prop-keyframes'

const options = createOptions()
applyPropKeyframes(options)
const ccss = createCCSS(options)
```
