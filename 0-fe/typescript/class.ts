//#region -- 类类型 ---
class Point {
  static version: number = 1

  x: number = 1
  y: number

  constructor() {
    this.y = 1
  }

  area() {
    return this.x + this.y
  }
}

// 创建类的实例 : 实例的类型即为Point
const p0: Point = new Point()
p0.area()

// 类的构造函数类型
interface PointConstructor {
  version: number
  new (): Point //构造函数
}

const p: PointConstructor = Point
console.log(p.version)

//#endregion

//#region -- this类型 --
class Counter {
  count: number
  // 方法的返回类型为this类型
  public add(): this {
    this.count++
    return this
  }
  public subtract(): this {
    this.count--
    return this
  }
  public getResult(): number {
    return this.count
  }
}

const count = new Counter()
count.add().subtract().getResult()
//#endregion
