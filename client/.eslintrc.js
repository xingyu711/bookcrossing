module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['src/assets/', 'build/'],
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {'require-jsdoc': 0},
};