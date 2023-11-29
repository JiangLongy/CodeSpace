// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
var missingNumber = function(nums) {
   let arr=[]
   for(let i=0;i<nums.length;i++){
    arr[nums[i]] = nums[i]
   }
   for(let i = 0;i<arr.length;i++){
    if(arr[i] == undefined){
        return i;
    }
   }
};

