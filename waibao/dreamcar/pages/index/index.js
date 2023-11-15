//APP->page的桥梁
//微信提供
const app = getApp()
Page({
  //页面的数据
  data:{
    // user:{}
    slides:null,
    entities:null
  },
  //生命周期
  onLoad(){
    //this->page
    // console.log(app,'页面显示了');
    //响应式的页面 热更新 
    setTimeout(()=>{
      this.setData({
        slides: app.globalData.slides,
        entities:app.globalData.vehicles
      })
    },2000)
  },
  onReady(){
    console.log('ready Go');
  }
})