const path = require("path");
const webpack = require("webpack");
const MemoryFS = require("memory-fs");
const webpackConfig = require("@vue/cli-service/webpack.config");
const axios = require("axios");
const chalk = require("chalk");
const proxy = require("koa-proxies");
import config from "./config";
const isServerRenderPage = require("./ssr-page-config");
const staticHost = "http://127.0.0.1:8081";

let renderer = null;
// 2、编译webpack配置文件
const serverCompiler = webpack(webpackConfig);

// 指定输出到的内存流中
const mfs = new MemoryFS();
serverCompiler.outputFileSystem = mfs;

// 3、监听文件修改，实时编译获取最新的 vue-ssr-server-bundle.json
let bundle = null;
let clientManifest = null;
serverCompiler.watch({}, (err, stats) => {
  if (err) {
    throw err;
  }
  stats = stats.toJson();
  stats.errors.forEach(error => console.error(error));
  stats.warnings.forEach(warn => console.warn(warn));
  const bundlePath = path.join(
    webpackConfig.output.path,
    "vue-ssr-server-bundle.json"
  );
  bundle = JSON.parse(mfs.readFileSync(bundlePath, "utf-8"));
  if (clientManifest) {
    renderer(bundle, {
      clientManifest
    });
  } else {
    clientCompilerUpdate();
  }
  console.log("new bundle generated", Boolean(bundle), Boolean(clientManifest));
});

const updateClientManifest = async () => {
  const result = await axios.get(`${staticHost}/vue-ssr-client-manifest.json`);
  if (result.data) {
    clientManifest = result.data;
  } else {
    console.log("updateClientManifest err", result);
  }
  serverLog();
};

const clientCompilerUpdate = async () => {
  await updateClientManifest();
  if (bundle && clientManifest) {
    renderer(bundle, {
      clientManifest
    });
  }
};

function serverLog() {
  console.log(
    ` Current App running at:   ${chalk.yellow(
      "http://localhost:8080"
    )} , ignore 8081 port`
  );
  console.log();
}
async function setupServer(app, createRenderer) {
  devMiddleWare(app);
  renderer = createRenderer;
}
module.exports = {
  setupServer,
  setupAppServer
};

// FIX DEV SOCKET BUG: WebSocket failed: Connection closed before receiving a handshake response And dev Http response closed while proxying
function setupAppServer(appServer) {
  appServer.on("upgrade", function(req, socket, head) {
    proxy.proxy.ws(req, socket, head, {
      target: "ws://localhost:8081"
    });
  });
}

function devMiddleWare(app) {
  // 接口代理
  const proxyTable = config.dev.proxyTable;
  Object.keys(proxyTable).forEach(function(key) {
    const item = proxyTable[key];
    if (item.pathRewrite) {
      // fix server koa proxy no working pathRewrite
      let pathRewriteKey = Object.keys(item.pathRewrite)[0];
      item.rewrite = path =>
        path.replace(
          new RegExp(pathRewriteKey),
          item.pathRewrite[pathRewriteKey]
        );
    }
    app.use(proxy(key, item));
  });
  // 静态资源代理
  app.use(async (ctx, next) => {
    //服务端渲染命中的继续走 server.index
    //非命中的统一走前端渲染
    if (isServerRenderPage(ctx, ctx.cookie || {})) {
      await next();
    } else {
      await proxy(ctx.path, {
        target: staticHost,
        changeOrigin: true
      })(ctx, next);
    }
  });
}
