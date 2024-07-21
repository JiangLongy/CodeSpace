let arr = [1, 1, '2', 3, 1, 2,
  { name: '张三', id: { n: 1 }, a: undefined },
  { name: '张三', id: { n: 1 }, a: undefined },
  { name: '张三', id: { n: 2 } },
]

function uni(){
    let res = []
    for(let item of arr){
        let isFind = false
        for(let x of res){
            if(equal(item,x)){
                isFind = true
                break
            }
        }
        if(!isFind){
            res.push(item)
        }
    }

    function equal(a,b){
        if((typeof a === 'object'&& a !== null )&&( typeof b === 'object' && b !== null)){
            if(Object.keys(a).length !== Object.keys(b).length) return false
            for(let i in a){
                if(b.hasOwnProperty(i)){
                    if(!equal(a[i],b[i])){
                        return false
                    }
                }else{
                    return false
                    
                }
            }
            return true
        }else{
            return a === b
        }
    }
}