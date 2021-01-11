---
id: prop-keyframes
title: '@cryptic-css/prop-keyframes'
---

Adds support for custom prop `keyframes` (kf). It allows you to define a keyframe
animation for your element. You don't need to use `animationName`,
it is automatically generated for you, simply omit.

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

> The plugin is already included in the package `ccss` pre-configured.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import ccss from 'packages/cryptic-css/core/dist/cjs/index'
import propKeyframes from 'packages/cryptic-css/prop-keyframes/dist/index'

ccss.use(propKeyframes)
```
