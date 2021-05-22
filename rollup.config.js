import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import scss from 'rollup-plugin-scss';
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
        plugins: [resolve(), json()],
    },
    {
        input: 'src/worker.js',
        output: {
            file: 'dist/worker.js',
            format: 'iife',
        },
        plugins: [terser()],
    },
    {
        input: 'src/demo.js',
        output: {
            file: 'dist/demo.js',
            format: 'iife',
        },
        plugins: [
            terser(),
            copy({
                targets: [{ src: 'public/**/*', dest: 'dist' }],
            }),
            serve('dist'),
            scss(),
        ],
    },
];
