const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-bodyparser')//让koa能解析post参数
const cors = require('koa2-cors')//解决跨域


const user = require('./routers/user.js')
const note = require('./routers/note.js')
app.use(cors()) // 告诉浏览器允许跨域
app.use(bodyParser())

app.use(note.routes(),note.allowedMethods())
app.use(user.routes(),user.allowedMethods())
app.listen(3000,()=>{
    console.log('项目已启动');
})