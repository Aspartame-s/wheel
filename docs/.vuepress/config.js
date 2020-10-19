module.exports = {
    title: 'Aspartame UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [{
                title: '入门',
                // collapsable: false,
                children: ['/install/',
                    '/get-started/',
                ]
            },

            {
                title: '组件', // 必要的
                // path: '/components/button', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                // collapsable: false, // 可选的, 默认值是 true, false就是展开组件
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: ['/components/button', '/components/input'],
                // initialOpenGroupIndex: 1 // 可选的, 默认值是 0 
            }
        ]
    }
}