var searchRange = function(nums, target) {
    let arr = []
    let idx = nums.indexOf(target)
    while(idx!=-1){
        arr.push(idx)
        idx = nums.indexOf(target,idx+1)
    }
    return arr.length!=0?[arr[0],arr[arr.length-1]]:[-1,-1]
};