const url = require('url')
const adrs = 'http://localhost:8080/default.html?year=2020&month=march'
const que = url.parse(adrs, true)
console.log(que.host)//return localhost:8080
console.log(que.pathname)//return /default.html
console.log(que.search)//return ?year=2020 and month=march
const quedata = que.query;//returns an object:{year:2020 , month:'march}
console.log(quedata.month)


