const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const main = (ctx) => {//只要被app use掉的函数一定有ctx参数 ctx
    if(ctx.url.startsWith('/user')){
        ctx.body = fs.readFileSync('./data.json','utf-8')
    }else if(ctx.url.startsWith('/home')){
        const page = fs.readFileSync('./template.html','utf-8')
        ctx.body = page
    }

}
app.use(main)
app.listen(3000, () => {
    console.log('项目运行在3000端口');
})