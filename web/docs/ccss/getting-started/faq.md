---
id: faq
title: F.A.Q.
---

## Why Cryptic?

Using short names make your CSS/React components/etc. look _Cryptic_.

```js live
ccss({
    dp: 'b',
    p: 2,
    mt: 3,
    bg: 't'
})
```

## Why should I use this instead of normal style objects/CSS?

CCSS does look useless by default on its own. It's usefulness comes in cases you need to implement design systems,
shared design tokens, need custom properties/values, want to use shorthands, want to build a custom CSS-in-JS tool,
and other advanced scenarios.

## What is the approach?

The simplified answer: a property- and a value-map where you can apply your own handler functions
on each value, generating a final output.

## Isn't using short names being an anti-pattern?

We think that you need a relatively short time to get comfortable with it, but anyway, it's optional.
If you know CSS, you know the shorthands as well. Many tools out in the wild already provide shorthands for some
popular CSS properties (margin, padding, etc.). We want to have this option for all.

## What is the difference between plugins, props and extensions?

-   **Plugins**: Manipulates values of existing props.
-   **Props**: Adds support for new custom props.
-   **Extensions**: Adds new features by using both custom props and plugins.
