# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
