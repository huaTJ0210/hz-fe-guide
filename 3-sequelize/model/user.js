const { Model, DataTypes } = require('sequelize');
class User extends Model {}
const sequelize = require('../sequelize'); // sequelize理解为一个数据库实例
const Department = require('./department');

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Department,
        key: 'id'
      }
    },
    usermame: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        // 获取器:可以对数据库中获得的值进行加工处理
        const rawValue = this.getDataValue('username');
        return rawValue ? rawValue.toUppperCase() : null;
      }
    },
    fullname: {
      type: DataTypes.VIRTUAL, // 虚拟字段，不会存储在数据库中
      get() {
        return `perfixed:${this.getDataValue('username')}`;
      },
      set(value) {
        throw new Error('不要尝试设置‘fullname的值’');
      }
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    modelName: 'User', //模型名称
    tableName: 'users'
  }
);

module.exports = User;
