export const wrapAsJsdoc = (str) => {
  const lines = str.split('\n')
  const wrapped = ['/**', ...lines.map((l) => ` * ${l}`), ' */'].join('\n')

  return wrapped
}
