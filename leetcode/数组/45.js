var jump = function(nums) {
let max = 0;
let i = 0
while(i<nums.length-1){
    if(nums[i]+i>max){
        max = nums[i]+i
    }
    if(max >= nums.length -1){
        return i+1
    }
    i++
   
}
return 0
};
console.log(jump([1]));
