import { defineStore } from 'pinia'
import axios from '../api/index'


export const useBagStore = defineStore('bag', {
    state() {
        return {
            bagGoods: []
        }
    },
    actions: {
        getGoods() {

        },
        async addGoods(useId, goodsId, quantity) {
            try {
                //   console.log(useId, goodsId, quantity);
                console.log(1111);
                const res = await axios.post('/goodsFind', {
                    user_id: useId,
                    goods_id: goodsId
                })
                console.log(res.data);
                if (!res.data) {
                    await axios.post('/goodsAdd', {
                        user_id: useId,
                        goods_id: goodsId,
                        quantity: quantity
                    });                 
                }else{
                    await axios.post('/updatabag',{
                        user_id: useId,
                        goods_id: goodsId,
                        quantity: quantity
                    })
                }
                this.quantityUpdate(goodsId, quantity);
            } catch (error) {
                console.error('Error adding goods:', error);
                // 处理错误，比如显示错误提示
            }
        },
        async quantityUpdate(goods_id, quantity) {
            try {
                await axios.post('/quantityupdate', {
                    goods_id: goods_id,
                    quantity: quantity
                });
            } catch {
                console.log('error');
            }
        }
    }
})