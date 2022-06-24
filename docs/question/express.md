---
title: 使用express编写后台接口一
author: 崔城
date: '2022-06-29'
categories:
 - 发现的问题
tags:
 - 问题
---
# 使用express编写后台get接口

## 安装express-generator生成器

```
cnpm install -g express-generator
```

## 通过生成器创建项目

```
express serverAPI
```

## 切换至serverAPI目录

```
cd serverAPI
```

## 下载所需依赖

```
cnpm install
```

## 运行项目

```
npm start
```

## 访问项目:在浏览器地址栏输入127.0.0.1:3000

![](https://img-blog.csdnimg.cn/2019092011471199.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTg5Mzg4OQ==,size_16,color_FFFFFF,t_70)

## <a name="_13">;</a> 开始编写接口

### 1. 在项目中安装mongoose

**cnpm install -S mongoose**

### 2. 在项目的根目录下新建models文件夹，用来存放数据表

### 3. 在models中新建db.js文件，进行简单的数据库连接

```js

var mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/mongoose', { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected success.');
});

mongoose.connection.on('error', function () {
    console.log('MongoDB connected fail.');
});

mongoose.connection.on('disconnected', function () {
    console.log('MongoDB connected disconnected.');
});
module.exports = mongoose;
```

### 4. 在models中新建article.js文件，编写mongodb的数据表结构如下

```js
var mongoose = require("./db")
var mongoSchema = mongoose.Schema;
var ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    cid: {
        ref: "articlecate",
        type: mongoSchema.Types.ObjectId
    },
    author_name: {
        type: String
    },
    author_id: {
        ref: "articleuser",
        type: mongoSchema.Types.ObjectId
    },
    description: String,
    content: String
})
module.exports = mongoose.model("article", ArticleSchema);
```

### 5. 在routers目录下新建article.js文件，开始相关接口开发

```js
let express = require('express');
let router = express.Router();
let Notices = require('../models/article');
router.get("/", function (req, res, next) {
    Notices.find({}, function (err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            });
        } else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    });
});
module.exports = router;
```

### 6. 运行项目，打开http://localhost:3000/article查看数据

![](https://img-blog.csdnimg.cn/20190920114032804.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTg5Mzg4OQ==,size_16,color_FFFFFF,t_70)

### <a name="7_postmanhttplocalhost3000article_91">;</a>  7. 在postman中检查接口：http://localhost:3000/article

![](https://img-blog.csdnimg.cn/20190920115257196.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTg5Mzg4OQ==,size_16,color_FFFFFF,t_70)
