import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from './package.json'

export default [
    {
        input: 'src/index.js',
        output: {
            name: 'blocklyPlaywright',
            file: pkg.browser,
            format: 'umd',
        },
        external: ['blockly'],
        plugins: [resolve(), commonjs(), json()],
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
]
