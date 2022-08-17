'use strict';
const UUID = require('uuid').v4;
const Service = require('egg').Service;
const dayjs = require('dayjs');
const AuthException = require('../exception/auth');

class JwtService extends Service {
  // 生成token
  async createToken(userId) {
    const now = dayjs().unix();
    const config = this.app.config.jwt;
    return this.app.jwt.sign(
      {
        jti: UUID(), // 唯一身份标识
        iat: now, // jwt的签发时间
        nbf: now, // jwt的生效时间
        exp: now + config.expire * 60 * 1000, // jwt的过期时间
        uid: userId, // 用户的userid 进行加密
      },
      config.secret,
    );
  }
  // 验证token
  async verifyToken(token) {
    if (!token) {
      // 如果token不存在就抛出异常
      throw new AuthException();
    }
    const secret = this.app.config.jwt.secret;
    try {
      await this.app.jwt.verify(token, secret);
    } catch (e) {
      // 如果token验证失败直接抛出异常
      // 通过消息判断token是否过期
      console.log(e);
      if (e.message === 'jwt expired') {
        throw new AuthException('令牌过期', 10003);
      }
      throw new AuthException();
    }
    return true;
  }
  // 通过token获取用户id
  async getUserIdFromToken(token) {
    await this.verifyToken(token);
    // 解析token
    const res = await this.app.jwt.decode(token);
    return res.uid;
  }
}

module.exports = JwtService;
