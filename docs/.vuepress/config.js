module.exports = {
    base: '/wheel/',
    title: 'Aspartame UI',
    description: '一个简约、易用的 UI 框架',
    themeConfig: {
        logo: 'assets/img/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/get-started/' },
            { text: 'GitHub源码', link: 'https://github.com/Aspartame-s/wheel' }
        ],
        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    '/get-started/',
                    '/install/'
                ]
            },

            {
                title: '组件', // 必要的
                // path: '/components/button', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true, 
                // sidebarDepth: 2, // 可选的, 默认值是 1 
                children: ['/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/tabs',
                    '/components/collapse'
                ],
                // initialOpenGroupIndex: 1 // 可选的, 默认值是 0 
            }
        ]
    }
}