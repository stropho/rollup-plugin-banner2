import * as rollup from 'rollup';

type Falsy = false | 0 | "" | null | undefined

/**
 * The resolveBanner function returns a banner as string,
 * or possibly a Promise resolving a string
 * For no banner, empty string or any other falsy value is acceptable
 */
type ResolveBanner = (
  chunk: rollup.RenderedChunk,
  options: rollup.OutputOptions,
) =>  string| Falsy | Promise<string|Falsy>

type Options = {
  sourcemap?: boolean,
}

declare function banner2 (
  resolveBanner: ResolveBanner,
  options?: Options,
): rollup.Plugin

export default banner2
