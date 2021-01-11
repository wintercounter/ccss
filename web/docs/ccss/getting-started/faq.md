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

## What is the approach?

The simplified answer: We have a property- and a value-map where we can apply our own handler functions
on each value, generating a final output.

## Won't be this hard to understand?

We think that you need a relatively short time to get comfortable with it.
If you know CSS, you know the shorthands as well.
However, we also have a focus on developer experience. We're providing
TypeScript definitions and TSDoc for all props to help your work.
You'll have nice autocomplete and a list of possible options.

## What is the difference between plugins and props?

-   **Plugins**: Manipulating values on existing props.
-   **Props**: Adding support for new custom props.
