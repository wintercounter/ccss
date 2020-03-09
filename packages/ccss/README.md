# `ccss`

> An `out-of-the-box`, pre-configured version of **CCSS** with extra plugins and props
enabled by default. You may use this repo as a sample on how to set-up your own
CCSS function.

## Usage

```js
import ccss from 'ccss'

ccss({
    m: 10
})
```

## Extra info

- It is extending `defaultOptions` from `core` which means it uses the default `ccss` function from `core`.
- It is re-exporting all methods from core.