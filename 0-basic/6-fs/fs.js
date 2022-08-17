'use strict';
var fs = require('fs');
var path = require('path');

//(1) 文件的打开与关闭[异步的文件打开与关闭]
// fd:文件描述符
fs.open('file.txt', (error, fd) => {
  if (error) {
    console.log('open file.txt error');
  } else {
    console.log('open file.txt done');
  }
  fs.close(fd, error => {
    if (error) {
      console.log('close file.txt error');
      return;
    }
    console.log('close file.txt done');
  });
});

//  读取当前目录下的文件
fs.readdir(__dirname, (error, files) => {
  files.forEach(file => {
    // 获取文件的状态集合
    const curFileStatus = fs.statSync(path.join(__dirname, file));
    if (curFileStatus.isDirectory()) {
    } else {
      console.log(file);
    }
  });
  console.log(files);
});


// 读取文件
if (fs.existsSync('file.txt')) {
  // 当前路径下存在该文件则读取
  fs.readFile('file.txt', 'utf-8', function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
}
