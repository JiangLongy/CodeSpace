import http from 'node:http'
import { Server } from 'socket.io'

const server = http.createServer()

const io = new Server(server,{
    core:true
})


//事件模型驱动
io.on('connection',(socket)=>{
    console.log('客户端连接成功')
})

server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})