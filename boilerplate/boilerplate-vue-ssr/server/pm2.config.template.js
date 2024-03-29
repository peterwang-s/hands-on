module.exports = {
  apps: [
    {
      name: "likericebird-vue-boilerplate",
      script: "./server/server-register.js",
      watch: true,
      ignore_watch: [
        // 从监控目录中排除
        "node_modules",
        "logs",
        "public",
        "static"
      ],
      error_file: "./logs/ssrErr.log",
      out_file: "./logs/ssr.log", // 普通日志路径
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      instances: 2,
      env: {
        NODE_ENV: "NODE_ENV_VALUE",
        NODE_PORT: "NODE_PORT_VALUE",
        NODE_DEPLOY: "NODE_DEPLOY_VALUE"
      }
    }
  ]
};
// max_memory_restart : '100M',   // Optional: Restarts your app if it reaches 100Mo
