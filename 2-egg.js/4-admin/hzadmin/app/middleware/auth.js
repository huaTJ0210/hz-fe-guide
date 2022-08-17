'use strict';
// app/middleware/auth.js
const AuthException = require('../exception/auth');

module.exports = name => {
  return async function auth(ctx, next) {
    // 获取token
    let token = ctx.request.headers.authorization;
    if (token) {
      token = token.substring(7); // 去除 Bearer
    }
    // 对白名单免校验
    const url = ctx.URL.pathname;
    const whiteList = ctx.app.config.noNeedAuth;
    const noNeedAuth = whiteList.includes(url);
    if (!noNeedAuth) {
      // 通过token获取用户id
      const user_id = await ctx.service.jwt.getUserIdFromToken(token);
      ctx.user_id = user_id;
      // * 校验接口的全权限
      await checkAuth(user_id, url, ctx);
    }
    await next();
  };
  async function checkAuth(user_id, url, ctx) {
    let permission = url; // 将url转化为permission
    permission = permission.slice(1).replace('/', ':');
    const roles = await ctx.app.mysql.select('sys_users_roles', {
      where: { user_id }
    });
    if (roles) {
      const { role_id } = roles;
      const menus = await ctx.app.mysql.select('sys_roles_menus', {
        where: { role_id: role_id },
        columns: ['menu_id']
      });
      if (menus) {
        const menu_ids = [];
        menus.forEach(item => {
          menu_ids.push(item.menu_id);
        });
        const permissions = await ctx.app.mysql.select('sys_menu', {
          where: { menu_id: menu_ids },
          columns: ['permission']
        });
        const isPermission = permissions.some(item => {
          return item.permission === permission;
        });
        if (isPermission) {
          return true;
        } else {
          throw new AuthException('权限不足', 10002);
        }
      } else {
        // 无权限
        throw new AuthException('权限不足', 10002);
      }
    } else {
      // 无权限
      throw new AuthException('权限不足', 10002);
    }
  }
};
