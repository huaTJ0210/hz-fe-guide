/* 
格式错误 (FORMAT_INVALID)
数据不存在 (DATANOTFOUND)
数据已存在 (DATA_EXISTED)
数据无效 (DATA_INVALID)
登录错误 (LOGIN_REQUIRED)
权限不足 (PERMISSION_DENIED)
服务器业务处理错误 （SERVER_ERROR）
*/
const ERROR = {
  FORMAT_INVALID: 'FORMAT_INVALID',
  DATA_NOT_FOUND: 'DATA_NOT_FOUND',
  DATA_EXISTED: 'DATA_EXISTED',
  DATA_INVALID: 'DATA_INVALID',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
  PERMISSION_DENIED: 'PERMISSION_DENIED',
  SERVER_ERROR: 'SERVER_ERROR',
};

const ERROR_MAP = {
  FORMAT_INVALID: {
    code: 1,
    message: 'The request format is invalid',
  },
  DATA_NOT_FOUND: {
    code: 2,
    message: 'The data is not found in database',
  },
  DATA_EXISTED: {
    code: 3,
    message: 'The data has exist in database',
  },
  DATA_INVALID: {
    code: 4,
    message: 'The data is invalid',
  },
  LOGIN_REQUIRED: {
    code: 5,
    message: 'Please login first',
  },
  PERMISSION_DENIED: {
    code: 6,
    message: 'You have no permission to operate',
  },
  SERVER_ERROR: {
    code: 7,
    message: 'server handler error',
  },
};

class HttpError extends Error {
  constructor(type, detail) {
    super();
    Error.captureStackTrace(this, this.constructor);

    let error = ERROR_MAP[type];
    if (!error) {
      error = {
        code: 999,
        message: 'Unknow error type',
      };
    }

    this.name = 'HttpError';
    this.type = error.code !== 999 ? type : 'UNDEFINED';
    this.code = error.code;
    this.message = error.message;
    this.detail = detail;
  }
}

module.exports = { HttpError, ERROR };
