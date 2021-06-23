# likericebird-vue-boilerplate

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 添加服务端渲染（SSR）功能

具体步骤
##### 1. 安装vue框架配套的官方服务端渲染器插件

```
yarn add -S vue-server-renderer
```

##### 2. 安装node框架

```
yarn add -S express
```

##### 3. 为了在node中支持es6/es7语法，添加babel预置插件
修改俩处文件，

```
.babelrc
package.json
```
安装相关依赖项
```
@babel/cli
@babel/core
@babel/node
@babel/plugin-syntax-dynamic-import
@babel/plugin-transform-async-to-generator
@babel/plugin-transform-exponentiation-operator
@babel/plugin-transform-runtime
@babel/polyfill
@babel/preset-env
@babel/register
@babel/runtime
@vue/babel-plugin-transform-vue-jsx
babel-plugin-component
```

##### 4. 再添加 server-register.js

对运行时代码进行语法转义（这块后期可以改成ts进行静态编译）
```
require("@babel/register");
require("@babel/polyfill");

require("./koa-server.js");
```

##### 5. vue spa 应用改造
分别在项目中添加了定制的 vue-cli3脚手架配置文件 vue.config.js，entry-client.js，entry-koa-server.js，

```
vue.config.js
entry-client.js
entry-koa-server.js
```
对vue spa 的应用脚本进行改造，转变实例为实例工厂

```
import { sync } from "vuex-router-sync"; //

...

export function createRouter() { ... }
export function createStore() { ... }
export function createApp() {

...
return { app, router, store }
}
```


##### 6. ssr 服务器开发

添加了俩个版本，以便于对比俩个node框架编程差异
```
koa
koa-static
koa-cookie
koa-mount
lru-cache
koa-morgan
```

