'use strict';

const body = {
  userBodyReq: {
    phone: {
      type: 'string',
      required: false,
      min: 11,
      max: 15,
      example: '18836366969',
      description: '手机号'
    }
  }
};

module.exports = {
  ...body
};
