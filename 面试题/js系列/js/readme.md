# js 数组有哪些方法？

1. 增: push unshift splice concat 
2. 删: shift pop splice slice 
3. 改: reverse sort 
4. 查: indexOf lastIndexOf includes find 
5. 遍历: forEach map filter some every reduce
6. 转换: join 

- forEach 和 map 的区别：
1. forEach 不会返回新的数组，map 会返回新的数组
2. return 无法终止forEach,forEach中没有break和continue

# 字符串有哪些方法？

1. 增: concat partStart partEnd
2. 删: splice substring
3. 改: replace repeat trim(去除字符串首尾空格)  trimLeft trimRight toLowerCase toUpperCase
4. 查: include indexOf lastIndexOf charAt startsWith(查找某个字符串的开头) endWith 
5. 转换: charCodeAt(转码) split 

# == 和 === 的区别？

# 说说js中的类型转换
- 是什么？
    js中有原始数据类型 引用数据类型的区分

-  隐式类型转换
    当在开发中碰到比较运算符或者算数运算符时，当符号两边的类型不一致时，js引擎会自动进行会进行类型转换
-  显式类型转换
     开发中通常需要将一个类型转为另一个类型时，通过调用构造函数实现显式类型转换


