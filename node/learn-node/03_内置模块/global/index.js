// console.log(globalThis === global);
// global.userInfo = {
//     name:'Tom',
//     age:18
// }
// console.log(Object.getOwnPropertyNames(global));
// console.log(__filename);
// console.log(__dirname);
//process
// console.log(process.argv);
// console.log(process.cwd());
// console.log(process.env);
// console.log(process.pid);
// console.log(process.platform);//读操作系统
// console.log(process.arch);//读cpu
process.stdout.write('helle')//写入数据流
process.stdin.on('data',(data)=>{//读取输入的数据流
    console.log(`用户输入:${data}`);
})





