# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0](https://github.com/wintercounter/ccss/compare/v3.0.2...v3.1.0) (2020-03-22)


### Bug Fixes

* **gutter:** array map not passing options ([7139db8](https://github.com/wintercounter/ccss/commit/7139db8d48803d26fea143b268dfdfe84b290458))
* **letter-spacing:** parse with unit ([96a6497](https://github.com/wintercounter/ccss/commit/96a6497b8005832999d797f0e9397ace0c5d9323))
* **prop-scroll:** hiding rule for webkit should be a child ([ecfe7cd](https://github.com/wintercounter/ccss/commit/ecfe7cd6fb0f0d89819eb741e63bad692280a666))
* **props:** call aliases on correct props table, even after deep merge ([521a91a](https://github.com/wintercounter/ccss/commit/521a91ad0a59bbc7c0e6decc914ab95c2d2cdbdf))
* **valueMap:** call `getTfoBgpPos` ([4ac529d](https://github.com/wintercounter/ccss/commit/4ac529de089de53d13e846316677566cc253543a))


### Features

* **parsers:** add `parseCCSS` function to easily deal with mapped CCSS values ([77567e6](https://github.com/wintercounter/ccss/commit/77567e6f45d38495d3e8e7263689c66bde0922ef))
* **typescript:** add basic types ([4b217e0](https://github.com/wintercounter/ccss/commit/4b217e06e263842b54a183d9257124230e4dad74))





## [3.0.2](https://github.com/wintercounter/ccss/compare/v3.0.1...v3.0.2) (2020-03-18)


### Bug Fixes

* change `pos` to `P` ([4850bab](https://github.com/wintercounter/ccss/commit/4850bab06791d88d2be5014b7d3d0d8022bc704a))





## [3.0.1](https://github.com/wintercounter/ccss/compare/v3.0.0...v3.0.1) (2020-03-17)


### Bug Fixes

* **prop-mq:** stop using original reference ([53514b0](https://github.com/wintercounter/ccss/commit/53514b01a92c08421a56922c9c96e24a0b795a8c))





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
* plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions







**Note:** Version bump only for package cryptic-css-monorepo





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
* plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
* plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
* **refact:** support custom ccss function creation to avoid issues coming from using a single, global instance ([75542f5](https://github.com/wintercounter/ccss/commit/75542f5d0bf8be04b1deefd2d70d2ec439f2a181))


### BREAKING CHANGES

* **refact:** this release have removed some existing API and how you can apply customizations and 3rd party solutions





# [3.0.0](https://github.com/wintercounter/ccss/compare/v1.0.1...v3.0.0) (2020-03-11)


### Bug Fixes

* handling of unsupported values ([420f72a](https://github.com/wintercounter/ccss/commit/420f72ac1964d0fba79db07b363f56d10d85aecc))
* plugin updates after short name changes ([58f9d75](https://github.com/wintercounter/ccss/commit/58f9d753b9793cec5dab0a391ba19d5ad8fd08b3))
* plugin updates after short name changes ... again ([3a7f78d](https://github.com/wintercounter/ccss/commit/3a7f78da2b1ced479b3ccc933ad2500c8bd3ddd7))
* remove invalid `bgc` value map ([7ca9879](https://github.com/wintercounter/ccss/commit/7ca987912de133553fcb5202c41435f68eb292bd))


### Features

* add `cli` tool to help searching for props ([865b2c2](https://github.com/wintercounter/ccss/commit/865b2c2e2c9929d2d512f272406c3a706b1ef9e2))
* add `unsupported` prop support ([52f2a9e](https://github.com/wintercounter/ccss/commit/52f2a9e580f10ae3d27fe35bfe170159180d8140))
* add shorthand for `auto` for `background-size` ([ee7cfa3](https://github.com/wintercounter/ccss/commit/ee7cfa3efb7265ba14a1811a4b365bf11b3d09aa))
* add shorthands for `background-position` and `transform-origin` values ([c7abeeb](https://github.com/wintercounter/ccss/commit/c7abeeb92beebdaee28ee73fef1dc057bc94d97c))
* add support for `outputTransformers` + object & string transformers ([844b93a](https://github.com/wintercounter/ccss/commit/844b93a20c97b4e26c5f1d18802b6b44a1b81275))
* better shorthand naming and avoid conflicts with DOM attributes ([b72dfde](https://github.com/wintercounter/ccss/commit/b72dfdefcd7d9adc9e1a0e192760eb72001f1220))
* handle props passed by React well ([386d79e](https://github.com/wintercounter/ccss/commit/386d79e8313e8e5e5aa79a974f6352564760c98b))
* **props:** add support for `light` and `long` names ([49b9ea0](https://github.com/wintercounter/ccss/commit/49b9ea0d5fe7cbd86e285ab8e11021ea75846e3b))
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
