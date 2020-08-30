---
id: babel-plugin-styled
title: '@cryptic-css/babel-plugin-styled'
---

A `babel-plugin` that is capable of:

-   Extracting static CSS;
-   Converting static components to an HTML;
-   Separating static from dynamic values;
-   Converting prop names to short version;
-   Converting values to short version.

All-in-all, it is a huge performance boost to your application, and a significant size saving,
especially on long-term thanks to the extreme level of AtomicCSS extraction.

## Usage

Add `@cryptic-css/babel-plugin-styled` to your Babel config in the plugins section.

```json
{
    "plugins": ["@cryptic-css/babel-plugin-styled", "..."]
}
```

### Options

Default options

```json
{
    "plugins": [
        [
            "@cryptic-css/babel-plugin-styled",
            {
                "identifiers": {
                    "Ui": true
                },
                "constants": {},
                "classNameStrategy": "unicode",
                "expressions": {
                    "ccss": "require('ccss').default || require('ccss')",
                    "options": "require('ccss').defaultOptions"
                },
                "stats": false
            }
        ],
        "..."
    ]
}
```

#### `identifiers`

JSX tag names you want to match as a CCSS component.

#### `constants`

The plugin is able to resolve constants for you as static value. You need to pass these constants.

Example config

```json
{
    "FontSize": {
        "Small": 10
    }
}
```

Input

```js
<Ui fontSize={FontSize.Small} />
```

Output

```js
<div className="font-size_small" />
```

#### `classNameStrategy`

The goal is to have the shortest possible class name.

Available values:

-   `unicode`: generate a single character unicode selector.
-   `shorthest`: use the shortest possible selector generating from a pre-defined list of letters.

#### `expressions`

In order to make the plugin able to compile CCSS, you need to provide a CCSS instance and its options object.

By default, the plugin will load the default's from the `ccss` package. In case you have your own custom props,
short values, etc., you need to provide your own instance. You can do this 2 ways:

-   Provide a `string` as value, this will be evaluated (see default).
-   Use a JavaScript file as your Babel config where you can import/require your own instance and options, and provide
    those.

#### `stats`

The plugin is able to provide you some stats, such as:

-   `total`: total number of CCSS identifiers found;
-   `totalStatic`: total number of elements could be converted to 100% static;
-   `nonStatic`: an array of original source codes that couldn't not be transformed fully static.

A file called `babelPluginStyledCcssStats.json` will be created where you run your compilation process.

## How it works?

Steps:

1. Find JSX identifier (eg. <Ui />)
2. Loops through all CCSS attributes.
3. Extract value if static, shorten prop name if dynamic.
4. Generate classNames and CSS for all static values.
5. If all CCSS props could be extracted as static, convert to HTML tag.
6. Generate `__{filename}.css` files next to the source file.
7. Add `import '__{filename}.css` at the top of the file.

By default, all props are extracted only if values are fully static. However the plugin is also able to separate
static expressions in some other cases, like the `child` or `mq` prop.

Input

```js
<Ui
    child={{
        a: {
            fontSize: foo,
            color: '#fff'
        }
    }}
/>
```

Output

```js
<Ui
    className="child_a_color_fff"
    child={{
        a: {
            fontSize: foo
        }
    }}
/>
```

## How to handle custom props?

You can have your own `babelPluginHandler` attached to your prop handler function. Simply add
`myHandler.babelPluginHandler = function(){}`. However, all fully static props extracted by default.

See source code child/mq for examples.

## Know limitations

The plugin currently doesn't handle pre-defined components, such as created using `ccssd`.
