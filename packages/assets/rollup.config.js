import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

export default {
  input: 'index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    svgr({ native: true }),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: ['react', 'react-native', 'react-native-svg'],
};
