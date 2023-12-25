//文件系统
// const fs = require('fs')
// const syncData = fs.readFileSync('./data.txt','utf-8')
// console.log(syncData);


// fs.readFile('./data.txt', 'utf-8', (err, res) => {
//     if (!err) {
//         console.log(res);
//     }
// })


// fs.promises.readFile('./data.txt','utf-8').then(res=>{
//     console.log(res);
// })


const fs = require('fs/promises')
fs.readFile('./data.txt', 'utf-8').then(res =>{
    console.log(res);
})