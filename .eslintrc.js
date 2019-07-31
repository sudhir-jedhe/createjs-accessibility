module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    createjs: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'array-bracket-newline': 'warn',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'import/extensions': [{ js: 'always', json: 'never' }],
    'no-plusplus': 'off',
    'object-curly-newline': 'warn',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'error',
    'object-shorthand': 'error',
    'no-multi-spaces': 'warn',
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-in-parens': 'warn',
    'consistent-return': 'off',
    'no-mixed-operators': 'warn',
    'no-bitwise': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-new': 'warn',
    'no-eval': 'warn',
    'no-lone-blocks': 'off',
    'no-return-assign': 'warn',
    'no-duplicate-case': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'prefer-rest-params': 'warn',
    'react/no-string-refs': 'off',
    'react/require-default-props': 'off',
    'react/no-deprecated': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-restricted-properties': ['off', {
      object: 'Math',
      property: 'pow',
    }],
    'no-continue': 'warn',
    'max-len': 'warn',
    'no-param-reassign': 'off',
    'new-cap': 'warn',
    'quote-props': 'off',
    'no-use-before-define': 'warn',
    'object-curly-newline': 'warn',
    'no-multi-spaces': 'warn',
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    'space-in-parens': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/core-modules': ['createjs', 'TimelineMax'],
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src',
        ],
      },
    },
  },
};
