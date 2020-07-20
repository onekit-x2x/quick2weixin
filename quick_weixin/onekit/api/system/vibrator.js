module.exports = {
  vibrate(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_mode = quick_object.mode;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {}
    wx_object.success = function(wx_res) {
      var quick_res = {};
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
    if (quick_mode == 'long' || quick_mode == null) {
      wx.vibrateLong(wx_object, console.log('vibrateLong'))
    } else if (quick_mode == 'short') {
      wx.vibrateShort(wx_object, console.log('vibrateShort'))
    }
  }
}