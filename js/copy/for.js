let arr = ['a','b','c','d']
for(let item of arr){
    console.log(item);
}
let obj = {
    name:'www',
    age:18,
    like:{
        type: 'coding'
    }
}
let data = Object.create(obj)
data.sex = 'boy'
//for in 专门用来遍历对象 还能遍历到对象的原型
for(let key in data){
    //key key值
    //obj[key] 值
    //data.hasOwnProperty(key) 判断是显式拥有还是隐式拥有
    if(data.hasOwnProperty(key)){
        console.log(key);
    }
   
}