const fs = require('fs')

fs.appendFileSync('./data.txt','小腻子')
// fs.renameSync('./data.txt','./data.md')//重命名
// fs.renameSync('./data.md','./pic/data.md')//移动
// fs.unlinkSync('./pic/data.md')//删除文件
// fs.rmSync('pic',{recursive:true})//删除文件以及子目录