---
id: base-styles
title: Base styles
---

# Reset CSS

By default **CCSS** uses `rem` units: `10 => 10rem`. To make this work as
`10px === 10rem`, you need to set the base `font-size` on your
HTML tag to `6.25%`:

```css
html {
    font-size: 6.25%;
}
```

> You can always set **CCSS** to a different unit or formula.

# Flex by default

Also you might want to reset your elements to be flex by default to avoid having
`d="f"` on many of your components. You may use [flex-reset.css](https://gist.github.com/wintercounter/5e3f4915c714022a8dd048f55b48908d#file-flex-reset-css) for this purpose
(which also includes the previously mentioned setup for font-sizes).

- https://developers.google.com/web/updates/2013/10/Flexbox-layout-isn-t-slow