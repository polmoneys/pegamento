module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/display-name': 0,
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    'no-new': 'warn',
  },
}
