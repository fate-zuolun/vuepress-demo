module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/assets/img/home.png' }]
  ],
  title: '崔城的小站',
  themeConfig: {
    lastUpdated: '上次更新',
    // logo: '/assets/img/home.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '我的前端历程', link: '/myWeb/Introduction' },
      { text: '我的项目', link: '/myProject/uniWangYiYun' },
      { text: '关于', link: '/about/aboutMe' },
      {
        text: '友情链接',
        items: [
          { text: 'Gitee', link: 'https://gitee.com/bestcuicheng' },
          { text: 'Github', link: 'https://github.com/CuiChengweb' }
        ]
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: '关于',
          children: ['aboutMe']
        }
      ],
      '/myWeb/': [
        {
          title: '我的前端历程',  //组名
          children: ['Introduction', 'steps'],   //该分组下要显示的文件的目录
        }
      ],
      '/myProject/': [
        {
          title: '我的项目',  //组名
          children: ['uniWangYiYun', 'eleWangYiYun'],   //该分组下要显示的文件的目录
        }
      ],
    },
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        messages: {
          welcome: '欢迎来到崔城的小站', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        }
      }
    ],
    ['@vuepress/back-to-top'],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功"
      }
    }],
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        owner: 'CuiChengweb',
        repo: 'vuepressCommon',
        clientId: '7a825c464c53a6407f75',
        clientSecret: 'ce643ea984fda091c8b0b7c0893a609461969678',
        locale: 'zh',
        autoCreateIssue: true,//自动创建评论
      },
    ]
  ]
}