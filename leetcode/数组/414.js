// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
var thirdMax = function(nums) {
    let len  = nums.length
    if(len<3){
        return nums.sort((a,b) => a-b)[len-1]
    }
    nums.sort((a,b) => b-a)
    let max = 1
    let i = 0
    while(max!=3 && i<nums.length){
        if(nums[i] != nums[i+1]){
            max++
            i++
        }else{
            i++
        }
    }
        return nums[i]!=undefined?nums[i]:nums[0]
};
console.log(thirdMax([2, 1]));