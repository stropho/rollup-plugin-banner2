import MagicString from 'magic-string'
import { formatters } from './formatters'

const defaultOptions = {
  sourcemap: true,
  formatter: 'identity',
}
export default function banner2(resolveBanner, userOptions) {
  const opts = { ...defaultOptions, ...(userOptions || {}) }

  return {
    name: 'banner2',
    async renderChunk(code, chunk, options) {
      const banner = await resolveBanner(chunk, options)
      if (!banner) return { code, map: null }
      const formatter = formatters[opts.formatter]
      if (!opts.sourcemap) return formatter(banner) + code

      const magicString = new MagicString(code)
      magicString.prepend(formatter(String(banner)))

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
  }
}
