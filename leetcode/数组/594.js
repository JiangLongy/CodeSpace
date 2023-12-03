var findLHS = function (nums) {
    nums.sort((a, b) => a - b)
    let left = 0,count
    while(left<nums.length){
        count = 0
        let idx = 0
        let  a= nums[left]+1
        if(nums.indexOf(a)!=-1){
            count++
            idx = nums.indexOf(a)
        }else{
            break
        }
        while(idx!=-1){
            if(nums.indexOf(a,idx+1)){
                count++
                idx = nums.indexOf(a,idx+1)
            }else{
                break
            }
        }
        left++
    }
    return count
};
console.log(findLHS([1,2,2,2]));