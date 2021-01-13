---
id: basic-usage
title: Basic usage
---

**CCSS** on its own will convert your style object into CSS string and that's all. It's not a complete styling solution,
and it doesn't want to be. It is simply a basic tool that you can use in your own scenarios.

```js live
ccss({
    dp: 'f',
    p: 2
})
```

Using short names is **optional**.

```js live
ccss({
    display: 'flex',
    padding: 2
})
```

As an example, **CCSS** can be used with templating and/or native inline styling:

```js
const styles = ccss({
    display: 'flex',
    padding: 2
})
domElement.innerHTML = `
    <div style="${styles}">Content</div>
`
```

Or you can compose CSS within your existing CSS-in-JS solution:

```js
const MyContent = styled.div`
    ${ccss({
        display: 'flex',
        padding: 2
    })}
`
```
