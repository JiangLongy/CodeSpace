let [x,y,z] = ['a','b','c','d','e']
console.log(x,y,z);//结果 a b c
let arr = [1,2,3]
console.log(...arr);
let newArr = [0]
console.log([...newArr,...arr]); //解构形成拼接效果
let {name:name1 ,age :age1} = {name : '浪哥',age :19}
console.log(name1,age1);