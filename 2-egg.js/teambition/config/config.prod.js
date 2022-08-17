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
    database: 'egg-beehive-prod',
    host: 'localhost',
    port: 3306,
    username: 'hz',
    password: '123456',
  };

  return {
    ...config,
  };
};
