var nextGreaterElement = function(nums1, nums2) {
    let arr=[]
    for(let i = 0;i<nums1.length;i++){
        let index = nums2.indexOf(nums1[i])
        while(index<nums2.length){
            if(nums2[index]>nums1[i]){
                arr.push(nums2[index])
                break
            }
            if((index == nums2.length-1)&&(nums2[index]<=nums1[i])){
                arr.push(-1)
            }
            index++
        }
    }
    return arr
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));