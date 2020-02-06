# `@cryptic-css/plugin-gutter`

> Adds support to use predefined gutter values.

## Supported properties

- p
- pt
- pr
- pb
- pl
- m
- mt
- mr
- mb
- ml
- gg
- grg
- gcg

## Usage

```js
import ccss from 'cryptic-css'

ccss({
    p: 2, // margin-left: 32rem;
    ml: true // margin-left: 16rem;
    m: [1, 0, 2, 3] // margin: 1rem 0 2rem 3rem;
})
```

> The defined `gutter` value is multiplied by the given number and the
> defined unit is being applied to it.

## Configuration

The plugin introduces the option key `gutter`. Be default it's: `16`

```js
import { setOptions } from 'cryptic-css'

setOptions({
    gutter: 10 // 10rem
})
```