var sumSubarrayMins = function(arr) {
    let n = 0
    let sum = 0
    for(let i =0;i<arr.length-1;i++){
        let left = 0;
        let right = n;
        while(right<arr.length){
            sum = sum+ Math.min(...arr.slice(left,right+1))
            left++
            right++
        }
        n++
    }
    return (sum+arr.sort((a,b)=>a-b)[0])%(1000000000+7)
};
console.log(sumSubarrayMins([11,81,94,43,3]));