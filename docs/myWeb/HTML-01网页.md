---
title: HTML-01网页
author: W行列式
date: '2023-12-07'
categories:
  - 前端
tags:
  - HTML
---

## 1. 网站和网页

### 1.1 定义

根据百度百科:book:：

网站(Website)是指在[因特网](https://baike.baidu.com/item/因特网/114119?fromModule=lemma_inlink)上根据一定的规则，使用 [HTML](https://baike.baidu.com/item/HTML?fromModule=lemma_inlink)（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073?fromModule=lemma_inlink)）等工具制作的用于展示特定内容相关[网页](https://baike.baidu.com/item/网页/99347?fromModule=lemma_inlink)的集合。

而网页是构成[网站](https://baike.baidu.com/item/网站/155722?fromModule=lemma_inlink)的[基本](https://baike.baidu.com/item/基本/763181?fromModule=lemma_inlink)[元素](https://baike.baidu.com/item/元素/29645?fromModule=lemma_inlink)，是承载各种网站应用的平台。

<br/>

### 1.2 具体呈现方式

以 csdn 为例，其首页大概长这样：

![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-53-11.png)

但是呢，csdn 还有其他网页：

比如社区页面：

![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-54-49.png)

博客页面：

![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-53-11.png)
也就是有很多个页面，组成了 csdn 这个网站。

但**网站也可能只有一个页面组成.**

<br/>

### 1.3 网页由 HTML 文件组成

而我们所看见的**网页**，由**图片、文字、音频、视频等元素组合**而成，而我们所看到的文件一般都是以 `.html` 为后缀，所以叫 HTML 文件。

在 Chrome 浏览器 F12 查看首页源码：
![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-56-42.png)

可见这就是一个 HTML 文件

<br/>

## 2. HTML

### 2.1 定义

那刚才可能会有小伙伴们疑惑:thinking:​，什么是 HTML 呢？

HTML（**Hyper Text Markup Language**）的全称为**超文本标记语言**，是一种**标记语言**，:heavy_exclamation_mark:不是编程语言。

<br/>

### 2.2 超文本

文本很好理解，但超文本又是什么？

- 可以插入音频、视频、图片，超越了文本的限制。
- 超链接：可以从一个网页跳转到另外一个网页。

<br/>

## 3. 网页的形成

**网页是由网页元素组成**，而**元素通过 html 标签（标记）描述**出来的，然后通过**浏览器解析**来显示给用户的。

图栗:chestnut:（csdn 首页源码在 Chrome 浏览器转化为我们所看到的页面）
![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-57-41.png)

<br/>

## 4. 常用的浏览器

### 4.1 五大浏览器

![](/assets/HTML_img/01网页/Snipaste_2023-12-07_02-58-27.png)

从上到下，从左到右分别为：

- Edge 浏览器（原 IE 浏览器，现在微软已经永久关闭对“ Internet Explorer（IE）“的支持，这意味着 IE 已经退役）
- Chrome 浏览器
- Firefox 浏览器
- Safari 浏览器
- Opera 浏览器

国内也有自己的浏览器，但因为其本身缺点：不纯净，使用感差等，没有做到真正走向国际，所以就没有纳入五大浏览器的范畴。

<br/>

### 4.2 浏览器内核

浏览器内核也就是渲染引擎（Rendering Engine），我们之前介绍过他可以把源码，通过解析计算后得到我们所看到的漂亮的网页。

而我们常说的**兼容问题**，**根本原因是：各个浏览器内核不同，导致计算方式可能不同，从而渲染也不同**。

| 浏览器  | 内核                      |
| ------- | ------------------------- |
| IE      | Trident                   |
| Edge    | Blink                     |
| Chrome  | Webkit -> Blink           |
| Firefox | Gecko                     |
| Safari  | Webkit                    |
| Opera   | Presto -> Webkit -> Blink |

以上浏览器都是**单内核**，而浏览器同样**存在双内核（极速模式+兼容模式）**：

如：搜狗，QQ 浏览器等，用的就是 Trident（兼容模式）+ Webkit（极速模式）双内核

<br/>

## 5. web 标准

### 5.1 定义

由于不同浏览器可能因为内核出现兼容问题，使得他们显示的页面或者排版就有差异，所以需要 web 标准来限制。

**Web 标准**是由 **W3C**(**World Wide Web**) 组织和其他标准化组织制定的一系列标准的集合, W3C(万维网联盟)是国际最著名的标准化组织。

<br/>

### 5.2 主要方面

web 标准主要包括**结构(Structure)**，**表现(Presentation)**，**行为(Behavior)** 三个方面。

| web 标准 | 语言       |
| -------- | ---------- |
| 结构     | HTML       |
| 表现     | CSS        |
| 行为     | JavaScript |

以人为例：

结构 --> 我们的骨架（网页的整体架构）

表现 --> 我们的衣服裤子，外在的服饰（网页的外观）

行为 --> 我们挥手、点头等动作（网页的交互）

<br/>

### 5.3 最佳体验方案

web 标准提出**最佳体验方案**是：**结构、表现、行为相互分离**，即结构写到 HTML 文件里，表现写到 CSS 文件里，行为写到 JavaScript 文件里。

<br/>

> 本文主要学习[黑马程序员 pink 老师的视频](https://www.bilibili.com/video/BV14J4114768/?vd_source=5daf80b362029d978c07d6e131b62653)

如有错误，敬请指正，欢迎交流:handshake:，谢谢 ♪(･ω･)ﾉ
<Vssue title="messageBoard" />
