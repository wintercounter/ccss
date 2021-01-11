---
id: tips-and-tricks
title: Tips and Tricks
---

Here is a collection of some tips and tricks we've learnt by using CCSS in production.

## Mapping values and converting number inside shorthands

A common case are shorthands where you still want to be able to use number conversion and/or resolve mapped values:

-   `border: '1px solid #000'`
-   `transform: 'translateX(100px)'`

### Option 1: use long hand properties

```js live
ccss({
    borderWidth: 1,
    borderStyled: 'solid',
    borderColor: '#000'
})
```

### Option 2: the array method

If you're passing an array value, CCSS will loop through each value, try to resolve, and concat.

```js live
ccss({
    border: [1, 'solid', '#000'],
    transform: ['translateX(', 10, ')']
})
```

> This also works while resolving value maps, eg. using custom colors: `border: [1, 'solid', 'dark']`
