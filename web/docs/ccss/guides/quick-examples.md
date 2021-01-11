---
id: quick-examples
title: Quick examples
---

## Special props and values

### `child`

Add any child CSS/pseudo definition.

```js live
ccss({
    color: '#fff',
    child: {
        '> h1 span': {
            color: '#fc0'
        }
    }
})
```

### Pseudo selectors/states

Pseudo definitions are also having shorthands, always starting with `:`.

```js live
ccss({
    c: '#fff',
    ':h': {
        c: '#000'
    }
})
```

### `raw`

Use it to pass raw CSS string / Style object.

```js live
ccss({
    raw: `background-color: #fff;`
})
```

### Number values

Properties awaiting numeric values with a unit can accept
pure numbers for built-in automatic conversion.

If not a number given, the value will be used as-is.

Example:

```js live
ccss({
    width: 100,
    height: '100px'
})
```

### Array values

Shorthand properties awaiting numeric values with unit can
accept an array as an input.

Example:

```js live
ccss({
    margin: [1, 0, 1, 1]
})
```
