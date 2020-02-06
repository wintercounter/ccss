# `@cryptic-css/core`

> Core of CCSS and APIs for extending with new features.

## Install

```sh
npm i @cryptic-css/core
```

## Usage

By default core can be used on it's own if you don't want the
extra features coming with the full package.

```js
import ccss from '@cryptic-css/core'

ccss({
    c: '#fff'
})
```

### Options

#### `unit`

A unit you want to use for your values.

Default: `rem`

#### `applyUnit`

A function which will transform your number values to the desired unit.

Default: `n => \`${n}${options.unit}\``

#### Customization

You can customize these options (or add new options).

This is usually being called on the top level of your app only once.

```js
import { setOptions, options } from 'cryptic-css'

setOptions({
    unit: 'var(--px)',
    applyUnit: v => `calc(${v} * ${options.unit})`,
    foo: 'bar'
})
```

### API

#### `ccss` (default)

Awaits a style object and returns a CSS string. Any keys and values
not having a shorthand will be "printed" as is.

```js
import ccss from 'cryptic-css'

ccss({
    d: 'f',
    '-webkit-foo': 'bar'
})

/**
 * Output:
 *
 * display: flex;
 * -webkit-foo: bar;
 */
```

#### `setProps`

Allows you to add support for custom properties
or override existing ones.

The return value is pure CSS text.

```js
import { props, setProps, pipe } from 'cryptic-css'

const schemes = {
    dark: '#000'
}

setProps({
    // Add support for using schemes for `color` prop
    // We will keep the existing functionality also
    c: pipe(v => schemes[v] || v, props.c)

    // Add support for a new `scheme` prop
    scheme(v) {
        const color = schemes[v]

        return `
            background: ${color};
            box-shadow: 0 10px 10px ${color};
        `
    }
})
```

> Please note that this is just a demonstration, you probably want to use
> value maps to add support for custom colors.

#### `setValueMap`

Set custom values/shorthands for a property.

```js
import { setValueMap } from 'cryptic-css'

setValueMap({
    color: {
        dark: '#000'
    }
})
```