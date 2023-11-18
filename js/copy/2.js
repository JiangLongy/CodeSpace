let a = {
    name:'666',
    like:{
        n: 'coding'
        }
}
let b = Object.create(a)//创建一个空对象并且继承a

let c = Object.assign({},a)//将多个对象合并成一个
a.like.n = 'running'
console.log(c);
console.log(b.like.n);

let arr = [1,2,3,{a:10}]
let newArr = [].concat(arr)//复制一个数组
arr.push(4)
arr[3].a = 20
// let newArr = [...arr]
// let newArr = arr.reverse()//反转数组

console.log(newArr);