const fs = require('fs')
// 只读流
const rs = fs.createReadStream('src')
// 只写流
const ws = fs.createWriteStream('dst')

rs.on('data', function (chunk) {
  // 只写流是否已将缓存中的数据写入
  if (ws.write(chunk) === false) {
    rs.pause()// 如果缓存中堆积了，则需要停止只读流
  }
})

rs.on('end', function () {
  ws.end()
})

//写入流已经无法从缓存中获取数据时触发drain事件
ws.on('drain', function () {
  rs.resume()
})

//* POSIX(Protabl Operation System 可移植操作系统规范)应运而生
