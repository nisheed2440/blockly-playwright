import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import env from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'blocklyPlaywright',
            file: pkg.browser,
            format: 'umd',
        },
        external: ['blockly'],
        plugins: [resolve(), commonjs(), json(), terser()],
    },
    {
        input: 'src/index.js',
        external: ['blockly'],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' },
        ],
        plugins: [resolve(), commonjs(), json()],
    },
    {
        input: 'src/demo/worker.js',
        output: {
            file: 'dist/worker.js',
            format: 'iife',
        },
        plugins: [resolve(), commonjs(), json(), terser()],
    },
    {
        input: 'src/demo/demo.js',
        output: {
            file: 'dist/demo.js',
            format: 'iife',
        },
        external: ['blockly'],
        plugins: [
            postcss({
                extract: true,
                minimize: true,
                plugins: [
                    env({
                        browsers: 'last 2 versions',
                    }),
                    autoprefixer(),
                ],
            }),
            resolve(),
            commonjs(),
            json(),
            terser(),
            copy({
                targets: [{ src: 'public/**/*', dest: 'dist' }],
            }),
        ],
    },
];
