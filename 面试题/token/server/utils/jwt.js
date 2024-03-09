const jwt = require('jsonwebtoken');

function sign(option){
    return jwt.sign(option,'666',{
        expiresIn:60,//token的有效时长
    })
}

const verify = ()=>(ctx,next)=>{
    let jwtToken = ctx.req.headers.authorization;
    if(jwtToken){
        //校验
        jwt.verify(jwtToken,'666',(err,decoded)=>{
            if(err){//前端传过来的token有问题
                ctx.body={
                    status:401,
                    message:'token失效'
                }
            }else{
                next()
            }
        })
    }else{
        ctx.body={
            status:401,
            message:'请提供token'
        }
    }
}
module.exports = {
    sign,
    verify
}