## react-repo 项目

### 新项目接入指南

如果你没有阅读过该 repo 下的代码，并且想添加新的项目或者模块进来，需要遵循 repo 约定的规则，否则项目可能无法正常运行。

首先需要将代码目录和 package.json 文件熟悉一下，查看里面的具体内容，以具备初步的项目知识。

第一步、新增项目文件夹下的代码必须具备以下结构

- src/projects/
  -- new-webpage
  -- public
  -- index.html
  -- index.tsx
  -- README.md

当前 webpack html template 文件需要从各自项目下读取，这样做的原因是为了满足不同项目的页面配置需求。该 html 可能会引入不同的脚本，不同的初始化 script，不同的兼容性设置和 seo 信息。

第二步、配置 package.json 可变配置部部分内容，只需要新增项目对应的启动和打包命令即可

package.json 可变配置部分如下，包括了项目本地开发启动命令和发布打包命令，其余内容应该咨询 repo 负责人以后才可以变更，以免导致项目错误。

```
  "start-a": "REACT_PROJECTS=a PORT=3004 node scripts/start.js",
  "build-a": "REACT_PROJECTS=a node scripts/build.js",
```

`start-*` 命令由 `REACT_PROJECTS` 与 `PORT` 俩个环境变量，运行 `scripts/start.js`，启动本地开发 node 服务。注意为了同时开启多个服务，可以调整 `PORT` 的值。但是测试环境授权和账号接口，只可以对本地 3000 端口跨域。

`start-*` 和 `build-*`中的`REACT_PROJECTS`的值，应该为添加在 `src/projects/` 目录下项目文件夹名称

第三步、在云效平台下的项目设置中，选择自定义脚本命令，添加对应项目的构建命令 `build-*`
例如：build-oauth

### 本地运行命令：

REACT_PROJECTS=projectName PORT=\* node scripts/start.js
如：REACT_PROJECTS=oauth PORT=3004 node scripts/start.js
projectName 对应模块的名称，如 nonage、oauth、gdpr、ccpa、openplatform

如果使用包管理工具

#### npm

- 启动命令：npm run start-\*
- 打包命令：npm run build-\*

#### yarn

- 启动命令：yarn start-\*
- 打包命令：yarn build-\*

### 项目详情
