const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://7020-188-130-155-167.ngrok-free.app',
      changeOrigin: true,
    }),
  );
  app.use(
    '/media',
    createProxyMiddleware({
      target: 'https://7020-188-130-155-167.ngrok-free.app',
      changeOrigin: true,
    }),
  );
};
