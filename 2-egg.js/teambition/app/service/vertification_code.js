const { Service } = require('egg');
const { HttpError, ERROR } = require('../base/httperror');

class VertificationCodeService extends Service {
  async create(business_type, target) {
    const { app, ctx } = this;
    /*
     * 1、产生随机code值，向数据库中插入数据，以（业务类型:目标）为key存储在redis中，并设置过期时间，调用验证码接口向target发送code
     */
    const vertificationCodeKey = `${business_type}:${target}`;
    const code = ctx.helper.vertificationCode();
    const expiration_time = app.dayjs().add(5, 'minute').format('YYYY-MM-DD hh:mm:ss');

    /*
     * 2、将验证码进行保存【数据库、redis】
     */
    try {
      await app.model.VerificationCodes.create({
        code,
        target,
        type: 0,
        available: 1,
        expiration_time,
      });
      // 在redis中设置key的过期时间是300秒
      await app.redis.set(vertificationCodeKey, code, 'EX', '300');
      /*
       * 3、调用模块发送验证码
       */
    } catch (error) {
      // 验证码已经发出，需要重试
      throw new HttpError(ERROR.SERVER_ERROR, '创建验证码失败');
    }
  }
}

module.exports = VertificationCodeService;
