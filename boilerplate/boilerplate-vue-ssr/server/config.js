export default {
  assetsPublicPath: undefined,
  dev: {
    proxyTable:{
      "/api/": {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          "^/api/": "/"
        }
      }
    }
  }
}
