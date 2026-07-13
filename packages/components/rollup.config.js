import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    alias({
      entries: [
        { find: '@/components/atoms', replacement: path.resolve(__dirname, 'atoms') },
        { find: '@/components/molecules', replacement: path.resolve(__dirname, 'molecules') },
        { find: '@/atoms', replacement: path.resolve(__dirname, 'atoms') },
        { find: '@/molecules', replacement: path.resolve(__dirname, 'molecules') },
        { find: '@/organisms', replacement: path.resolve(__dirname, 'organisms') },
        { find: '@/templates', replacement: path.resolve(__dirname, 'templates') },
        { find: '@/hooks', replacement: path.resolve(__dirname, 'hooks') },
        { find: '@/data', replacement: path.resolve(__dirname, 'data') },
        { find: '@', replacement: path.resolve(__dirname, '.') }
      ]
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      preferBuiltins: false,
      // Don't resolve external packages (keep @inkabledesign/* and RN libs external)
      resolveOnly: [/^(?!react|react-native|expo-image|@inkabledesign)/]
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationMap: true,
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    'react', 
    'react-native', 
    'react-native-svg',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-safe-area-context',
    'expo-image',
    'nativewind',
    'tailwindcss',
    '@inkabledesign/mariner-theme',
    '@inkabledesign/mariner-assets'
  ],
};
