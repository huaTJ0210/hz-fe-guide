const sequelize = require('./sequelize.js');
const User = require('./model/user');
const { Op } = require('sequelize');
const Department = require('./model/department.js');
async function main() {
  //*
  // User.drop();
  //自动同步所有模型
  await sequelize.sync(); // 如果表不存在则创建表，如果存在则不执行任何的操作

  // （1）将信息保存到数据库中: 新增
  /*
  const department = await Department.create({
    id: '15',
    name: '产品部',
    parent_id: 0,
    sort: 0
  });
  console.log(department);
  console.log(department.toJSON());
  */

  // (2) 根据id查询后修改 : 未查询到返回null
  /*
  const department = await Department.findOne({
    where: {
      id: '15'
    }
  });
  // department.setDataValue('name', 'zc产品组');
  // department.save(); // 向数据库中保存
  console.log(department);
 
  // (3)查询所有:查找所有并计算总的count
  const departmentList = await Department.findAndCountAll({limit:2,offset:1});
  console.log(departmentList.count);
  console.log(departmentList.rows);
  */

  // (4) 获取所有数据
  // const departmentList = await Department.findAll({ attributes: ['name'] });
  // console.log(departmentList);
  /*
  const department = await Department.findAll({
    attributes: ['name', 'id'],
    where: {
      [Op.and]: [
        { id: '15' },
        {
          name: {
            [Op.like]: 'zc%'
          }
        }
      ]
    }
  });
  console.log(department);
  */
  // (5) findOrCreate : 有就创建没有就返回查找的数据
  // const result = await Department.findOrCreate({
  //   where: {
  //     [Op.or]: [{ name: 'zc产品组' }, { id: '15' }]
  //   },
  //   defaults: {
  //     sort: 0
  //   }
  // });
  // // [Department,boolen]
  // console.log(result);

  // (6) 查询并删除
  // const dep = await Department.findOne({
  //   where: {
  //     id: '14'
  //   }
  // });
  // console.log(dep);
  // if (dep) {
  //   const res = await dep.destroy();
  //   console.log(res);
  // }

  // (7) 查询筛选字段
  const dep = await Department.findAll({
    attributes: ['id', 'name']
  });
  console.log(dep);
}

main();
