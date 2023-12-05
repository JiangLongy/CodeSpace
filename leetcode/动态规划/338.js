var countBits = function(n) {
    let f = []
    f[0] = 0
    for(let i = 1;i<=n;i++){
        if(i == 1||i == 2){
            f.push(1)
            continue
        }
        if(i%2 != 0){
            f.push(f[i-1]+1)
        }else{
            f.push(f[i/2])
        }
    }
    return f
};

console.log(countBits(0));