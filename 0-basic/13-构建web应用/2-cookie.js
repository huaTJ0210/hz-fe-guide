var http = require('http')
const { encode } = require('punycode')

http
  .createServer(function (req, res) {
    // 设置cookies
    req.cookies = parseCookie(req.headers.cookie)
    handle(req, res)
  })
  .listen(1338, 'http://127.0.0.1')
console.log('Server start at http://127.0.0.1:1338')

var handle = function (req, res) {
  if (!req.cookies.isVisit) {
    res.setHead('Set-Cookie', serialize('isVisit', '1'))
    res.writeHead(200)
    res.end('欢迎第一次来动物园')
  } else {
    // TODO
    res.writeHead(200)
    res.end('动物园再次欢迎您')
  }
}

//** 解析cookie */
var parseCookie = function (cookie) {
  var cookies = {}
  if (!cookie) {
    return cookies
  }
  var list = cookie.split(';')
  for (var i = 0; i < list.length; i++) {
    var pair = list[i].split('=')
    cookies[pair[0].trim()] = pair[1]
  }
  return cookies
}
//** 序列化cookie */
var serialize = function (name, val, opt) {
  var pair = [name + '=' + encode(val)]
  opt = opt || {}
  if (opt.maxAge) {
    pair.push('Max-Age' + opt.maxAge)
  }
  // todo
  return pair.join(';')
}
