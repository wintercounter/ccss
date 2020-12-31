---
id: create-a-color-map
title: Create a color map
---

A very basic piece of a design system is color management.

Let's define a few simple rules:

-   **No direct color usage allowed.** It helps to avoid all shades of red, green, blue, etc.
-   **No new colors allowed to be defined.** Let's keep this the designer's territory.
-   **Do not use color names while naming.** You will tie your components to a color name, but what if you want
    to change it from red to yellow without refactoring the component?

These are rules you can bend to your on needs of course, it really depends on the complexity of the application.

## Define a color library

A color library is nothing else, just a list of all possible color. Its purpose is to avoid redefining colors,
and have a clear list of all available colors. Here it's allowed to use color names.

```js
const colorLibrary = {
    yellow: '#fc0',
    black: '#000',
    grey: '#999',
    white: '#fff'
}
```

## Define a color map (scheme)

A color map will define a color scheme to your application. You can easily switch between schemes without the need
of rewriting your components/styles.

```js
const schemeLight = {
    primary: colorLibrary.white,
    secondary: colorLibrary.black,
    text: colorLibrary.grey,
    action: colorLibrary.yellow
}
```

## Let's make CCSS resolve this

The whole point of this is to be able to use these naming in our components. When setting up CCSS, you can define a
`valueMap`. You can tell CCSS what values a property might be able to have.

```js
import { createCCSS, createOptions, createValueMap } from 'ccss'

const valueMap = createValueMap({
    // When using value maps, you need to use the short name of the property (color)
    c: schemeLight
})
const options = createOptions({ valueMap })
const ccss = createCCSS(options)

ccss({
    color: 'text'
})
```

Using `styled-components` it's also possible.

```jsx
<Ui.a href="#" color="action">
    My text
</Ui.a>
```
