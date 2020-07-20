module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_timeout =quick_object.timeout;
    let quick_coordType =quick_object.coordType||wgs84;
    quick_object = null;
    ////////////////////////////////
    var wx_object = {};
    if(quick_timeout){
      wx_object.type = quick_timeout
    }
    if(quick_coordType){
      wx_object.highAccuracyExpireTime = quick_coordType
    }
      wx_object.success = function(wx_res) {
        var quick_res = {
          time: 1587455926904
        };
          for (var wx_res_key in wx_res) {
            var wx_res_value = wx_res[wx_res_key];
            // console.log(wx_res_key)
            switch (wx_res_key) {
              case "accuracy":
                quick_res.accuracy = wx_res_value
                break;
              case "latitude":
                quick_res.latitude = wx_res_value
                break;
              case "longitude":
                quick_res.longitude = wx_res_value
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
    wx.getLocation(wx_object)
  },
  /** getLocationType*/
  getLocationType(quick_object){
    console.log("暂不支持！")
  }
   /** chooseLocation*/
  ,
  chooseLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_latitude =quick_object.latitude;
    let quick_longitude =quick_object.longitude;
    let quick_coordType =quick_object.coordType;
    quick_object =null;
    ////////////////////////////////
    var wx_object = {};
    if(quick_latitude){
      wx_object.latitude = quick_latitude
    }
    if(quick_longitude){
      wx_object.longitude = quick_longitude
    }
      wx_object.success = function(wx_res) {
        var quick_res = {
          coordType:wx_res.latitude+","+wx_object.longitude
        };
          for (var wx_res_key in wx_res) {
            var wx_res_value = wx_res[wx_res_key];
            switch (wx_res_key) {
              case "name":
                quick_res.name = wx_res_value
                break;
              case "address":
                quick_res.address = wx_res_value
                break;
              case "latitude":
                quick_res.latitude = wx_res_value
                break;
              case "longitude":
                quick_res.longitude = wx_res_value
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
    wx.openLocation(wx_object)
  }
  /** geolocation.subscribe*/
  ,
  subscribe(quick_object){
    if (!quick_object) {
      return;
    }
    let quick_reserved=quick_object.reserved
    let quick_coordType = quick_object.coordType
    let quick_callback =quick_object.callback
    let quick_fail = quick_object.fail
    quick_object =null;
    
    wx.onLocationChange(function(wx_res){
      quick_callback(wx_res)
    })
    wx.startLocationUpdate()
  }
  /**wx.offLocationChange */
  ,unsubscribe(){
    wx.offLocationChange()
  }
  /**geolocation.getSupportedCoordTypes() */
  ,getSupportedCoordTypes(){
    console.log("暂不支持！")
  }

}