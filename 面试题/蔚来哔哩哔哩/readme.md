# 哔哩哔哩

- git 命令

- == 与 === 的区别

- vue响应式原理 ref reactive 深度 vue源码学习
    - proxy
    - defineProperty
    - vue2/vue3 区别
    - 追问，依赖收集
    - watcher
 
- 调试自己的代码
    - 断点 逐步跟踪 变量的值
    - console.log()
    - vue devtool 数据状态与界面
    - console.time console.timeEnd() 性能优化
    - 浏览器自带性能面板
    - postman 模拟请求 测试接口 restful
        API风格 Method + url  一切皆资源 
        GET /post 列表页 读  /post/:id
        POST /post 写
        DELETE
        PUT/PATCH 修改 PUT 文件上传修改改头像 PATCH 部分修改改字段
    - options ...


- 状态码 深入

    304 实现

- node stream 流
    二进制流

- vuex/pinia
    - 父子/兄弟组件通信之外 vuex/pinia 让状态在任何组件之间共享
    - store
        应用 = 状态存储 + UI组件  组件更专注与界面开发
    - 购物车 / 登录状态
    - pinia 持久化存储
    - vuex的缺点 不太好理解 mutations
    - pinia 优点 hooks函数化 灵活 对TS的支持更好
- 持久化
    localStorage + JSON.pares() JSON.stringify()

- JWT
- 深度优先搜索 DFS BFS
- 反问
    
    表现AIGC 快速学习 高效开发 代码助理

- 生命周期 深入
    父子
    父 created
    子 created
    子 mounted
    父 mounted

- 手写ts 
    interface type 区别
    :string[]

- 盒模型 布局

- 是否有环 双指针

总结: 

    Top20 的面试难度主要在于全面的基础能力 算法、框架、基础、JS/CSS八股 口才情商

字节面试题

- 树的遍历
    用递归的概念来定义一棵树
    先中后序遍历 根节点
    BFS DFS ？迷宫问题

    - 深度优先 适合遍历 适合递归

- 列表组装成树状结构
    - 经典题
    - 树形
    - 常见困难开发点拿出来
        - 应用场景: 多级菜单 省县市选择的需求
        - 列表 后端传过来的数据项 一条记录
        - 任务 拼成树形结构 
            显示菜单、切换地址选项等树形结构
        - 双层for循环 时间复杂度 O(n^2)

- 编写一个类EventEmitter，实现自定义事件
    - 前端 addeventlistener click内置事件
    - 订阅发布者模式 经典的设计模式
    - 实现一个EventEmitter类 on emit off once
    - node 内置了EventEmitter 可以直接继承使用






