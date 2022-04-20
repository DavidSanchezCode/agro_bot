const express = require('express');

const RegisterRoutes = require('./registerRoutes');

function routerApi(app) {
  const router = express.Router();
  router.use('/register', RegisterRoutes);
  app.use('/api/v1',router);
}

module.exports = routerApi;
