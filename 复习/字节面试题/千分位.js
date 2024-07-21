let num = '1234567.74878451'
function formatNumber(number){
    let arr = number.split('.')
    let intger = arr[0]
    let decimal = arr[1]
    let cur = 0
    let length = intger.length-1
    while(length>=0){
        if(cur === 3){
            intger = intger.slice(0,length+1)+','+intger.slice(length+1)
            cur = 0
        }else{
            cur++
        }
    }
    return intger+'.'+decimal

}
console.log(formatNumber(num));