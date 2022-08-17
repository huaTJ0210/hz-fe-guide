const { HttpError, ERROR } = require('../../base/httperror');
const Controller = require('../baseController');

class VerificationCode extends Controller {
  async create() {
    /*
      TEST:
      curl http://127.0.0.1:7002/api/v1/vertification_codes -X POST 
      -H "Content-Type:application/json" 
      -d '{"target":"18518487767","type":0,"business_type":"register"}'
    */
    const { app, ctx } = this;
    /*
     * 1、获取并验证请求参数: target:发送验证码的目标（手机号/邮箱）、验证码类型、业务类型
     */
    const { target, type, business_type } = ctx.request.body;
    const validateTarget = {
      target: type === 0 ? 'phone' : 'email',
    };
    // 验证接口的参数
    let errors = app.validator.validate(
      {
        ...validateTarget,
        business_type: 'string',
        type: [0, 1],
      },
      ctx.request.body,
    );
    if (errors) {
      throw new HttpError(ERROR.FORMAT_INVALID, errors[0].message);
    }
    // 创建验证码
    await ctx.service.vertificationCode.create(business_type, target);
    this.success({}, 201);
  }
}

module.exports = VerificationCode;
