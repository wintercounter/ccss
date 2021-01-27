---
id: styled
title: '@you-eye/styled'
---

This package will give you `styled-components` supporting **CCSS** _out-of-the-box_.

## Installation

```sh
npm install ccss @you-eye/styled styled-components
```

## Usage

Import the component.

```js
import Ui from '@you-eye/styled'
```

Normal

```jsx
<Ui d="f" />
```

Tag helper

```jsx
<Ui.section d="f" />
```

For some special cases you can attach Ui's functionality to manually created components.

```jsx
styled(Ui)`
    display: block;
`
```

## Exported modules

-   Ui (default): prepared component(s) for direct use; normally you only need to this.
-   ccss: the **CCSS** instance used by the default `Ui` and `ccssd` exports.
-   styled: original, untouched _styled-components_ for cases
    when needed (the package re-exports all styled-components modules).
-   All exports from '@cryptic-css/core' are being re-exported.

## React Native

Use imports as `@cryptic-css/styled/native`

The platform is supported through Styled Components. The `Ui` tag on its own will render `View`.

You can use `Ui.Text` and all the other React Native components the same way as the HTML version.
