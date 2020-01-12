<h1 align="center">
    <div><strong>CCSS</strong></div>
    <div>🔡🔁🎨</div>
    <p></p>
</h1>

> CrypticCSS - An experimental concept of **true** CSS mangling.

## WARNING!

This a work in progress project. Not even the npm packages working :)

## Table of contents

-   [Install](#install)
-   [Usage](#usage)
-   [API Docs](#api-docs)
-   [Why?](#why-)
-   [Possible benefits](#possible-benefits)
-   [Examples](#examples)
    -   [Styled-components](#styled-components)
-   [Mission](#mission)
-   [FAQ](#faq)
    -   [Why Cryptic?](#why-cryptic-)
    -   [What is the approach?](#what-is-the-approach-)
    -   [How about performance?](#how-about-performance-)
    -   [How big the size saving is?](#how-big-the-size-saving-is-)
    -   [Won't be this hard to understand?](#won-t-be-this-hard-to-understand-)
    -   [Why just not use `styled-system`?](#why-just-not-use--styled-system--)

## Install

```sh
npm i @cyptic-css/core
```

To install core including all official extras:

```sh
npm i cyptic-css
```

## Usage

```js
import ccss from '@cyptic-css/core'

ccss({
    d: 'f',
    ai: 's'
})

/**
 * display: block;
 * align-items: flex-start;
 */
```

## API Docs (core)

For more details on usage and setup, please read our [Core documentation](./packages/core/README.md).

## Why?

We are completely aware that it's not easy to justify the existance of
this solution. It is something that is hard to accept as a professional
developer.

On a project we started to heavily use a `Grommet` and `styled-system`
inspired UI System. We ended up relying on fully dynamic `styled-components`,
almost completely stopped writing CSS and custom `styled-components`.

One main component was such:

```jsx
const UiBox = styled.div`
    display: flex;
    ${({ width }) => width && 'width: ${width}rem;'}
`
```

Of course our component had much more dynamic props and it had a lot of
custom functionality backed in. It's really comfy and refreshing
to use such approach, but _Our_ React tree started to look as such
while composing layouts:

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

It started to look too much, too crowded, too cluttered. This what was
giving the first glimpse of the idea, we started to joke about using
letters instead. Actually, why not?! I started to create a sample
solution and it actually felt good. It's not like using letters as
variable names. It is almost completely the same flow as writing regular
CSS using auto-complete:

1. Press `d`
1. ~~Press `Tab` => `display`~~
1. Press `b`
1. ~~Press `Tab` => `block`~~

The letters are basically a shorthand and once you get more familiar
and comfortable with them you can get even more efficient than writing
regular CSS.

## Possible benefits

-   Smaller bundles
-   Less cluttered codebase
-   Faster development
-   Extending with custom functionality

## Examples

There are already multiple ways to utilize **CCSS** in your codebase,
however currently only CSS-in-JS solutions are being covered. Please
note you can also use `emotion`

### Styled-components + JSX

```jsx
import ccss from '@cryptic-css/core'

// Use this component instead of divs everywhere from now on.
const View = styled.div(ccss)

const MyCmp = () => (
    <View w={100} p={10} bg="#000" c="#fff">
        Hello world!
    </View>
)
```

The code above would generate the following CSS for the `View` component:

```css
.View__BAgha78 {
    width: 100px;
    padding: 10px;
    background: #000;
    color: #fff;
}
```

A `44%` typing and code reduction.

### Styled-components only

```jsx
import ccss from '@cryptic-css/core'

const MyDiv = styled.div(ccss({
    d: 'b',
    v: 'h'
}))

const MyCmp = () => (
    <MyDiv>
        Hello world!
    </MyDiv>
)
```


## Mission

There are multiple goals we're trying to achieve, both short and long
term. We want to:

-   Introduce the concept and get it validated by the community,
    and provide tools for different use cases.
-   Provide tools later to transform classic CSS
    strings/objects to **CCSS** automatically for production builds: a Babel
    Plugin and Webpack Loader for sure.
-   Add **CCSS** support to 3rd party design systems, CSS solutions.

Who knows, a future version of CSS8 might standardize shorthands based on
what the community is building up here. 😉

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
emit.

### How about performance?

Transforming the shorthands at runtime has performance costs, especially
if your code is in a hot path (and usually with CSS-in-JS that's true
for all CSS). However, the hit is not more than using dynamic values
in `styled-components` or using `styled-system`. We were also very
restrictive about the shipped features make the core as primitive as
possible.

### How big the size saving is?

We do not have any case studies in practice. Due to the fact the **CCSS**
also requires some extra code, you first need to reach the point where
`your CCSS + compiler = original CSS`. This is fairly easy to reach as
the compiler itself is small.

The savings should be _40-60%_ approx.

We were already running a highly dynamic system using values from props,
**CCSS** does not different in such regards from any similar solutions.

### Won't be this hard to understand?

We think that you need relatively short time to get comfortable with it.
However, we also have a focus on developer experience. We're providing
TypeScript definitions and TSDoc for all props to help your work.
You'll have nice auto-complete and a list of possible options.

### Why just not use `styled-system`?

It's not our goal to provide a tool to implement design systems nor
giving such amount of features `styled-system` does. However, the mapping
approach used by **CCSS** is making the compiler capable of supporting
custom properties and custom values. For example, it's easy to define
such:

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

- **Plugins**: Manipulating values on existing props.
- **Extensions**: Extending the core with new features.
- **Props**: Adding support for new custom props.

## Contribution

**CCSS** is trying to be a community effort, we're open to any suggestions.
However we also sacrificed some features already for the sake of performance
and simplicity. We are having strict "rules" of what can be added. For most
cases plugins, extensions and custom props should be enough.
