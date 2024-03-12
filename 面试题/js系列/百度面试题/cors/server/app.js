const http = require('http')

const server = http.createServer((req, res) => {
    //跨域是浏览器不接受后端的响应
    //想办法让浏览器不得不接收
    res.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
        // 'Access-Control-Allow-Origin':'ip地址'
    })
    let data = {msg:'Hello cors'}
    res.end(JSON.stringify(data))//向前端返回数据
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})