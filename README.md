# electron-initbase

一个 Electron 应用，支持渲染本地静态文件和代理请求远端页面

> 基于 Windows 平台的构建、开发和测试，因此可能在别的平台上还存在一些问题
>
> Windows: 推荐 Windows 10 及以上版本



#### fetch

```
git clone https://github.com/ctime-zliang/electron-initbase
```



#### usage

```
// 具体以 package.json 中定义的命令为准

// 构建一个仅 koa 支持的服务脚本的开发包文件或生产包文件
npm run build:server:*

// 构建一个适用于 electron 的服务脚本的开发包文件或生产包文件
npm run build:electron:*

// 启动一个仅基于 koa 支持的服务
// 以开发模式为例, 需先执行 npm run build:server:dev
npm run start:server

// 以开发方式运行一个 Electron 应用
// 以开发模式为例, 需首先执行 npm run build:electron:dev
npm run start:electron:dev
```

