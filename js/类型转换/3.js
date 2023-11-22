//一元运算符 将加号后面的转成数字
// +'1' //Number(1)
// +[]//0
// +{} //NaN
//+[1,2,3]//NaN

//二元运算符 +
console.log([]+[]);//""
console.log([]+{});//"[object object]"
