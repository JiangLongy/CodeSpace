# 进程和线程

- 进程：CPU运行指令和保存上下文所需要的时间

- 线程：进程中的更小的单位，描述了一段指令执行所需的时间 

# 浏览器新开一个tab页面，就是新开一个进程
需要多个线程配合才能完成页面的展示
1.渲染线程(GPU)
2.http请求线程
3.js引擎线程

渲染线程(GPU) 和 js引擎 线程是互斥的 

# JS 单线程
单线程是为了降低js对于性能的消耗
优点：
1. 节约内存开销
2. 单线程没有锁的概念，节约上下文切换时间

# 异步
- 宏任务 (macrotask) : 

script
setTimeout
setInterval
setImmediate
I/O
UI-remdering 页面渲染


- 微任务 (microtask) :

promise.then()
MutationObserver() 监听DOM结构
Process.nextTick()

# event-loop 事件循环机制

1.执行同步代码（这属于宏任务）
2.当调用栈为空，查询是否有异步代码需要执行
3.若有，就执行微任务
4.如果有需要，会渲染页面
5.执行宏任务（这也叫下一轮event-loop的开启）

面试官：
微任务比宏任务先执行???????
我：错！宏任务里可能也有微任务