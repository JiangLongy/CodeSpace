function Parent(){
    this.name = "parent";
}
function Child(){
    Parent.call(this)
    this.age = 10;
}

let c = new Child();

console.log(c);