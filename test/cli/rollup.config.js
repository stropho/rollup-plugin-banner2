import banner2 from '../../dist/rollup-plugin-banner2.es'

const input = 'test/fixture/input-multi-first.js'
export default [
  {
    input,
    plugins: [banner2(() => '// banner\n')],
  },
  {
    input,
    plugins: [banner2(() => 'banner', { formatter: 'docBlock' })],
  },
]
