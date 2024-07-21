从上向下执行代码
1. 遇到setTimeout，这是一个宏任务，要先存在宏任务队列中，等待同步任务和微任务执行完毕以后再执行

2. 遇到async1、async2和async3，这里只是定义函数，并没有调用函数，所以不执行

3. 遇到`console.log('eventLoop')`，打印

4. 执行async1，async1内部开始执行，`console.log('async1 start')`打印，遇到await async2，由于await会将后面的任务阻塞，所以`console.log('async1 end')`
`await async3();`推入微任务队列，执行async2，打印`console.log('async2')`

5. 遇到 `new Promise()`,同步代码，立即执行，执行`console.log('promise 2')`，将.then()推入微任务队列，

6. 再次遇到`new Promise()`，同理，执行`console.log('promise 4')`,将.then()推入微任务队列

7. 最后遇到`console.log('eventLoop end');`立即打印

此时我们的同步代码已经执行完毕，接下来执行微任务队列，此刻微任务队列中存入了
[console.log('async1 end')，await async3(),.then、.then]

依次执行打印：async1 end、async3、promise2 then、promise4 then

微任务队列执行完毕，最后执行宏任务队列，也就是最开始的setTimeout

依次打印：setTimeout 1、promise 1、promise then

所以结果为：

eventLoop
async1 start
async2
promise 2
promise 4
eventLoop end
async1 end
async3
promise2 then
promise4 then
setTimeout 1
promise 1
promise then
