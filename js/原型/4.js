function Bus(){

}

Car.prototype = {
    constructor: Bus
}
function Car(){

}

var car = new Car();
console.log(car.constructor);
//constructor 记录对象是由谁创建的