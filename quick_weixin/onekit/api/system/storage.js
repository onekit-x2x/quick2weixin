module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_value = quick_object.value;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {};
    wx_object.key = quick_key;
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
      wx.setStorage(wx_object)
    }
    /* storage.get */
    ,
  get(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {}; 
    wx_object.key = quick_key;

    wx_object.success = function(wx_res) {
      var quick_res = {};
      for (var wx_res_key in wx_res) {
        var wx_res_value = wx_res[wx_res_key];
        switch (wx_res_key) {
          case "data":
            quick_res = wx_res_value
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
        quick_fail("");

      }
      if (quick_complete) {
        quick_complete("");
      }

    };
      wx.getStorage(wx_object)
    }
    /*Storage.clear*/
    ,
  clear(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {};

    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (wx_res) {
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "errMsg":
              break;
          }
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
    wx.clearStorage(wx_object)
  }
  /*Storage.delete*/
  ,
  delete(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {};
    wx_object.key = quick_key;

    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (wx_res) {
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "errMsg":
              break;
          }
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
    wx.removeStorage(wx_object)
  }
  /*storage.key*/
  ,
  key(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_index = quick_object.index;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var wx_object = {}
    var index = quick_object.index;
    wx_object.success = function(wx_res) {
      var quick_res = wx_res.keys[index];
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
      wx.getStorageInfo(wx_object)
  }
}