1. npm run build
    开发阶段 测试阶段 上线阶段
     浏览器只能执行js css 我们需要把代码编译成最终的文件
     dist目录就是前端要部署的文件目录
    vite 负责打包

- 将开发目录的index.html拷贝过来
- 首页需要的所有资源比如vue vue-router pinia css app.vue Home.vue 
  根据依赖顺序打包成index.js文件，首页就能运行

- 其他路由页面使用了路由懒加载，他们需要用到的资源会另外打包成单独的js文件
首页只需要加载index.html 和 index.js 当路由切换的时候，异步加载相应的js css文件
这就是首屏加载特别快，懒加载的贡献

- dist目录下的文件都是静态资源 可以单独上线 这是相对于后端来说的 只要交给ngnix，就能上线
因为ngnix是高性能服务器

## 服务器准备
1. 购买一台服务器获得公网ip centos7
2. 安装xshell 连接服务器 根据宝塔给的centos7安装教程在服务器上运行 获得宝塔远程操作的地址
3. 宝塔降低了Linux的使用难度 可视化的安装 调试服务器
4. 通过宝塔的文件上传功能 将dist目录下的静态资源上传到www/wwwroot/http目录下
5. nginx 服务器启动了

## 后端代码部署
1. 安装PM2 node进程管理工具
本地运行node index.js 太脆弱 服务器情况复杂 出了错误node进程就会挂掉（单线程，一个用户对应的一个线程，整个网站都不能提供服务）
2. PM2 可以帮助我们管理node进程 PM2启动bode进程，PM2启动的进程如果挂了，PM2会自动重启
3. Koa启用了cors服务器端跨域解决方案
4. nginx 默认的端口号是80端口 http://ip:80 === localhost:80
ip地址对应我们网络上的一台主机，端口号对应一台主机上的一个服务
80 端口是默认的web服务端口 nginx默认指向80
5. mysql的安装和数据的迁移

