let arr = ['-5','5-i','6+3i','-4+0i']
function a(n,arr){
    let res = 0
    for(let i of arr){
        if(i.includes('i')){
            let str = i.split('i')
            console.log(str[0],str[0][str[0].length-1]);
            if(str[0][str[0].length-1] == '0'){
                res++
            }
        }else{
            res++
        }
    }
    return res
}
console.log(a(4,arr));