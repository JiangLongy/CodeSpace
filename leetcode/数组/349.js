var intersection = function(nums1, nums2) {
    let set = new Set()
    const mySet = new Set(nums1)
    for(let i = 0;i<nums2.length;i++){
        if(mySet.has(nums2[i])){
            set.add(nums2[i])
        }
    }
    return [...set]
};
console.log(intersection([1,2,2,1],[2,2]));