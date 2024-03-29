module.exports = {
    trailingComma: 'all',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    endOfLine: 'auto',
    printWidth: 100,
    overrides: [
        {
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
    useTabs: false,
    bracketSpacing: true,
};
