const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime-types')
const checksum = require('checksum')
// 前后端不分离，把一个静态资源返回给前端

const server = http.createServer((req, res) => {
    let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)//读取文件的详细参数
        const isDir = stats.isDirectory()// 用来判断读到的是文件还是文件夹
        if (isDir) {
            filePath = path.join(filePath, 'index.html')
        }
        if (!isDir || fs.existsSync(filePath)) {
            // 读取资源文件向前端返回
            const content = fs.readFileSync(filePath) // 读取文件
            const {ext} = path.parse(filePath)
            const timeStamp = req.headers['if-modified-since']
            if(timeStamp && Number(timeStamp) === stats.mtimeMs){//资源未更改
                status = 304
            }
            // console.log(ext);
            checksum.file(filePath, (err, sum) => {
               const resStream = fs.createReadStream(filePath)
                sum = `"${sum}"`
                if(req.headers['if-none-match'] === sum){
                    res.writeHead(304,{
                        'Content-Type': mime.lookup(ext),
                        'etag':sum//签名
                    })
                }else{
                    res.writeHead(200,{
                        'Content-Type': mime.lookup(ext),
                        'etag':sum//签名
                    })
                }
                return resStream.pipe(res)
            })
            // res.writeHead(200, { 
            //     'Content-Type': mime.lookup(ext),
            //     'cache-control':'max-age=86400',//强缓存一天
            //     // 'last-modified':stats.mtimeMs,//时间戳
            //     'etag': ``// 签名
            // })
            return res.end(content)    
        }
    }
    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
    res.end('<h1>404 Not Found</h1>')
})
server.listen(3000, () => {
    console.log('server is running at port 3000')
});