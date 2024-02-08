//Person.prototype 原型 也是对象
Person.prototype.say = function () {
    return '我是张三'
}
function Person() {
    this.name = '张三';
    this.age = 18;
}

let p = new Person();
console.log(p.say());
console.log(p);