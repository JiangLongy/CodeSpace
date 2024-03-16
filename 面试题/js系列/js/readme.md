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

# 说说深浅拷贝
- 是什么

拷贝指的是将一个对象中的元素复制到一个新的对象中，拷贝又分为浅拷贝和深拷贝，浅拷贝只拷贝对象的引用地址，而深拷贝会层层拷贝每一个属性值不受原对象修改值的影响

- 浅拷贝常见方法
1. Object.assign()
2. 解构
3. concat
4. slice

- 深拷贝常见方法
1. JSON.parse(JSON.stringify())

缺点: 
无法拷贝 undefined,function,Symbol,bigint 这几种类型的数据
无法循环引用

2. structuredClone 不能拷贝Symbol function

3. 深拷贝实现

- 函数的拷贝

# 闭包
- 是什么？
    根据词法作用域的规则，内部函数一定能访问他外部函数的变量，当内部函数对外部函数中的变量存在引用且被提到外部函数之外调用，即使外部函数执行完毕，他的执行上下文也无法被完全销毁，而是会将内部函数引用的变量作为一个集合保留在调用栈中，该集合被称为闭包
集合是闭包

- 作用
1. 定义私有变量
2. 封装模块
3. 延长变量的生命周期

- 缺点
1. 内存泄漏

# 说说原型
- 是什么
原型是一个对象，分为隐式原型和显式原型，隐式原型是对象上的__proto__属性，显式原型上是函数上的Prototype 属性，当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的隐式原型，顺着隐式原型层层往上查找，直到找到null，对象的隐式原型等于创建该对象的构造函数的显式原型

1. 函数的__proto__ === Function.prototype 箭头函数除外
2. Object.create(null) 

# js中如何实现继承
1. 原型链继承
    缺点: 1. 多个实例之间共用了同一个原型，属性会相互影响
          2. 子类无法给父类传参，局限性


2. 构造函数继承
    缺点: 无法继承到父类原型上的属性

3. 组合继承(经典继承)
缺点: 父类被调用两次

4. 原型式继承
缺点: 1. 多个实例之间共用了同一个原型，属性会相互影响

5. 寄生组合继承

6. class 继承

# 说说你对this的理解
- 是什么
this是js中的一个关键字，用于代表函数作用域的指向

- 绑定规则
1. 默认绑定 -- 函数在哪个词法作用域中生效，this就指向哪个词法作用域，词法作用域要找到底
2. 隐式绑定 -- 当函数被一个对象所拥有且调用this指向该对象
3. 隐式丢失 -- 多个对象链式调用函数，this指向最近的对象
4. 显式绑定 -- call bind apply
5. new绑定 -- this 指向实例对象

- 箭头函数
箭头函数没有this，写在箭头函数中的this指向外层非箭头函数的this