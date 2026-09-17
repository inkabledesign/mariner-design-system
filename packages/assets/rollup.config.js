import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import svgr from "@svgr/rollup";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf8"));

const outputs = (commonjsFile, esmFile) => [
  {
    file: commonjsFile,
    format: "cjs",
    exports: "named",
    sourcemap: true,
    interop: "compat",
  },
  {
    file: esmFile,
    format: "esm",
    sourcemap: true,
  },
];

const typescriptPlugin = (declaration = true) =>
  typescript({
    tsconfig: "./tsconfig.json",
    declaration,
    declarationMap: declaration,
  });

const svgPlugin = () =>
  svgr({
    native: true,
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // Icons are sized by their consumers. Keep each asset's authored
              // coordinate system so width/height props scale instead of clip.
              removeViewBox: false,
            },
          },
        },
        "prefixIds",
      ],
    },
  });

const svgViewBoxGuard = () => ({
  name: "mariner-svg-viewbox-guard",
  transform(code, id) {
    if (id.endsWith(".svg") && !/\bviewBox\b/.test(code)) {
      this.error(
        `Generated SVG component is missing its viewBox: ${id}. Icon sizing would clip instead of scale.`,
      );
    }
    return null;
  },
});

export default [
  {
    input: "index.ts",
    output: outputs(pkg.main, pkg.module),
    plugins: [svgPlugin(), svgViewBoxGuard(), json(), typescriptPlugin()],
    external: ["react", "react-native", "react-native-svg"],
  },
  {
    input: "fonts/index.ts",
    output: outputs("dist/fonts/index.js", "dist/fonts/index.esm.js"),
    plugins: [typescriptPlugin(false)],
  },
];
