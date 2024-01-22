const Router = require('@koa/router')
const router = new Router()

const { goodsSearch,allGoods,goodsAdd,quantityUpdate,goodsFind} = require('../controllers/mysqlControl')

//获取商品列表
router.post('/goodsSearch', async (ctx) => {

    try {
        const { value } = ctx.request.body
        try {
            const res = await goodsSearch(value)
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '查找失败'
            }
        }


    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }

})
//获取全部商品
router.post('/allgoods',async(ctx)=>{
    try {
        try {
            const res = await allGoods()
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '查找失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
    
})
//查找是否购买过相同物品
router.post('/goodsFind',async()=>{
    try {
        const {user_id,goods_id} = ctx.request.body
        try {
            const res = await goodsFind(user_id,goods_id)
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '查找失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})
//添加到购物车
router.post('/goodsAdd',async(ctx)=>{
    try {
        const {user_id,goods_id,quantity} = ctx.request.body
        try {
            const res = await goodsAdd([user_id,goods_id,quantity])
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '添加失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})
//更新购物车
router.post('/updatabag',async(ctx)=>{
    try {
        const {user_id,goods_id,quantity} = ctx.request.body
        try {
            const res = await updataBag(user_id,goods_id,quantity)
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '更新失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }


})
//更新商品库存
router.post('/quantityupdate',async(ctx)=>{
    try {
        const {goods_id,quantity} = ctx.request.body
        try {
            const res = await quantityUpdate(goods_id,quantity)
            ctx.body = {
                code: '8000',
                data: res,
                msg: 'success'
            }
        } catch (error) {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '更新失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

module.exports = router