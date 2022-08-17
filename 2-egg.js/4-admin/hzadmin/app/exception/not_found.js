'use strict';

const HttpException = require('./http');

class NotFoundException extends HttpException {
  constructor(message = '资源不存在', code = 40004) {
    super(code, message, null, 404);
  }
}

module.exports = NotFoundException;
