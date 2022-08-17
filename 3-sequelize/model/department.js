const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
class Department extends Model {}
// 部门信息表
Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sort: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    owner_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  { sequelize, tableName: 'departments', modelName: 'Department' }
);

module.exports = Department;
