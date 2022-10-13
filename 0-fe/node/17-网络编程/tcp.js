const net = require('net')
const chatServer = net.createServer();

const clientList = [];

chatServer.on('connection', client => {
  client.write('hello!\n');
  clientList.push(client);
  client.on('data', data => {
    console.log('receive:', data.toString());
    clientList.forEach(v => {
      v.write('/n');
    });
  });
})



//* 服务端接口返回的配置文件：基本是业务查询接口
const serverConfig = {
  cheguansuo: {
    'user/info': {
      expireTime:3  // 单位分钟
    },
    'message/list': {
      expireTime:5  // 单位分钟
    }
  },
  suishoupai: {
    'user/info': {
      expireTime:3  // 单位分钟
    },
    'message/list': {
      expireTime:5  // 单位分钟
    }
  }
}



//* 本地文件存储
const localStorage = {
  'user/info': {
    lastModified: timestamp,// 服务端请求返回数据后保存在本地的时间戳
    data: {
      //缓存服务端返回的数据
      userName:'123'
    }
  },
  'message/list': {
    lastModified: timestamp,// 单位分钟
    data: {
      //缓存服务端返回的数据
      list: [
        
      ]
    }
  }
}