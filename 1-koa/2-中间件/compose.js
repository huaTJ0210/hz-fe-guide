
const add = (x, y) => x + y;
const square = z => z * z;

// 合成多个函数
const compose = (...[first, ...other]) => (...args) => {
  let ret = first(...args);
  other.forEach(fn => {
    ret = fn(ret);
  });
  return ret;
}

const fn = compose(add, square, square);

console.log(fn(1,2))