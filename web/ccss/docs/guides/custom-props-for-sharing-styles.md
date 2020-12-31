---
id: custom-props-for-sharing-styles
title: Custom props for sharing styles
---

Being able to define custom props gives you powerful possibilities.

In this guide we will check how you can share/apply different styles by creating a `skeleton` style
that you can apply to any UI element while your app is in loading state.

## Choose method

Usually the approach is to create a `Skeleton` component, right?! CCSS's unique approach twists this logic:
_Why just not being able to apply this style on any element?!_ With such approach you can apply
skeleton styles to any real and/or dummy content which will more accurately represent your final design/layout.

## Create a custom prop

To register custom props you need to create your own CCSS instance first. For sake of simplicity we will
call our prop `styl`.

We're creating a `valueMap` for the property `styl` where the values getting resolved as a CCSS object.

```js
import {
    createStyledCCSS,
    createOptions,
    createProps,
    mapValue,
    parseCCSS,
    createValueMap,
    pipe
} from '@cryptic-css/styled'

// is="skeleton" will apply the defined CSS
const valueMap = createValueMap({
    styl: {
        skeleton: {
            background: '#aaa',
            color: 'transparent'
        }
    }
})
// Create a custom prop, it is simply a function

const props = createProps({
    // CCSS comes with some helper methods:
    // pipe: it merges helper function together
    // mapValue: searches for value in valueMap
    // parseCCSS: simply telling that our resolved value will be a CCSS object
    styl: pipe(mapValue, parseCCSS)
})
const options = createOptions({ props, valueMap })
const { Ui } = createStyledCCSS(options)
```

> Of course, you're free to use your own handler function and handle the prop however you want.

## Use it

We're simply creating a button which you can use to toggle a "loading state"
on/off to render a skeleton UI.

```jsx
import React, { useState } from 'react'
import { Ui } from './Ui'

const App = () => {
    const [loading, setLoading] = useState(false)
    const styl = loading ? 'skeleton' : undefined

    return (
        <>
            <Ui.h1 styl={styl}>Breaking news</Ui.h1>
            <Ui.p styl={styl}>This is a dummy content for you!</Ui.p>
            <Ui.button onClick={() => setLoading(!loading)}>Toggle</Ui.button>
        </>
    )
}
```

## Try it out

There is CodeSandbox based demo you can play with. It has slightly more styling/content.

<iframe loading="lazy" src="https://codesandbox.io/embed/ccss-guide-custom-is-prop-0s42d?fontsize=14&hidenavigation=1&theme=dark"
 style={{width:'100%', height:'500px', border:0, borderRadius: '6px', overflow:'hidden'}}
 title="CCSS Guide - Custom is prop"
 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>
