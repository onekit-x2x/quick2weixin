module.exports = {
  getType() {
    return "APP";
  },
  authorize(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    //////////////////////////////////////////
    wx.login({
      success : function(res){
        console.log("授权成功 ：",res);
        wx.request({
          url : "http://192.168.22.116/quick/weixin/wxaccount/authorize",
          data : {JSCODE : res.code},
            success: function(res){
              if(quick_success){
                quick_success(res);
              }
            },
            fail : function(res){
              if(quick_fail){
                quick_fail(res);
              }
            },
          
        });

      },
      fail: function(res){
        console.log("授权失败：", res);
      }
    });



  }

}