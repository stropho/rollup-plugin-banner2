import { rollup } from 'rollup'
import path from 'path'
import banner2 from '../src/plugin'

const OUTPUT_OPTIONS = {
  dir: 'dist',
  chunkFileNames: '[name].js',
  format: 'esm',
}

describe('warnings', () => {
  test('sourcemap support', async () => {
    const onwarnSpy = jest.fn()
    const inputOptions = {
      onwarn: onwarnSpy,
      input: path.resolve(__dirname, './fixture/input-single.js'),
      plugins: [
        banner2(() => '// banner\n'),
      ],
    }
    const outputOptions = {
      ...OUTPUT_OPTIONS,
      sourcemap: true,
    }

    const bundle = await rollup(inputOptions)
    const { output } = await bundle.generate(outputOptions)

    expect(output.length).toBe(1)
    expect(onwarnSpy).toHaveBeenCalledTimes(0)
    expect(output[0].map).toBeTruthy()
    expect(output[0].map.mappings).toBeTruthy()
  })
  test('sourcemap not generated when explicitly set', async () => {
    const onwarnSpy = jest.fn()
    const inputOptions = {
      onwarn: onwarnSpy,
      input: path.resolve(__dirname, './fixture/input-single.js'),
      plugins: [
        banner2(() => '// banner\n', { sourcemap: false }),
      ],
    }
    const outputOptions = {
      ...OUTPUT_OPTIONS,
      sourcemap: true,
    }

    const bundle = await rollup(inputOptions)
    const { output } = await bundle.generate(outputOptions)

    expect(output.length).toBe(1)
    expect(onwarnSpy).toHaveBeenCalledTimes(1)
  })
})

describe('output', () => {
  describe('single entry point', () => {
    test('static banner', async () => {
      const inputOptions = {
        input: path.resolve(__dirname, './fixture/input-single.js'),
        plugins: [
          banner2(() => '// banner\n'),
        ],
      }
      const outputOptions = {
        ...OUTPUT_OPTIONS,
      }

      const bundle = await rollup(inputOptions)
      const { output } = await bundle.generate(outputOptions)

      expect(output.length).toBe(1)
      expect(output[0].code).toMatchSnapshot()
    })
  })
  describe('multi entry point', () => {
    test('static banner', async () => {
      const inputOptions = {
        input: {
          first: path.resolve(__dirname, './fixture/input-multi-first.js'),
          second: path.resolve(__dirname, './fixture/input-multi-second.js'),
        },
        plugins: [
          banner2(() => '// banner\n'),
        ],
      }
      const outputOptions = {
        ...OUTPUT_OPTIONS,
      }

      const bundle = await rollup(inputOptions)
      const { output } = await bundle.generate(outputOptions)

      expect(output.length).toBe(3)
      const firsChunk = output.find((chunk) => chunk.name === 'first')
      expect(firsChunk.code).toMatchSnapshot()
      const secondChunk = output.find((chunk) => chunk.name === 'second')
      expect(secondChunk.code).toMatchSnapshot()
    })
    test('dynamic banner', async () => {
      const inputOptions = {
        input: {
          first: path.resolve(__dirname, './fixture/input-multi-first.js'),
          second: path.resolve(__dirname, './fixture/input-multi-second.js'),
        },
        plugins: [
          banner2((chunk) => `// ${chunk.name} banner\n`),
        ],
      }
      const outputOptions = {
        ...OUTPUT_OPTIONS,
      }

      const bundle = await rollup(inputOptions)
      const { output } = await bundle.generate(outputOptions)

      expect(output.length).toBe(3)
      const firsChunk = output.find((chunk) => chunk.name === 'first')
      expect(firsChunk.code).toMatchSnapshot()
      const secondChunk = output.find((chunk) => chunk.name === 'second')
      expect(secondChunk.code).toMatchSnapshot()
    })
  })
})
