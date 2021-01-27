---
id: basic-usage
title: Basic usage
---

## Installation

YouEye provides a single component approach as an all-purpose UI building block.
It is an implementation detail and not a runtime.

Currently, only `styled-components` are supported, but the plan is to extend support
for multiple solutions, such as Svelte, Vue JS and Native Web Components.

Please see the available implementation's details about installation.

## Configuration

Please see the [CCSS documentation](https://ccss.dev) about the exact usage of these properties.

Import the `ccss` instance you need to configure.

```js
import { ccss } from 'chosen-implementation'

ccss.setOptions(...).setProps(...)
```

## The Ui component

Once you imported the Ui component from the selected package, you can apply CSS using properties/attributes.

```js
import Ui from 'chosen-implementation'

const Component = () => <Ui display="flex" />
```

## HTML tags

Use the polymorphic `as` prop.

> @you-eye/styled supports property based components: `<Ui.section />`

```jsx
<Ui as="section" display="flex" />
```

```js
import Ui from 'chosen-implementation'
```

For reusable component cases the preferred way to create a wrapper.

```jsx live noInline
const MyStyledWrapper = (props) => {
    return <Ui pad={5} bg="#4035f3" c="#fff" textAlign="center" {...props} />
}

render(<MyStyledWrapper width="100%">My Wrapper</MyStyledWrapper>)
```
