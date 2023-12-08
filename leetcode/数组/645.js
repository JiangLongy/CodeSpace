var findErrorNums = function(nums) {
    nums.sort((a,b)=>a-b);
    let arr = []
    let num 
    for(let i = 1;i<=nums.length;i++){
        if(nums[i-1] != i){
           num = i   
           break        
        }    
    }
    for(let i = 0;i<=nums.length;i++){
        if(nums[i-1] == nums[i]){
            arr.push(nums[i])
        }
    }
     arr.push(num)
};
console.log(findErrorNums([3,2,3,4,6,5]));