export const identity = (str) => str

export const docBlock = (str) => {
  const lines = str.split('\n')
  const wrapped = ['/**', ...lines.map((l) => ` * ${l}`), ' */\n'].join('\n')

  return wrapped
}

export const docBlockAndGap = (str) => {
  return `${docBlock(str)}\n`
}

export const formatters = { docBlock, docBlockAndGap, identity }
