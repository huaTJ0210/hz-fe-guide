'use strict';
const { Controller } = require('egg');

class BaseController extends Controller {
  success(data = null, message = 'success', code = 200) {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code,
      message,
      data
    };
  }
}
module.exports = BaseController;
