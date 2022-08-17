/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { validator } = app;
  // 用户名
  validator.addRule('username', (rule, value) => {
    if (value.length < 4) {
      return '长度不能小于4';
    }
  });
  // 手机号
  validator.addRule('phone', (rule, value) => {
    if (!/^1\d{10}$/.test(value)) {
      return '手机号格式不正确';
    }
  });
};
