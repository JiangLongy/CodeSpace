const Router = require('@koa/router')
const router = new Router()

const { goodsSearch,allGoods } = require('../controllers/mysqlControl')

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
module.exports = router