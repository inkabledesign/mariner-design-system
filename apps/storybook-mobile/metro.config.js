const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
const componentsPath = path.resolve(workspaceRoot, 'packages/components');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

// Watch all files in the monorepo
config.watchFolders = [workspaceRoot];

// Let Metro know where to resolve packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Configure SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('./svg-transformer'),
};

// Configure resolver
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
  resolveRequest: (context, moduleName, platform) => {
    // Handle @/ imports from components package
    if (moduleName.startsWith('@/')) {
      let relativePath = moduleName.substring(2); // Remove '@/'
      
      // Handle @/components/atoms/* → atoms/*
      // Handle @/components/molecules/* → molecules/*
      if (relativePath.startsWith('components/atoms/')) {
        relativePath = relativePath.replace('components/atoms/', 'atoms/');
      } else if (relativePath.startsWith('components/molecules/')) {
        relativePath = relativePath.replace('components/molecules/', 'molecules/');
      } else if (relativePath.startsWith('components/')) {
        // Fallback: strip 'components/' prefix
        relativePath = relativePath.substring('components/'.length);
      }
      
      // Strip 'utils/helpers/' → 'utils/'
      if (relativePath.startsWith('utils/helpers/')) {
        relativePath = relativePath.replace('utils/helpers/', 'utils/');
      }
      
      // Handle @/data, @/hooks, @/store paths directly
      // These should map to their respective directories in components package
      
      const absolutePath = path.resolve(componentsPath, relativePath);
      
      const fs = require('fs');
      const extensions = ['.tsx', '.ts', '.jsx', '.js', '.json'];
      
      // First, check if the path already exists as-is (with extension) and is a file
      if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile()) {
        return {
          filePath: absolutePath,
          type: 'sourceFile',
        };
      }
      
      // Try as directory with index file first (before adding extensions)
      if (fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory()) {
        for (const ext of extensions) {
          const indexPath = path.join(absolutePath, 'index' + ext);
          if (fs.existsSync(indexPath)) {
            return {
              filePath: indexPath,
              type: 'sourceFile',
            };
          }
        }
      }
      
      // Try as a file with extensions
      for (const ext of extensions) {
        const fullPath = absolutePath + ext;
        if (fs.existsSync(fullPath)) {
          return {
            filePath: fullPath,
            type: 'sourceFile',
          };
        }
      }
    }
    
    // Fall back to default resolution
    return context.resolveRequest(context, moduleName, platform);
  },
};

module.exports = withNativeWind(config, {
  input: './global.css',
});
