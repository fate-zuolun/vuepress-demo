module.exports = {
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/home.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about/aboutMe' },
      { text: '我的前端历程', link: '/myWeb/myWeb' },
    ],
    sidebar: {
      '/about/': [
        ['aboutMe', '关于我'],
      ],
      '/myWeb/': [
        ['myWeb', '我的前端历程'],
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
  ]
}