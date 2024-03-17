// 编辑距离
//  抽象 最值问题 动态规划

var minDistance = function (word1, word2) {
    let m = word1.length;
    let n = word2.length;

    // 初始化 dp 数组
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // 初始化边界条件
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // 填充 dp 数组
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }

    return dp[m][n];
};

console.log(minDistance("ab", "a"));