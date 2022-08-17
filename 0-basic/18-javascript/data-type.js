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
  获取数据类型 [object Xx]
*/
