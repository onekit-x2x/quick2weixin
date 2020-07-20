module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object=null;
    ///////////////////////////
    var wx_object = {};
      wx_object.success = function (wx_res) {
        var quick_res = {metered: false};
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "networkType":
              quick_res.type = wx_res_value
              break;
          }
        }
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      wx_object.fail = function (wx_res) {
        if (quick_fail) {
          quick_fail(wx_res);
        }
        if (quick_complete) {
          quick_complete(wx_res);
        }
      };
      wx.getNetworkType(wx_object)
  }


  //////////////////////////
  , subscribe(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_reserved = quick_object.reserved ;
    let quick_callback = quick_object.callback;
    let quick_fail = quick_object.fail;
    quick_object=null;
    ///////////////////////////
    var wx_callback={}
    wx.onNetworkStatusChange(function(wx_callback){
      quick_callback.type = wx_callback.networkType
    })
  }
  /////////
  , unsubscribe(quick_object){
    wx.offNetworkStatusChange(function(res){
    })
  }
  /**getSimOperator */
  ,getSimOperator(quick_object){
    console.log("暂不支持！")
  }
}