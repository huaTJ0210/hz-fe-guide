'use strict'
var http = require('http')
// （1）创建http server
var server = http.createServer(function (request, response) {
  // 回调函数接收request和response对象
  console.log(request.method + ':' + request.url)
  //** 获取请求体的数据 */
  var body = [];
  request.on('data', function (chunk) {
    body.push(chunk);
  }).on('end', function () {
    body = Buffer.concat(body);
   });
  //将http的响应写入response同时设置content-type为：text/html
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.end('<h1>Hello node server</h1>')
})
server.on('connection', function (req, res) {
  console.log('connection')
})
server.on('request', function (req, res) {
  console.log('request')
})
server.listen(8080)
console.log('Server is runing.....')
