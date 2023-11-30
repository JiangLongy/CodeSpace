//node 内置的模块化系统 commonJS
//fs 文件模块 内置的
//文件读取耗时:把文件从硬盘读取到内存 文件大小
const fs = require('fs');
//promise async : 代码的编写顺序要与执行顺序一致
fs.readFile('./a.txt','utf8',((err,data)=>{
    //后端 稳定性第一 
    if(err){
        console.log(err);
        return;
    }
    //<Buffer e4 bd a0 e5 9b 9e e6 9d a5 e4 ba 86 e5 90 97 ef bc 9f> Budder:二进制流
    // console.log(data.toString());
    console.log(data);
    fs.readFile('./c.txt','utf-8',((err,data3)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data3);
    }))
}))


