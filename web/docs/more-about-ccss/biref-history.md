---
id: brief-history
title: Brief history
---

We are completely aware it's not easy to justify the existence of
this solution. It is hard to accept as a professional
developer because it feels it's against the principles you've learned
so far.

## UiBox

On a project, we started to use a `Grommet` and `styled-system`
inspired UI System. We ended up relying on fully dynamic `styled-c1omponents`,
almost completely stopped writing CSS and custom `styled-components` in the regular way.

A simplified example how such components did look:

```jsx
const UiBox = styled.div`
    display: flex;
    ${({ width }) => width && 'width: ${width}rem;'}
`
```

Of course, our component had much more dynamic props, and it had a lot of
custom functionality backed in. It's comfy and refreshing
to use such approach:

```jsx
<UiBox
    pad={5}
    height={20}
    width="100%"
    direction="column"
    align="center"
    valign="center"
    background="dark-3"
    position="relative"
>
    {/* <And more, and more /> */}
</UiBox>
```

It started to look too much, too crowded, too cluttered, and all props had to be handled individually.
This gave the first glimpse of the idea, we started to joke about using
letters instead. Actually, why not?! I started to create a sample PoC, and it felt amazing.

**It's not the same as using letters for variable naming!** It is almost
completely the same flow as writing regular CSS using auto-complete:

1. Press `d`
1. ~~Press `Tab` => `display`~~
1. Press `b`
1. ~~Press `Tab` => `block`~~

The letters are a shorthand and once you get more familiar
and comfortable with them, you can get even more efficient than writing
regular CSS.

## UiBox => Ui

During the usage of `<UiBox>` we came across the need several times of being able to add additional styles or being
able to use UiBox's styling logic on other elements.

The options we had:

-   Use inline style
-   Extend UiBox as `const MyExtendedComponent = styled(UiBox)`
-   Implement support for a new CSS prop in UiBox

The result was sometimes this, sometimes that, by different team members based on different needs.

After a while we realized we actually need to twist this logic and look at the problem from another angle:

**We just need one component simply supporting CSS.**

We created CCSS and based on it the `<Ui />` component born, which is basically our **single component Ui kit**.
