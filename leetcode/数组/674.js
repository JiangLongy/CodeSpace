var findLengthOfLCIS = function(nums) {
    let max = 0
    for(let i = 1;i<nums.length;i++){
        let count = 1
        for(let j = i-1;j<nums.length-1;j++){
            if(nums[j] < nums[j+1]){
                count++
            }
        }
        max = count>max?count:max
    }
    return max
};