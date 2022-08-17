// //** (1) 获取命令行参数:前两个参数已被占用*/
// console.log(process.argv.slice(2));

// // 当前程序执行目录
// console.log(process.cwd());
// console.dir(process);

//** 异步编程的流程控制
const async = require('async');

// 串行执行任务操作
// async.series(
//   {
//     one: cb => {
//       cb(null, 'one');
//     },
//     two: cb => {
//       cb(null, 'two');
//     }
//   },
//   (errors, result) => {
//     console.log(result);
//   }
// );

async.waterfall(
  [
    cb => {
      cb(null, 'one');
    },
    (data, cb) => {
      console.log(data);
      cb(null, 'two');
    }
  ],
  (error, result) => {
    console.log(result);
  }
);
