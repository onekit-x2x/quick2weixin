import quickapp2weixin from '../quickapp2weixin/index';const router = quickapp2weixin["@system.router"]

Page({
  onLoad: function () {
    router.push({
      uri: 'https://www.onekit.cn',
      success: res=>{
          console.log(res)
      }
  })
  }
})