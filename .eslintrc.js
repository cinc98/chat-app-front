module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,

  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error',
      4
    ],
    'linebreak-style': 0,
    'max-len': ['error',
      {
        code: 300, ignoreUrls: true
      }
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]


  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'
        ],
      },
    },
  },
};
