/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636706427206_8488';
  // jwt
  config.jwt = {
    expire: 60, // 分钟
    secret: 'b2ce49e4a541068d'
  };

  config.security = {
    csrf: {
      enable: false, // 项目中建议开启
      headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
  };
  // 免认证检查
  config.noNeedAuth = ['/login', '/register'];

  // add your middleware config here
  config.middleware = ['errorHandler', 'auth'];

  config.validate = {
    // 配置参数校验器，基于parameter
    convert: true // 对参数可以使用convertType规则进行类型转换
    // validateRoot: false,   // 限制被验证值必须是一个对象。
  };

  // config.swaggerdoc = {
  //   dirScanner: './app/controller',
  //   apiInfo: {
  //     title: 'egg-swagger',
  //     description: 'swagger-ui for egg',
  //     version: '1.0.0'
  //   },
  //   schemes: ['http', 'https'],
  //   consumes: ['application/json'],
  //   produces: ['application/json'],
  //   securityDefinitions: {
  //     apikey: {
  //       type: 'apiKey',
  //       name: 'clientkey',
  //       in: 'header'
  //     }
  //     // oauth2: {
  //     //   type: 'oauth2',
  //     //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
  //     //   flow: 'password',
  //     //   scopes: {
  //     //     'write:access_token': 'write access_token',
  //     //     'read:access_token': 'read access_token',
  //     //   },
  //     // },
  //   },
  //   enableSecurity: false,
  //   // enableValidate: true,
  //   routerMap: false,
  //   enable: true
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
