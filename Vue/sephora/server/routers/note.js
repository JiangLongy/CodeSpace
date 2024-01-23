const Router = require('@koa/router')
const router = new Router()

const { formatDate } = require('../config/utils.js')
const { noteGet, noteSet,noteGetDetail } = require('../controllers/mysqlControl')
//获取文章列表接口
router.post('/noteGet', async (ctx) => {
    try {
        const { type } = ctx.request.body
        try {
            const notes = await noteGet(type)
            ctx.body = {
                code: '8000',
                data: notes,
                msg: 'sucess'
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
//获取文章详情
router.post('/noteDetailGet',async (ctx)=>{
    try {
        const { id } = ctx.request.body
        const note = await noteGetDetail(id)
        ctx.body = {
            code: '8000',
            data: note,
            msg: 'sucess'
        }
    } catch (error) {
        ctx.body = {
            code: '8004',
            data: 'error',
            msg: '查找失败'
            
        }
    }
})
//发布文章接口
router.post('/noteSet', async (ctx) => {
    const { title, type, note_content, head_image, username } = ctx.request.body
    const c_time = formatDate(new Date())
    const m_time = formatDate(new Date())
    try {
        const result = await noteSet(title, type, note_content, head_image, username, c_time, m_time)
        if(result.affectedRows){
            ctx.body = {
                code: '8000',
                data: result,
                msg: '发布成功'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '发布失败'
            }
        }
    } catch (error) {
        ctx.body = {
            code:'8005',
            data:error,
            msg:'服务器异常'
        }
    }
})
module.exports = router