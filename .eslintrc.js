module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'avoidEscape':true,
    'jest/valid-expect-in-promise': 'off',
    'import/extensions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'node/no-extraneous-require': 'off',
    'import/no-cycle': 'off',
    'jest/require-tothrow-message': 'off',
    'callback-return': 'off',
    'func-style': 'off',
    'react/display-name': 'off',
    'shopify/restrict-full-import': ['error', 'lodash'],
    'shopify/jsx-no-hardcoded-content': 'off',
    // reports false positives with React's useRef hook
    'require-atomic-updates': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'import/no-extraneous-dependencies': 'error',
  },
};
