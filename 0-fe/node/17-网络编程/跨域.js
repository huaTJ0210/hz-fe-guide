
//* CORS如何解决跨域的方案
/*
 + 响应简单请求： 动词为get/post/head,没有自定义请求头
 Content-Type是 application/x-www-form-urlencode,multipart/form-data等
 通过设置HTTP的请求头：Access-Control-Allow-Origin: URL

 + 如果在请求头部设置了自定义HTTP Header字段，浏览器会进行预检查，需要响应浏览器的options请求
 if(method== 'OPTIONS'){
  res.writeHeader(200,{
   'Access-Control-Allow-Origin': URL,
   'Access-Control-Allow-Headers':'x-Token,Content-Type',
   'Access-Control-Allow-Methods':'PUT'
  });
 }
 + 存在设置了cookies的情况下需要
   Access-Control-Allow-Credentials: true
 + 预检请求： ？？？
*/

//* 代理服务器转发
/*
  + http-proxy-middleware
  + 反向代理： 
*/