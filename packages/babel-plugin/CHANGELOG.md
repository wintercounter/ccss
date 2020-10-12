# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.18.0](https://github.com/wintercounter/ccss/compare/v3.17.0...v3.18.0) (2020-10-12)

**Note:** Version bump only for package @cryptic-css/babel-plugin-styled





# [3.17.0](https://github.com/wintercounter/ccss/compare/v3.16.0...v3.17.0) (2020-10-09)


### Features

* switch every parseSingle call to parseArray call for complete array resultion support ([b32ad5c](https://github.com/wintercounter/ccss/commit/b32ad5cbcee98b4d9a188a152a092a7c4d1c5147))






# [3.16.0](https://github.com/wintercounter/ccss/compare/v3.15.0...v3.16.0) (2020-09-20)

**Note:** Version bump only for package @cryptic-css/babel-plugin-styled





# [3.15.0](https://github.com/wintercounter/ccss/compare/v3.14.0...v3.15.0) (2020-09-10)


### Features

* **babel-plugin-styled:** add `colorConstantsToCSSVars` option which enables automatics CSS Variable conversion ([fff8625](https://github.com/wintercounter/ccss/commit/fff862554170934e07a204a167f1f0aeb2a9a9cd))





# [3.14.0](https://github.com/wintercounter/ccss/compare/v3.13.0...v3.14.0) (2020-09-04)


### Features

* **babel-plugin:** add `MurmurHash2` as `classNameStrategy` for deterministic selector generation ([cef1f80](https://github.com/wintercounter/ccss/commit/cef1f8031d477cd7cab9012120c1b147d7acb9f8))






# [3.13.0](https://github.com/wintercounter/ccss/compare/v3.12.0...v3.13.0) (2020-08-29)

**Note:** Version bump only for package @cryptic-css/babel-plugin-styled





# [3.12.0](https://github.com/wintercounter/ccss/compare/v3.11.0...v3.12.0) (2020-08-20)


### Features

* add support for `keyframes` prop ([cca9ed9](https://github.com/wintercounter/ccss/commit/cca9ed9202b0284c67a39e4c57648421109f322d))
* escape non-unicode `content` values for `classStrategy` other than `unicode` ([de7ad8c](https://github.com/wintercounter/ccss/commit/de7ad8cb66d4a3376e04645f604729ceb4d846d4))





# [3.11.0](https://github.com/wintercounter/ccss/compare/v3.10.3...v3.11.0) (2020-08-20)


### Bug Fixes

* **mq:babel:** remove empty props for sure ([0a7968b](https://github.com/wintercounter/ccss/commit/0a7968b596473277ba3dac501f789a2b18baf5b0))





## [3.10.3](https://github.com/wintercounter/ccss/compare/v3.10.2...v3.10.3) (2020-08-04)


### Bug Fixes

* support nested arrays and objects for predefined values ([4e9a54d](https://github.com/wintercounter/ccss/commit/4e9a54d76256afc5798a7c7f00fe1031a95d2d6e))





## [3.10.2](https://github.com/wintercounter/ccss/compare/v3.10.1...v3.10.2) (2020-08-03)


### Bug Fixes

* support arrays and objects for predefined values ([6c689f8](https://github.com/wintercounter/ccss/commit/6c689f8e0184f7f461d37748a10e3a25f4475a76))





## [3.10.1](https://github.com/wintercounter/ccss/compare/v3.10.0...v3.10.1) (2020-07-09)

**Note:** Version bump only for package @cryptic-css/babel-plugin-styled





# [3.10.0](https://github.com/wintercounter/ccss/compare/v3.9.2...v3.10.0) (2020-07-09)


### Bug Fixes

* make babelPluginHandlers context aware ([2494477](https://github.com/wintercounter/ccss/commit/2494477cec22f1488a7607f49114a08954231bc5))





## [3.9.2](https://github.com/wintercounter/ccss/compare/v3.9.1...v3.9.2) (2020-07-07)


### Bug Fixes

* handle recursive member expressions correctly ([35ece89](https://github.com/wintercounter/ccss/commit/35ece89bc374e2eab331cc148de19ee3fd8e1c89))





## [3.9.1](https://github.com/wintercounter/ccss/compare/v3.9.0...v3.9.1) (2020-06-22)


### Bug Fixes

* `d.ts` compilation ([aa65c97](https://github.com/wintercounter/ccss/commit/aa65c97d696af73f0611c4814a62bcae3401990c))





# [3.9.0](https://github.com/wintercounter/ccss/compare/v3.8.0...v3.9.0) (2020-06-18)


### Bug Fixes

* **mq:** handle immediate dynamic values correctly ([c794192](https://github.com/wintercounter/ccss/commit/c7941928ac2c325622f9e022013974bd31f623e2))


### Features

* **babel-plugin-styled:** add support for `defaultProps` when converting to static element ([cc73cde](https://github.com/wintercounter/ccss/commit/cc73cdedb98bda152613417070751125813d955e))
* **babel-plugin-styled:** clean up old CSS files ([ae2a648](https://github.com/wintercounter/ccss/commit/ae2a648dc333cca022514521ca5cf2843165e3c7))





# [3.8.0](https://github.com/wintercounter/ccss/compare/v3.7.0...v3.8.0) (2020-06-10)

**Note:** Version bump only for package @cryptic-css/babel-plugin-styled





# [3.7.0](https://github.com/wintercounter/ccss/compare/v3.6.1...v3.7.0) (2020-06-10)


### Features

* **babel-plugin:** add checksum to generated filename for proper versioning ([6ee7faa](https://github.com/wintercounter/ccss/commit/6ee7faab094760d48cff4a9422d210b3563906f1))





## [3.6.1](https://github.com/wintercounter/ccss/compare/v3.6.0...v3.6.1) (2020-06-10)


### Bug Fixes

* **babel-plugin:** handle `UnaryExpression` cases ([0448a23](https://github.com/wintercounter/ccss/commit/0448a2350371288d56821fd2ed741fe10613c1c1))





# [3.6.0](https://github.com/wintercounter/ccss/compare/v3.4.0...v3.6.0) (2020-06-06)


### Bug Fixes

* switch from lodash-es to lodash ([2d9187a](https://github.com/wintercounter/ccss/commit/2d9187a54443644fe6e36b84d9cc6d893c6dd85d))


### Features

* **babel-plugin:** alpha2 1.0 ([94e4dfc](https://github.com/wintercounter/ccss/commit/94e4dfc5d854b6035bd8678d3ddbc82be562635e))
* **babel-plugin:** className strategies, fixtures for tests, css output support ([8dfce64](https://github.com/wintercounter/ccss/commit/8dfce646fbf713906c80282c837dad9f93b22fad))
* **babel-plugin:** it can minify supported properties now ([9529938](https://github.com/wintercounter/ccss/commit/95299382d6a667a1a9c142e7cfc9b040a4c0c334))
* **babel-plugin:** run test with real ccss instance ([c462163](https://github.com/wintercounter/ccss/commit/c4621634de3c205da490eb33db41e816c6ae6b34))
* **babel-plugin:** support for `child` prop ([aec7424](https://github.com/wintercounter/ccss/commit/aec74241c1fb1eede16b321cc7ac1a191e28fd3f))
* **babel-plugin:** support for `mq` prop and all other 3rd party props ([e1b67a7](https://github.com/wintercounter/ccss/commit/e1b67a7d47248097a04d6be36ece30d10b61ecd1))
* **babel-plugin:** Tag rewrite support ([86d9fe2](https://github.com/wintercounter/ccss/commit/86d9fe29ed2ff17b2f835f947ef9f8f41f60f0e7))
* **props:** add support for booleans ([a32fded](https://github.com/wintercounter/ccss/commit/a32fded31d2847b3a5edd94ed9e409e111c838e8))






# [3.5.0](https://github.com/wintercounter/ccss/compare/v3.3.0...v3.5.0) (2020-06-06)


### Features

* **babel-plugin:** alpha2 1.0 ([94e4dfc](https://github.com/wintercounter/ccss/commit/94e4dfc5d854b6035bd8678d3ddbc82be562635e))
* **babel-plugin:** className strategies, fixtures for tests, css output support ([8dfce64](https://github.com/wintercounter/ccss/commit/8dfce646fbf713906c80282c837dad9f93b22fad))
* **babel-plugin:** it can minify supported properties now ([9529938](https://github.com/wintercounter/ccss/commit/95299382d6a667a1a9c142e7cfc9b040a4c0c334))
* **babel-plugin:** run test with real ccss instance ([c462163](https://github.com/wintercounter/ccss/commit/c4621634de3c205da490eb33db41e816c6ae6b34))
* **babel-plugin:** support for `child` prop ([aec7424](https://github.com/wintercounter/ccss/commit/aec74241c1fb1eede16b321cc7ac1a191e28fd3f))
* **babel-plugin:** support for `mq` prop and all other 3rd party props ([e1b67a7](https://github.com/wintercounter/ccss/commit/e1b67a7d47248097a04d6be36ece30d10b61ecd1))
* **babel-plugin:** Tag rewrite support ([86d9fe2](https://github.com/wintercounter/ccss/commit/86d9fe29ed2ff17b2f835f947ef9f8f41f60f0e7))
* **props:** add support for booleans ([a32fded](https://github.com/wintercounter/ccss/commit/a32fded31d2847b3a5edd94ed9e409e111c838e8))
