const EventEmitter = require('events');

// 1:创建事件对象
const event = new EventEmitter();
const eventName = 'TEST'; // 事件名称
const eventCallBack = () => {
  console.log(`${eventName}事件被调用`);
};

// 2:监听事件
event.on(eventName, eventCallBack);

// 3:发送事件
event.emit(eventName);

// 4:移除事件的监听
event.off(eventName, eventCallBack);

// 5:监听事件，事件执行完毕后立即移除监听
//event.once(eventName, eventCallBack);

class MyEvent {
  constructor() {
    // 存放事件的容器
    this._events = Object.create(null);
  }
  // 1:添加监听事件
  on(event, callback) {
    const events = this._events[event] || [];
    events.push(callback);
    this._events[event] = events;
  }
  //2:触发事件
  emit(event, ...args) {
    if (this._events[event] && this._events[event].length > 0) {
      const events = this._events[event];
      events.forEach(item => {
        item.call(this, ...args);
      });
    }
  }
  //3:移除事件
  off(event, callback) {
    if (!callback) {
      this._events[event] = [];
    }
    if (this._events[event] && this._events[event].length > 0) {
      const events = this._events[event];
      events.filter(item => {
        return item !== callback && item.fn !== callback;
      });
    }
  }
  // 4: 只监听一次事件
  once(event, callback) {
    const innerFn = function (...args) {
      callback.call(this, ...args);
      this.off(event, innerFn);
    };
      innerFn.fn = callback; // 移除事件传入的回调函数是callback
      this.on(event,innerFn);
  }
}
