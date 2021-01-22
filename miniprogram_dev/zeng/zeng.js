import prompt from '../quickapp2weixin/@system.prompt'
Page({


  onLoad: function (options) {
    prompt.showToast({
      message: 'hello,quickapp',
      success:res=>{
          console.log(res)
      }
  })
  }
})