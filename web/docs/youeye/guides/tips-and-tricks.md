---
id: tips-and-tricks
title: Tips and Tricks
---

### Handling hover cases

It's a really common use case that you need to style an element based on its parent context.

While with the normal `ccss` function this is easy `ccss({ ':hover': {} '})`, using the `<Ui>` component
with that prop naming is not possible. We need to use the `child` prop which is capable to consume
any CSS selector.

```js live noInline
render(
    <Ui.a href="#" pad={3} child={{ ':hover span': { opacity: 1 } }}>
        Hover for pizza
        <Ui.span opacity={0}>🍕</Ui.span>
    </Ui.a>
)
```
