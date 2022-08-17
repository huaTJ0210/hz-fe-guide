'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  async login() {
    const { ctx } = this;
    const params = {
      phone: {
        ...ctx.rule.userBodyReq.phone,
        required: true,
        min: 1
      }
    };
    // 对请求参数进行验证
    ctx.validate(params, ctx.query);
    const res = await ctx.service.user.login(ctx.request.query);
    this.success(res);
  }

  //* 获取用户信息
  async user() {
    const { ctx } = this;
    const res = await ctx.service.user.user();
    this.success(res);
  }
  //* 用户注册
  async register() {
    const { ctx } = this;
    const res = await ctx.service.user.register(ctx.request.body);
    this.success(res);
  }
  //* 用户信息列表
  async list() {
    const { ctx } = this;
    const res = await ctx.service.user.list();
    this.success(res);
  }
}

module.exports = UserController;
