let obj = {
    a:1,
    b:{
        n:2
    },
    c:[1,2,3]
}

function deepCopy(obj) {
    return new Promise((resolve,reject)=>{
        const { port1,port2 } = new MessageChannel();
        port1.postMessage(obj);
        port2.onmessage = (msg)=> {
            resolve(msg.data)
        }
        
    })
   
}
async function fn(){
    let newObj = await deepCopy(obj)
    console.log(newObj);
}
fn()