// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Assuming your API endpoints start with /api
    createProxyMiddleware({
      target: 'https://cellbazaar-api.vercel.app',
      changeOrigin: true,
    })
  );
};
