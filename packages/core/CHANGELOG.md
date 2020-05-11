# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.4.0](https://github.com/wintercounter/ccss/compare/v3.3.0...v3.4.0) (2020-05-11)


### Features

* **props:** add support for `contain` property ([ccaeee7](https://github.com/wintercounter/ccss/commit/ccaeee76016bbb0130d443d21c7af5d09c43dc6c))





# [3.3.0](https://github.com/wintercounter/ccss/compare/v3.2.1...v3.3.0) (2020-04-17)


### Features

* **prop:** add support boolean value for opacity ([17a4302](https://github.com/wintercounter/ccss/commit/17a4302a9f4d7a12af459b0f2f86fd00252ecb13))
* **props:** add support for the most popular, non-standard webkit prefixed CSS properties ([3a6e6b3](https://github.com/wintercounter/ccss/commit/3a6e6b361a5425c1266ad822009810f1699dd755))
* **pseudo:** add support for the popular `::before, ::after` combo together ([624591c](https://github.com/wintercounter/ccss/commit/624591cf1c5cebd923a32b12486655b783899c84))





## [3.2.1](https://github.com/wintercounter/ccss/compare/v3.2.0...v3.2.1) (2020-04-09)


### Bug Fixes

* **pseudo:** long names could result in undefined ([a476959](https://github.com/wintercounter/ccss/commit/a47695953c60b80c9bd498764f9917ed1c8ef412))





# [3.2.0](https://github.com/wintercounter/ccss/compare/v3.1.0...v3.2.0) (2020-04-08)


### Bug Fixes

* remove custom memoize function in favor of lodash/memoize ([9e557da](https://github.com/wintercounter/ccss/commit/9e557dac2808240ab3b3689a0aea08822ebb3cf2))
* **types:** correct types. Using `TS type intersections` ([2484730](https://github.com/wintercounter/ccss/commit/2484730e2f677e11c48ae63306ab3a12c54196cb))


### Features

* **core:** added some types to most common functions ([d968c1f](https://github.com/wintercounter/ccss/commit/d968c1f45bf4e7add3a7ef1b490ad0301a49482e))
* **core:** allow passing functions as value ([d71c6aa](https://github.com/wintercounter/ccss/commit/d71c6aa992f8bece06856b4ba1d8439bba7b6b76))
* **core:** generating types based on `getPropTable` data ([724169f](https://github.com/wintercounter/ccss/commit/724169ff72e2cd3d14e5e4754c1c75fedc09a4d4))
* **core:** updated scripts to generate `props` and `dts` ([928603a](https://github.com/wintercounter/ccss/commit/928603aa8d5e59eee40428d73d9958fa69d77f75))
* **props:** `parseArray` added to all values that are supposed to support numeric values inside an expression, eg: `border: [1, 'solid', '[#000](https://github.com/wintercounter/ccss/issues/000)'] ([d7eaa28](https://github.com/wintercounter/ccss/commit/d7eaa286ad50e4e19574c2e445ba633e7ec81b53))
* **pseudo:** add support for pseudo long names also directly as root props, eg. `ccss({ '::after': { ... } })` ([f857595](https://github.com/wintercounter/ccss/commit/f8575954f1dc6def6ec52eea2b375e0a9903efb0))
* use prepared object for false/none values ([3a508a1](https://github.com/wintercounter/ccss/commit/3a508a15fb9a1224214f8ea2245ae9e7be5f8073))






# [3.1.0](https://github.com/wintercounter/ccss/compare/v3.0.2...v3.1.0) (2020-03-22)


### Bug Fixes

* **letter-spacing:** parse with unit ([96a6497](https://github.com/wintercounter/ccss/commit/96a6497b8005832999d797f0e9397ace0c5d9323))
* **props:** call aliases on correct props table, even after deep merge ([521a91a](https://github.com/wintercounter/ccss/commit/521a91ad0a59bbc7c0e6decc914ab95c2d2cdbdf))
* **valueMap:** call `getTfoBgpPos` ([4ac529d](https://github.com/wintercounter/ccss/commit/4ac529de089de53d13e846316677566cc253543a))


### Features

* **parsers:** add `parseCCSS` function to easily deal with mapped CCSS values ([77567e6](https://github.com/wintercounter/ccss/commit/77567e6f45d38495d3e8e7263689c66bde0922ef))
* **typescript:** add basic types ([4b217e0](https://github.com/wintercounter/ccss/commit/4b217e06e263842b54a183d9257124230e4dad74))





## [3.0.2](https://github.com/wintercounter/ccss/compare/v3.0.1...v3.0.2) (2020-03-18)


### Bug Fixes

* change `pos` to `P` ([4850bab](https://github.com/wintercounter/ccss/commit/4850bab06791d88d2be5014b7d3d0d8022bc704a))





## [3.0.1](https://github.com/wintercounter/ccss/compare/v3.0.0...v3.0.1) (2020-03-17)

**Note:** Version bump only for package @cryptic-css/core





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions







**Note:** Version bump only for package @cryptic-css/core





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions





# [2.0.0](https://github.com/wintercounter/ccss/compare/v1.0.0...v2.0.0) (2020-03-09)


### Features

* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions
