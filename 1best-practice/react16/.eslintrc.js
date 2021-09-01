module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'react-app',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        // 'plugin:eslint-comments/recommended',
        'plugin:import/typescript',
        // 'plugin:unicorn/recommended',
        'prettier',
        // 专门支持了 eslint-plugin-react
        'prettier/react',
        // 专门支持了 @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    globals: {
        HM: true,
        HM_Analytics: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    settings: {
        'import/extensions': ['js', 'jsx', 'ts', 'tsx', 'json'],
        'import/parsers': {
            '@typescript-eslint/parser': ['ts', 'tsx'],
        },
        'import/resolver': {
            // "typescript": {
            //     "directory": "./tsconfig.json"
            // },
            node: {
                extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
            },
            // "alias" : {
            //     "map" : [
            //       ["@components","@constants"]
            //     ],
            //     "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
            // }
        },
    },
    rules: {
        'no-shadow': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': 'off',
        'no-unused-expressions': 'off',
        // 'camelcase': ["error", {"properties": "never", "ignoreDestructuring": true,"ignoreImports": true}]
        camelcase: 'off',
        'consistent-return': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'eslint-comments/disable-enable-pair': 'off',
        'react/prop-types': 'off',
        'no-debugger': 'off',
        'no-console': 'off',
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'always', types: 'always', lib: 'always' },
        ],

        // "unicorn/filename-case": 0,
        // "unicorn/filename-case": ["error", {"cases": {"camelCase": true, "pascalCase": true}}],
        // "file-name-casing": "off"
    },
};
