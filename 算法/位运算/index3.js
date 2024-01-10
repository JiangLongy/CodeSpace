// const num1 = 5;//101
// const num2 = 6;//110
// const res = num1^num2//011
// console.log(res)

const num1 = 5//101
const num2 = 7//111
function swap(a,b){
    a = a^b
    b = a^b
    a = a^b
    return [a,b]
}
