const { resolveConfig, transform } = require('@svgr/core');
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

// @expo/metro-config passes a single object: { filename, src, options, ... }
module.exports = {
  transform: async function transform(transformOptions) {
    const { filename, src } = transformOptions;
    if (filename && typeof filename === 'string' && filename.endsWith('.svg')) {
      const config = (await resolveConfig(filename)) || defaultSVGRConfig;
      const code = await transform(src, { ...defaultSVGRConfig, ...config }, { filePath: filename });
      return upstreamTransformer.transform({ ...transformOptions, src: code });
    }
    return upstreamTransformer.transform(transformOptions);
  },
};
