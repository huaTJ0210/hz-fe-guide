'use strict';

const HttpException = require('../exception/http');

module.exports = () => {
  return async function errorHandler(ctx, next) {
    const method = ctx.request.method;
    if (method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
    try {
      await next();
    } catch (error) {
      if (error instanceof HttpException) {
        ctx.status = error.httpCode;
        ctx.body = {
          code: error.code,
          msg: error.message,
          data: error.data,
        };
      } else {
        // 如果不是自定义异常 // 异常的统一处理
        ctx.status = 500;
        ctx.body = {
          code: 50000,
          msg: error.message || '服务器异常',
          data: null,
        };
      }
    }
  };
};

