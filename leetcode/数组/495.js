var findPoisonedDuration = function(timeSeries, duration) {
    let count=0
    let len = timeSeries.length
    for(let i = 0;i<len-1;i++){
        if(timeSeries[i+1]-timeSeries[i]>duration){
            count+=duration
        }else{
            count+=(timeSeries[i+1]-timeSeries[i])
        }
    }
    return count+duration
};
