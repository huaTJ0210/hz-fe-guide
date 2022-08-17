function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url);
}

module.exports = function () {
  return async function (ctx, next) {
    log(ctx);
    await next();
  };
};


/*
  中间件的使用

  const logMiddleWare = require('./index');
  app.use(logMiddleWare);

*/

//* koa中间件的执行加载
function compose(middleware) {
  // (1)middleware是数组
  // (2)middleware数组中的每个元素必须是函数类型
    return function (context, next) {
      // last called middleware #
      let index = -1
      return dispatch(0)
      function dispatch (i) {
        if (i <= index) return Promise.reject(new Error('next() called multiple times'))
        index = i
        let fn = middleware[i]
        if (i === middleware.length) fn = next // ???
        if (!fn) return Promise.resolve()
        try {
          return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        } catch (err) {
          return Promise.reject(err)
        }
      }
    }
}


 