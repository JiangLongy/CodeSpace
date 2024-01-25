// 和数据库连接的相关操作
const mysql = require('mysql2')
const config = require('../config')

//创建线程池
const pool = mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    port:config.database.PORT
})

// 连接Mysql
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
    let _sql = `insert into users set username=?,password=?,nickname=?;`
    return allService.query(_sql,values);
}
//根据类型查找笔记列表
const findNoteListBytype = (note_type)=>{
    let _sql = `select * from note where note_type="${note_type}";`
    return allService.query(_sql)
}
//根据id查找笔记
const findNoteDetailById = (id)=>{
    let _sql = `select * from note where id="${id}";`
    return allService.query(_sql)
}
//发布笔记
const notePublish = (values)=>{
    let _sql = `insert into note set note_content=?,title=?,head_img=?,note_type=?,nickname=?,
    userId=?,c_time=?,m_time=?;`
    return allService.query(_sql,values)
}
module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListBytype,
    findNoteDetailById,
    notePublish
}