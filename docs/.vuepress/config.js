module.exports = {
    theme: 'note',
    title: '方块星计划',
    description: '关于方块星这一虚拟星球，这个网站有你所想知道的一切。',
    head: [
        /*['link', { rel: 'icon', href: '/assets/favicon.ico' }],*/
        ['script', { src: '/patcher.js' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        /*['link', { rel: 'apple-touch-icon', href: '/assets/appleTouchIcon.png' }]*/
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
            selector: ".theme-note-content img",
            options: {
                bgColor: '#ffffff',
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
    port: 9997,
    editLinks: true
}