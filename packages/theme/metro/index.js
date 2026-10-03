const fs = require("fs");
const path = require("path");

const marinerPackages = [
  "@inkabledesign/mariner-assets",
  "@inkabledesign/mariner-components",
  "@inkabledesign/mariner-theme",
];

const appOwnedPackages = [
  ...marinerPackages,
  "expo-image",
  "nativewind",
  "react",
  "react-native",
  "react-native-css-interop",
  "react-native-gesture-handler",
  "react-native-reanimated",
  "react-native-safe-area-context",
  "react-native-svg",
  "react-native-worklets",
];

const resolvePackageRoot = (packageName, projectRoot) => {
  const packageJson = require.resolve(`${packageName}/package.json`, {
    paths: [projectRoot],
  });

  return fs.realpathSync(path.dirname(packageJson));
};

/**
 * Configure Metro for linked Mariner packages.
 *
 * Package roots are discovered through Node resolution, so this works with
 * local `link:` dependencies as well as registry-installed packages. Shared
 * React Native dependencies are always resolved from the consuming app to
 * prevent duplicate React and native module instances.
 */
const withMarinerDesignSystem = (config, { projectRoot }) => {
  const packageRoots = marinerPackages.map((packageName) =>
    resolvePackageRoot(packageName, projectRoot),
  );
  const appEntry = path.join(projectRoot, "package.json");
  const previousResolveRequest = config.resolver?.resolveRequest;

  config.watchFolders = [
    ...new Set([...(config.watchFolders ?? []), ...packageRoots]),
  ];
  config.resolver = {
    ...config.resolver,
    resolveRequest: (context, moduleName, platform) => {
      const isMarinerSource = packageRoots.some((packageRoot) =>
        context.originModulePath.startsWith(`${packageRoot}${path.sep}`),
      );
      const isAppOwnedPackage = appOwnedPackages.some(
        (packageName) =>
          moduleName === packageName ||
          moduleName.startsWith(`${packageName}/`),
      );

      if (isMarinerSource && isAppOwnedPackage) {
        return context.resolveRequest(
          { ...context, originModulePath: appEntry },
          moduleName,
          platform,
        );
      }

      if (previousResolveRequest) {
        return previousResolveRequest(context, moduleName, platform);
      }

      return context.resolveRequest(context, moduleName, platform);
    },
  };

  return config;
};

module.exports = { withMarinerDesignSystem };
