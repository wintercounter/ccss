---
id: quick-examples
title: Quick examples
---

There are already multiple ways to utilize **CCSS** in your codebase,
however currently only CSS-in-JS solutions covered. Please
note you can also use `emotion` or any other `CSS-in-JS` solution.

## Styled-components + JSX

Simply replace any divs with this one component:

```jsx live noInline
// Use this component instead of divs everywhere from now on.
const View = styled.div(ccss)

render(
    <View w={100} p={2} m={[2, 'auto']} bg="#4035f3" c="#fff" ta="c" br={6}>
        Hello world!
    </View>
)
```

You can also replace `styled-components` with `@cryptic-css/styled`, providing
_out-of-the-box_ support for **CCSS**.

```js
import { Ui, ccssd } from '@cryptic-css/styled'
```

```jsx live noInline
const View = ccssd({
    w: 200,
    p: 1,
    m: [1, 0]
})

render(
    <Ui d="f" jc="sa" w="100%">
        <View bg="#fc0" c="#000">
            Prepared component + extra props
        </View>
        <Ui w={200} p={1} bg="#4035f3" c="#fff" m={[1, 0]}>
            Ui component directly
        </Ui>
        <Ui.section w={200} p={1} bg="#fc0" c="#000" m={[1, 0]}>
            Ui component directly + TAG helper
        </Ui.section>
    </Ui>
)
```

> An `~44%` text and code size reduction.

## Special props and values

### `child`

Add any child CSS/pseudo definition.

```js live
ccss({
    c: '#fff',
    child: {
        '> h1 span': {
            c: '#fc0'
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

Properties waiting for numeric values with a unit can accept
pure numbers for built-in automatic `unit` conversion.

If not a number given, the value will be used as-is.

Example:

```js live
ccss({
    w: 100,
    h: '100px'
})
```

### Array values

Shorthand properties awaiting numeric values with unit can
accept an array as an input.

Example:

```js live
ccss({
    m: [1, 0, 1, 1]
})
```
