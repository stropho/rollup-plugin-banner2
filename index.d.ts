import * as rollup from 'rollup';

type Falsy = false | 0 | "" | null | undefined

type Stringifiable = {toString: () => string}

/**
 * The `resolveBanner` function returns a banner as
 * - `string`
 * - stringifiable object, i.e. having `toString` method, such as `Buffer`
 * - any falsy value for an empty banner
 * - a `Promise` resolving any of the values mentioned above
 */
type ResolveBanner = (
  chunk: rollup.RenderedChunk,
  options: rollup.OutputOptions,
) =>  string| Falsy | Stringifiable | Promise<string|Falsy|Stringifiable>

type Options = {
  sourcemap?: boolean,
}

declare function banner2 (
  resolveBanner: ResolveBanner,
  options?: Options,
): rollup.Plugin

export default banner2
