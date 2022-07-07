---
title: Electron-Builder打包时报错could not find :C:\Users\XX\AppData\Local\Temp\t-bDWVX6\0-messages.nsh
author: 崔城
date: "2022-06-28"
categories:
  - 发现的问题
tags:
  - 问题
---

## 项目情况

项目基于 VUE，使用 VUE-cli 3 创建，然后执行

```powershell
vue add electron-builder
```

添加 Electron-Builder

## 问题描述

在执行

```powershell
npm run electron:build
```

的时候，会打包失败，错误日志如下（敏感信息已打码），

```powershell
{ Error: C:\Users\{我的windows账户名}\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.1\Bin\makensis.exe exited with code ERR_ELECTRON_BUILDER_CANNOT_EXECUTE
Output:

Output:
Command line defined: "APP_ID=com.electron.{我的项目名称}"
Command line defined: "APP_GUID=c587bd21-8cd2-5b34-93a3-ad3ca404cd06"
Command line defined: "UNINSTALL_APP_KEY=c587bd21-8cd2-5b34-93a3-ad3ca404cd06"
Command line defined: "PRODUCT_NAME={我的项目名称}"
Command line defined: "PRODUCT_FILENAME={我的项目名称}"
Command line defined: "APP_FILENAME={我的项目名称}"
Command line defined: "APP_DESCRIPTION="
Command line defined: "VERSION=0.1.0"
Command line defined: "PROJECT_DIR=D:\Test\{我的项目名称}"
Command line defined: "BUILD_RESOURCES_DIR=D:\Test\{我的项目名称}\build"
Command line defined: "APP_PACKAGE_NAME={我的项目名称}"
Command line defined: "APP_64=D:\Test\{我的项目名称}\dist_electron\{我的项目名称}-0.1.0-x64.nsis.7z"
Command line defined: "APP_64_NAME={我的项目名称}-0.1.0-x64.nsis.7z"
Command line defined: "APP_64_HASH=8EE6D7EDADFDD46851BD6424FB67BD9E98CD6B405D6B319E3DD582FF7DED068210BD65C46FD93EB98D0DBD012D447DA4E0AD599DFC6A2BD62993EACC16BD3F64"
Command line defined: "APP_INSTALLER_STORE_FILE={我的项目名称}-updater\installer.exe"
Command line defined: "COMPRESSION_METHOD=7z"
Command line defined: "ONE_CLICK"
Command line defined: "RUN_AFTER_FINISH"
Command line defined: "SHORTCUT_NAME={我的项目名称}"
Command line defined: "UNINSTALL_DISPLAY_NAME={我的项目名称} 0.1.0"
Command line defined: "ESTIMATED_SIZE=159797"
Command line defined: "COMPRESS=auto"
Command line defined: "BUILD_UNINSTALLER"
Command line defined: "UNINSTALLER_OUT_FILE=D:\Test\{我的项目名称}\dist_electron\__uninstaller-nsis-{我的项目名称}.exe"
Processing config: C:\Users\��\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.1\nsisconf.nsh
Processing script file: "" (ACP)

Error output:

Error output:
!include: could not find: "C:\Users\{我的windows账户名}\AppData\Local\Temp\t-bDWVX6\0-messages.nsh"
Error in script "" on line 75 -- aborting creation process

    at ChildProcess.childProcess.once.code (D:\Test\{我的项目名称}\node_modules\builder-util\src\util.ts:243:14)
    at Object.onceWrapper (events.js:273:13)
    at ChildProcess.emit (events.js:182:13)
    at maybeClose (internal/child_process.js:978:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:265:5)
  exitCode: 1,
  alreadyLogged: false,
  code: 'ERR_ELECTRON_BUILDER_CANNOT_EXECUTE' }
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! {我的项目名称}@0.1.0 electron:build: `vue-cli-service electron:build`
npm ERR! Exit status 1
npm ERR!

npm ERR! Failed at the {我的项目名称}@0.1.0 electron:build script.

npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\{我的windows账户名}\AppData\Roaming\npm-cache\_logs\2020-12-16T05_39_35_234Z-debug.log
```

从错误日志上来看，产生此错误的原因是，nsis 插件找不到了。但是我打开对应目录，很明显，nsis 是存在的。然后我发现一个关键点，那就是路径中出现了乱码

```powershell
Processing config: C:\Users\��\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.1\nsisconf.nsh
```

显然，是因为我的 windows 账户名是中文，但是在打包过程中，有某些插件不能正确识别中文导致的。
问题的根源已经找到了。怎么办呢。别人出现这个问题，都是项目名称或者路径里出现了中文，改掉就是了，我这个是 AppData 文件夹路径出现中文，怎么改？

处理办法我想到了以下几个

经过一系列的 baidu，google，bing。终于，在一篇博文中发现了解决方案。

打开 node_module/app-builder-lib/out/targets/nsis/NsisTarget.js 文件，在 executeMakensis 方法中加入我们所需的参数。

```js

async executeMakensis(defines, commands, script) {
    const args = this.options.warningsAsErrors === false ? [] : ["-WX"];

    args.push("-INPUTCHARSET", "UTF8");

    for (const name of Object.keys(defines)) {
      const value = defines[name];

      if (value == null) {
        args.push(`-D${name}`);
      } else {
        args.push(`-D${name}=${value}`);
      }
    }
```

经测试，问题完美解决
