const Service = require('egg').Service;
const ValidateException = require('../exception/validate');

class UserService extends Service {
  async register(req) {
    const { user_name, password } = req;
    const { validateUserName, validatePassword } = this.ctx.helper;
    if (!validateUserName(user_name) || !validatePassword(password)) {
      throw new ValidateException('用户名或密码不符合规定');
    } else {
      const result = await this.app.mysql.get('sys_user', {
        user_name
      });
      if (!result) {
        const res = await this.app.mysql.insert('sys_user', {
          user_name,
          password
        });
        if (res && res.affectedRows) {
          return {};
        } else {
          throw new ValidateException('用户注册失败');
        }
      } else {
        throw new ValidateException('用户已经存在');
      }
    }
  }
  async login(req) {
    const { phone } = req;
    const { validateUserName } = this.ctx.helper;
    if (!validateUserName(phone)) {
      throw new ValidateException('用户名');
    } else {
      const result = await this.app.mysql.get('sys_user', { phone });
      if (result) {
        const { user_id, dept_id, cert_name } = result;
        const token = await this.service.jwt.createToken(user_id);
        // 避免在同一个浏览器下切换用户，调用 rotateCsrfSecret 刷新用户的 CSRF token
        // this.ctx.rotateCsrfSecret();
        return { token, dept_id, cert_name };
      } else {
        throw new ValidateException('用户名或密码错误');
      }
    }
  }
  async user() {
    const user_id = this.ctx.user_id;
    const result = await this.app.mysql.get('sys_user', { user_id });
    if (result) {
      return result;
    } else {
      throw new ValidateException('用户不存在');
    }
  }
  //* 所有用户列表
  async list() {
    const result = await this.app.mysql.select('sys_user');
    if (result) {
      return result;
    } else {
      throw new ValidateException('请求出错了');
    }
  }
}

module.exports = UserService;
