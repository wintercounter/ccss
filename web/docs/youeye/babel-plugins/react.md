---
id: babel-plugin-react
title: '@you-eye/babel-plugin-react'
---

A `babel-plugin` that is capable of:

-   Extracting static CSS;
-   Converting static components to an HTML;
-   Separating static from dynamic values;
-   Converting prop names to short version;
-   Converting values to short version.

All-in-all, it is a huge performance boost to your application, and a significant size saving, especially on long-term
thanks to the extreme level of Atomic CSS extraction strategy.

## Usage

Add `@you-eye/babel-plugin-react` to your Babel config in the plugins section.

```json
{
    "plugins": ["...", "@you-eye/babel-plugin-react"]
}
```

### Options

Default options

```json
{
    "plugins": [
        [
            "@you-eye/babel-plugin-react",
            {
                "components": {
                    "Ui": true,
                    "$": true
                },
                "constants": {},
                "shortify": true,
                "ccss": "require('@cryptic-css/core').default || require('@cryptic-css/core')",
                "classNameStrategy": "unicode",
                "expressions": {
                    "ccss": "require('ccss').default || require('ccss')",
                    "options": "require('ccss').defaultOptions"
                },
                "stats": false,
                "extract": {
                    "output": "__[filename].[contenthash].css",
                    "classNameStrategy": "MurmurHash2",
                    "module": false,
                    "prepend": null,
                    "append": null
                }
            }
        ]
    ]
}
```

#### `component`

React component names you want to match as a CCSS component. You may also define `defaultProps` to be used during
extraction. `Ui.defaultProps = {}` does work during runtime, but build time these cannot be resolved.

```json
{
    "components": {
        "Ui": {
            "display": "flex"
        }
    }
}
```

#### `constants`

The plugin is able to resolve constants for you as static value. You need to pass these constants. To avoid certain
issues, passing single constant value is no longer allowed, eg. `prop={Single}`. There are 2 rules of how constants are
resolved:

-   It needs at least 1 level of member expression, eg: `Const.SiteWidth`
-   Each name **must** start with **Capital** letter.

> These rules are needed because the plugin is parsing JSX to support running extraction on an already minified
> codebase.

Example config

```json
{
    "constants": {
        "FontSize": {
            "Small": 10
        }
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

#### `ccss`

In order to make the plugin able to compile CCSS, you need to provide your CCSS instance. Usually you re-configure the
default instance, no need to change this value. This is only needed usually in case you use 2 different CCSS instances
at the same time.

By default, the plugin will load the default's from the `@cryptic-css/core` package. In case you have your own custom
props, short values, etc., you need to provide your own instance. You can do this 2 ways:

-   Provide a `string` as value, this will be evaluated (see default).
-   Use a JavaScript file as your Babel config where you can import/require your own instance.

#### `extract`

Options to pass to the _extractor_. Using `false` you can turn off extraction.

```json
{
    "extract": {
        "output": "__[filename].[contenthash].css",
        "classNameStrategy": "MurmurHash2",
        "module": false,
        "prepend": null,
        "append": null
    }
}
```

##### `output`

Output filename for extracted CSS to be used.

Available placeholders:

-   `filename`: name of the source file;
-   `contenthash`: md5 hash that changes based on content.

```
__AvatarComponent.4a3c4a4.css
```

However, in case of `module: false`, these values automatically become fixed:

-   `filename`: **styles**
-   `contentHash`: **global**

```
__styles.global.css
```

##### `classNameStrategy`

There are multiple strategies available for different use cases.

Available values:

-   `MurmurHash2` (default): using the `MurmurHash2` hashing algorithm it'll generate a deterministic selector based on
    the CSS content. This is useful when working on shared packages.
-   `unicode`: generate a single character unicode selector.
-   `shorthest`: use the shortest possible selector generating from a pre-defined list of letters.

## How it works?

Steps:

1. Find all `React.createElement` calls.
1. Resolve all constants.
1. Shortify props and values.
1. Extract value if static, create CSS variable if dynamic and prop supports it.
1. Generate classNames and CSS.
1. If all CCSS props could be extracted, convert to HTML tag.

##### `module`

Turn module mode on/off. Using module will generate CSS modules next to the source file adding import statements on the
top. In this case you need to handle possible duplications of CSS and Media Query ordering on your own.

Using `module: false` will generate a single CSS file as output. It won't have duplicates, does proper Media Query
sorting and minifies the output.

## How to handle custom props?

-   Static values: always extracted since it's possible to resolve them during build time.
-   Dynamic values: only CSS values are extracted, so it's possible to pass runtime values as CSS variable. However, you
    can create a customized handler to tell CCSS/Babel how to handle your own case.

During registration of your custom property you can specify an additional `babelPluginHandler` option. This a function
that will be called babel when the property has been found. It allows you to manipulate the AST tree of the source code
as you need.

```js
ccss.setProps([
    [
        propNames,
        valueMap,
        handlers,
        {
            babelPluginHandler: (processorInstance, propertyDescriptor, babelASTPath, extractorInstance) => {
                // do it
            }
        }
    ]
])
```

## Know limitations

The Babel plugin cannot extract component calls using property spread (`<Ui {...styles} />`) due to not being able to
resolve at build time. These cases should be avoided at places where performance is crucial, especially if this element
is rendered a lot of times on the same page. Actually, if all these cases are prevented, the underlying CSS runtime (eg.
Styled Components) can be completely removed from the codebase.

## How big the size saving is?

We do not have any case studies in practice. Due to the fact that **CCSS** also requires some extra code, you first need
to reach the point where `your **CCSS** + runtime = original CSS`. This is fairly easy to reach as the runtime itself is
small. The bigger your codebase, the bigger the savings are.
