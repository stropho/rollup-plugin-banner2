export const identity = (str) => str
export const wrapAsJsdoc = (str) => {
  const lines = str.split('\n')
  const wrapped = ['/**', ...lines.map((l) => ` * ${l}`), ' */\n'].join('\n')

  return wrapped
}

export const formatters = { wrapAsJsdoc, identity }
