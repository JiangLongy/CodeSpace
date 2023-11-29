var findDisappearedNumbers = function(nums) {
    let arr = []
    let len = nums.length
    let set = new Set(nums)
    for(let i = 1;i<=len;i++){
        if(!set.has(i)){
            arr.push(i)
        }
    }
    return arr
};