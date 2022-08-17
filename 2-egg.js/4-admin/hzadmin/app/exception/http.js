'use strict';
class HttpException extends Error {
  constructor(code = 5000, message = '服务器异常', data = null, httpCode = 500) {
    super();
    this.code = code;// 自定义状态码
    this.message = message;// 自定义错误消息
    this.data = data;// 返回数据
    this.httpCode = httpCode;// http状态码
  }
}

module.exports = HttpException;
