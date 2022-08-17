const readline = require('readline');
// 控制台日志输出
console.time('label');
console.log('node.js: console.log');
console.info('node.js: console.info');
console.timeEnd('label'); // 计算代码的执行时间

// (1) JSON格式输出
const stu = {
  name: 'zhang',
  age: 18,
  sex: 'man'
};
console.log('%j', stu); // 以json的形式输出

// (2) 输出错误或者警告
console.warn('nodejs: console.warn');
console.error('nodejs: console.error');

// (3) 日志输出位置重定向
// node index.js >> error.log : 将错误日志转到脚本所处目录的制定文件（erro.log）中

// （4）输出一个对象的属性或者方法
const person = {
  name: 'zhang',
  walk: function () {}
};
console.dir(person);

// (5)
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('write something to console y/n ?', answer => {
//   console.log(answer);
// });
/*
rl.setPrompt('nodejs>');
rl.prompt();
rl.on('line', line => {
  console.log(line);
  rl.prompt();
}).on('close', () => {
  console.log('have a good day!!');
  process.exit(0);
});
*/

// （6）输出表格
const arrTable = {
  a: { no: 1, name: 'a' },
  b: { no: 2, name: 'b' },
  c: { no: 3, name: 'c' }
};

console.table(arrTable);
