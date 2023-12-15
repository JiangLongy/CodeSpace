import axios from "axios"
//fetch xhr vue 应用时候 复用性 统一管理 =>做的app而不是页面
// 所有的请求前面加上baseURL地址

axios.defaults.baseURL="http://localhost:3000"
axios.defaults.timeout=10*1000
axios.defaults.maxBodyLength = 5*1024*1024;//图片上传
const http = {
    get(url,params={}){
        //能await
        return new Promise((resolve,reject)=>{
            //请求的抽象
            axios
            .get(url,{params})
            .then((res) =>{
                resolve(res.data)
            })
            .catch(err=>{
                reject(err.data)
            })
        })
    }
}
export default http;