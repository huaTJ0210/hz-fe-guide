/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg-beehive-dev',
    host: 'localhost',
    port: 3306,
    username: 'hz',
    password: '123456',
    timezone: '+08:00', // 将时区更改为东八区
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: null,
      db: 0,
    },
  };

  // 安全验证
  config.security = {
    // csrf: true,
  };

  return {
    ...config,
  };
};
