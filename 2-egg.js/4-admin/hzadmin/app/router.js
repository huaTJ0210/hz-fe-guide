module.exports = app => {
  const { router, controller } = app;
  //* 登录接口
  router.get('/login', controller.user.login);
  //* 获取用户信息
  router.get('/user', controller.user.user);
  //* 获取所有用户的信息
  router.get('/user/list', controller.user.list);
  //* 注册接口
  router.post('/register', controller.user.register);
};
