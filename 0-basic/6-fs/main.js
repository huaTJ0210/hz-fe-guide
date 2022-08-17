const fs = require('fs');

fs.stat('./file.txt', function (error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
})


function readAllFile(path) {
  // 获取目录下所有子文件或者子目录
  fs.readdir(path, function (error, res) {
    if (error) {
      console.log(error);
      return;
    }
    for (const subPath in res) {
      const statObj = fs.statSync(path + '/' + subPath);
      if (statObj.isDirectory()) {
        // 是目录
        console.log('Dir:',subPath);
        readAllFile(path+'/'+subPath);
      } else {
        // 是文件
        console.log('file:',subPath);
      }
    }
  })
}
