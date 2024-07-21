let obj1 = {
    fn: function () {
        console.log(this);
    }
}
obj1.fn()
let obj2 = {
    fn: () => {
        console.log(this);
    }
}
obj2.fn()

const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("6");
        setTimeout(() => { console.log(8); }, 0)
        resolve('success')
        console.log(7);
    }, 0);
    console.log(2);
});
setTimeout(() => {
    console.log(5);
}, 0)

promise.then((res) => {
    console.log(res);
})
console.log(4);