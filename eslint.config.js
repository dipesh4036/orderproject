import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        ignores: ['dist/**', 'node_modules/**'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'no-console': 'off',
            'dot-notation': 'error',
        },
    },
    {
        files: ['**/*.js'],
        ...tseslint.configs.disableTypeChecked,
    },
];
