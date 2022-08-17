//* 将带有回调的异步方法转化为promise形式
function promisify_fn(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      console.log('args:', args);
      args.push(function (error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
      fn.apply(null, args);
    });
  };
}
