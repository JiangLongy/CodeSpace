# type of
1.可以准确判断除null之外的原始类型
2.可以判断function

# instanceof
1.只能判断引用类型
2.且是通过原型链查找来判断的

# Object.prototype.toString 用call(XXX)调用
1.如果this的值为undefine 则 return undefine
2.如果this的值为null 则 return null
3.将O作为ToObject(this) 的执行结果
4.让class成为O内部属性[[Class]]的值
5.返回由"[object" + class + "]"三部分组成的字符串

# Array.isArray(arr)
true/false