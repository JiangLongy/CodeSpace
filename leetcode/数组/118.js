// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
var generate = function(numRows) {
    if(numRows == 1) return [[1]]
    let arr = [[1],[1,1]]
    for(let i  = 2;i<numRows;i++){
        let arr1 = []
        for(let j = 0;j<=i;j++){
            if(j == 0 || j == i){
                arr1.push(1)
            }else{
                arr1.push(arr[i-1][j-1]+arr[i-1][j])
            }
        }
        arr.push(arr1)
    }
    return arr
};
console.log(generate(5))