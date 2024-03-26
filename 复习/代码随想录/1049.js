var lastStoneWeightII = function(stones) {
    let sum = stones.reduce((a, b) => a + b)
    const target = Math.floor(sum/2);
    let dp = new Array(target+1).fill(0);
    for(let i = 0;i<stones.length;i++){
        for(let j = target;j>=stones[i];j-- ){
                dp[j] = Math.max(dp[j],dp[j-stones[i]]+stones[i])

        }
    }
    return sum-dp[target]*2
};
console.log(lastStoneWeightII([2,7,4,1,8,1]));