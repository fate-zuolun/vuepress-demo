module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [['link', { rel: 'icon', href: '/assets/img/bingguo3.jpg' }]],
  title: 'w行列式的博客',
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/bingguo3.jpg',
    blogConfig: {
      category: {
        location: 2,
      },
      tag: {
        location: 3,
      },
      socialLinks: [
        // 信息栏展示社交信息
        { link: 'https://gitee.com/bestcuicheng', icon: 'reco-mayun' },
        { link: 'https://github.com/CuiChengweb', icon: 'reco-github' },
      ],
    },
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    authorAvatar: '/assets/img/bingguo3.jpg',
    type: 'blog',
    subSidebar: 'auto',
    lastUpdated: '上次更新',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '小工具', link: '/Gadgets/Gadgets', icon: 'reco-eye' },
      // { text: '关于', link: '/myWeb/aboutMe', icon: 'reco-account' },
      {
        text: '留言版',
        link: '/messageBoard/messageBoard',
        icon: 'reco-message',
      },
      // {
      //   text: '友情链接',
      //   items: [
      //     {
      //       text: 'Gitee',
      //       link: 'https://gitee.com/bestcuicheng',
      //       icon: 'reco-mayun',
      //     },
      //     {
      //       text: 'Github',
      //       link: 'https://github.com/CuiChengweb',
      //       icon: 'reco-github',
      //     },
      //   ],
      // },
    ],
    // sidebar: {
    //   '/myWeb/': [
    //     {
    //       title: '前端', //组名
    //       children: ['HTML-01网页', 'HTML-02网页', 'HTML'],
    //     },
    //   ],
    //   '/myAlgorithm/': [
    //     {
    //       title: '算法',
    //       children: ['Python语法', '二分', '行列式'],
    //     },
    //   ],
    // },
    friendLink: [
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   logo: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
      //   link: 'https://vuepress-theme-reco.recoluan.com',
      // },
      // ...
    ],
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['wanko'],
        // messages: {
        //   close: '再见啦~',
        // },
        clean: true,
        modelStyle: {
          position: 'fixed',
          left: '30px',
          bottom: '0px',
          zIndex: 99999,
          pointerEvents: 'none',
        },
        width: 200,
        height: 270,
      },
    ],
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功',
        },
      },
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'CuiChengweb',
        repo: 'vuepressCommon',
        clientId: '7a825c464c53a6407f75',
        clientSecret: 'ce643ea984fda091c8b0b7c0893a609461969678',
        locale: 'zh',
        autoCreateIssue: true, //自动创建评论
      },
    ],
    [
      'ribbon-animation',
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: '80%',
          // 色带HSL亮度量
          colorBrightness: '60%',
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: 'center',
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
    // [
    //   'dynamic-title',
    //   {
    //     showText: '(/≧▽≦/)咦！又好了！',
    //     hideText: '(●—●)喔哟，崩溃啦！',
    //     recoverTime: 2000,
    //   },
    // ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        autoShrink: true,
        autoplay: true,
        audios: [
          {
            name: '亲爱的旅人啊',
            artist: '周深',
            url: '/music/亲爱的旅人啊.mp3',
            cover:
              'http://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg?param=130y130',
          },
          {
            name: '起风了',
            artist: '买辣椒也用券',
            url: '/music/起风了.mp3',
            cover:
              'http://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg?param=130y130',
          },
          {
            name: '追光者',
            artist: '岑宁儿',
            url: '/music/追光者.mp3',
            cover:
              'http://p2.music.126.net/ZZAQGWl9mR7g5xCyWWH3Pw==/19149094509535913.jpg?param=130y130',
          },
        ],
      },
    ],
  ],
}
