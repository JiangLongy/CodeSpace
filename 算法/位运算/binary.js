function Binary(n) {
    let res = ''
    while(n){
        res+=n%2
        n = Math.floor(n/2)
    }
    return res.split('').reverse().join('')
}
console.log(Binary(13));