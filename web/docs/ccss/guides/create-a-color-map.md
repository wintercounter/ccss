---
id: create-a-color-map
title: Create a color map
---

A very basic part of a design system is color management.

Let's define a few simple rules:

-   **No direct color usage allowed.** It helps to avoid all shades of red, green, blue, etc.
-   **No new colors allowed to be defined.** Let's keep this on the designer's territory.
-   **Do not use color names while naming.** You will tie your components to a color name, but what if you want
    to change it from red to yellow without refactoring the component?

These are rules you can be bent to your on needs of course, it really depends on the complexity of the application.

## 1. Define a color library

A color library is nothing else, just a list of all possible color. Its purpose is to avoid redefining,
and have a clear list of all available colors. Here it's allowed to use color names.

```js
const colorLibrary = {
    yellow: '#fc0',
    black: '#000',
    grey: '#999',
    white: '#fff'
}
```

## 2. Define a color map (scheme)

A color map will define a color scheme to your application. You can easily switch between schemes without the need
of rewriting your components/styles.

```js
const schemes = {
    primary: colorLibrary.white,
    secondary: colorLibrary.black,
    text: colorLibrary.grey,
    action: colorLibrary.yellow
}
```

## Let's make CCSS resolve this

The whole point of this is to be able to use these colors in our components. You can define a `value-map` for
the necessary properties.

```js
import ccss from 'ccss'

ccss.setProps({
    color: schemes,
    backgroundColor: schemes
})

ccss({
    color: 'text',
    backgroundColor: 'primary'
})
```
