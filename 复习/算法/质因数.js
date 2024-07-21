function isZY(num){
    let arr = [2]
    for(let i = 3;i<=num;i++){
        console.log(arr.indexOf(i%2),i%2);
        if(arr.indexOf(i%2) !== -1){
            arr.push(i)
        }
    }
    console.log(arr);
    return arr.pop() === num
}

console.log(isZY(330))