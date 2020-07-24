module.exports = {
    theme: 'antdocs',
    title: '方块星计划',
    description: '关于方块星这一虚拟星球，这个网站有你所想知道的一切。',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['script', { src: '/patcher.js' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    evergreen: true,
    shouldPrefetch: () => false,
    plugins: {
        /*'sitemap': {
            hostname: 'https://getwnr.com'
        },*/
        'smooth-scroll': {},
        "pangu": {},
        'zooming': {
            selector: ".theme-antdocs-content img",
            options: {
                bgColor: '#fefefe',
                zIndex: 10000
            }
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        },
        /*'canonical': {
            baseURL: 'https://getwnr.com'
        },*/
        'img-lazy': {}
    },
    lastUpdated: '上次更新',
    port: 9997,
    themeConfig: {
        logo: 'icon-144.png',
        repo: 'ScrisStudio/projectKube',
        backToTop: true,
        nav: [
            { text: '简介与地图', link: '/introduction/' },
            { text: '词条', link: '/wiki/' },
            { text: '关于', link: '/about/' }
        ],
        sidebar: {
            "/introduction/": [{
                title: '简介与地图',
                collapsable: false,
                children: [
                    'introduction',
                    'map'
                ]
            }]
        }
    }
}