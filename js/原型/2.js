// Car.prototype.name = 'BMW';
// Car.prototype.lang = 4900;
// Car.prototype.height = 1400;

Car.prototype = {
    name: 'BMW',
    lang: 4900,
    height: 1400
}
function Car(owner,color){
    // this.name = 'BMW',
    // this.lang= 4900,
    // this.height=1400,
    this.owner = owner;
    this.color = color;
}

var car = new Car('L','black');
var car2 = new Car('Y','pink');

console.log(car.name);

