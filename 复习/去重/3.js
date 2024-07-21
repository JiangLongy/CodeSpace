let arr = [1, 1, '2', 3, 1, 2,
  { name: '张三', id: { n: 1 }, a: undefined },
  { name: '张三', id: { n: 1 }, a: undefined },
  { name: '张三', id: { n: 2 } },
]

function uni(arr){
    let res = []
    for(let i of arr){
        let isFind = false
        for(let j of res){
            if(equal(i,j)){
                isFind = true
                break
            }
        }
        if(!isFind){
            res.push(i)
        }
    }
    return res
}

function equal(o1,o2){
    if((typeof o1 === 'object'&& o1!== null)&& (typeof o2 === 'object'&& o2!== null)){
        if(Object.keys(o1).length !== Object.keys(o2).length){
            return false
        }
        for(let key in o1){
            if(o2.hasOwnProperty(key)){
                if(!equal(o1[key],o2[key])){
                    return false
                }
            }else{
                return false
            }
        }
        return true
    }else{
        return o1 === o2
    }
}

console.log(uni(arr))