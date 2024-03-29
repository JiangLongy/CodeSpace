var findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    for(let a = 0;a<strs.length;a++){
        const {zero,one} = find(strs[a])
        for(let i = m;i>=zero;i--){
            for(let j = n;j>=one;j--){
                dp[i][j] = Math.max(dp[i][j],dp[i-zero][j-one]+1)
            }
        }
    }
    return dp[m][n]
};
function find(str){
    let zero = 0;
    let one = 0;
    for(let i in str){
        if(str[i] == '0'){
            zero++;
        }else{
            one++;
        }
    }
    return {zero,one}
}

console.log(findMaxForm(["10","0001","111001","1","0"],5,3));