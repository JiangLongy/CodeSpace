function timeout(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('timeout');
            resolve();
        }, time);
    });
}

function addTask(time,name){

}

addTask(10000,1)
addTask(5000,2)
