import MagicString from 'magic-string'

const defaultOptions = {
  sourcemap: true,
}
export default function banner2(resolveBanner, userOptions) {
  const opts = { ...defaultOptions, ...userOptions || {} }

  return {
    name: 'banner2',
    async renderChunk(code, chunk, options) {
      const banner = await resolveBanner(chunk, options)
      if (!banner) return { code, map: null }
      if (!opts.sourcemap) return banner + code

      const magicString = new MagicString(code)
      magicString.prepend(String(banner))

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
  }
}
