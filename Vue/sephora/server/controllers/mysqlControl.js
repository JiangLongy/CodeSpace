const mysql = require('mysql2')
const config = require('../config')


const pool = mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    port:config.database.PORT
})
const allService = {
    query:function(sql,values){
        // pool 连接
        return new Promise((resolve,reject) =>{
            pool.getConnection((err,connection)=>{
                if(err){
                    reject(err)
                }else{
                    //连接成功 执行sql语句
                    connection.query(sql,values,(err,rows)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve(rows)
                        }
                        connection.release()//释放连接
                    })
                }
            })
        })
    }

}

// 定义接口
// 登录
const userLogin = (username,password)=>{
    let _sql = `select * from users where username="${username}" and password="${password}";`
    return allService.query(_sql)
}
// 查询数据库
const userFind = (username) =>{
    let _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}
// 注册账号
const userRegister = (values) =>{
    let _sql = `insert into users set username=?,password=?;`
    return allService.query(_sql,values);
}
module.exports = {
    userLogin,
    userFind,
    userRegister
}