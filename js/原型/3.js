Car.prototype.name = 'BMW';
Car.prototype.lang = 4900;
Car.prototype.height = 1400;
function Car(owner,color){
    this.owner = owner;
    this.color = color;
}

var car = new Car('L','black');
var car2 = new Car('Y','pink');

car.name = '劳斯莱斯'
Car.prototype.name = '大黄';
// delete car.name
delete Car.prototype.name
console.log(car.name);
console.log(car2.name);




