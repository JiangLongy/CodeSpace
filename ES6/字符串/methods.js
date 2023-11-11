let str = 'abcdefg'
console.log(str[2]);
console.log(str.at(2))
let str2 = '17879659226'
console.log(str2.padStart(20,'0'));//不够20位在前面补0 还有padEnd()
let obj = {
    a:1,
    b:2
}
console.log(obj);
let str3 = JSON.stringify(obj)//对象转字符串
console.log(str3);
console.log(JSON.parse(str3));//字符串转回对象