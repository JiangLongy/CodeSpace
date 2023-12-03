var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    let len = candyType.length/2
    if(set.size>len){
        return len
    }
    return set.size
};
console.log(distributeCandies([1,1,2,2,3,3]));