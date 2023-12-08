var findMaxAverage = function(nums, k) {
    let max  = nums[0]
    let sum = nums[0]
    for(let i = 1;i<nums.length;i++){
        if(i<k){
        max += nums[i]
        sum = max
        }else{
            sum = sum-nums[i-k]+nums[i]
            max = max>sum?max:sum
        }
    }
    return max/k 
};
console.log(findMaxAverage([0,4,0,3,2],1));