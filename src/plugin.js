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

      const formatterByOption = formatters[opts.formatter]
      const formattedBanner = formatterByOption(String(banner))

      if (!opts.sourcemap) return formattedBanner + code

      const magicString = new MagicString(code)
      magicString.prepend(formattedBanner)

      return {
        code: magicString.toString(),
        map: magicString.generateMap({ hires: true }),
      }
    },
  }
}
