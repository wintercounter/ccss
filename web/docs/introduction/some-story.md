---
id: some-story
title: Some story
---

We are completely aware that it's not easy to justify the existence of
this solution. It is hard to accept as a professional
developer because it feels it's against the principals you've learned
so far.

On a project, we started to heavily use a `Grommet` and `styled-system`
inspired UI System. We ended up relying on fully dynamic `styled-components`,
almost completely stopped writing CSS and custom `styled-components`.

A simplified example how such components looked:

```jsx
const UiBox = styled.div`
    display: flex;
    ${({ width }) => width && 'width: ${width}rem;'}
`
```

Of course, our component had much more dynamic props and it had a lot of
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

It started to look too much, too crowded, too cluttered.
This gave the first glimpse of the idea, we started to joke about using
letters instead. Actually, why not?! I started to create a sample
solution and it felt good.

**It's not the same as using letters for variable naming!** It is almost
completely the same flow as writing regular CSS using auto-complete:

1. Press `d`
1. ~~Press `Tab` => `display`~~
1. Press `b`
1. ~~Press `Tab` => `block`~~

The letters are a shorthand and once you get more familiar
and comfortable with them, you can get even more efficient than writing
regular CSS.

> You don't necessarily need to write CSS such a way. It's also a plan to provide
> tools that helps you use CSS in your existing codebase for
> production builds only for example.
