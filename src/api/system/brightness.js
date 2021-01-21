module.exports = {
  /*
 brightness.setValue
 * */
  setValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_value=quick_object.value;
    quick_object =null;
    ///////////////////////////
    var wx_object = {};
    if(quick_value){
      wx_object.value = quick_value;
    }
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
    return wx.setScreenBrightness(wx_object)
  }
  /*
 brightness.getValue
 * */
  ,
  getValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    ///////////////////////////
    var wx_object = {};
      wx_object.success = function(wx_res) {
        var quick_res = {};
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "value":
              quick_res.value = wx_res_value
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
      wx.getScreenBrightness(wx_object)
  }
  /**
   * brightness.setKeepScreenOn
   */
  ,
  setKeepScreenOn(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_keepScreenOn= quick_object.keepScreenOn;
    quick_object =null;
    ///////////////////////////
    var wx_object = {};
    if(quick_keepScreenOn){
      wx_object.keepScreenOn = quick_keepScreenOn
    }
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
      wx.setKeepScreenOn(wx_object)
  }

  /**
     brightness.setMode
     */
  ,
  setMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }

  /**
   brightness.getMode
   */
  ,
  getMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }
}