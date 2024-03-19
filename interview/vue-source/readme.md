## vue源码之compile

## 从VUE源码中学到了什么
    代码之美 逻辑、封装、抽象、性能、严谨
    vue框架也是可以写出来的 调用api可以完成业务，
    未来更对写出这样的高质量代码甚至是开源项目有着憧憬

- 正则表达式
[/s] 

- 闭包的高级使用
    - 在vue源码中，学习到了闭包的使用案例
    - compile模块 由template字符串转虚拟DOM时，我们会先tokenizer分词
        在tokenizer函数内部会闭包一个push方法，用于收集token的关键信息
        比如 标签 属性 文本等
        - 私有化 不影响外界 可读性好 把复杂留给自己

- 模块化
    - reactivity 响应式
        effect track trigger WeakMap
        proxy
        baseHandler
    - compile
        template -> ast -> VDOM
        parse函数负责template字符串的解析
        tokenizer 分词 将template字符串先分词

    每个模块内部的功能也分工的很明确
    模板字符串 -> tokens数组 -> 虚拟DOM(AST 抽象语法树 walk递归生成) -> helper(位运算) -> 代码 