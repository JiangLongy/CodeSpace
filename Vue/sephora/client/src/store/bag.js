import { defineStore } from 'pinia'
import axios from '../api/index'


export const useBagStore = defineStore('bag', {
    state() {
        return {
            bagGoods: [
                
            ]
        }
    },
    actions: {
        async purchaseGoods(user_id, goods_id, goodsname, quantity, price) {
            try {
                const findResult = await axios.post('/goodsFind',{
                    user_id: user_id,
                    goods_id: goods_id
                })
                console.log("0000000");
                console.log(findResult.data.length);
                if(findResult.data.length){
                    const updateResult = await axios.post('/updatabag', {
                         user_id: user_id,
                         goods_id: goods_id,
                         quantity : quantity
                        });
                    console.log("11111111");
                }else{
                    const addResult = await axios.post('/goodsAdd',{
                        user_id: user_id,
                        goods_id: goods_id,
                        goodsname: goodsname,
                        quantity: quantity,
                        price: price
                   
                    })
                }
                await axios.post('/quantityupdate',{goods_id,quantity})
            } catch (error) {
                console.log(error);
            }
        },
        async getBagGoods(user_id){
            const res = await axios.post('/searchBag',{
                user_id: user_id
            })
            this.bagGoods = res.data
            console.log(this.bagGoods);
        },
        async deleteGoods(user_id, goods_id){
            console.log("删除触发");
            const res = await axios.post('/goodsDelect',{
                user_id: user_id,
                goods_id: goods_id
            })
            console.log(res);
            await axios.post('/quantityadd',{goods_id: goods_id,quantity: 1})
            console.log(res);
        },
    }
})