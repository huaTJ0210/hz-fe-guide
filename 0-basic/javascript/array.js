// -------reduce的使用-----
// 1、定义一个pipe函数
const pipe =
  (...functions) =>
  input =>
    functions.reduce((acc, func) => func(acc), input)
// 2、Promise的顺序调用
const runPromiseInSequence = (promises, value) =>
  promises.reduce(
    (acc, nextPromise) => acc.then(nextPromise),
    Promise.resolve(value)
  )
// 3、compose函数的实现
const compose = (...funcs) => {
  if (funcs.length) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}
