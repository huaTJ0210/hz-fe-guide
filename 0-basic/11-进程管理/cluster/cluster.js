//* Cluster 模块显著的特点可以共享同一个socket链接，
const cluster = require('cluster');

const numCPUS = require('os').cpus().length;

console.log('Master process id is:', process.pid);
console.log('numCPUS:', numCPUS);

cluster.setupMaster({
  exec: 'work.js'
});

for (let i = 0; i < numCPUS; i++) {
  cluster.fork();
}

cluster.on('exit', function (worker, code, signal) {
  console.log('worker process died:', worker.process.pid);
});

// 工作进程已复制完毕
cluster.on('online', function () {
  console.log('online');
});

// 工作进程中调用了listen() ,共享了主进程的socket
cluster.on('listening', function () {
  console.log('listening');
});


