Parent.prototype.getName = function() {
  return this.name;
};

Child.prototype = new Parent();
Child.prototype.constructor = Child;
function Parent(name){
    this.name = name;
}
function Child(name){
    Parent.call(this,name)
    this.age = 10;
}

let child = new Child('坤坤');
console.log(child.getName());