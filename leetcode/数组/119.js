// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
var getRow = function(rowIndex) {
    let res = [1]
    for(let i = 1 ;i<=rowIndex+1;i++){
        let arr = []
        for(let j = 0;j<i;j++){
            
            if(j == 0 || j == i -1){
            arr.push(1)
            }
            else{
                arr.push(res[j-1]+res[j])
            }

        }
        res = arr
    }
    return res
};
console.log(getRow(5))