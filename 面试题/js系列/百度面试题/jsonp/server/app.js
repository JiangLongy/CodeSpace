const Koa = require('koa');

const app = new Koa();

const main = (ctx,next)=>{
    console.log(ctx.query);
    const cb = ctx.query.cb;
    const data = 'hello world';
    const str = `${cb}('${data}')`;
    ctx.body = str
}

app.use(main)
app.listen(3000,()=>{
    console.log('listen on port 3000');
});