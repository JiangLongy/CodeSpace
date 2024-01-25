const Router = require('@koa/router')
const router = new Router()
const { findNoteListBytype,findNoteDetailById,notePublish } = require('../controllers/mysqlControl.js')
const { format } = require('mysql2')
const {formatDate} = require('../config/utils.js')
router.post('/findNoteListBytype',async(ctx)=>{
    const {note_type} = ctx.request.body
    // console.log(note_type);
    try {
        const result = await findNoteListBytype(note_type)
        ctx.body = {
            code:'8000',
            data:result,
            msg:'sucess'
        }
    } catch (error) {
        ctx.body = {
            code:'8005',
            data:error,
            msg:'服务器异常'
        }
    }
  

})
router.post('/findNoteDetailById',async(ctx)=>{
    const { note_id } = ctx.request.body
    try {
        const result = await findNoteDetailById(note_id)
        if(result.length){
            ctx.body = {
                code:'8000',
                data:result[0],
                msg:'sucess'
            }
        }else{
            ctx.body = {
                code:'8004',
                data:'error',
                msg:'查找失败'
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
//发布笔记
router.post('/publish', async(ctx)=>{
    const {note_content,title,head_img,note_type,nickname,userId} = ctx.request.body
    const c_time = formatDate(new Date())
    const m_time = formatDate(new Date())
    try {
        const result = await notePublish([note_content,title,head_img,note_type,nickname,userId,c_time,m_time])
        // console.log(result);
        if(result.affectedRows){
            ctx.body = {
                code:'8000',
                data:'sucess',
                msg:'发布成功'
            }
        }else{
            ctx.body = {
                code:'8004',
                data:'error',
                msg:'发布失败'
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