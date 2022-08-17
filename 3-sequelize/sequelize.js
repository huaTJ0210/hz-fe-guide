// 创建sequelize对象实例
const { Sequelize} = require('sequelize');
const config = require('./config');
// 链接数据库
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    },
    logging: console.log // 记录日志
  }
);

// 测试是否链接正常
async function test() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();

module.exports = sequelize;
