'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;

  /*
   * 用户
   */
  router.get('/api/v1/users', controller.v1.users.findOne);
  router.post('/api/v1/users', controller.v1.users.create); // 注册

  /*
   * 验证码
   */
  router.post('/api/v1/verification_codes', controller.v1.verificationCode.create);
};
