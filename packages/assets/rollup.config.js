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

export default [
  {
    input: "index.ts",
    output: outputs(pkg.main, pkg.module),
    plugins: [svgr({ native: true }), json(), typescriptPlugin()],
    external: ["react", "react-native", "react-native-svg"],
  },
  {
    input: "fonts/index.ts",
    output: outputs("dist/fonts/index.js", "dist/fonts/index.esm.js"),
    plugins: [typescriptPlugin(false)],
  },
];
