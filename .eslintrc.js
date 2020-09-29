module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.'
  },
  env: {
    browser: true,
    'jest/globals': true
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'jest',
    'prettier',
    'react',
    'html'
  ],
  extends: [
    'airbnb',
    'react-app',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    // Suppresses missing file extension errors on imports
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    /**
     * @description rules of eslint official
     */
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/no-cycle': 'off', // Ignore cyclical dependency errors on SVG imports
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use "type"
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type

    /**
     * @description rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx']
      }
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error',

    /**
     * @description rules of eslint-plugin-prettier
     */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true
      }
    ],
    'react/jsx-one-expression-per-line': ['off'],

    // TODO: Issues to look at after extensive Linting is complete
    'react/no-array-index-key': ['off'],
    'react/jsx-key': ['off'],
    'react/display-name': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'import/named': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off'],
    '@typescript-eslint/camelcase': ['off'],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false }
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    'consistent-return': ['off'],
    camelcase: [1, { properties: 'never' }],
    'dot-notation': ['off'],
    'no-param-reassign': ['off'],
    'import/export': ['off'],
    'prefer-destructuring': ['off'],
    'no-shadow': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    '@typescript-eslint/no-explicit-any': ['off']
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
