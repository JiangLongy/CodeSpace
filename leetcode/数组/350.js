// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致
// （如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
var intersect = function(nums1, nums2) {
    let index1 = 0, index2 = 0;
    let len1 = nums1.length, len2 = nums2.length;
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let arr = [];
    while (index1 < len1 && index2 < len2) {
        if (nums1[index1] === nums2[index2]) {
            arr.push(nums1[index1]);
            index1++;
            index2++;
        } else if (nums1[index1] < nums2[index2]) {
            index1++;
        } else {
            index2++;
        }
    }
    return arr;
};
console.log(intersect([1,2,2,1],[2,2]));