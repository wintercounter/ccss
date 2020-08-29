---
id: prop-mq
title: '@cryptic-css/prop-mq'
---

Adds support to use the viewport definition method behind
`@w11r/use-breakpoint`'s React hook.

The output is plain Media Query

The basic logic:
- Define default values.
- Define overrides per breakpoint.

## Usage

```js live
ccss({
    m: 1,
    mq: [
        // mobile
        ['m', { m: 2 }],
        // tablet
        ['t', { m: 3 }]
    ]
})
```

## Configuration

> The plugin included in the `ccss` package pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPropMQ from '@cryptic-css/prop-mq'

const options = createOptions()
applyPropMQ(options)
const ccss = createCCSS(options)
```
