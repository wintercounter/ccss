---
id: prop-scroll
title: '@cryptic-css/prop-scroll'
---

Adds support for custom prop `scroll`. It'll apply all necessary CSS to
create scrollable boxes with hidden scrollbars where possible. It mostly has mobile use cases.

## Usage

```js live
ccss({
    scroll: 'x'
})
```

## Available values

-   `x`: Enable horizontal scrolling.
-   `y`: Enable vertical scrolling.
-   `true`: Enable scrolling in both directions.

## Configuration

> The plugin is included in the `ccss` package pre-configured.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import ccss from '@cryptic-css/core'
import propScroll from '@cryptic-css/prop-scroll'

ccss.use(propScroll)
```
