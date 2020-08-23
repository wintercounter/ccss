---
id: installation
title: Installation
---

## Full

To install CCSS with all the plugins and props, simply install the `ccss` package.

```sh
npm i ccss
```

## Only core

You may install only the core, and the addons only you need. The core includes
all possible CSS properties.

```sh
npm i @cryptic-css/core @cryptic-css/prop-scroll
```

## CCSS + styled-components

```sh
npm i @cryptic-css/core @cryptic-css/styled styled-components
```

> Please note that `@cryptic-css/styled` doesn't add amy extras on its own, it must be configured
> manually if you want to use extra props/plugins.
