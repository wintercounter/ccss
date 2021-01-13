---
id: custom-props-for-sharing-styles
title: Custom props for sharing styles
---

Being able to define custom props gives you powerful possibilities.

In this guide, we will check how you can share/apply different styles by creating a `skeleton` style
that you can apply to any UI element while your app is in a loading state.

## 1. Choose method

Usually, the approach is to create a `Skeleton` component, right?! CCSS's unique approach twists this logic:
_Why just not being able to apply this style on any element?!_ With such approach, you can apply
skeleton styles to any real and/or dummy content which will more accurately represent your final design/layout.

## 2. Create a custom prop

To register custom props you need to create your own CCSS instance first. For sake of simplicity, we will
call our prop `is`.

We're defining a `value-map` for the property `is` where the values getting resolved as a CCSS object.

```js
import ccss from 'ccss'

// is="skeleton" will apply the defined CSS
const variants = {
    skeleton: {
        background: '#aaa',
        color: 'transparent'
    }
}

ccss.setProps([[['is'], variants, input => ccss(input)]])
```

## 3. Use it

```js
ccss({
    is: 'skeleton'
})
```
