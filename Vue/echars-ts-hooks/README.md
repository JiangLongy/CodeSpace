# 全新项目技术栈

- TS
- echars 百度开源的2D数据可视化
- hooks
   - 函数式编程,use开头
   - 将状态、生命周期等封装到函数中去，提升了项目的复用性、
      到处都是hooks useStore useRouter useRoute defineStore(useTodoList)
   - vueuse 第三方的hooks
     useLocalization useMemory...
   - 自定义hooks
       自定义了useResize、useLocalStorage等hooks函数、提升状态/生命周期在函数中的复用
       - 如果不封装，onMounted、onUnmounted 生命周期函数挺复杂的，都在重复
       - 定时器、事件处理器等，在组件卸载后要移除、不然会带来内存泄漏

- 项目亮点
   - 介绍项目架构
      - utils js功能函数复用 don't repeat yourself
           直接拿到下个项目中 防抖节流 格式化数据
      - 公用css 文件放入到assets/css/
         大型项目的需要 index.css reset.css 
      - hooks 
         有状态函数，将组件的状态逻辑也可以复用，加速UI组件化 
         loading... useRequest
         request
         显示组件
   - 适配
      - rem 
         - em vw
      - onDomContentLoaded 设置html fontSize
         设计稿 px 蓝湖
      - 1920 移动端适配 大屏适配
   - css4 variables
      