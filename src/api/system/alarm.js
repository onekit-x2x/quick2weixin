module.exports = {
  setAlarm(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_hour=quick_object.hour
    let quick_minute=quick_object.minute
    let quick_message=quick_object.message
    let quick_vibrate=quick_object.vibrate
    let quick_days=quick_object.days
    let quick_ringtone=quick_object.ringtone
    let quick_success=quick_object.success
    let quick_fail=quick_object.fail
    let quick_complete=quick_object.complete
    //////////////////////////////////////////
    wx.login({
      success : function(res){
        console.log("授权成功 ：",res);
        wx.request({
          url : "http://192.168.22.116/quick/weixin/wxaccount/authorize",
          data : {JSCODE : res.code},
            success: function(res){
             console.log("登录成功：",res)
             wx.request({
              url : "http://192.168.22.116/quick/weixin/system/alarm",
              data : {openid : res.openid,
                data:quick_object},
              success:function(res){
                console.log("设置闹钟：",res)
              }
             })
            },
            fail : function(res){
              console.log(res)
            },
          
        });

      },
      fail: function(res){
        console.log("授权失败：", res);
      }
    }); 
  }
}