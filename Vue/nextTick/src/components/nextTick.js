export function myNextTick(fn){
   let app = document.getElementById('app')
   var observerOptions = {
      attributes: true,//观察属性变动
      childList: true,//观察目标子节点的变化，是否有添加或删除
      subtree: true//观察后代节点，默认为false
   }
   //创建一个DOM监听器，让fn()在DOM更新完成时触发
   let observer = new MutationObserver((el)=>{
    //当被监听的DOM更新完成时，改回调会触发
        fn()
   })

   observer.observe(app,observerOptions)
}
