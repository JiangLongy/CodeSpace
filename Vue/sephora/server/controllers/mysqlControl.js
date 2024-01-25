const mysql = require('mysql2')
const config = require('../config')


const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})
const allService = {
    query: function (sql, values) {
        // pool 连接
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                } else {
                    //连接成功 执行sql语句
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
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
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}" and password="${password}";`
    return allService.query(_sql)
}
// 查询数据库
const userFind = (username) => {
    let _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}
// 注册账号
const userRegister = (values) => {
    let _sql = `insert into users set username=?,password=?;`
    return allService.query(_sql, values);
}
// 取文章列表
const noteGet = (type) => {
    let _sql = ''
    if (type === "全部") {
        _sql = `select * from note;`
    } else {
        _sql = `select * from note where type="${type}";`
    }
    return allService.query(_sql)
}
// 取文章详情
const noteGetDetail = (id) => {
    let _sql = `select * from note where id="${id}";`
    return allService.query(_sql)
}
//上传文章
const noteSet = (values) => {
    let _sql = 'insert into note set title=?, type=?, note_content=?, head_image=?, username=?, userId=?, c_time=?, m_time=?;'
    return allService.query(_sql, values)
}
//搜索商品
const goodsSearch = (values) => {
    if (!values) {
        return null
    }
    let _sql = `select * from goods where name like "%${values}%" or category like "%${values}%" or description like "%${values}%" or brand LIKE "%${values}%";`
    return allService.query(_sql)
}
//搜索全部商品
const allGoods = () => {
    let _sql = `select * from goods;`
    return allService.query(_sql)
}
//添加购物车
const goodsAdd = (values) => {
    let _sql = `insert into shopping_cart set user_id=?,goods_id=?,goodsname=?,quantity=?,price=?;`
    return allService.query(_sql, values)
}
//删除商品
const goodsDelete = async (user_id, goods_id) => {
    let _sql = 'DELETE FROM shopping_cart WHERE goods_id = ? AND user_id = ?;';
    return await allService.query(_sql, [goods_id, user_id]);
};
//更新购物车
const updataBag = (values) => {
    let _sql = 'UPDATE shopping_cart SET quantity = quantity + ? WHERE user_id = ? AND goods_id = ?;';
    return allService.query(_sql, values);
}
//搜索购物车
const searchBag = (user_id)=>{
    const _sql = `select * from shopping_cart where user_id = ${user_id};`
    return allService.query(_sql)
}
//查找购物车中是否购买过相同物品
const goodsFind = (values) => {
    let _sql = `select * from shopping_cart where user_id = ? and goods_id = ?;`
    return allService.query(_sql, values)
}
//减库存
const quantityUpdate = (values) => {
    let _sql = `update goods set stock_quantity = stock_quantity - ? where id = ?;`
    return allService.query(_sql, values)
}
//加库存
const quantityAdd = (values)=>{
    let _sql = `update goods set stock_quantity = stock_quantity + ? where id = ?;`
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
    updataBag,
    noteGetDetail,
    searchBag,
    goodsDelete,
    quantityAdd
}