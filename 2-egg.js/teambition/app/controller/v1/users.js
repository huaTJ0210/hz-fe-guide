'use strict';
const { Controller } = require('egg');
const { HttpError, ERROR } = require('../../base/httperror');

class UserController extends Controller {
  async findOne() {
    const { app, ctx } = this;
    const errors = app.validator.validate({ username: 'username' }, ctx.query);
    if (errors) {
      throw new HttpError(ERROR.FORMAT_INVALID, errors[0].message);
    }
    const res = await app.model.Users.findOne({ where: { id: '1' } });
    console.log(res.toJSON());
    this.ctx.body = res.toJSON();
  }

  async create() {
    /*
    * (1) 获取请求参数并进行验证
      + username
      + email
      + code
      + password
      + confirmPassword
    */
    //(2)两次输入密码是否一致
    //(3)查询redis中验证码是否有效
    //(4)查询用户名或者邮箱已被注册
    //(5)将用户信息进行存储
  }
}

module.exports = UserController;
