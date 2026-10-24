# Expo SDK 58 compatibility

The workspace targets Expo SDK 58, React 19.3, and React Native 0.88.
Use `nvm use` (Node 22.18) before installing or building. Expo also supports
Node 24.3+ on the 24 line and Node 26+.

## Consuming apps

Install the design-system packages together. The components package now requires
Gesture Handler 3.3+, Reanimated 4.7+, Worklets 0.13, Safe Area Context 5.10.1+,
and React Native SVG 15.16+. Let `npx expo install --fix` select versions in SDK 58
apps. Keep React and native modules as single copies in the app dependency tree.

Wrap the application in `GestureHandlerRootView`. Configure the Worklets Babel
plugin when using a custom Babel configuration, and rebuild the native app after
upgrading. Existing SDK 57 development builds cannot load the SDK 58 native modules.

Forwarded refs now use React Native's public `TextInstance` and
`TextInputInstance` types. Consumers compiling TypeScript should use
`moduleResolution: "bundler"` (or an appropriate Node16/NodeNext configuration)
to resolve React Native 0.88's package exports.

## Native Storybook

The committed iOS and Android projects are generated from `app.json`. Run
`yarn workspace storybook-mobile prebuild` after changing native configuration,
and commit the resulting native changes. Install pods before an iOS build.
The iOS project uses the scene lifecycle and a minimum deployment target of 16.4.
Android uses the SDK 58 Gradle wrapper and enables R8 for release builds.

## Checks

- `yarn typecheck` checks all three published library packages.
- `yarn test:gestures` checks swipe completion, interruption, and cancellation.
- `yarn workspace @inkabledesign/mariner-theme build`
- `yarn workspace @inkabledesign/mariner-assets build`
- `yarn workspace @inkabledesign/mariner-components build`
- In `apps/storybook-mobile`, run `npx expo-doctor` and
  `npx expo export --platform ios --platform android`.

Expo Doctor warns about committed native directories and app configuration even
when prebuild has just synchronized them. Keep this warning enabled as a reminder
to regenerate native projects when the app configuration changes.

Migration references:
[Expo SDK 58](https://expo.dev/changelog/sdk-58),
[Expo upgrade guide](https://expo.dev/blog/how-to-upgrade-to-sdk-58), and
[Gesture Handler 3](https://docs.swmansion.com/react-native-gesture-handler/docs/guides/upgrading-to-3/).
