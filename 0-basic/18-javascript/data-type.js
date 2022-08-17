// 将字母的首位大写
function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

// --------------  数据类型判断 -------------------
/*
  (1) 数据类型的判断：typeof
  能准确的判断出除了null以外的基本数据类型（string、number、boolean、undefined）
  还能判断function、symbol
  （2） a instanceof B
   判断B.prototype是否在a的原型链上
*/
function intanceofMock(l, r) {
  if (typeof l !== 'object') {
    return false
  }

  while (true) {
    if (l === null) {
      return false
    }
    if (l.__proto__ === r.prototype) {
      return true
    }
    l = l.__proto__
  }
}

/*
  (3) Object.prototype.toString.call(xx)
   + 获取数据类型 [object Xx]
   + 如果传入的参数是基本类型返回的是基本类型对应的包装类型 ‘number’ ==》 Number
*/

// 数据类型检测函数
const toString = Object.prototype.toString
function type(x) {
  // null
  if (x === null) {
    return 'null'
  }
  // 基本数据类型
  const t = typeof x
  if (t !== 'object') {
    return t
  }
  // 使用toString获取数据类型
  let cls
  let clsLower
  try {
    cls = toString.call(x).slice(8, -1)
    clsLower = cls.toLowerCase()
    return clsLower
  } catch (error) {
    return 'object'
  }
}

// --------------  数据类型转化 -------------------

const foo = {
  toString() {
    return 'li'
  },
  valueOf() {
    return 1
  }
}
/*
  (1) + 运算符至少一侧是字符串类型则会将另外一个数据类型也转化为字符串进行合并
  （2）+ 如果运算符两侧没有字符串子类，并且存在是对象类型，会先调用对象的valueOf或者toString进行转化

*/

// ------------ cannot read property of undefined ------

/*
  + 空值合并运算符：  xx ?? 'defaultValue'
  + 可选链式操作符： user?.friend?.name  ： 
   babel的处理是先判断user是否为null 然后再将user.friend赋值给一个临时变量user$friend
*/

const obj = {
  user: {
    posts: [
      {
        title: 'Foo',
        comments: ['Good one', 'interesting']
      }
    ]
  }
}

const get = (paths, obj) =>
  paths.reduce((res, cur) => (res && res[cur] ? res[cur] : null), obj)

// 函数柯里化 ： 将本来传递多个参数的函数转化为只传递一个参数的函数
const newGet = paths => obj =>
  paths.reduce((res, cur) => (res && res[cur] ? res[cur] : null), obj)

// ['Good one', 'interesting']
console.log(get(['user', 'posts', 0, 'comments'], obj))

const getUserComments = newGet(['user', 'posts', 0, 'comments'])
console.log(getUserComments(obj))
