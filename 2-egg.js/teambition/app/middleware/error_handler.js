const { ERROR } = require('../base/httperror');

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      const { app } = ctx;
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', err, ctx);

      let status;
      switch (err.type) {
        case ERROR.FORMAT_INVALID:
        case ERROR.DATA_EXISTED:
        case ERROR.DATA_INVALID:
          status = 400;
          break;
        case ERROR.LOGIN_REQUIRED:
          status = 401;
        case ERROR.PERMISSION_DENIED:
          status = 403;
        case ERROR.DATA_NOT_FOUND:
          status = 404;
          break;
        case ERROR.SERVER_ERROR:
          status = 500;
          break;
        default:
          status = 500;
      }

      ctx.status = status;
      ctx.body = err;
    }
  };
};
