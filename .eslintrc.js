module.exports = {
    extends: 'airbnb-base',
    plugins: [ 'babel' ],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    globals: {

    },
    parser: 'babel-eslint',
    rules: {
      'space-before-function-paren': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
      'no-underscore-dangle': 0
    }
};
