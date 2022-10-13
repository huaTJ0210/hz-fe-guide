const { spawn, exec, fork } = require('child_process');

// (1) spawn: 创建一个子进程来执行命令
const ls_cur = spawn('ls', [__dirname]);
ls_cur.stdout.on('data', function (data) {
  console.log(data.toString());
});

// (2) exec
exec('cat 1.txt', (err, stdout, stdin) => {
  // 获取文件内容
  console.log(stdout);
});

// (3) fork

const cpus = require('os').cpus();
for (let i = 0; i < cpus.length; i++) {
  fork('./work.js');
}
