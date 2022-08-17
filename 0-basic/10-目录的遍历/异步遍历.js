const fs = require('fs')
const path = require('path')

function travel(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
    ;(function next(i) {
      if (i < files.length) {
        const pathname = path.join(dir, files[i])
        fs.stat(pathname, function (err, stats) {
          if (stats.isDirectory()) {
            travel(pathname, callback, function () {
              next(i + 1)
            })
          } else {
            callback(pathname, function () {
              next(i + 1)
            })
          }
        })
      } else {
        finish && finish()
      }
    })(0)
  })
}

//* 修改异步读取文件的api为promise的形式；
const { promisify} = require('util');

const readDir = promisify(fs.readdir);
const readstat = promisify(fs.stat);

async function visit(dir, callback) {
  try {
    const files = await readDir(dir);
    for (let file of files) {
      const filePath = path.join(dir,file);
      const state = await readstat(filePath);
      if (state.isDirectory()) {
        visit(filePath, callback);
      } else {
        callback(filePath);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// *(1) 文本编码BOM的移除 ： BOM标识一个文件是utf-8类型编码的
function readText(pathname) {
  var bin = fs.readFileSync(pathname);

  if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
      bin = bin.slice(3);
  }

  return bin.toString('utf-8');
}
