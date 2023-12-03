var coinChange = function(coins, amount) {
    const f = []
    f[0] = 0
    for(let i = 1;i<=amount;i++){
        f[i] = Infinity
        for(let j = 0;j<coins.length;j++){
            if(coins[j]<=i)
            f[i] =Math.min(f[i-coins[j]]+1,f[i])
        }
    }
    return f[amount] === Infinity?-1:f[amount]
};

const coins = [2],amount = 3
console.log(coinChange(coins,amount));