---
id: grid-template-columns
title: Grid Template Columns
---

Tailwinds version

| Tailwind version | CCSS version              | CCSS short version |
| ---------------- | ------------------------- | ------------------ |
| `.grid-cols-1`   | `gridTemplateColumns="1"` | `gtc="1"`          |

-   Tailwind supports grids up to **12 columns**.
-   The very same provided using number value **as string**!
-   Using numbers reserved for values with units!

```jsx live
<Ui display="grid" gridTemplateColumns="1">
    <Ui p={30} bg="#000" />
</Ui>
```
