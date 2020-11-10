import nodeResolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/pako.esm.js',
        preferConst: true,
      },
      {
        format: 'commonjs',
        file: 'dist/pako.js',
        preferConst: true,
      },
    ],
    plugins: [
      nodeResolve(),
    ]
  },
];
