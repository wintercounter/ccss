---
id: base-styles
title: Base styles
---

## Reset CSS

By default, **CCSS** uses `rem` units. To make this work as
`10px === 10rem`, you need to set the root `font-size` on your
HTML tag to `6.25%`:

```css
html {
    font-size: 6.25%;
}
```

> Unfortunately Webkit based browser might ignore such low percentage, which is a bug, so you might want
> to the change to the more common approach: `font-size: 62.5%` so `10px === 1.0rem`

## Flex by default

### Full reset

Making your elements to be flex by default will save you from declaring `display="flex"` all the time. It is actually
a more convenient way of building layouts.

You may use [flex-reset.css](https://gist.github.com/wintercounter/5e3f4915c714022a8dd048f55b48908d#file-flex-reset-css)
for this purpose, however this will affect all other 3rd party styles. Only use this approach if you sure you
won't need to display your components on another page, and/or you don't need to display 3rd party components on
your site. Otherwise, they can conflict.

### Component level reset

You can also define `defaultProps` for `<Ui>` components, `createStyledCCSS` supports this.

## Isn't using flex slower than block?

-   https://developers.google.com/web/updates/2013/10/Flexbox-layout-isn-t-slow
