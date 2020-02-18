module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Enyata', link: '/enyata/' },
            { text: 'About me', link: 'https://github.com/adisamicheal' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'frontend',
                'backend',
            ],
            '/enyata/': [
                '',
            ]
        }
    }
}