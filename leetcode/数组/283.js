let nums = [0,1,0,3,12]
// 1 0 0 3 12
// 1 3 0 0 12
// 1 3 12 0 0
var moveZeroes = function(nums) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i] == 0){
            for(let j = i+1;j<nums.length;j++){
                if(nums[j] != 0){
                    [nums[i],nums[j]] = [nums[j],nums[i]]
                    break
                }
                
            }
        }
    }
    return nums
};
console.log(moveZeroes(nums))