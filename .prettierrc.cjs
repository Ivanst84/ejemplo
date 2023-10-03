module.exports = {
    semi: true,
    singleQuote: fals,
    tabWidth: 2,
    useTabs: true,
    plugin: [require('prettier-plugin-astro')],
    overrides: [{
        files: '**/*.astro',
        options: {
            parse: 'astro',

        },
    },
    ],
}