# `@cryptic-css/support-styled-components`

> This package will add CCSS support for styled-components

## Install

```sh
npm i @cryptic-css/support-styled-components
```

## Usage

Import at the very top level of your application, where you haven't used any styled-component yet.
You just need to do this once, than just use styled-components as before.

```js
import '@cryptic-css/support-styled-components'
```

### StyleObject method

```js
const Header = styled.header({
    d: 'f'
})
```

### Mix props with template literals

```jsx
const Header = styled.header`
    background: #000;
`
render(<Header ta="c" />)
```

## Using the `css` prop

Currently there is no way to intercept the `css` function calls so the `css` prop is not supported yet.
The only way to use CCSS is to have a direct 
