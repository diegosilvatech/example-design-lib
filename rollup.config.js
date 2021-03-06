import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    filesize()
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    'styled-media-query',
    'polished'
  ]
};
