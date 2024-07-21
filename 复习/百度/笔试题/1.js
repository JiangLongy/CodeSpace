setTimeout(function () {
    console.log('setTimeout 1');
    new Promise(function (resolve) {
        console.log('promise 1');
        resolve();
    }).then(function () {
        console.log('promise then')
    })
})
async function async1() {
    console.log('async1 start')//2
    await async2();
    console.log('async1 end')//微任务
    await async3();
}
async function async2() {
    console.log('async2')//3
}
async function async3() {
    console.log('async3')//4
}
console.log('eventLoop');//1
await async1();
new Promise(function (resolve) {
    console.log('promise 2');//5
    resolve();
}).then(function () {//微任务
    console.log('promise2 then')
});
new Promise(function (resolve) {
    console.log('promise 4');//6
    resolve();
}).then(function () {//微任务
    console.log('promise4 then')
});
console.log('eventLoop end');
// eventLoop 、async1 start、async2、promise 2、
// promise 4、eventLoop end、async1 end、async3、promise2 then、promise4 then
//setTimeout 1、promise 1、promise then

//宏任务队列[setTimeout]
//微任务队列[console.log('async1 end')，.then、.then]