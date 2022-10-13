//** 事件的发布与订阅模式 */
//** 采用once解决缓存失效后的雪崩问题 */
var events = require('events')
var proxy = events.EventEmitter()
proxy.setMaxListeners(0)// 防止监听器过多引发的警告
var status = 'ready'
var db //数据库
var select = function (callback) {
  proxy.once('selected', callback)
  if (status == 'ready') {
    status = 'pending'
    db.select('SQL', function (results) {
      proxy.emit('selected', results)
      status = 'ready'
    })
  }
}
