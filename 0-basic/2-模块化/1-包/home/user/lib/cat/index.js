//package包的：入口文件
const head = require('./head')
const body = require('./body')

exports.create = function (name) {
  return {
    name: name,
    head: head.create(),
    body: body.create()
  }
}
// 加载该模块
//const cat = require('/home/user/lib/cat');
