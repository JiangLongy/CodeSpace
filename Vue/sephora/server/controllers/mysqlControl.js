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
// 取文章
const noteGet = (type) =>{
    let _sql = ''
    if(type === "全部"){
         _sql = `select * from note;`
    }else{
         _sql = `select * from note where type="${type}";`
    }
    return allService.query(_sql)
}
//上传文章
const noteSet = (values)=>{
    let _sql = `insert into note set title=?,type=?,note_content=?,head_image=?,username=?,c_time=?,m_time=?;`
    return allService.query(_sql,values)
}
//搜索商品
const goodsSearch = (values) =>{
    if(!values){
        return null
    }
    let _sql = `select * from goods where name like "%${values}%" or category like "%${values}%" or description like "%${values}%" or brand LIKE "%${values}%";`
    return allService.query(_sql)
}
//搜索全部商品
const allGoods = ()=>{
    let _sql = `select * from goods;`
    return allService.query(_sql)
}
//添加购物车
const goodsAdd = (values) =>{
    let _sql = `insert into shopping_cart set user_id=?,goods_id=?,quantity=?;`
    return allService.query(_sql,values)
}
//更新购物车
const updataBag = (values)=>{
    let _sql = `update shopping_cart set quantity = quantity + ? where user_id = ? and goods_id = ?;`
    return allService.query(_sql,values)
}
//查找购物车中是否购买过相同物品
const goodsFind = (values)=>{
    let _sql = `select * from shopping_cart where user_id = ? and goods_id = ?;`
    return allService.query(_sql,values)
}
//更新库存
const quantityUpdate = (values)=>{
    let _sql = `update goods set stock_quantity = stock - ? where id = ?;`
    return allService.query(_sql,values)
}
module.exports = {
    userLogin,
    userFind,
    userRegister,
    noteGet,
    noteSet,
    goodsSearch,
    allGoods,
    goodsAdd,
    quantityUpdate,
    goodsFind,
    updataBag
}