module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules/*', '.parcel-cache/*', '.eslintrc.js', 'mock-server/*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': ['error', { "ignoreRestSiblings": true }],
    'import/order': 0,
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // common types
          ['^@/types'],
          // Internal packages.
          // api
          ['^@?\\/api'],
          // utils
          ['^@?\\/utils'],
          // UI
          ['^@?\\/ui\\/[^ce]', '^@?\\/ui\\/e', '^@?\\/ui\\/c'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-console': 'off',
        'no-restricted-syntax': [
          'warn',
          {
            selector:
              'CallExpression[callee.object.name="console"][callee.property.name=/^(log|warn|info|trace)$/]',
            message: 'Unexpected property on console object was called',
          },
        ],
      },
    },
  ],
  globals: {
    caches: false,
    fetch: false,
  },
}
