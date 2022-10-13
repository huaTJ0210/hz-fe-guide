// (1) 异步串行
;(function next(i, len, callback) {
  if (i < len) {
    async(arr[i], function (value) {
      arr[i] = value
      next(i + 1, len, callback)
    })
  } else {
    callback()
  }
})(0, arr.length, function () {
  // All array items have processed.
})

// (2) 异步并行
;(function (i, len, count, callback) {
  for (; i < len; ++i) {
    ;(function (i) {
      async(arr[i], function (value) {
        arr[i] = value
        //** 通过计数器来标识所有任务是否全部完成 */
        if (++count === len) {
          callback()
        }
      })
    })(i)
  }
})(0, arr.length, 0, function () {
  // All array items have processed.
})
