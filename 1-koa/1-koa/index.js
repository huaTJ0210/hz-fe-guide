const Koa = require('koa')
const app = new Koa()

//* 实现网络请求的超时处理：
app.use(async (ctx, next) => {
  let timer = null;
  const timerout = 5000;
  //* 事件的处理属于竞态关系时:
  await Promise.race([
    new Promise((reslove, reject) => {
      timer = setTimeout(() => {
        const e = new Error('request timeout');
        e.status = 500;
        reject(e);
      }, timerout);
    }),
    new Promise((reslove, reject) => {
      (async function () {
        await next();
        console.log('-----clear timer----');
        clearTimeout(timer);
        reslove();
      })();
    }),
  ]);
});

app.use(async (ctx, next) => {
  // 当前访问的路径
  let url = ctx.request.url
  // 获取get请求的参数
  let params = ctx.query
  ctx.body = 'hello koa'
})

app.listen(3000)

/*
  （1）自定义路由：
   let url = ctx.request.url;
   url代表当前的访问路径，根据url可以匹配指定路由
   (2)async/await
   + 异步代码逻辑使用同步的方式去书写
   + await后需要返回promise
   + 使用多层的await/async替代callback的嵌套；
   （3）中间件的开发和使用
   + 中间件是一个函数， 
   module.exports = function () {
     return async function (ctx, next) {
        next();
    }
  }
*/
