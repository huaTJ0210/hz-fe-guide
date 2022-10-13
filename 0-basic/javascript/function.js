//(1) 扩展运算符

// 1-1 : 函数调用时处理
function add() {
  let sum = 0
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index]
  }
  return sum
}

add(1, 2, ...[3, 4, 5], 6)

// 1-2 ： 函数定义时用来收集参数

function getSum(...values) {
  return values.reduce((acc, item) => acc + item, 0)
}

console.log(getSum(1, 2, 3, 4))

//(2) this指针问题

// 2-1 : 箭头函数的this指向函数定义时所在的上下文对象
// window.color = 'red'
const sayHello = () => console.log(this.color)

// (3) call的实现
Function.prototype._callFunc = function (oThis, ...args) {
  if (typeof oThis == 'undefined') {
    oThis = window
  }
  const obj = new Object(oThis)
  const func = this
  const symbol = Symbol('__call_this__')
  obj[symbol] = func
  const res = obj[symbol](...(args || []))
  delete obj[symbol]
  return res
}

function greeting() {
  console.log(this.name)
  console.log(arguments)
}

const targetThis = {
  name: 'red'
}

const res = greeting._callFunc(targetThis, 1, 2, 3)
console.log(res)

// (4)bind的实现
Function.prototype._bind = function (oThis) {
  const args = Array.prototype.slice(arguments, 1)
  const fToBind = this
  const func = function () {}
  const boundFunc = function () {
    return fToBind.apply(
      this instanceof func && oThis ? this : oThis,
      Array.prototype.slice(arguments).concat(args)
    )
  }
  // 保证使用new创建的实例原型链
  func.prototype = fToBind.prototype
  boundFunc.prototype = new func()
  return boundFunc
}
