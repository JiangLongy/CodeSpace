let num = 15644

function isTrue(num){
    let cur = num
    let length = (cur+'').length
    let res = 0
    for(let i = 0;i<length;i++){
        res+=Math.pow(cur%10,length)
        cur=Math.floor(cur/10)
    }
    console.log(res+'---'+num);
    return res===num
}

console.log(isTrue(num));