'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql'
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize'
  }
};
