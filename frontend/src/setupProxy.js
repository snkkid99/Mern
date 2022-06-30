const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: process.env.PROXY,
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/api", createProxyMiddleware(proxy));
};
