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
    p: 2, // padding: 10rem;
    ml: true // margin-left: 5rem;
    m: [1, 0, 2, 3] // margin: 5rem 0 10rem 15rem;
})
```

> The defined `gutter` value is multiplied by the given number and the
> defined unit is being applied to it.

## Configuration

The plugin introduces the option key `gutter`. Be default it's: `5`

```js
import { setOptions } from 'cryptic-css'

setOptions({
    gutter: 10 // 1 * gutter = 10rem
})
```