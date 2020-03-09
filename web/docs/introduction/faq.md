---
id: faq
title: F.A.Q.
---

## Why Cryptic?

Because it's making your CSS/React components/etc. look really _Cryptic_.

```js live
ccss({
    d: 'b',
    p: 12,
    mt: 5,
    bg: 't'
})
```

## What is the approach?

The simplified answer: We have a property-map and a value-map where
we basically match the short version of their long counterpart and
emit. Nothing exceptional.

## How about performance?

Transforming at runtime has performance costs, especially
if your code is in a hot path (and usually with CSS-in-JS that's true
for all your styles). However, the hit isn't more than using dynamic values
in `styled-components` or using `styled-system`. We were also very
restrictive about the shipped features to keep the core as primitive as
possible.

## How big the size saving is?

We do not have any case studies in practice. Due to the fact that **CCSS**
also requires some extra code, you first need to reach the point where
`your **CCSS** + compiler = original CSS`. This is fairly easy to reach as
the compiler itself is small. The bigger your codebase, the bigger the
savings are.

The savings should be _40-60%_ approx.

We were already running a highly dynamic system using values from props,
**CCSS** is not different in such regards from any similar solutions.

## Won't be this hard to understand?

We think that you need a relatively short time to get comfortable with it.
If you know CSS, you know the shorthands also.
However, we also have a focus on developer experience. We're providing
TypeScript definitions and TSDoc for all props to help your work.
You'll have nice autocomplete and a list of possible options.

You like the approach but want to use long names? Feel free to create
your own `long-names-plugin` for example that adds support for aliases.

## Why just not use `styled-system`?

It's not our goal to provide a tool to implement design systems nor
giving such amount of features `styled-system` does. However, the mapping
approach used by **CCSS** is making the compiler capable of supporting
custom properties and custom values which helps you to create your own custom
design system. For example, it's easy to define such:

```js live
() => {
    const valueMap = createValueMap({
        c: {
            dark: '#333'
        },
        size: {
            small: {
                fts: 10
            },
            large: {
                fts: 32
            }
        }
    })

    const props = createProps({
      size: pipe(mapValue, (input, value, options) => options.__ccss(input))
    })

    const options = createOptions({
        props,
        valueMap
    })

    const ccss = createCCSS(options)

    return ccss({
        c: 'dark',
        size: 'large'
    })
}
```

Also `styled-system` does not support as much shorthands as we wanted.

## What is the difference between plugins, extensions, and props?

-   **Plugins**: Manipulating values on existing props.
-   **Extensions**: Extending the core with new features.
-   **Props**: Adding support for new custom props.
