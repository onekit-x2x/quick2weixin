module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {};
      for (var wx_res_key in wx_res) {
        switch (wx_res_key) {
          case "result":
            quick_res.result = wx_res.result
            break
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
    return wx.scanCode(wx_object)
  }
}