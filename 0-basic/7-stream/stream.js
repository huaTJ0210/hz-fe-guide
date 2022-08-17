/*
  当内存中无法一次性装下需要处理的数据
  或者一边读取一边出来会更加高效；
  Stream是基于事件机制工作的，所有stream的实例都继承自NodeJS提供的EventEmitter；
*/
var fs = require('fs')

var rs = fs.createReadStream('file.txt', 'utf-8')

rs.on('data', function (chunk) {
  console.log('data')
  rs.pause()
  // do sth
  console.log(chunk)
  // later
  rs.resume()
})

rs.on('error', function () {
  console.log('error:' + error)
})

rs.on('end', function () {
  console.log('end')
})
