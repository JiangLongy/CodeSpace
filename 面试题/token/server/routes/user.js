const router = require('koa-router')()
const jwt = require('../utils/jwt.js')


router.post('/login',(ctx) => {
    let user = ctx.request.body //获取到前端传递的参数
    console.log(user);
    if(1){
        let jwtToken = jwt.sign({id:'1',username:user.username,admin:true})
        console.log(jwtToken);
        ctx.body = {
            code:0,
            data:`你好${user.username}`,
            token:jwtToken//如何打造一个token
        }
    }else{
        ctx.body = {
            code:1,
            data:'用户名或密码错误'
        }
    }
})

// 首页的接口 检验前端在请求头当中携带过来的token是否正确
router.post('/home',jwt.verify(),(ctx)=>{
    ctx.body ={
        code:0,
        data:'这是首页',
    }
})

module.exports = router