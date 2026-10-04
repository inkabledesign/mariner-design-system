# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/inkabledesign/mariner-design-system/compare/v1.0.3...v2.0.0) (2026-10-04)

### Bug Fixes

- correct spelling mistakes in icon names and normalize naming ([8048b91](https://github.com/inkabledesign/mariner-design-system/commit/8048b91ee2795155c50c8f3465f7a169c4337e63))
- improve type safety and resolve import paths in TextStyled and HeaderTopBar ([93ed61e](https://github.com/inkabledesign/mariner-design-system/commit/93ed61ef64b6579679947e5a80dfb99b56026568))
- replace Animated.View with createAnimatedComponent(View) for Rollup compatibility ([faab002](https://github.com/inkabledesign/mariner-design-system/commit/faab00235e6956435b9fb9e6fe33ff04ae6ac09e))
- resolve Android font rendering issues with Montserrat-Italic and remove fontWeight from Tailwind text utilities ([5410a68](https://github.com/inkabledesign/mariner-design-system/commit/5410a68cfacd0bf784d76cdefc9b6213379e9af9))

### Features

- add ico-direction and ico-slack map icons ([784d7aa](https://github.com/inkabledesign/mariner-design-system/commit/784d7aa6d3b43c65ffa5ca234c468ad35ab84c76))
- add ico-minus system icon and selectable prop to TextStyled ([3d6775a](https://github.com/inkabledesign/mariner-design-system/commit/3d6775a1b8f01a81669703fe784547346c4ab2a8))
- add Rajdhani font support and new icon assets, simplify mobile Tailwind config ([ecdca94](https://github.com/inkabledesign/mariner-design-system/commit/ecdca94328dbc272c55b520da58ac053084c8a1d))
- add ref forwarding and default font to TextStyled, extend TextProps ([d48cede](https://github.com/inkabledesign/mariner-design-system/commit/d48cede5413b71002c6f2c5976dc2f7d6be11980))
- consolidate icon categories, add new icons, improve icon generator validation ([ccfe17e](https://github.com/inkabledesign/mariner-design-system/commit/ccfe17e02769d6882ff6faafc2f90656e018f491))
- integrate components package stories into mobile Storybook with GestureHandler support ([a7c3e73](https://github.com/inkabledesign/mariner-design-system/commit/a7c3e73ed078ab6f84a302f781703c04270abce0))

### BREAKING CHANGES

- icon names corrected; previous names (ico-caffee,
  ico-loundry, ico-locatioon, ico-mylocation, ico-ancor-round,
  ico-boat_name-round, ico-drystorage, ico-quizz-passed, ico-quizz-time,
  ico-module-quizz-round-fill, ico-fullmoon, ico-third_quater,
  ico-waning_cresent, ico-wanining_gibbous, ico-waxing_cresen) removed.
  Dot variant values 'quizz'/'quizz-outline' renamed.

Generated with [Devin](https://devin.ai)

Co-Authored-By: Devin <158243242+devin-ai-integration[bot]@users.noreply.github.com>

## [1.0.2](https://github.com/inkabledesign/mariner-design-system/compare/v1.0.1...v1.0.2) (2026-07-14)

### Bug Fixes

- use file: protocol for local assets dependency in components ([c6cacbc](https://github.com/inkabledesign/mariner-design-system/commit/c6cacbca5b4cbcf6c2498d0fec3e2b729c958c68))

## 1.0.1 (2026-07-13)

### Bug Fixes

- keep @mariner/\* external in components build to prevent recompiling sibling source ([34e314c](https://github.com/inkabledesign/mariner-design-system/commit/34e314cee5e08452ff2afe85996cdc2674e2efad))

# 1.0.0 (2026-07-13)

**Note:** Version bump only for package @mariner/components
