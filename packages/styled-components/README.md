# `@cryptic-css/styled-components`

> This package will give you `styled-compnents` supporting CCSS out-of-the-box.

## Install

```sh
npm i @cryptic-css/styled-components
```

## Usage

You can use this package as a replacement for any `styled-components`/`cryptic-css` imports.

```js
import styled, { Ui, ccssd, ccss } '@cryptic-css/styled-components'

/**
 * Exports
 * - styled: original styled for cases when needed (the package re-exports all styled-components modules)
 * - Ui: prepared component(s) for direct use; normally you only need to this
 * - ccssd: a version of styled that has CCSS support
 * - ccss: the core ccss function when needed
 */
```

// Ui
const Normal = <Ui d="f" />
const WithTagHelper = <Ui.section d="f" />
const WithExtend = styled(Ui)`
   custom: css;
`

// ccssd
const Normal = ccssd({ d: 'f' })
const WithTagHelper = ccssd.ul({ d: 'f' })
```
