import nodeResolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';


const banner = {
  banner() {
    return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
  }
}

const plugins = [ nodeResolve(),  banner ];

export default [
  {
    input: 'index.js',
    output: [
      { file: 'dist/pako.esm.js', format: 'esm', },
      { file: 'dist/pako.js', format: 'commonjs', },

    ],
    plugins: [
      nodeResolve(),
      banner
    ]
  },
];
