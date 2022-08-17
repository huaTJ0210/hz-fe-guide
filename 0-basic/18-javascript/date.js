const moment = require('moment')

const nowTimeStamp = Date.now()
console.log(nowTimeStamp)
const d = moment(nowTimeStamp).format('YYYY-MM-DD hh:mm:ss.SSS')
console.log(d)

const d1 = new Date(d)
const st = d1.getTime()
console.log(st)

// 时间戳的处理函数
function getDate(st) {
  const date = new Date(st)

  const year = date.getFullYear()
  const month = formatZero(date.getMonth() + 1)
  const days = formatZero(date.getDate())

  const hour = date.getHours()
  const minute = date.getMinutes()
  const seconds = date.getSeconds()

  return `${year}-${month}-${days} ${hour}:${minute}:${seconds}`
}

function formatZero(number) {
  return (number = number < 10 ? '0' + number : number)
}

const d3 = getDate(Date.now())
console.log(d3)
