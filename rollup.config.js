import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/lazyload.js',
    output: [
        {
            exports: 'default',
            file: 'dist/lazyload.min.js',
            format: 'cjs',
            plugins: [terser()]
        },
        {
            exports: 'default',
            file: 'demo/lazyload.min.js',
            format: 'iife',
            name: 'lazyload',
            plugins: [terser()]
        }
    ]
};
