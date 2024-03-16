function a() {
  console.log('fn');
}

function copy(fn){
    fn = fn+''
    return new Function('return '+fn)()
}

let foo = copy(a)
foo()