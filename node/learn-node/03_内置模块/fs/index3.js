const fs = require('fs')
// console.log(fs.statSync('./target.md'))
const info = fs.statSync('./target.md')
console.log(info.isDirectory());//是否为文件夹
console.log(info.isFile());//是否为文件

