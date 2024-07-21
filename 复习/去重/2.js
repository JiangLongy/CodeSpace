let arr = [1, 1, '2', 3, 1, 2,
    { name: '张三', id: { n: 1 }, a: undefined },
    { name: '张三', id: { n: 1 }, a: undefined },
    { name: '张三', id: { n: 2 } },
]

function uni(arr) {
    let res = []
    for (let item1 of arr) {
        let isFind = false
        for (let item2 of res) {
            if (equal(item1, item2)) {
                isFind = true
                break
            }
        }
        if (!isFind) {
            res.push(item1)
        }
    }
    
    return res
}
function equal(i1, i2) {
    if ((typeof i1 === 'object' && i1 !== null) && (typeof i2 === 'object' && i2 !== null)) {
        if (Object.keys(i1).length !== Object.keys(i2).length) return false
        for (let key in i1) {
            if (i2.hasOwnProperty(key)) {
                if (!equal(i1[key], i2[key])) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    } else {
        return i1 === i2
    }
}
console.log(uni(arr))