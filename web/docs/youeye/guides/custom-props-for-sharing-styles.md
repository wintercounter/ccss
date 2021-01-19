---
id: custom-props-for-sharing-styles
title: Custom props for sharing styles
---

We're simply creating a button which you can use to toggle a "loading state"
on/off to render a skeleton UI.

```jsx
import React, { useState } from 'react'
import { Ui } from './Ui'

const App = () => {
    const [loading, setLoading] = useState(false)
    const is = loading ? 'skeleton' : undefined

    return (
        <>
            <Ui.h1 is={styl}>Breaking news</Ui.h1>
            <Ui.p is={styl}>This is a dummy content for you!</Ui.p>
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
