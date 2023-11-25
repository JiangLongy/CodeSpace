//把金数据的2200数据拿到的写法
const FID = 'TM8uOr';
const geJintData=async()=>{
    let res = [];
    let count = 50;
    let next = 0;
    //while+请求40次 恐怖
    while(count == 50){
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`
        if(next){
            url=`${url}?next=${next}`
        }
        const rowData = await fetch(url,{
            headers:{
                
            }
        });
        const data = await rowData.json();
        count = data.count;
        res.concat(data.data)
    }
}