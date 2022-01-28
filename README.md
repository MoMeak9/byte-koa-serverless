# byte-koa-serverless

字节跳动训练营进阶班团队项目的Koa后端，主要使用Mock.js模拟真实的性能监控平台的后端，使用TypeScript编写

## 中间件

- koa-body 与 bodyparser 处理请求响应数据
- jwt 鉴权
- loa2-cors 处理跨域
- swagger-jsdoc 生成swagger UI 提供给前端
- koa全家桶：static、router等

## 工具

- nodemon 热加载
- ts-node 未通过tsc情况下运行ts代码，配合nodemon使用
- ip 获取当前服务器ip地址

## 部署

腾讯云Serverless部署，serverless.yml等为配置文件，scf_bootstrap为启动脚本。

## 使用

**构建**

```shell
npm run build
```

**启动服务器（生产环境）**

```shell
npm run start
```

**本地开发**

```shell
npm run dev
```
