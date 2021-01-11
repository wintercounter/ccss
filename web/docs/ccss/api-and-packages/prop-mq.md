---
id: prop-mq
title: '@cryptic-css/prop-mq'
---

Adds support to use the viewport definition method behind
`@w11r/use-breakpoint`'s React hook. Prop names: mediaQuery, mq, at

The output is plain Media Query.

The basic logic:

-   Define default values.
-   Define overrides per breakpoint.

## Usage

```js live
ccss({
    margin: 1,
    at: [
        ['mobile', { margin: 2 }],
        ['tablet', { margin: 3 }]
    ]
})
```

## Configuration

> The plugin included in the `ccss` package pre-configured.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import ccss from 'packages/cryptic-css/core/dist/cjs/index'
import propMQ from 'packages/cryptic-css/prop-mq/dist/index'

ccss.use(propMQ)
```
