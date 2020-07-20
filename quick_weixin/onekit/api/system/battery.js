module.exports = {
  /*
 battery.getStatus* */
  getStatus(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {};
      for (var wx_res_key in wx_res) {
        var wx_res_value = wx_res[wx_res_key];
        console.log(wx_res_key)
        switch (wx_res_key) {
          case "level":
            quick_res.level = wx_res_value / 100
            break;
          case "isCharging":
            quick_res.isCharging = wx_res_value
            break;
          case "errMsg":
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
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.getBatteryInfo(wx_object)
  }
}