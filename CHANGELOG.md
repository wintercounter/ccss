# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.8.0](https://github.com/wintercounter/ccss/compare/v5.7.0...v5.8.0) (2021-09-23)


### Features

* **styled:** pass theme and children props to function props ([#27](https://github.com/wintercounter/ccss/issues/27)) ([6014a80](https://github.com/wintercounter/ccss/commit/6014a80cf85da6017bdb3f6fc1dc74f743b54878))






# [5.7.0](https://github.com/wintercounter/ccss/compare/v5.6.1...v5.7.0) (2021-06-30)


### Features

* add support for `gap` `row-gap` and `column-gap` properties ([#26](https://github.com/wintercounter/ccss/issues/26)) ([c386dd3](https://github.com/wintercounter/ccss/commit/c386dd304780074200079832f09ac85f24043356))
* add support for shorthand gap props ([c837162](https://github.com/wintercounter/ccss/commit/c8371626cf07fd208d9b32eacd1778d511e2f8dd))





## [5.6.1](https://github.com/wintercounter/ccss/compare/v5.6.0...v5.6.1) (2021-06-28)


### Bug Fixes

* workaround for babel bug around type re-exports ([7bbba60](https://github.com/wintercounter/ccss/commit/7bbba60978bdc330be6a36a5189722ebb5388694))





# [5.6.0](https://github.com/wintercounter/ccss/compare/v5.5.0...v5.6.0) (2021-06-25)


### Features

* add support for `--`/`var` prop for CSS variables ([36bddd1](https://github.com/wintercounter/ccss/commit/36bddd1c9380d3a78aac77f496f20487d686b61f))





# [5.5.0](https://github.com/wintercounter/ccss/compare/v5.4.0...v5.5.0) (2021-06-25)


### Bug Fixes

* **ts:** type fixes across several packages ([333e807](https://github.com/wintercounter/ccss/commit/333e807d808c3a84a99f95b358ae174df606e37c))
* generate npmignore for packages ([8e10905](https://github.com/wintercounter/ccss/commit/8e10905275244e52dd50252b3eac50e497609bd8))


### Features

* **prop:** add support for css `mask` properties ([90504f5](https://github.com/wintercounter/ccss/commit/90504f5dd1b3e5d1d4a441e8411a1dfa13f06b39))





# [5.4.0](https://github.com/wintercounter/ccss/compare/v5.3.0...v5.4.0) (2021-06-24)


### Features

* added multiple css props ([#25](https://github.com/wintercounter/ccss/issues/25)) ([bc43044](https://github.com/wintercounter/ccss/commit/bc430445ec1dc3f37854d960031eea0fbfdcdd62))





# [5.3.0](https://github.com/wintercounter/ccss/compare/v5.2.1...v5.3.0) (2021-06-22)


### Features

* add support for `appearance` ([15decb4](https://github.com/wintercounter/ccss/commit/15decb411775646c82aa6d24f98d764ac9597aaf))





## [5.2.1](https://github.com/wintercounter/ccss/compare/v5.2.0...v5.2.1) (2021-06-21)


### Bug Fixes

* add missing css prop to the CCSSProps interface ([#24](https://github.com/wintercounter/ccss/issues/24)) ([ae9f3a5](https://github.com/wintercounter/ccss/commit/ae9f3a5ba86a34c6e9ce34b58dbf26def15d528b))





# [5.2.0](https://github.com/wintercounter/ccss/compare/v5.1.0...v5.2.0) (2021-06-21)


### Features

* add support for `overflow-wrap` ([f33fab8](https://github.com/wintercounter/ccss/commit/f33fab86ea2966b3164e8c80e767a2f77b97b2ec))





# [5.1.0](https://github.com/wintercounter/ccss/compare/v5.0.3...v5.1.0) (2021-06-18)


### Bug Fixes

* algolia api key for youeye ([8704df2](https://github.com/wintercounter/ccss/commit/8704df2abbf2c853722d849e65b6ad58f87dea7e))
* lock docusaurus version ([fc7fcdd](https://github.com/wintercounter/ccss/commit/fc7fcdd097dc65ccb1ba9525073a9e5dfa50b13e))


### Features

* add support for `ccss` props which enables simple support for `ccss` prop with all implementations ([742f87f](https://github.com/wintercounter/ccss/commit/742f87fcd5db9b37d9150cc7eac235ae0e8cb64c))
* **core:** add support for `will-change` property ([d31ed68](https://github.com/wintercounter/ccss/commit/d31ed68c9dbe6364ffff321eb1793600c5f98583))





## [5.0.3](https://github.com/wintercounter/ccss/compare/v3.19.0...v5.0.3) (2021-01-28)


### Bug Fixes

* **babel-plugin-react:** support undefined constants ([5639978](https://github.com/wintercounter/ccss/commit/563997849a96cf46c8f69fb6c55695e10f6532e7))






## [5.0.2](https://github.com/wintercounter/ccss/compare/v5.0.1...v5.0.2) (2021-01-26)

**Note:** Version bump only for package cryptic-css-monorepo





## [5.0.1](https://github.com/wintercounter/ccss/compare/v5.0.0...v5.0.1) (2021-01-03)

**Note:** Version bump only for package cryptic-css-monorepo

# [5.0.0](https://github.com/wintercounter/ccss/compare/v5.0.0-alpha.3...v5.0.0) (2021-01-02)

-   **core:** new Map based registry structure for improved performance
-   **core:** make default instance reconfigurable to increase performance
-   **core:** no more deep merging => related code pieces removed
-   **core:** simplified property definition
-   **core:** overall reduced size
-   **core:** improved TypeScript types

-   **styled:** add alias `$` for `Ui`

BREAKING CHANGES:

-   **core:** use `transformed` as the base of CCSS
-   **core:** removed "mid" names for smaller bundle size and improved performance
-   **core:** `pipe` handler renamed to `compose`, but it's no longer necessary to use by client
-   **core:** simplified plugin usage using `.use`, but plugin need to be applied manually
-   **core:** shorthand `d` renamed to `dp` as it's reserved for the SVG `d` attribute
-   **core:** CLI tool removed
-   **core:** `unit` option removed, only use `applyUnit` function
-   **core:** default unit is now `px` instead of rem

-   **prop-mid:** removed
-   **styled:** moved to `@you-eye/styled`
-   **styled:** `ccssd` helper removed, use prepared component's on your own
-   **styled:** attribute filtering, no longer passes unnecessary attributes to DOM

-   **babel-plugin:** moved to `@you-eye/babel-plugin-react`
-   **babel-plugin:** `automatic` React runtime support
-   **babel-plugin:** complete rewrite from the ground
-   **babel-plugin:** dynamic extraction
-   **babel-plugin:** new config structure
-   **babel-plugin:** CSS extraction includes minification and Media Query sorting by default
-   **babel-plugin:** allows to use its features individually
-   **babel-plugin:** default hashing: Murmur2
-   **babel-plugin:** Single constant resolve not supported anymore
-   **babel-plugin:** Warning of undefined constant usage
-   **babel-plugin:** Ability to add/prepend custom styles to extracted CSS

# [3.19.0](https://github.com/wintercounter/ccss/compare/v3.18.0...v3.19.0) (2020-12-27)

### Features

-   **styled:** added support for `displayName`. `ccssd` does not support it. ([ebe857d](https://github.com/wintercounter/ccss/commit/ebe857d46902a12eaa1f022055702d00c5d5cd4a))
-   **styled:** added support for `shouldForwardProp`. ([a967a11](https://github.com/wintercounter/ccss/commit/a967a11308a520b59b0c2db44f0e76e2fd63e06d))
-   **styled:** added support for nextjs with the `componentId` ([0b71d40](https://github.com/wintercounter/ccss/commit/0b71d40f3a05e7f543e429f2492497fca1479df5))

# [3.18.0](https://github.com/wintercounter/ccss/compare/v3.17.0...v3.18.0) (2020-10-12)

### Features

-   add support for "opt-out" values for cases no gutter should be used ([260a75b](https://github.com/wintercounter/ccss/commit/260a75bea190f487fbd4b122135be5690d21c9e6))

# [3.17.0](https://github.com/wintercounter/ccss/compare/v3.16.0...v3.17.0) (2020-10-09)

### Features

-   switch every parseSingle call to parseArray call for complete array resultion support ([b32ad5c](https://github.com/wintercounter/ccss/commit/b32ad5cbcee98b4d9a188a152a092a7c4d1c5147))

# [3.16.0](https://github.com/wintercounter/ccss/compare/v3.15.0...v3.16.0) (2020-09-20)

### Features

-   **styled:** add support for expo-like environments; both RN + Web at once. ([2ab2a82](https://github.com/wintercounter/ccss/commit/2ab2a8230ff10a48123b35067f0de5043b687a7f))
-   **styled:** add support for expo-like environments; both RN + Web at once. ([138f46f](https://github.com/wintercounter/ccss/commit/138f46f32897643de7d0901b26efb9ee46a04e4b))

# [3.15.0](https://github.com/wintercounter/ccss/compare/v3.14.0...v3.15.0) (2020-09-10)

### Bug Fixes

-   **babel-plugin-styled:** `defaultProps` for `ccssd` based components ([a861990](https://github.com/wintercounter/ccss/commit/a861990fa55925a77a8789ce47cc474a3d06f854))

### Features

-   **babel-plugin-styled:** add `colorConstantsToCSSVars` option which enables automatics CSS Variable conversion ([fff8625](https://github.com/wintercounter/ccss/commit/fff862554170934e07a204a167f1f0aeb2a9a9cd))

# [3.14.0](https://github.com/wintercounter/ccss/compare/v3.13.0...v3.14.0) (2020-09-04)

### Features

-   **babel-plugin:** add `MurmurHash2` as `classNameStrategy` for deterministic selector generation ([cef1f80](https://github.com/wintercounter/ccss/commit/cef1f8031d477cd7cab9012120c1b147d7acb9f8))

# [3.13.0](https://github.com/wintercounter/ccss/compare/v3.12.0...v3.13.0) (2020-08-29)

### Features

-   fix TypeScript types for autocompletion and DocBlock rendering
-   experimental React Native support

# [3.12.0](https://github.com/wintercounter/ccss/compare/v3.11.0...v3.12.0) (2020-08-20)

### Features

-   add support for `keyframes` prop ([cca9ed9](https://github.com/wintercounter/ccss/commit/cca9ed9202b0284c67a39e4c57648421109f322d))
-   escape non-unicode `content` values for `classStrategy` other than `unicode` ([de7ad8c](https://github.com/wintercounter/ccss/commit/de7ad8cb66d4a3376e04645f604729ceb4d846d4))

# [3.11.0](https://github.com/wintercounter/ccss/compare/v3.10.3...v3.11.0) (2020-08-20)

### Bug Fixes

-   **mq:babel:** remove empty props for sure ([0a7968b](https://github.com/wintercounter/ccss/commit/0a7968b596473277ba3dac501f789a2b18baf5b0))

### Features

-   **mq:babel:** add support for develblock comments so the user's can get rid of build-time related code ([05f43d0](https://github.com/wintercounter/ccss/commit/05f43d0199048c5e572c5e546186af68a15d9971))

## [3.10.3](https://github.com/wintercounter/ccss/compare/v3.10.2...v3.10.3) (2020-08-04)

### Bug Fixes

-   support nested arrays and objects for predefined values ([4e9a54d](https://github.com/wintercounter/ccss/commit/4e9a54d76256afc5798a7c7f00fe1031a95d2d6e))

## [3.10.2](https://github.com/wintercounter/ccss/compare/v3.10.1...v3.10.2) (2020-08-03)

### Bug Fixes

-   support arrays and objects for predefined values ([6c689f8](https://github.com/wintercounter/ccss/commit/6c689f8e0184f7f461d37748a10e3a25f4475a76))

## [3.10.1](https://github.com/wintercounter/ccss/compare/v3.10.0...v3.10.1) (2020-07-09)

**Note:** Version bump only for package cryptic-css-monorepo

# [3.10.0](https://github.com/wintercounter/ccss/compare/v3.9.2...v3.10.0) (2020-07-09)

### Bug Fixes

-   make babelPluginHandlers context aware ([2494477](https://github.com/wintercounter/ccss/commit/2494477cec22f1488a7607f49114a08954231bc5))

### Features

-   add support for `caret-color` ([4152e3b](https://github.com/wintercounter/ccss/commit/4152e3b0909e3bfa52e157c8d17209b98ef9d65e))

## [3.9.2](https://github.com/wintercounter/ccss/compare/v3.9.1...v3.9.2) (2020-07-07)

### Bug Fixes

-   handle recursive member expressions correctly ([35ece89](https://github.com/wintercounter/ccss/commit/35ece89bc374e2eab331cc148de19ee3fd8e1c89))

## [3.9.1](https://github.com/wintercounter/ccss/compare/v3.9.0...v3.9.1) (2020-06-22)

### Bug Fixes

-   `d.ts` compilation ([aa65c97](https://github.com/wintercounter/ccss/commit/aa65c97d696af73f0611c4814a62bcae3401990c))

# [3.9.0](https://github.com/wintercounter/ccss/compare/v3.8.0...v3.9.0) (2020-06-18)

### Bug Fixes

-   **mq:** handle immediate dynamic values correctly ([c794192](https://github.com/wintercounter/ccss/commit/c7941928ac2c325622f9e022013974bd31f623e2))

### Features

-   **babel-plugin-styled:** add support for `defaultProps` when converting to static element ([cc73cde](https://github.com/wintercounter/ccss/commit/cc73cdedb98bda152613417070751125813d955e))
-   **babel-plugin-styled:** clean up old CSS files ([ae2a648](https://github.com/wintercounter/ccss/commit/ae2a648dc333cca022514521ca5cf2843165e3c7))
-   **props:** add support for `backdrop-filter` ([39bb474](https://github.com/wintercounter/ccss/commit/39bb474806f8fa1dfadb25bcc519a800710605e1))
-   **props:** add support for SVG presentational attributes ([5379528](https://github.com/wintercounter/ccss/commit/53795285734aa4307d3a95df136464b96906d36f))

# [3.8.0](https://github.com/wintercounter/ccss/compare/v3.7.0...v3.8.0) (2020-06-10)

### Features

-   **child:** add `&` reference for pseudo selectors starting with `:` ([0ce481d](https://github.com/wintercounter/ccss/commit/0ce481d914564a8b4c9f582294047c892a24a4ba))

# [3.7.0](https://github.com/wintercounter/ccss/compare/v3.6.1...v3.7.0) (2020-06-10)

### Features

-   **babel-plugin:** add checksum to generated filename for proper versioning ([6ee7faa](https://github.com/wintercounter/ccss/commit/6ee7faab094760d48cff4a9422d210b3563906f1))

## [3.6.1](https://github.com/wintercounter/ccss/compare/v3.6.0...v3.6.1) (2020-06-10)

### Bug Fixes

-   **babel-plugin:** handle `UnaryExpression` cases ([0448a23](https://github.com/wintercounter/ccss/commit/0448a2350371288d56821fd2ed741fe10613c1c1))

# [3.6.0](https://github.com/wintercounter/ccss/compare/v3.4.0...v3.6.0) (2020-06-06)

### Bug Fixes

-   switch from lodash-es to lodash ([2d9187a](https://github.com/wintercounter/ccss/commit/2d9187a54443644fe6e36b84d9cc6d893c6dd85d))

### Features

-   **babel-plugin:** alpha2 1.0 ([94e4dfc](https://github.com/wintercounter/ccss/commit/94e4dfc5d854b6035bd8678d3ddbc82be562635e))
-   **babel-plugin:** className strategies, fixtures for tests, css output support ([8dfce64](https://github.com/wintercounter/ccss/commit/8dfce646fbf713906c80282c837dad9f93b22fad))
-   **babel-plugin:** it can minify supported properties now ([9529938](https://github.com/wintercounter/ccss/commit/95299382d6a667a1a9c142e7cfc9b040a4c0c334))
-   **babel-plugin:** run test with real ccss instance ([c462163](https://github.com/wintercounter/ccss/commit/c4621634de3c205da490eb33db41e816c6ae6b34))
-   **babel-plugin:** support for `child` prop ([aec7424](https://github.com/wintercounter/ccss/commit/aec74241c1fb1eede16b321cc7ac1a191e28fd3f))
-   **babel-plugin:** support for `mq` prop and all other 3rd party props ([e1b67a7](https://github.com/wintercounter/ccss/commit/e1b67a7d47248097a04d6be36ece30d10b61ecd1))
-   **babel-plugin:** Tag rewrite support ([86d9fe2](https://github.com/wintercounter/ccss/commit/86d9fe29ed2ff17b2f835f947ef9f8f41f60f0e7))
-   **props:** add support for booleans ([a32fded](https://github.com/wintercounter/ccss/commit/a32fded31d2847b3a5edd94ed9e409e111c838e8))

# [3.5.0](https://github.com/wintercounter/ccss/compare/v3.3.0...v3.5.0) (2020-06-06)

### Features

-   **babel-plugin:** alpha2 1.0 ([94e4dfc](https://github.com/wintercounter/ccss/commit/94e4dfc5d854b6035bd8678d3ddbc82be562635e))
-   **babel-plugin:** className strategies, fixtures for tests, css output support ([8dfce64](https://github.com/wintercounter/ccss/commit/8dfce646fbf713906c80282c837dad9f93b22fad))
-   **babel-plugin:** it can minify supported properties now ([9529938](https://github.com/wintercounter/ccss/commit/95299382d6a667a1a9c142e7cfc9b040a4c0c334))
-   **babel-plugin:** run test with real ccss instance ([c462163](https://github.com/wintercounter/ccss/commit/c4621634de3c205da490eb33db41e816c6ae6b34))
-   **babel-plugin:** support for `child` prop ([aec7424](https://github.com/wintercounter/ccss/commit/aec74241c1fb1eede16b321cc7ac1a191e28fd3f))
-   **babel-plugin:** support for `mq` prop and all other 3rd party props ([e1b67a7](https://github.com/wintercounter/ccss/commit/e1b67a7d47248097a04d6be36ece30d10b61ecd1))
-   **babel-plugin:** Tag rewrite support ([86d9fe2](https://github.com/wintercounter/ccss/commit/86d9fe29ed2ff17b2f835f947ef9f8f41f60f0e7))
-   **props:** add support for booleans ([a32fded](https://github.com/wintercounter/ccss/commit/a32fded31d2847b3a5edd94ed9e409e111c838e8))

# [3.3.0](https://github.com/wintercounter/ccss/compare/v3.2.1...v3.3.0) (2020-04-17)

### Features

-   **prop:** add support boolean value for opacity ([17a4302](https://github.com/wintercounter/ccss/commit/17a4302a9f4d7a12af459b0f2f86fd00252ecb13))
-   **props:** add support for the most popular, non-standard webkit prefixed CSS properties ([3a6e6b3](https://github.com/wintercounter/ccss/commit/3a6e6b361a5425c1266ad822009810f1699dd755))
-   **pseudo:** add support for the popular `::before, ::after` combo together ([624591c](https://github.com/wintercounter/ccss/commit/624591cf1c5cebd923a32b12486655b783899c84))
-   **styled:** add support to pass default props to all generated components ([1c617d4](https://github.com/wintercounter/ccss/commit/1c617d4a982e8868ef2d46f84681023eedc7c6c3))

## [3.2.1](https://github.com/wintercounter/ccss/compare/v3.2.0...v3.2.1) (2020-04-09)

### Bug Fixes

-   **pseudo:** long names could result in undefined ([a476959](https://github.com/wintercounter/ccss/commit/a47695953c60b80c9bd498764f9917ed1c8ef412))

# [3.2.0](https://github.com/wintercounter/ccss/compare/v3.1.0...v3.2.0) (2020-04-08)

### Bug Fixes

-   remove custom memoize function in favor of lodash/memoize ([9e557da](https://github.com/wintercounter/ccss/commit/9e557dac2808240ab3b3689a0aea08822ebb3cf2))
-   **types:** correct types. Using `TS type intersections` ([2484730](https://github.com/wintercounter/ccss/commit/2484730e2f677e11c48ae63306ab3a12c54196cb))

### Features

-   **core:** added some types to most common functions ([d968c1f](https://github.com/wintercounter/ccss/commit/d968c1f45bf4e7add3a7ef1b490ad0301a49482e))
-   **core:** allow passing functions as value ([d71c6aa](https://github.com/wintercounter/ccss/commit/d71c6aa992f8bece06856b4ba1d8439bba7b6b76))
-   **core:** generating types based on `getPropTable` data ([724169f](https://github.com/wintercounter/ccss/commit/724169ff72e2cd3d14e5e4754c1c75fedc09a4d4))
-   **core:** updated scripts to generate `props` and `dts` ([928603a](https://github.com/wintercounter/ccss/commit/928603aa8d5e59eee40428d73d9958fa69d77f75))
-   **props:** `parseArray` added to all values that are supposed to support numeric values inside an expression, eg: `border: [1, 'solid', '[#000](https://github.com/wintercounter/ccss/issues/000)'] ([d7eaa28](https://github.com/wintercounter/ccss/commit/d7eaa286ad50e4e19574c2e445ba633e7ec81b53))
-   **pseudo:** add support for pseudo long names also directly as root props, eg. `ccss({ '::after': { ... } })` ([f857595](https://github.com/wintercounter/ccss/commit/f8575954f1dc6def6ec52eea2b375e0a9903efb0))
-   use prepared object for false/none values ([3a508a1](https://github.com/wintercounter/ccss/commit/3a508a15fb9a1224214f8ea2245ae9e7be5f8073))

# [3.1.0](https://github.com/wintercounter/ccss/compare/v3.0.2...v3.1.0) (2020-03-22)

### Bug Fixes

-   **gutter:** array map not passing options ([7139db8](https://github.com/wintercounter/ccss/commit/7139db8d48803d26fea143b268dfdfe84b290458))
-   **letter-spacing:** parse with unit ([96a6497](https://github.com/wintercounter/ccss/commit/96a6497b8005832999d797f0e9397ace0c5d9323))
-   **prop-scroll:** hiding rule for webkit should be a child ([ecfe7cd](https://github.com/wintercounter/ccss/commit/ecfe7cd6fb0f0d89819eb741e63bad692280a666))
-   **props:** call aliases on correct props table, even after deep merge ([521a91a](https://github.com/wintercounter/ccss/commit/521a91ad0a59bbc7c0e6decc914ab95c2d2cdbdf))
-   **valueMap:** call `getTfoBgpPos` ([4ac529d](https://github.com/wintercounter/ccss/commit/4ac529de089de53d13e846316677566cc253543a))

### Features

-   **parsers:** add `parseCCSS` function to easily deal with mapped CCSS values ([77567e6](https://github.com/wintercounter/ccss/commit/77567e6f45d38495d3e8e7263689c66bde0922ef))
-   **typescript:** add basic types ([4b217e0](https://github.com/wintercounter/ccss/commit/4b217e06e263842b54a183d9257124230e4dad74))

## [3.0.2](https://github.com/wintercounter/ccss/compare/v3.0.1...v3.0.2) (2020-03-18)

### Bug Fixes

-   change `pos` to `P` ([4850bab](https://github.com/wintercounter/ccss/commit/4850bab06791d88d2be5014b7d3d0d8022bc704a))

## [3.0.1](https://github.com/wintercounter/ccss/compare/v3.0.0...v3.0.1) (2020-03-17)

### Bug Fixes

-   **prop-mq:** stop using original reference ([53514b0](https://github.com/wintercounter/ccss/commit/53514b01a92c08421a56922c9c96e24a0b795a8c))

# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)

### Bug Fixes

-   handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
-   plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
-   plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
-   remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))

### Features

-   add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
-   add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
-   add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
-   add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
-   add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
-   better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
-   handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
-   **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
-   **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))

### BREAKING CHANGES

-   **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions

**Note:** Version bump only for package cryptic-css-monorepo

# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)

### Bug Fixes

-   handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
-   plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
-   plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
-   remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))

### Features

-   add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
-   add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
-   add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
-   add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
-   add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
-   better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
-   handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
-   **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
-   **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))

### BREAKING CHANGES

-   **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions

# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)

### Bug Fixes

-   handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
-   plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
-   plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
-   remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))

### Features

-   add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
-   add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
-   add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
-   add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
-   add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
-   better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
-   handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
-   **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
-   **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))

### BREAKING CHANGES

-   **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions

# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)

### Bug Fixes

-   handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
-   plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
-   plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
-   remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))

### Features

-   add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
-   add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
-   add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
-   add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
-   add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
-   better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
-   handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
-   **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
-   **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))

### BREAKING CHANGES

-   **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions

# [2.0.0](https://github.com/wintercounter/ccss/compare/v1.0.0...v2.0.0) (2020-03-09)

### Features

-   **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
-   add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
-   **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))

### BREAKING CHANGES

-   **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions
