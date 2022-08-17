const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async function (ctx) {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let getData = ctx.query//获取get请求的参数
    let html = '<h2>2</h2>'
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当发起post请求时，中间件koa-bodyparser解析POST表单里的数据，并显示出来；
    let postData = ctx.request.body
    console.log(postData)
  }
})

app.listen(3000)
