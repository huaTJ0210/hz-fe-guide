const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'

app.use(static(path.join(__dirname, staticPath)))

app.use(async function (ctx, next) {
  ctx.body = 'helle world'
})

app.listen(3000, () => {})
