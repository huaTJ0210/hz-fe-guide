// 比较多个值是否相等：使用Object.is() 类似 ===

function recursivelyCheckEqual(x, ...rest) {
  return Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
}

// Object只是一个构造函数，
console.log(Function.prototype.__proto__ === Object.prototype)

// 寄生组合式继承

function Person(name) {
  this.name = name
}

Person.prototype.walk = function () {
  console.log('walk')
}

function Student(name, number) {
  Person.call(this, name)
  this.number = number
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

// 注意原型的赋值应该在组合式继承之后
Student.prototype.learn = function () {
  console.log('learn')
}

const stu = new Student('li', 123)
stu.walk()
stu.learn()

// ES6中class的使用

class Car {
  // 构造函数
  constructor() {
    /*
        const car = new Car()
        
      */
  }
  // 存储和设置方法
  get color() {
    return this._color
  }
  set color(newColor) {
    this._color = newColor
  }
  // 静态方法
  static run() {}
  // 实例方法：定义在类的原型上
  drive() {}
}
