const Koa = require('koa')
const app = new Koa()

const main = (ctx) => {//只要被app use掉的函数一定有ctx参数 ctx
    if(ctx.url.startsWith('/home')){
        ctx.response.type='json'
        ctx.body ='<h2>Hello World<h2>'
    }

}
app.use(main)
app.listen(3000, () => {
    console.log('项目运行在3000端口');
})