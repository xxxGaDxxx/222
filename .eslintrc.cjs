module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], ['type']],
        'newlines-between': 'always',
      },
    ],
    semi: ['error', 'always'],
    'linebreak-style': 0,
    'max-len': ['error', { code: 120 }],
    'arrow-body-style': 'off',
    'arrow-parens': [2, 'as-needed'],
    'array-bracket-spacing': 0,
    'react/jsx-key': 2,
    'no-nested-ternary': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/button-has-type': 0,
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-param-reassign': 0,
    'no-console': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/comma-spacing': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/naming-convention': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
