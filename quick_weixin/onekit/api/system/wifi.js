module.exports = {
/**wifi.connect */
connect(quick_object) {
  if(!quick_object){
    return;
  }
  var quick_SSID = quick_object.SSID;
  var quick_BSSID = quick_object.BSSID;
  var quick_password = quick_object.password;
  var quick_success = quick_object.success;
  var quick_fail = quick_object.fail;
  var quick_complete = quick_object.complete;
  //////////////////////////////////////////////
  var wx_object = {};
  wx_object.SSID = quick_SSID;
  wx_object.BSSID = quick_BSSID;
  if(quick_password){
    wx_object.password = quick_password;
  }

  wx_object.success = function (wx_res) {
    var quick_res = {};
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
    
    wx.connectWifi(wx_object)
  }
  /**
   * wifi.scan
   */
  , scan(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var wx_object = {};
    wx_object.success = function (wx_res) {
      var quick_res = {};
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
    wx.getWifiList(wx_object)
  }
  /**
   * wifi.getConnectedWifi */

  , getConnectedWifi(quick_object) {
    if(!quick_object){
      return;
    }
    
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var wx_object = {};
     
    wx_object.success = function (wx_res) {
      var quick_res = {};
      for (var wx_res_key in wx_res) {
        var wx_res_value = wx_res[wx_res_key];
        switch (wx_res_key) {
          case "wifi":
            quick_res.type = wx_res_value
            break;
          case "errCode":
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
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx.getConnectedWifi(wx_object)
  }
  /**
   * wifi.onscanned */
  , onscanned(data){
    wx.onGetWifiList(function (data){
      console.error("[quick2weixin] 暂不支持 onscanned");
    })
  }
  /**wifi.onstatechanged */
  , onstatechanged(data) {
    wx.offWifiConnected(function (data) {
      console.error("[quick2weixin] 暂不支持 onstatechanged");
    })
  }
}