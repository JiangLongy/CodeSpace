var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length
    for(let i = 0;i<len&&n>0;i++){
        if(flowerbed[i] === 1){
            i++
        }else if(i ==len - 1 || flowerbed[i + 1] == 0){
            
                n--
                i++
            
        }else{
            i+=2
        }
    }
    return n<=0
};
console.log(canPlaceFlowers([0,0,1,0,0],2));