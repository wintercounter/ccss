---
id: tips-and-tricks
title: Tips and Tricks
---

Here is a collection of some tips and tricks we've learnt by using CCSS in production.

## Mapping values and converting number inside shorthands

A common case are shorthands where you still want to be able to use number conversion or resolve map values:

-   `border="1px solid #000"`
-   `transform="translateX(100px)"`

### Option 1: use long hand properties

```js
<Ui borderWidth={1} borderStyle="solid" borderColor="#000" />
```

### Option 2: the array method

If you're passing an array value, CCSS will loop through each value, try to resolve, and concat.

```js
<Ui border={[1, 'solid', '#000']} transform={['translateX(', 10, ')']} />
```

> This also work while resolving value maps, eg. using custom colors: `border={[1, 'solid', 'dark']}`

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
