<h1 align="center">
    <div><strong>CCSS</strong></div>
    <div>🔡🔁🎨</div>
    <p></p>
</h1>

> CrypticCSS - A CSS-in-JS concept that brings you **true CSS mangling** with **design system capabilities**.

## WARNING!

This a work in progress project.

## Table of contents

-   [Install](#install)
-   [Usage](#usage)
-   [API Docs (core)](#api-docs--core-)
-   [Why?](#why-)
    -   [Pros](#pros)
    -   [Cons](#cons)
    -   [Some story](#some-story)
-   [Examples](#examples)
    -   [Styled-components + JSX](#styled-components---jsx)
    -   [Styled-components only](#styled-components-only)
    -   [Alternative way: `support-styled-components`](#alternative-way---support-styled-components-)
    -   [Special props and values](#special-props-and-values)
        -   [`child`](#-child-)
        -   [Pseudo selectors/states](#pseudo-selectors-states)
        -   [`styleText`](#-styletext-)
        -   [Number values](#number-values)
        -   [Array values](#array-values)
-   [Packages](#packages)
-   [Mission and the future](#mission-and-the-future)
-   [FAQ](#faq)
    -   [Why Cryptic?](#why-cryptic-)
    -   [What is the approach?](#what-is-the-approach-)
    -   [How about performance?](#how-about-performance-)
    -   [How big the size saving is?](#how-big-the-size-saving-is-)
    -   [Won't be this hard to understand?](#won-t-be-this-hard-to-understand-)
    -   [Why just not use `styled-system`?](#why-just-not-use--styled-system--)
    -   [What is the difference between plugins, extensions and props?](#what-is-the-difference-between-plugins--extensions-and-props-)
-   [Contribution](#contribution)

## Install

```sh
# Full (all official plugins and props included)
npm i cryptic-css

# Only core
npm i @cryptic-css/core
```

## Usage

```js
import ccss from '@cryptic-css/core'

ccss({
    d: 'f',
    ai: 's'
})

/**
 * Output:
 *
 * display: flex;
 * align-items: flex-start;
 */
```

## API Docs (core)

For more details on usage and setup, please read our [Core documentation](./packages/core/README.md).

## Why?

### Pros

-   **Small**: enables true CSS mangling. The bigger the codebase the more efficient.
-   **Fast**: a lot of efforts were taken to keep performance high.
-   **Design systems**: the implementation makes CCSS capable to create custom design systems.
-   **Extensible**: the core supports custom properties and custom value transformers.
-   **DX**
    -   Faster development
    -   Less coding
    -   Detailed TypeScript types and TSDoc to help your work.
    -   Benefits of similar utility first approach.
    -   Easy setup and usage.
    -   Support development time validators to help your team use your system properly.
    -   Deep and pseudo-selector support.

### Cons

-   Looks and feels weird at first sight.
-   The learning curve isn't so small (I wouldn't say it's big either).
-   Extra processing compared to static CSS files / non-dynamic `styled-components`.
-   Size saving makes more sense on bigger projects.

### Some story

We are completely aware that it's not easy to justify the existence of
this solution. It is something that is hard to accept as a professional
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

Of course our component had much more dynamic props and it had a lot of
custom functionality backed in. It's really comfy and refreshing
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
solution and it actually felt good.

**It's not the same as using letters for variable naming!** It is almost
completely the same flow as writing regular CSS using auto-complete:

1. Press `d`
1. ~~Press `Tab` => `display`~~
1. Press `b`
1. ~~Press `Tab` => `block`~~

The letters are basically a shorthand and once you get more familiar
and comfortable with them you can get even more efficient than writing
regular CSS.

> You don't necessarily need to write CSS such way. It's also a plan to provide
> tools that help you use CSS on your existing codebase for
> production builds only for example.

## Examples

There are already multiple ways to utilize **CCSS** in your codebase,
however currently only CSS-in-JS solutions are being covered. Please
note you can also use `emotion` or any other solution that requires CSS text.

### Styled-components + JSX

Simply replace any divs with this one component:

```jsx
import ccss from 'cryptic-css'

// Use this component instead of divs everywhere from now on.
const View = styled.div(ccss)

const MyCmp = () => (
    <View w={100} p={10} bg="#000" c="#fff">
        Hello world!
    </View>
)
```

You can also use the `css` prop approach (automatic `css` prop support is planned):

```jsx
import ccss from 'cryptic-css'

const MyCmp = () => (
    <View
        css={ccss({
            w: 100,
            p: 10,
            bg: '#000',
            c: '#fff'
        })}
    >
        Hello world!
    </View>
)
```

The codes above would generate the following CSS for the `View` component:

```css
.View__BAgha78 {
    width: 100px;
    padding: 10px;
    background: #000;
    color: #fff;
}
```

A `44%` text and code reduction.

### Styled-components only

```jsx
import ccss from '@cryptic-css/core'

const MyDiv = styled.div(() =>
    ccss({
        d: 'b',
        v: 'h'
    })
)

const MyCmp = () => <MyDiv>Hello world!</MyDiv>
```

### Alternative way: `support-styled-components`

The above package will patch `styled-components` for you
to add support for CCSS automatically.

```jsx
// Import once in your app
import '@cryptic-css/support-styled-components'

const Box = styled.div({ d: 'f' })
const Box2 = styled.div`
    background: #000;
`

render(
    <Box>
        // It works on any styled component!
        <Box2 m={2} />
    </Box>
)
```

### Special props and values

#### `child`

Add any child CSS/pseudo definition.

```js
ccss({
    c: '#fff',
    child: {
        '> h1 span': {
            c: '#fc0'
        }
    }
})
```

#### Pseudo selectors/states

Pseudo definitions are also having shorthands, always starting with `:`.

```js
ccss({
    c: '#fff',
    ':h': {
        c: '#000'
    }
})
```

#### `styleText`

Use to pass custom CSS string.

```js
ccss({
    styleText: `background-color: #fff;`
})
```

#### Number values

Properties awaiting for numeric values with a unit can accept
pure numbers for built-in automatic `unit` support.

If not a number is given, the value will be used as-is.

Example:

```js
ccss({
    w: 100
})
```

#### Array values

Shorthand properties awaiting numeric values with unit can
accept an array as an input.

Example:

```js
ccss({
    m: [1, 0, 1, 1]
})
```

## Packages

Some packages were created to demonstrate how to extend the functionality
of the core:

-   [Core](./packages/core)
-   [Plugin: gutter](./packages/plugin-gutter)
-   [Plugin: ratio](./packages/plugin-ratio)
-   [Prop: mid](./packages/prop-mid)
-   [Prop: mq](./packages/prop-mq)
-   [Prop: Scroll](./packages/prop-scroll)
-   [Support styled-components](./packages/support-styled-components)

## Mission and the future

There are multiple goals we're trying to achieve, both short and long
term. We want to:

-   Introduce the concept and get it validated by the community,
    and provide tools for different use cases.
-   Provide tools for wider **CCSS** support, regular CSS solutions:
    -   `babel-plugin` to convert existing `styled-components` to shorthands for production codebase.
    -   `webpack-loader` to add support for converting regular CSS to CCSS.
    -   3rd party CCSS support for `styled-components`, `emotion`, `styled-system`, `PostCSS` and others.
    -   Ready to use design systems.

Who knows, a future version of CSS8 might standardize shorthands based on
what the community is building up here. 😉 It's relatively easy to implement
and standardize and it actually has great benefits.

## FAQ

### Why Cryptic?

Because it's making your CSS/React components/etc. look really _Cryptic_.

```js
ccss({
    d: 'b',
    p: 12,
    mt: 5,
    bg: 't'
})
```

### What is the approach?

The simplified answer: We have a property-map and a value-map where
we basically match the short version of their long counterpart and
emit. Nothing exceptional.

### How about performance?

Transforming at runtime has performance costs, especially
if your code is in a hot path (and usually with CSS-in-JS that's true
for all your styles). However, the hit isn't more than using dynamic values
in `styled-components` or using `styled-system`. We were also very
restrictive about the shipped features to keep the core as primitive as
possible.

### How big the size saving is?

We do not have any case studies in practice. Due to the fact the **CCSS**
also requires some extra code, you first need to reach the point where
`your CCSS + compiler = original CSS`. This is fairly easy to reach as
the compiler itself is small.

The savings should be _40-60%_ approx.

We were already running a highly dynamic system using values from props,
**CCSS** is not different in such regards from any similar solutions.

### Won't be this hard to understand?

We think that you need a relatively short time to get comfortable with it.
However, we also have a focus on developer experience. We're providing
TypeScript definitions and TSDoc for all props to help your work.
You'll have nice autocomplete and a list of possible options.

You like the approach but want to use long names? Feel free to create
your own `long-names-plugin` for example that adds support for aliases.

### Why just not use `styled-system`?

It's not our goal to provide a tool to implement design systems nor
giving such amount of features `styled-system` does. However, the mapping
approach used by **CCSS** is making the compiler capable of supporting
custom properties and custom values which helps you to create your own custom
design system. For example, it's easy to define such:

```js
ccss({
    c: 'dark',
    size: 'large'
})
/**
 * Output:
 *
 * color: #333;
 * font-size: 32em;
 */
```

### What is the difference between plugins, extensions and props?

-   **Plugins**: Manipulating values on existing props.
-   **Extensions**: Extending the core with new features.
-   **Props**: Adding support for new custom props.

## Contribution

**CCSS** is trying to be a community effort, we're open to any suggestions.
However, we also sacrificed some features already for the sake of performance
and simplicity. We are having strict "rules" of what can be added. For most
cases plugins, extensions and custom props should be enough.