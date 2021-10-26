module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'jest',
    'react',
    '@typescript-eslint'
  ],
  rules: {
    // workaround: https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
