var http = require('http')
var url = require('url')

http
  .createServer(function (req, res) {
    console.log(req.headers)
    // 请求的方法
    console.log(req.method)
    // 请求的URL:
    console.log(req.url)
    console.log(url.parse(req.url).pathname)
    //** 使用URL类代替：url */
    //console.log(new url.URL(req.url, 'http://127.0.0.1:1337').pathname)
    // 请求查询字符串
    var query = url.parse(req.url, true).query // 转化成json格式
    console.log(query)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello world\n')
  })
  .listen(1337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:1337/')
