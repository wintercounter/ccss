---
id: brief-history
title: Paradigm shift
---

**YouEye** is trying to shift the paradigm of separating styles into separate stylesheets and components.
It was always taught that separating concerns is a good practice. Markup and Styles however are falling
under the same concern: **Presentation**.

## The story of UiBox

On a project, we started to use a `Grommet` and `styled-system`
inspired UI System. We ended up relying on fully dynamic `styled-components`,
almost completely stopped writing CSS and custom `styled-components` in the regular way.

A simplified example how such components did look:

```jsx
const UiBox = styled.div`
    display: flex;
    ${({ width }) => width && 'width: ${width}rem;'}
`
```

Of course, our components had much more dynamic props and magic baked in. It's comfy and refreshing
to use such approach.

-   Presentation logic is kept at a single place: Markup + Styles
-   Leverages the benefits of CCS-in-JS solution, which is the dynamic nature of JS in CSS :)
-   Eliminates all the awkward naming conventions and the extra workload of thinking and maintaining the
    correct selectors.
-   Helps you understand styles and their relations right where you use it. Instead of
    gathering/matching information across files and different code pieces in your mind, you can simply
    understand what's happening with your layout.
-   No need for class name concatenation to handle dynamic gives.
-   Gives us tools to define strict rules of our design system.
-   Powerful features to extend and share functionalities.

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

## UiBox => Ui

During the usage of `<UiBox>` we came across the need several times of being able to add extra styles or being
able to use UiBox's styling logic on other elements.

The options we had:

-   Use inline style
-   Extend UiBox as `const MyExtendedComponent = styled(UiBox)`
-   Implement support for a new CSS prop in UiBox

The result was a mixed usage by different team members based on different needs.

After a while we realized we actually need to twist this logic and look at the problem from another angle:

**We just need one component simply supporting all CSS properties.**

CCSS and the **single component Ui kit** approach was born.
