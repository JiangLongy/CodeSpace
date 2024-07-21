var findLength = function(nums1, nums2) {
    let dp = new Array(nums1.length + 1).fill(0).map(() => new Array(nums2.length + 1).fill(0));
    let res = 0
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            res = Math.max(res, dp[i][j]);
        }
        
    }
    
    return res
};

let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
console.log(findLength(nums1, nums2))