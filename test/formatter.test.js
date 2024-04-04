import { wrapAsJsdoc } from '../src/formatter'

describe('formatter', () => {
  describe('wrapAsJsdoc', () => {
    it('wraps a space', () => {
      const input = ' '

      const actualResult = wrapAsJsdoc(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         *  
         */"
      `)
    })
    it('wraps a single line', () => {
      const input = 'this is a banner'

      const actualResult = wrapAsJsdoc(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * this is a banner
         */"
      `)
    })
    it('wraps multiple lines', () => {
      const input = 'this is a banner\nwith\nmore\nlines\n'

      const actualResult = wrapAsJsdoc(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * this is a banner
         * with
         * more
         * lines
         * 
         */"
      `)
    })
    it('does not correctly wrap comments', () => {
      const input = '/* comments */'

      const actualResult = wrapAsJsdoc(input)

      expect(`\n${actualResult}`).toMatchInlineSnapshot(`
        "
        /**
         * /* comments */
         */"
      `)
    })
  })
})
