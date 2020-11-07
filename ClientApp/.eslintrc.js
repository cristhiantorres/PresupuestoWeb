module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        'plugin:prettier/recommended'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      'prettier/prettier': 'error',
    },
    "settings": {
      "import/resolver": {
        alias: {
          map: [
            ['layouts', './src/components/layout']
          ],
          extensions: ['.ts', '.js', '.jsx', '.json']
        }
      },
    },
  };
  