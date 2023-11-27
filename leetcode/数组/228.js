var summaryRanges = function (nums) {
    const len = nums.length;
    const ans = [];
    let i = 0;
    while (i < len) {
      let j = i;
  
      // 找到从 i 开始连续的最后一位
      while (j + 1 < len && nums[j] + 1 === nums[j + 1]) j++;
  
      // 拼接
      if (j === i) ans.push(`${nums[i]}`);
      else ans.push(`${nums[i]}->${nums[j]}`);
  
      i = j + 1;
    }
    return ans;
};

console.log(summaryRanges([0,1,2,4,5,7]))