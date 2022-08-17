// 生成器作为默认的迭代器

class Foo {
  constructor() {
    this.values = [1, 2, 3]
  }
  *[Symbol.iterator]() {
    // yield* 其实是for循环中执行yiled的一种简写形式
    // 但 yield必须是可迭代的
    yield* this.values
  }
}

const f = new Foo()
for (const value of f) {
  console.log(value)
}

//
function* genFunc() {
  const value = yield 1
  yield 2 + value
  yield 3
  return 4
}

const it = genFunc()

const v1 = it.next()
console.log(v1)
const v2 = it.next(3)
console.log(v2)
const v3 = it.next()
console.log(v3)
const v4 = it.next()
console.log(v4)
