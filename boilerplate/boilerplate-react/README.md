
## 介绍

这个教程演示项目的想法是通过只在一个文件中展示完整的React生态最佳实践的方式，来直观的告诉你应用程序体系结构和思维模型
的细节。项目代码将尽可能以整洁的风格，最佳的代码组织方式，清晰的逻辑来实现。并且在代码中将写入详细的注解，帮你在阅读代
码的同时，理解和记忆相关概念和实现细节。

项目框架代码是通过[Create React App](https://github.com/facebook/crereact-app)生成的，为了可以自定义配置项目，和添加更多
插件和功能，首先运行了 `yarn eject`,将相关的配置文件copy到项目根目录下。


##  `yarn eject` 执行过程

1. 控制台首先显示把以下文件拷贝到项目根目录下，
```
Adding \config\env.js to the project
Adding \config\getHttpsConfig.js to the project
Adding \config\modules.js to the project
Adding \config\paths.js to the project
Adding \config\pnpTs.js to the project
Adding \config\webpack.config.js to the project
Adding \config\webpackDevServer.config.js to the project
Adding \config\jest\cssTransform.js to the project
Adding \config\jest\fileTransform.js to the project
Adding \scripts\build.js to the project
Adding \scripts\start.js to the project
Adding \scripts\test.js to the project
```

2. Updating the dependencies,

```
Removing react-scripts from dependencies
  Adding @babel/core to dependencies
  Adding @svgr/webpack to dependencies
  Adding @typescript-eslint/eslint-plugin to dependencies
  Adding @typescript-eslint/parser to dependencies
  Adding babel-eslint to dependencies
  Adding babel-jest to dependencies
  Adding babel-loader to dependencies
  Adding babel-plugin-named-asset-import to dependencies
  Adding babel-preset-react-app to dependencies
  Adding camelcase to dependencies
  Adding case-sensitive-paths-webpack-plugin to dependencies
  Adding css-loader to dependencies
  Adding dotenv to dependencies
  Adding dotenv-expand to dependencies
  Adding eslint to dependencies
  Adding eslint-config-react-app to dependencies
  Adding eslint-loader to dependencies
  Adding eslint-plugin-flowtype to dependencies
  Adding eslint-plugin-import to dependencies
  Adding eslint-plugin-jsx-a11y to dependencies
  Adding eslint-plugin-react to dependencies
  Adding eslint-plugin-react-hooks to dependencies
  Adding file-loader to dependencies
  Adding fs-extra to dependencies
  Adding html-webpack-plugin to dependencies
  Adding identity-obj-proxy to dependencies
  Adding jest to dependencies
  Adding jest-environment-jsdom-fourteen to dependencies
  Adding jest-resolve to dependencies
  Adding jest-watch-typeahead to dependencies
  Adding mini-css-extract-plugin to dependencies
  Adding optimize-css-assets-webpack-plugin to dependencies
  Adding pnp-webpack-plugin to dependencies
  Adding postcss-flexbugs-fixes to dependencies
  Adding postcss-loader to dependencies
  Adding postcss-normalize to dependencies
  Adding postcss-preset-env to dependencies
  Adding postcss-safe-parser to dependencies
  Adding react-app-polyfill to dependencies
  Adding react-dev-utils to dependencies
  Adding resolve to dependencies
  Adding resolve-url-loader to dependencies
  Adding sass-loader to dependencies
  Adding semver to dependencies
  Adding style-loader to dependencies
  Adding terser-webpack-plugin to dependencies
  Adding ts-pnp to dependencies
  Adding url-loader to dependencies
  Adding webpack to dependencies
  Adding webpack-dev-server to dependencies
  Adding webpack-manifest-plugin to dependencies
  Adding workbox-webpack-plugin to dependencies

```

3. Updating the scripts

```
  Replacing "react-scripts start" with "node scripts/start.js"
  Replacing "react-scripts build" with "node scripts/build.js"
  Replacing "react-scripts test" with "node scripts/test.js"
```

4. Configuring package.json

```
  Adding Jest configuration
  Adding Babel preset
```

## 开发指南

这个项目是通过[Create React App](https://github.com/facebook/crereact-app)启动的。

### 可用脚本

在项目目录下，你可以运行:

#### `yarn start`

在开发模式下运行app <br />
打开[http://localhost:3000](http://localhost:3000)在浏览器中查看.

如果进行编辑，页面将重新加载。<br />
您还将在控制台中看到任何lint错误。

#### `yarn test`

以交互监视模式启动测试运行程序。<br />
有关更多信息，请参见关于[运行测试]的部分(https://facebook.github.io/crereact-app/docs/running- tests).

#### `yarn build`

将用于生产的应用程序构建到“build”文件夹。< br / >
它在生产模式下正确地绑定了React并优化构建以获得最佳性能。

构建被缩小，文件名包含散列。< br / >
您的应用程序已准备好部署!

有关[部署]的更多信息，请参见https://facebook.github.io/crereact-app/docs/deployment一节.

#### `yarn eject`

**注意:这是一个单向操作。一旦你“弹射”出去，你就回不去了**

如果您对构建工具和配置选项不满意，您可以随时“弹出”。此命令将从项目中删除单个构建依赖项。.

相反，它会将所有的配置文件和传递依赖项(webpack、Babel、ESLint等)直接复制到您的项目中，这样您就可以完全控制它们。
除了' eject '之外，所有的命令都可以工作，但是它们会指向复制的脚本，这样你就可以调整它们了。在这一点上，你只能靠自己了.

你不需要使用' eject '。所策划的特性集适合小型和中型部署，您不应该觉得有义务使用此特性。
但是我们知道，如果您不能在准备好时对其进行自定义，则此工具将毫无用处。

### 了解更多

您可以在[Create React App文档](https://facebook.github.io/cre- react-app/docs/getting-started)了解更多信息。

要学习React，请查看[React文档](https://reactjs.org/)。

#### 代码分离

这个部分已经移到了这里:https://facebook.github.io/crereact-app/docs/code -split

#### 分析包大小

这个部分已经移动到这里:https://facebook.github.io/crereact-app/docs/analyzing-thebundlesize

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### 高级配置

这个部分已经移到了这里:https://facebook.github.io/crereact-app/docs/making-a-progressive -web-app

#### 部署

这个部分已经移到了这里:https://facebook.github.io/crereact-app/docs/deployment

#### `yarn build` 无法压缩

这个部分已经移到了这里:https://facebook.github.io/crereact-app/docs/# npm-run-build- failure -to-minify
