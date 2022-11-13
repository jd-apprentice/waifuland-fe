module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/prop-types': 0,
        'linebreak-style': 1,
        quotes: ['error', 'double'],
        semi: 1,
        '@typescript-eslint/semi': 1,
    },
    include: ['src/**/*'],
}
