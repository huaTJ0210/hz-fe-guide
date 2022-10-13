const fs = require('fs');

/*
   (0)Buffer是Node.js提供的可以操作二进制的一个类；
*/

// (1) Buffer的创建
const b1 = Buffer.alloc(3);
const b2 = Buffer.from(b1); // b1与b2之间是深拷贝，相互修改不会产生问题；
const b3 = Buffer.from('1', 'utf-8');


// 读取文件
fs.readFile('./test.js', function (error, data) {
  if (error) {
    console.log('error');
  } else {
    const file = data.toString('utf-8');
    console.log('------:', file);
  }
});

// 创建一个可读流 ： 大文件
const rs = fs.createReadStream('./test.js');
let data = [];
rs.on('data', function (chunk) {
  data.push(chunk);
});
rs.on('end', function () {
  const buf = Buffer.concat(data);
  console.log(buf.toString());
});
