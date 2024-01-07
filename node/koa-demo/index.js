// 后端启动一个一直运行服务，提供接口给前端请求
const http = require('http')
//想办法提供不同的接口
const server = http.createServer((req,res)=>{
    //提供不同的接口地址
    if(req.url.startsWith('/home')){
        res.end('welcom to home page')
    }else if(req.url.startsWith('/detail')){
        res.end('welcom to detail page')

    }else{
        res.end('Not Found')
    }
})

server.listen(3000,()=>{
    console.log('server listing on port 3000');
})