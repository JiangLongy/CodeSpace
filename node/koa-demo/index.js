// 后端启动一个一直运行服务，提供接口给前端请求
const http = require('http')

const server = http.createServer((req,res)=>{

})

server.listen(3000,()=>{
    console.log('server listing on port 3000');
})