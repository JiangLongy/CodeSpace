const path = require('path')
// console.log(path.join('a','b','c'));
console.log(process.cwd());//d:\codeSpace\node\learn-node
console.log(path.join(process.cwd(),'/model','index'));//d:\codeSpace\node\learn-node\model\index
console.log(path.resolve('a','b','c'));//d:\codeSpace\node\learn-node\a\b\c
console.log(path.dirname(process.cwd()));//d:\codeSpace\node 返回路径的目录名
console.log(path.basename('a/b/c.js'));//c.js
console.log(path.basename(__filename));//读到文件的绝对路径 index.js
console.log(path.extname(__filename));//读后缀
console.log(path.normalize('/a//b\\c/d.j'));//格式化路径成标准路径
console.log(path.parse(__filename));//解析文件
console.log('foo\\bar\\baz'.split(path.sep));
console.log(path.sep);// \


