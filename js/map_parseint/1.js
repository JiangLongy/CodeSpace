// map 遍历 callback 返回值新的数组
// 1 parseInt(1,0,[1,2,3]) 1  map 返回element index arr
// 2 parseInt(2,1,[1,2,3]) NaN  parseInt(str,radix) 字符串 进制 若进制为0则默认10进制
// 3 parseInt(3,2,[1,2,3]) NaN  parseInt进制除2-36以外返回NaN
console.log([1,2,3].map(parseInt));