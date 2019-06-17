module.exports = {
  env: {
    jest: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
