---
title: git "Could not read from remote repository.Please make sure you have the correct access rights."解决方案
author: 崔城
date: '2022-06-29'
categories:
 - 发现的问题
tags:
 - 问题
---

git clone 项目时，出现Could not read from remote repository.Please make sure you have the correct access rights.

![](https://img-blog.csdn.net/20171103094838246?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhhb3l1X202OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
这就说明你没有添加github的SSH Key或者需要重新添加。

步骤如下：

1、重新在git设置一下身份的名字和邮箱
git config –global user.name "yourname"
git config –global user.email"your@email.com"
没有返回是最好的回馈，说明设置成功
global 前面是双-

2、C盘搜索.ssh文件，删除known_hosts

3、Git Bash中输入
ssh-keygen -t rsa -C "your@email.com"（刚才设置的邮箱）

出现：Generating public/private rsa key pair.

Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):
直接按下回车命令行结束
![](https://img-blog.csdn.net/20171103095543364?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhhb3l1X202OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

这样会在刚才的文件夹里新生成两个文件。id_rsa和id_rsa.pub
用记事本打开id_rsa.pub ，Ctrl+A全部复制。

4、打开Github主页，登录账户->设置->SSH和GPG Keys->New SSH Key
Title : mySSH
Key : 粘贴刚才复制的
点击Add New Key.

5、在git中输入命令：
ssh -T git@github.com
输入yes
![](https://img-blog.csdn.net/20171103105416386?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhhb3l1X202OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

继续刚才的git clone

![](https://img-blog.csdn.net/20171103105618220?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvemhhb3l1X202OQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

结束。
