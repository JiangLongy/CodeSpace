const fs = require('fs')

// fs.writeFileSync('./target.md','杨美丽的丽')

const img = fs.readFileSync('./123.png')
// console.log(img);
// console.log(Buffer.isBuffer(img));
fs.writeFileSync('./pic/1234.png',img)
console.log(img.length);
