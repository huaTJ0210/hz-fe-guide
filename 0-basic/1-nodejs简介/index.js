/*
(0)什么是Node?
 + node是JavaScript的一个运行环境（编译器+操作系统的底层支持），
(1)高性能的web服务器
+ 事件驱动
+ 非堵塞I/O
（2）Node可以做什么
+ 服务端
+ 客户端
+ 命令行工具
*/

// (0) global:全局对象

//(1)process ：进程相关信息
process.env.NODE_ENV = 'development';
console.log(process.env.NODE_ENV);
console.log(process.argv);
console.log(process.memoryUsage());
console.log(process.platform());
console.log(process.cwd());

// (2) 控制台输出,格式化输出
console.log('name:%s,age:%d', 'li', 18);
console.log('*********************');

// (3)node CLI的交互

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`你叫什么名字?`, name => {
  console.log(`你好 ${name}!`);
  readline.close();
});
