const fs = require('fs')
// const info = fs.readdirSync('./test')
// console.log(info);

// fs.mkdirSync('./test-dir/data/list',{recursive:true})//允许多层级
// fs.rmdirSync('./test-dir',{recursive:true})
fs.watch('./',{recursive:true},(eventType,filename)=>{
    console.log(`当前文件夹下的${filename}文件变更为:${eventType}`);
})