const Koa = require('koa')
const fs = require('fs')

// /后端路由
const app = new Koa()
const path = require('path')



function rewriteImport(content){
    // g-修饰符 全局匹配  [0-9]匹配0-9中的一个字符  | 或  () 分组  + 匹配1次以上  ^'" 匹配不是'"
    return content.replace(/ from ['|"]([^'"]+)['|"]/g,function(s0,s1){
        // console.log(s0,s1);
        if(s1[0] !== '.' && s1[0] !== '/'){
            return `from '/@modules/${s1}'`
        }else{
            return s0
        }
    })
}
//中间件 middleware 洋葱模型
app.use(async ctx =>{
    //如果是/
    // ctx 请求上下文 上下文请求+响应对象
    const {request:{url,query}} = ctx;
    if(url === '/'){
        //设置响应头
        ctx.type = 'text/html'
        let content = fs.readFileSync('./index.html','utf-8')
        ctx.body = content
    }else if(url.endsWith('.js')){
        console.log(__dirname,url.slice(1));
        //resolve 有效的物理路径
        const p = path.resolve(__dirname,url.slice(1))
        ctx.type = 'application/javascript'
        const content = fs.readFileSync(p,'utf-8')
        ctx.body = rewriteImport(content)
    }
})
app.listen(5173,()=>{
    console.log("Vite,拿下字节");
})