# VUE生命周期
- vue自带的生命周期在uniapp中都能使用




# 页面生命周期
- uniapp 提供了页面生命周期，比如上拉加载，下拉刷新，页面渲染完成等等


# 应用生命周期

- 整个app应用的状态变化，只能在App.vue中使用

# 全局变量
1.Vue.prototype.name = ''
2.在App.vue中设置
```
	globalData:{
	name:'全局名称'
},
```
getApp().globalData.name
3.vuex