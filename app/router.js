'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.home.index)
  app.io.route('chat', controller.socketConnect.connectController);
};
