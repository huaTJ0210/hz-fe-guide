// worker-simple.js

const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: { num: 5 } });
  worker.once('message', result => {
    console.log('square of 5 is :', result);
  });
    // 主work通过子work的实例向子work发送消息
  //  worker.postMessage({message:'xxxx'});
} else {
    // 子work向父work中发送消息
  parentPort.postMessage(workerData.num * workerData.num);
}
