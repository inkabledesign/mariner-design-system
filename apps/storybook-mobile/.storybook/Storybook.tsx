import { view } from './storybook.requires';

// NOTE: AsyncStorage persistence intentionally not configured — the installed
// @react-native-async-storage/async-storage@3.x is incompatible with Expo Go
// (native module unavailable), which logs storage errors. Re-add `storage:
// { getItem, setItem }` once the dep is pinned to the Expo-expected version.
const StorybookUI = view.getStorybookUI({});

export default StorybookUI;
