# vue 网易云音乐

- 界面
    npm init vite 搭建了开发脚手架
    5173端口 前端
- 后台
    netsea 
    3000端口 
- 前后端分离的全栈开发
- npm 换源 
    npm config set registry https://registry.npmmirror.com
- npm i -D 只有开发阶段会用到要加上 devDependience 
- tailwindcss  提升60% css开发 原子化css开发
    - npm install -D tailwindcss postcss autoprefixer
    -  npx tailwindcss init -p 初始化
        npx 执行安装或未安装的包
    - 声明开发目录下的所有层级中 .vue等格式文件支持tailwindcss
    - tailwind.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        可以使用tailwind 类名
- 切页面
- 组件化思维
    - 根组件 App.vue
    - layout 组件
        - Menu
        - Header
- vite.config.js 是vite 工程化的配置文件
    - alias 短路径
        @ -> ./src 回城 
- 企业级Vue开发框架 element-plus pc版
    组件拿来就用
    vue 是渐进式的MVVM开发框架 开发模式 
    element-plus 组件库 找到我们想要的组件

- vite 写了一段让Element plus自动引入的代码

- 通用组件
    /components/common/
    不属于特定的组件，极高的复用性 在多个项目中可以复用
- 图标字体库
    - 要用到哪些图标？
        import {} from '@icon-park/vue-next'
        