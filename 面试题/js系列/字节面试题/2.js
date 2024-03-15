let a = 9999999999999
let b = 54845454

function sum(a,b){
    a = a+''
    b = b+''
    console.log(a,b);
    const len = Math.max(a.length,b.length)
    a=a.padStart(len,'0')
    b=b.padStart(len,'0')
    let res = ''
    let sum = 0
    for(let i = len-1;i>=0;i--){
        const n = +a[i] + +b[i] + sum
        sum = Math.floor(n/10)
        res = (n%10) + res
    }
    return sum ? '1'+res : res
}

console.log(sum(a,b))