function a(cb) {
    setTimeout (() => {
        console.log('阿珍')
        cb()
    },1000);

}

function b() {
    setTimeout(()=>{
        console.log('阿强')
    },0)
}
a(b)

