function Car(name){
    this.name = name
}

function myNew(...args){
    let obj = {}
    obj.__proto__ = args[0].prototype
    const res = args[0].call(obj,...args.slice(1))
    return res instanceof Object ? res : obj
}

myNew(Car,'bmw')

console.log(myNew(Car,'BMW'));