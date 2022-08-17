// exports.mysql = {
//   // 单数据库信息配置
//   client: {
//     // host
//     host: '192.16.1.101',
//     // 端口号
//     port: '3306',
//     // 用户名
//     user: 'zcbl_test',
//     // 密码
//     password: 'zcbl_test',
//     // 数据库名
//     database: 'cgs20'
//   },
//   // 是否加载到 app 上，默认开启
//   app: true,
//   // 是否加载到 agent 上，默认关闭
//   agent: false
// };

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'test-egg'
};
