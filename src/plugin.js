import MagicString from 'magic-string'

export default function banner2(resolveBanner) {
  return {
    name: 'banner2',
    async renderChunk(code, chunk, options) {
      const banner = await resolveBanner(chunk, options)
      const magicString = new MagicString(code)
      magicString.prepend(banner)

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
  }
}
