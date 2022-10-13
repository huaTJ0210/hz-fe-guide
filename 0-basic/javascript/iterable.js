/*
  使用for循环遍历部分数据结构显得过于笨拙，
  某些情况下还会导致代码的混乱，
  ES6中某些数据结构实现了iterable接口，并且内置了
  [Symbol.iterator]作为属性返回一个新的迭代器
*/

const obj = {}
const it = obj[Symbol.iterator] // 对象并不是可迭代的
console.log(it) // undefined

// 自定义类实现可迭代接口
class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return { done: false, value: 'foo' }
      }
    }
  }
}
