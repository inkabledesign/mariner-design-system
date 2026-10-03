const path = require('path');
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

// Support both Metro signatures:
//   modern:  transform({ filename, src, options, plugins, ... })
//   legacy:  transform(transformOptions, projectRoot, filename, src, fileBuffer)
module.exports = {
  transform: async function transform() {
    const args = Array.from(arguments);
    const first = args[0] || {};
    const isModern = typeof first === 'object' && 'src' in first;
    const filename = isModern ? first.filename : args[2];
    const src = isModern ? first.src : args[3];

    if (filename && typeof filename === 'string' && filename.endsWith('.svg')) {
      const config = (await resolveConfig(path.dirname(filename))) || defaultSVGRConfig;
      const code = await transform(src, { ...defaultSVGRConfig, ...config }, { filePath: filename });
      if (isModern) {
        return upstreamTransformer.transform({
          ...first,
          src: code,
          options: first.options ?? {},
        });
      }
      args[3] = code;
      return upstreamTransformer.transform.apply(null, args);
    }
    return upstreamTransformer.transform.apply(null, args);
  },
};
