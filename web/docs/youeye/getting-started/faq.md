---
id: faq
title: F.A.Q.
---

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
savings are, should be _40-60%_ approx.

We were already running a highly dynamic system using values from props,
**CCSS** is not different in such regards from any similar solutions.

## Why just not use `styled-system`?

It's not our goal to have an amount of features `styled-system` does. However, the mapping
approach used by **CCSS** is making the compiler capable of supporting
custom properties and custom values which helps you to create your own custom
design system. For example, it's easy to define such:

<!-- prettier-ignore -->
```js live
(() => {
    const valueMap = createValueMap({
        c: {
            light: '#fff'
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
    const style = ccss({
        c: 'light',
        size: 'large'
    })

    return <pre style={{ background: 'transparent', color: '#fff', padding: '10px' }}>{formatCSS(style)}</pre>
})()
```

Also `styled-system` does not support as many shorthands as we wanted and works differently
in many aspects.
