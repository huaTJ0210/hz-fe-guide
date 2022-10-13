
//** Node对获取的js文件中的内容使用函数进行包裹 */
; (function (exports, require, module, __filename, __dirname) {
  var math = require('math')
  exports.area = function (radius) {
    return Math.PI * radius * radius
  }
})

/*
  (1)Node中this的指向问题
  + global
  + module.exports
  (2)Node中存在的作用域
  + 全局作用域：global
  + 模块作用域： module.exports
  + 函数作用域
  + 块级作用域
  (3)require
  + 加载机制：缓存
  + 同步加载：js文件存在本地，IO损耗可以忽略不计
  (4)模块化的种类
  + common.js ：同步加载
  + AMD:异步加载模块定义

*/
