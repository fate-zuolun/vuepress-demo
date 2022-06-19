module.exports = {
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/assets/img/home.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about/aboutMe' },
    ],
    sidebar: {
      '/about/': [
        ['aboutMe','关于我'],
        ['aboutindex','aboutindex的东西'],
      ],
    }
  }
}