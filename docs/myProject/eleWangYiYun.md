---
title: electron开发网易云桌面应用 
author: 崔城
date: '2022-06-22'
---

[点击此处][1]
进入该项目代码仓库

  [1]: https://gitee.com/bestcuicheng/wangyiyun

## 介绍
1. 本项目后端接口来自网易云音乐 NodeJS 版 API，API文档地址是：<https://neteasecloudmusicapi.vercel.app/#/>

2. 本项目前端均是本人独立自主开发，所用技术栈：electron.js、Sass、Vue(2.x And 3.x版本)，本项目最初是用Vue2.x的版本来进行开发，后来又利用Vue3.x的composition-api和setup语法对项目进行重构，故该项目有两个版本，这两个版本分别存放在代码仓库的两个分支中（master分支和2.0分支），master分支中的项目是用Vue2.x的版本进行开发的，2.0的分支中是用Vue3.x的版本进行开发的

3. 该项目由于是桌面端应用，所以没有项目演示地址，可自行clone该项目，执行命令打包成桌面端应用来查看，具体打包步骤看下方<span style="color:#3eaf7c;">项目启动教程</span>部分

## 项目启动教程
  1. 首先，先执行以下命令下载项目
  ```
   git clone git@gitee.com:bestcuicheng/wangyiyun.git
  ```
  如果你没有gitee的账号，请用以下方式
  ```
  git clone https://gitee.com/bestcuicheng/wangyiyun.git
  ```

  2. 在项目根目录执行命令，下载依赖
  ```
   npm i --registry=https://registry.npm.taobao.org
  ```

  3. 下载完依赖之后，您可以执行以下命令打包
  ```
   npm run electron:build
  ```

  4. 打包完成之后，进入dist文件里面，找到安装包，安装即可，安装完以后，就可运行项目了

  <Vssue title="eleWangYiYun" />
    
