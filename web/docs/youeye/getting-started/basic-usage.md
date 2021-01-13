---
id: basic-usage
title: Basic usage
---

## Styled CCSS

Using the `@cryptic-css/styled` package you can use CCSS in a much more comfortable way. It is based on
`styled-components`, but you don't need to use it in its original way.

There are 3 ways to apply styles using it.

### `<Ui>` component (most preferred)

The `Ui` component is the most convenient way. It is a component which is supporting CCSS using React props.

Only this way it is currently supported by **static extraction**, that's why it's the most preferred way.

```js
import { Ui } from '@cryptic-css/styled'
```

```jsx live noInline
const MyComponent = () => {
    return (
        <Ui.header display="flex" fd="row" flex={1} pad={5} bg="#4035f3" c="#fff">
            <Ui flexShrink={1} tt="u">
                Logo
            </Ui>
            <Ui flex={1} ta="right">
                <Ui.a href="#">Login</Ui.a>
            </Ui>
        </Ui.header>
    )
}

render(<MyComponent />)
```

You can see that both long, light and short names work. In one of our projects we agreed in using long names,
but we still utilize the Babel plugin to shorten these props for production code. For some personal projects
we're using short names, and it we quickly got comfortable with it.

> Read more details in its [documentation](/docs/api-and-packages/styled).

### `ccssd` helper

A function used to create prepared components using the "object API".

```js
import { Ui } from '@cryptic-css/styled'
```

```jsx live noInline
const MyStyledWrapper = ccssd({
    width: '100%',
    pad: 5,
    bg: '#4035f3',
    c: '#fff',
    textAlign: 'center'
})

render(<MyStyledWrapper>My Wrapper</MyStyledWrapper>)
```

However, it's more preferred to simply create a component using `<Ui>`. It'll allow to be statically extract its CSS
while the helper method isn't supported yet. _(And anyway it's the same at the end.)_

```jsx live noInline
const MyStyledWrapper = (props) => {
    return <Ui pad={5} bg="#4035f3" c="#fff" textAlign="center" {...props} />
}

render(<MyStyledWrapper width="100%">My Wrapper</MyStyledWrapper>)
```

> You can see that I was able to pass CCSS prop (_width_) to the prepared component. This is also true for the
> components made using `ccssd`. Allowing passing props enables users adjust styles of already
> encapsulated components.
