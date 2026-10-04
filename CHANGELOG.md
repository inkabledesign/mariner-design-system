# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0](https://github.com/your-org/mariner-design-system/compare/v1.0.3...v2.0.0) (2026-10-04)

### Bug Fixes

- correct spelling mistakes in icon names and normalize naming ([8048b91](https://github.com/your-org/mariner-design-system/commit/8048b91ee2795155c50c8f3465f7a169c4337e63))
- improve type safety and resolve import paths in TextStyled and HeaderTopBar ([93ed61e](https://github.com/your-org/mariner-design-system/commit/93ed61ef64b6579679947e5a80dfb99b56026568))
- replace Animated.View with createAnimatedComponent(View) for Rollup compatibility ([faab002](https://github.com/your-org/mariner-design-system/commit/faab00235e6956435b9fb9e6fe33ff04ae6ac09e))
- resolve Android font rendering issues with Montserrat-Italic and remove fontWeight from Tailwind text utilities ([5410a68](https://github.com/your-org/mariner-design-system/commit/5410a68cfacd0bf784d76cdefc9b6213379e9af9))
- simplify TypeScript config extends path in mobile Storybook ([544f794](https://github.com/your-org/mariner-design-system/commit/544f794a19eb1f309caf88a972d6ec38139fd99a))
- update CI workflow to use yarn, Node 22, and [@inkabledesign](https://github.com/inkabledesign) scope ([12eed72](https://github.com/your-org/mariner-design-system/commit/12eed72531e448ea365bc10622738add224ce084))
- update GitHub Actions to v5 to support Node.js 24 runners ([8fb3019](https://github.com/your-org/mariner-design-system/commit/8fb301977c646c12a50fda2695e08fc591767f53))

### Features

- add ico-direction and ico-slack map icons ([784d7aa](https://github.com/your-org/mariner-design-system/commit/784d7aa6d3b43c65ffa5ca234c468ad35ab84c76))
- add ico-minus system icon and selectable prop to TextStyled ([3d6775a](https://github.com/your-org/mariner-design-system/commit/3d6775a1b8f01a81669703fe784547346c4ab2a8))
- add Rajdhani font support and new icon assets, simplify mobile Tailwind config ([ecdca94](https://github.com/your-org/mariner-design-system/commit/ecdca94328dbc272c55b520da58ac053084c8a1d))
- add ref forwarding and default font to TextStyled, extend TextProps ([d48cede](https://github.com/your-org/mariner-design-system/commit/d48cede5413b71002c6f2c5976dc2f7d6be11980))
- consolidate icon categories, add new icons, improve icon generator validation ([ccfe17e](https://github.com/your-org/mariner-design-system/commit/ccfe17e02769d6882ff6faafc2f90656e018f491))
- expand Tailwind safelist patterns and add SpaceMono Bold font support ([c707251](https://github.com/your-org/mariner-design-system/commit/c70725179a26b2be7d9cfe59fc9438e4242d3ed1))
- integrate components package stories into mobile Storybook with GestureHandler support ([a7c3e73](https://github.com/your-org/mariner-design-system/commit/a7c3e73ed078ab6f84a302f781703c04270abce0))

### BREAKING CHANGES

- icon names corrected; previous names (ico-caffee,
  ico-loundry, ico-locatioon, ico-mylocation, ico-ancor-round,
  ico-boat_name-round, ico-drystorage, ico-quizz-passed, ico-quizz-time,
  ico-module-quizz-round-fill, ico-fullmoon, ico-third_quater,
  ico-waning_cresent, ico-wanining_gibbous, ico-waxing_cresen) removed.
  Dot variant values 'quizz'/'quizz-outline' renamed.

Generated with [Devin](https://devin.ai)

Co-Authored-By: Devin <158243242+devin-ai-integration[bot]@users.noreply.github.com>

## [1.0.3](https://github.com/your-org/mariner-design-system/compare/v1.0.2...v1.0.3) (2026-07-14)

### Bug Fixes

- update breakpoint names in JSON files from mobile/tablet to mobile-sm/tablet-md ([28906f0](https://github.com/your-org/mariner-design-system/commit/28906f0e35a35d617b50cac7ae7134c67db45227))

## [1.0.2](https://github.com/your-org/mariner-design-system/compare/v1.0.1...v1.0.2) (2026-07-14)

### Bug Fixes

- use file: protocol for local assets dependency in components ([c6cacbc](https://github.com/your-org/mariner-design-system/commit/c6cacbca5b4cbcf6c2498d0fec3e2b729c958c68))

## 1.0.1 (2026-07-13)

### Bug Fixes

- add NPM_TOKEN env var for yarn install ([a262106](https://github.com/your-org/mariner-design-system/commit/a262106e332b0f97106d7d4104d302a87698a819))
- commit yarn.lock for reproducible builds ([1b68acb](https://github.com/your-org/mariner-design-system/commit/1b68acbe5612d318094f0abdbc7f08a8af3a3867))
- include nested svg.d.ts in assets tsconfig for rollup build ([2d76106](https://github.com/your-org/mariner-design-system/commit/2d76106bcadcedda3fdd176e73bda9f0c71c7bef))
- keep @mariner/\* external in components build to prevent recompiling sibling source ([34e314c](https://github.com/your-org/mariner-design-system/commit/34e314cee5e08452ff2afe85996cdc2674e2efad))
- only build @mariner/\* packages, exclude private storybook apps ([2b9e960](https://github.com/your-org/mariner-design-system/commit/2b9e9601274af1c5b49e0557d136deedd82e52f4))
- remove .npmrc, use NODE_AUTH_TOKEN from actions/setup-node ([eb71ebd](https://github.com/your-org/mariner-design-system/commit/eb71ebd1bed965932eed1a71a584b604a7476b90))
- remove broken generate:icons step, fix root icons script ([e1e605e](https://github.com/your-org/mariner-design-system/commit/e1e605ebb9836491e64c3e50b3130e779e4615fa))
- remove NPM_TOKEN from install step ([63a649d](https://github.com/your-org/mariner-design-system/commit/63a649d128a4468430fb52ef3b56eaf366ae0c01))
- rename version/publish scripts to avoid npm lifecycle recursion in lerna publish ([4ea6e16](https://github.com/your-org/mariner-design-system/commit/4ea6e1620f5ca9d18575ca035ff590ec367c083a))
- update workflow scope filters to [@inkabledesign](https://github.com/inkabledesign) ([dbaf1c2](https://github.com/your-org/mariner-design-system/commit/dbaf1c2f9dd9e3c042cd960e675efcc75f1dab36))
- use yarn instead of npm in publish workflow ([95881f1](https://github.com/your-org/mariner-design-system/commit/95881f12f9fb57f3c67c90ab053c3108126cc8bb))

# 1.0.0 (2026-07-13)

**Note:** Version bump only for package @mariner/design-system
