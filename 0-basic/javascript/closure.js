// 1、闭包实例
const foo = (function () {
    var v = 0
    return () => {
      return v++
    }
  })()
  
  for (let index = 0; index < 10; index++) {
    foo()
  }
  
  console.log(foo())
  
  //2、作用域链
  var fn = null
  
  const foo2 = () => {
    var a = 2
    function innerFunc() {
     // console.log(c) //:ReferenceError: c is not defined; innnerFunc的作用域链上没有该变量
      console.log(a)
    }
    fn = innerFunc
  }
  
  const bar2 = () => {
    var c = 10
    fn()
  }
  
  foo2()
  bar2()
  