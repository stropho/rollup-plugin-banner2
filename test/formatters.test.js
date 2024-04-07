import { docBlock } from '../src/formatters'

describe('formatters', () => {
  describe('docBlock', () => {
    it('wraps a single line', () => {
      const input = 'this is a banner'

      const actualResult = docBlock(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * this is a banner
         */
        "
      `)
    })
    it('wraps multiple lines', () => {
      const input = 'this is a banner\nwith\nmore\nlines\n'

      const actualResult = docBlock(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * this is a banner
         * with
         * more
         * lines
         * 
         */
        "
      `)
    })
    it('does not correctly wrap comments', () => {
      const input = '/* comments */'

      const actualResult = docBlock(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * /* comments */
         */
        "
      `)
    })
  })
})
