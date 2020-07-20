import vibrator from "../../onekit/api/system/vibrator.js"
Page({
  data: {

  },

  onLoad: function() {
    // wx.vibrateLong({
    //   success(res){
    //     console.log(res)
    //   }
    // })
    vibrator.vibrate({
      //mode: 'long',
     mode: "short"
    })
  },


})