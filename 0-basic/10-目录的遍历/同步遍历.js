//** 遍历算法：首先目录是一个树的结构，所以是先采取深度遍历再采取先序遍历 */

const fs = require('fs')
const path = require('path')

// 同步遍历目录
function travel(dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    const pathname = path.join(dir, file)
    if (fs.statSync(pathname).isDirectory()) {
      // 是目录
      travel(pathname, callback)
    } else {
      callback(pathname)
    }
  })
}

travel('目录', function (file) {
  console.log(file)
})


