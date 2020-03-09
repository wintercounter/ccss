---
id: prop-scroll
title: '@cryptic-css/prop-scroll'
---

Adds support for custom prop `scroll`. It'll apply all necessary CSS to
create scrollable boxes.

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

> The plugin is already included in the package `ccss` pre-configured.
Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createCCSS, createOptions } from '@cryptic-css/core'
import applyPropMQ from '@cryptic-css/prop-scroll'

const options = createOptions()
applyPropMQ(options)
const ccss = createCCSS(options)
```
