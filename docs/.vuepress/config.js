module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/img/headPortrait.jpg' }]
  ],
  title: '崔城的小站',
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/assets/img/headPortrait.jpg',
    type: 'blog',
    subSidebar: 'auto',
    lastUpdated: '上次更新',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '我的前端历程', link: '/myWeb/Introduction', icon: 'reco-message' },
      { text: '我的项目', link: '/myProject/uniWangYiYun', icon: 'reco-blog' },
      { text: '关于', link: '/about/aboutMe', icon: 'reco-account' },
      {
        text: '友情链接',
        items: [
          { text: 'Gitee', link: 'https://gitee.com/bestcuicheng', icon: 'reco-mayun' },
          { text: 'Github', link: 'https://github.com/CuiChengweb', icon: 'reco-github' }
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
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ]
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['whiteCat', 'blackCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
        messages: {
          welcome: '欢迎来到崔城的小站', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        },
        width: 200,
        height: 270
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
    ],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    [
      'dynamic-title',
      {
        //  showIcon: '/favicon.ico',
         showText: '(/≧▽≦/)咦！又好了！',
        //  hideIcon: '/failure.ico',
         hideText: '(●—●)喔哟，崩溃啦！',
         recoverTime: 2000,
      },
   ],
  ]
}