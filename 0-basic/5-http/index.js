const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
  //
  const { url, method,headers } = req;
  if (url === '/' && method === 'GET') {
    // 返回index.html
    fs.readFile('index.html', function(err, data) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' });
        res.end(err.toString());
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data.toString());
      }
    });
  } else if (method === 'GET' && headers.accept.indexOf('image/*')!==-1) {
    // 针对图片的请求
    // 使用stream的方式避免图片文件过大导致占用的内存较多
    fs.createReadStream('.' + path).pipe(res);
  }
  
  else {  
    res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
    console.log(req);
    res.end(url);
  }
});

server.listen(8080);
console.log('server is running');