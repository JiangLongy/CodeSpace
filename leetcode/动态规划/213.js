// var rob = function(nums) {
//     const n = nums.length
//     if (n === 0) return 0
//     if (n === 1) return nums[0]
//     const result1 = robRange(nums, 0, n - 2)
//     const result2 = robRange(nums, 1, n - 1)
//     return Math.max(result1, result2)
//   };
  
//   const robRange = (nums, start, end) => {
//     if (end === start) return nums[start]
//     const dp = Array(nums.length).fill(0)
//     dp[start] = nums[start]
//     dp[start + 1] = Math.max(nums[start], nums[start + 1])
//     for (let i = start + 2; i <= end; i++) {
//       dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
//     }
//     return dp[end]
//   }

// const promise = ()=>{
//   return new Promise((resolve)=>{
//     console.log('1');
//     setTimeout(()=>{
//       console.log('2');
//       setTimeout(()=>{
//         console.log('3');
//       })
//     })
//     resolve('4')
//     console.log('5');
//   })
// }
// console.log('6');
// setTimeout(()=>{
//   console.log('7');
// })
// Promise.then((res)=>{
//   console.log(res);
// })
// console.log('8');

// 6 1 5 8 4 7 2 3

// var a = 2
// function AA(){
//   console.log(a);
//   var a = 1
// }

// AA()

setTimeout(()=>{
  console.log('1');
})
new Promise((resolve) =>{
  console.log('2');
  for(let i = 0;i<10000;i++){
    if(i === 9999 ){
      resolve()
    }
  }
  console.log('3');
})
.then(()=>{
  console.log('4');
})
console.log('5');
// 2 3 5 4 1