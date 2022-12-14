const fs = require('fs')

function copy(src, dst) {
  /*
    pipe方法把两个数据流连接了起来。连接起来后发生的事情，
    说得抽象点的话，水顺着水管从一个桶流到了另一个桶。
  */
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
  copy(argv[0], argv[1])
}

main(process.argv.slice(2))
