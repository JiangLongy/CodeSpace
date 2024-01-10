// const num = 5
// const res =~num
// console.log(res);

const binaryStr = '00001101'
const reverseStr = function reverseBit(binaryStr){
    const n = parseInt(binaryStr,2)
    return ~n
}
console.log(reverseStr(binaryStr));
console.log(~13);