'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/veritification_code.test.js', () => {
  // 测试发送验证码
  describe('POST /api/v1/verification_codes', () => {
    it('should work', async () => {
      app.mockCsrf();
      const res = await app.httpRequest().post('/api/v1/verification_codes').send({
        target: '18518487767',
        type: 0,
        business_type: 'register',
      });
      assert(res.status === 201);
    });
  });
});
