"use strict";
const path = require("path");
import development from './development'
import production from './production'
import test from './staging'

let env = {
  development,
  test,
  production,
}
console.log(`启动环境变量：${process.env.NODE_ENV}`)
let config = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: process.env.NODE_ENV || 'development',
    host: '',
    port: 3000,
    name: "data-interface",
    excluded: "excluded_path",
    default_avatar: ''
  },
  jwt: {
    secret: 'data-interface', // 默认
  },
  redis: {
    host: '127.0.0.1',
    port: 6379
  }
};

config = (function (config, env, NODE_ENV) {
  return {...config, ...env[NODE_ENV || "development"]()}
}(config, env, process.env.NODE_ENV));

export default config
