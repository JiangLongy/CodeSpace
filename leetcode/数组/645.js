var findErrorNums = function(nums) {
    let set = new Set()
    let arr = []
    for(let i = 0;i<nums.length;i++){
        if(set.add(nums[i]) === undefined){
            arr[1] = nums[i]
            break;
        }
    }
    
};
console.log(findErrorNums([3,2,3,4,6,5]));