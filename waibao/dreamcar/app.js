//应用
//page() 页面
// 配置
App({
  globalData:{
   
  },
  onLaunch(){
    // console.log('应用启动了');
    //利用生命周期在应用启动时，发送接口请求
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(response) =>{
        // console.log(response);
        //前后端接口连调
        Object.assign(this.globalData,
          response.data)
          // console.log(this,'-----');
      }
    })
  }
})
