# `@cryptic-css/prop-mq`

> Adds support to use the viewport sizing system behind `@w11r/use-breakpoint`'s
> React hook.

## Usage

```js
import ccss from 'cryptic-css'

ccss({
    mq: {
        tablet: {
            d: 'none'
        },
        'small+': {
            o: 0.5
        }
    }
})
```
