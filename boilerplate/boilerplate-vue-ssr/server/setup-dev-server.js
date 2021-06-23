const bundle = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");
function setupServer(app, createRenderer) {
  createRenderer(bundle, {
    clientManifest
  });
}
module.exports = {
  setupServer
};
