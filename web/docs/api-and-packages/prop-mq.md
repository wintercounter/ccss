---
id: prop-mq
title: '@cryptic-css/prop-mq'
---

Adds support to use the viewport sizing system behind
`@w11r/use-breakpoint`'s React hook.

## Usage

```js live
ccss({
    m: 1,
    mq: [
        ['mobile', { m: 2 }],
        ['tablet', { m: 3 }]
    ]
})
```
