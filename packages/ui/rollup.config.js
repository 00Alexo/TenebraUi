const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    interop: 'auto'
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    postcss({
      extract: 'index.css',
      minimize: true
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      presets: [
        ['@babel/preset-env', { 
          targets: { 
            browsers: ['last 2 versions'] 
          },
          modules: false 
        }],
        '@babel/preset-react'
      ]
    })
  ],
  external: ['react', 'react-dom']
};