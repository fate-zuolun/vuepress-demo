module.exports = {
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/home.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about/aboutMe' },
      { text: '我的前端历程', link: '/myWeb/myWeb' },
      { text: '我的项目', link: '/myProject/uniWangYiYun' },
    ],
    sidebar: {
      '/about/': [
        ['aboutMe', '关于我'],
      ],
      '/myWeb/': [
        ['myWeb', '我的前端历程'],
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
        theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
      }
    ],
    ['@vuepress/back-to-top'],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功"
      }
    }]
  ]
}