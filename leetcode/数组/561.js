var arrayPairSum = function(nums) {
    let ans = 0
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length;i+=2){
        ans+=nums[i]
    }
    return ans
};
console.log(arrayPairSum([1,4,3,2]));