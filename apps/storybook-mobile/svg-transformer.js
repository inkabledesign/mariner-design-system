const { resolveConfig, transform } = require('@svgr/core');
const resolveConfigDir = require('path-dirname');
const upstreamTransformer = require('@expo/metro-config/babel-transformer');

const defaultSVGRConfig = {
  native: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            inlineStyles: { onlyMatchedOnce: false },
            removeViewBox: false,
            removeUnknownsAndDefaults: false,
            convertColors: false,
          },
        },
      },
    ],
  },
};

function createTransformer(transformer) {
  return async (transformOptions, projectRoot, filename, src, fileBuffer) => {
    if (filename && typeof filename === 'string' && filename.endsWith('.svg')) {
      const config = await resolveConfig(resolveConfigDir(filename));
      const svgrConfig = config
        ? { ...defaultSVGRConfig, ...config }
        : defaultSVGRConfig;
      const transformedSrc = await transform(src, svgrConfig, { filePath: filename });
      return transformer.transform(transformOptions, projectRoot, filename, transformedSrc, fileBuffer);
    }
    return transformer.transform(transformOptions, projectRoot, filename, src, fileBuffer);
  };
}

module.exports = { transform: createTransformer(upstreamTransformer) };
