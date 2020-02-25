---
id: core
title: '@cryptic-css/core'
---

Core of CCSS and APIs for extending it with new features.

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

### Customization

You can customize these options (or add new options).

This is usually being called on the top level of your app only once.

```js
import { setOptions, options } from 'ccss'

setOptions({
    unit: 'var(--px)',
    applyUnit: v => `calc(${v} * ${options.unit})`,
    foo: 'bar'
})
```

### API

#### `ccss` (default)

Awaits a style object and returns a CSS string. Not registered keys are skipped,
values not existing in a map will be "printed" as-is.

```js
import ccss from 'ccss'
```

```js live
ccss({
    d: 'f'
})
```

#### `setProps`

Allows you to add support for custom properties
or override existing ones.

The return value is pure CSS text.

```js
import { ccss, props, setProps, setValueMap, mapValue, pipe } from 'ccss'

setValueMap({
    c: {
        dark: '#000'
    },
    scheme: {
        light: {
            bg: '#000',
            bs: '0 10px 10px #000'
        }
    }
})

// Add support for a new `scheme` prop
setProps({
    scheme: pipe(mapValue, ccss)
})

// Use
const Cmp = <Ui c="dark" scheme="light" />
```

#### `setValueMap`

Set custom values/shorthands for a property.

```js
import { setValueMap } from 'ccss'

setValueMap({
    color: {
        dark: '#000'
    }
})
```
