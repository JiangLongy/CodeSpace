# 预编译发生在函数执行之前（四部曲）
1.创建AO对象（Action Object）记录有效标识符
2.找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
3.将形参和实参值统一
4.在函数体内找函数声明，将函数名作为AO对象的属性名，值赋予函数体

# 预编译发生在全局
1.创建GO对象（Global Object）
2.找变量声明，将变量声明和形参作为GO属G性名，值为undefined
3.在全局内找函数声明，将函数名作为GO对象的属性名，值赋予函数体