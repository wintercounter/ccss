---
id: styled
title: '@cryptic-css/styled'
---

This package will give you `styled-components` supporting **CCSS** _out-of-the-box_.

## Usage

You can use this package as a replacement for any `styled-components`/`cryptic-css` imports.

```js
import styled, { Ui, ccssd, ccss } from '@cryptic-css/styled'

// Ui
const Normal = <Ui d="f" />
const WithTagHelper = <Ui.section d="f" />
const WithExtend = styled(Ui)`
    display: block;
`

// ccssd
const Normal = ccssd({ d: 'f' })
const WithTagHelper = ccssd.ul({ d: 'f' })
```

## Exported modules

-   styled (default): original, untouched _styled-components_ for cases
    when needed (the package re-exports all styled-components modules).
-   Ui: prepared component(s) for direct use; normally you only need to this.
-   ccss: the **CCSS** instance used by the default `Ui` and `ccssd` exports.
-   ccssd: a version of _styled-components_ that has **CCSS** support.
-   All exports from '@cryptic-css/core' are being re-exported.

## Configuration

> The exports are already a pre-configured versions.
> Skip this step if you don't need custom configuration and/or **CCSS** instance.

```js
import { createStyledCCSS, createOptions, createCCSS } from '@cryptic-css/styled'

const options = createOptions()
createCCSS(options)
const { ccss, Ui, ccssd } = createStyledCCSS(options)
```

createStyledCCSS
