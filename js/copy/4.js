let obj = {
    name:'www',
    age:18,
    like:{
        type: 'coding'
    },
    a:undefined,
    b:null,
    c:function(){},
    d:{
        n:100
    },
    e:Symbol('hello')
}
// obj.c = obj.d
// obj.d.n = obj.c
let newObj = JSON.parse(JSON.stringify(obj))
obj.like.type = 'sleeping'
console.log(newObj);