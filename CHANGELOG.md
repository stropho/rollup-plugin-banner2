# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.1] - 2024-12-11

### Security

- update transitive dependency `braces` to resolve security vulnerabilities

## [1.3.0] - 2024-05-11

### Added

- `formatter` option with value `docBlock` and `docBlockAndGap` to automatically wrap banner string in `/** */` along with prepending every line with `*`

## [1.2.3] - 2024-03-28

### Added

- **Contributing** section in README
- MIT `LICENSE` file

### Security

- update devDependencies and resolve security vulnerabilities

## [1.2.2] - 2021-03-19

### Removed

- `npm` version from `engines` field in package.json. At this moment, there isn't any specific case why a specific subset of `npm` versions is needed

## [1.2.1] - 2021-02-24

### Added

- typescript definition file in published package

## [1.2.0] - 2021-02-24

### Added

- support for banner as an object with `toString` method

## [1.1.0] - 2021-02-24

### Added

- support newer node version

## [1.0.2] - 2020-12-13

### Changed

- npm audit fix

## [1.0.1] - 2020-12-09

### Changed

- publish only files in dist/

## 1.0.0 - 2020-03-19

### Added

- Initial Implementation
- Readme
- sourcemap support
- typescript declaration

[Unreleased]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.3.1...HEAD
[1.3.1]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.2.3...v1.3.0
[1.2.3]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/stropho/rollup-plugin-banner2/compare/v1.0.0...v1.0.1
