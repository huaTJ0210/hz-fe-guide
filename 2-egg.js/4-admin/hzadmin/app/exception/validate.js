'use strict';

const HttpException = require('./http');

class ValidateException extends HttpException {
  constructor(message = '请求参数不合法', code = 40004) {
    super(code, message, null, 200);
  }
}

module.exports = ValidateException;
