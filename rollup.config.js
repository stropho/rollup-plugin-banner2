import pkg from './package.json'
import banner2 from './src/index'

export default [
  {
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies || {}),
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      banner2(() => `${pkg.name}@${pkg.version}`, { formatter: 'wrapAsJsdoc' }),
    ],
  },
]
