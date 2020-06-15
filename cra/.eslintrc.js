module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', "prettier"],
  rules: {
    'comma-dangle': 0,
    'no-param-reassign': 'off',
    'react/prop-types': 0,
    'prettier/prettier': 'warn',
    semi: 0,
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
