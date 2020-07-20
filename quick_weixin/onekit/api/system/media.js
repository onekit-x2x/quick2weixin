  function _pickImageHandler(quick_object, count){
  if (!quick_object) {
    return;
  }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
  ////////////////////////////////
  var wx_object = {
    count,
  };

  wx_object.success = function (res) {
    console.log(res);
    var quick_res = {};
    if (count == 1) {
      //单图片
      for (var wx_key of Object.keys(res)) {
        var wx_value = res[wx_key];
        switch (wx_key) {
          case "tempFilePaths":
            break;
          case "tempFiles":
            var file = wx_value[0];
            for (var file_key of Object.keys(file)) {
              var file_value = file[file_key];
              switch (file_key) {
                case "path":
                  quick_res["uri"] = file_value;
                  break;
                case "size":
                  quick_res["size"] = file_value;
                  break;
              }
            }

            console.log(quick_res.uri);
            quick_res["name"] = quick_res.uri.substring(quick_res.uri.lastIndexOf("/") + 1);

            break;
        }
      }
    } else {
      //多图片
      quick_res = {
        uris: [],
        files: [],
      };
      for (var wx_key of Object.keys(res)) {
        var wx_value = res[wx_key];
        switch (wx_key) {
          case "tempFilePaths":
            quick_res["uris"] = wx_value;
            break;
          case "tempFiles":
            for (var file of wx_value) {
              var file_data = {};
              for (var file_key of Object.keys(file)) {
                var file_value = file[file_key];
                switch (file_key) {
                  case "path":
                    file_data["uri"] = file_value;
                    break;
                  case "size":
                    file_data["size"] = file_value;
                    break;
                }
              }
              file_data.name = file_data.uri.substring(file_data.uri.lastIndexOf("/") + 1);
              quick_res.files.push(file_data);
            }
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
  }

  wx_object.fail = function (res) {
    console.log(res);
    if (res.errMsg.indexOf("cancel") > 0) {
      if (quick_cancel) {
        quick_cancel();
      }
    } else {
      if (quick_fail) {
        quick_fail(res);
      }
    }

    if (quick_complete) {
      quick_complete(res);
    }
  }

  wx.chooseImage(wx_object);
}
module.exports =  {
  /**media.takePhoto */
   takePhoto:function(quick_object) {
     if(!quick_object){
       return;
     }
     wx.navigateTo({
       url: '/onekit/page/media.takePhoto/media.takePhoto?type=0',
       events:quick_object
     })
  },
  /** media.takeVideo */
   takeVideo:function(quick_object) {
      if(!quick_object){
        return;
      }
      wx.navigateTo({
        url: '/onekit/page/media.takePhoto/media.takePhoto?type=1',
        events:quick_object
      })
  },

  /**media.pickImage */
  pickImage(quick_object) {
    _pickImageHandler(quick_object, 1);
  },

  /**media.pickImages */
   pickImages(quick_object) {
    _pickImageHandler(quick_object, 9);
  }


   
  /**media.pickVideo */
  , pickVideo(quick_object) {
    this._pickVideoHandler(quick_object, 1);
  }

  /**media.pickVideos */
  , pickVideos(quick_object) {
    this._pickVideoHandler(quick_object, 9);
  }
  , _pickVideoHandler(quick_object, count) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
    quick_object =null;
    ////////////////////////////////
    var wx_object = {
      maxDuration : 60, //快应用拍摄视频时长为10分钟
    };

    wx_object.success = function (res) {
      console.log(res);
      var quick_res = {};
      if (count == 1) {
        //单视频
        for (var wx_key of Object.keys(res)) {
          var wx_value = res[wx_key];
          switch (wx_key) {
            case "tempFilePath":
              quick_res["uri"] = wx_value;
              quick_res["name"] = wx_value.substring(wx_value.lastIndexOf("/") + 1);
              break;
            case "size":
              quick_res["size"] = wx_value;
          }
        }
      } else {
        //多视频
        quick_res = {
          uris: [],
          files: [],
        };
        var file = {};
        for (var wx_key of Object.keys(res)) {
          var wx_value = res[wx_key];
          switch (wx_key) {
            case "tempFilePath":
              quick_res.uris.push(wx_value);
              file["uri"] = wx_value;
              file["name"] = wx_value.substring(wx_value.lastIndexOf("/") + 1);
              break;
            case "size":
              file["size"] = wx_value;
          }
        }
        quick_res.files.push(file);
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    }

    wx_object.fail = function (res) {
      console.log(res);
      if (res.errMsg.indexOf("cancel") > 0) {
        if (quick_cancel) {
          quick_cancel();
        }
      } else {
        if (quick_fail) {
          quick_fail(res);
        }
      }

      if (quick_complete) {
        quick_complete(res);
      }
    }

    wx.chooseVideo(wx_object);
  }

  /**media.pickFile */
  , pickFile(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_cancel = quick_object.cancel;
    let quick_uri =quick_object.uri;
    quick_object =null;
    ////////////////////////////////
    var wx_object = {
      type: "file"
    };
    wx_object.success = function (res) {
      console.log(res);
      var quick_res = {};
      var file = res.tempFiles[0];
      for (var wx_key of Object.keys(file)){
        var wx_value = file[wx_key];
        switch (wx_key) {
          case "path":
            quick_res["uri"] = wx_value;
            break;
          case "name":
            quick_res["name"] = wx_value;
            break;
          case "size":
            quick_res["size"] = wx_value;
            break;
        }
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    }

    wx_object.fail = function (res) {
      console.log(res);
      if (res.errMsg.indexOf("cancel") > 0) {
        if (quick_cancel) {
          quick_cancel();
        }
      } else {
        if (quick_fail) {
          quick_fail(res);
        }
      }

      if (quick_complete) {
        quick_complete(res);
      }
    }

    wx.chooseMessageFile(wx_object);
  }

  /**media.saveToPhotosAlbum */
  , saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_uri =quick_object.uri;
    quick_object =null;
    ////////////////////////////////
    var wx_object = {};
    if(quick_uri){
      wx_object.filePath =quick_uri
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
      wx.saveVideoToPhotosAlbum(wx_object)
  }
  /**media.previewImage */
  , previewImage(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_current =quick_object.current;
    let quick_uris =quick_object.uris;
    quick_object =null;
    ////////////////////////////////
    var wx_object = {};
    if(quick_uris){
    wx_object.urls=quick_uris
    }
    if(quick_current){
      wx_object.current =quick_current
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
      wx.previewImage(wx_object)
  }
  /**media.getRingtone */
  , getRingtone(quick_object) {
    console.error("[quick2weixin] 暂不支持 media.getRingtone");
  }
  /**setRingtone */
  ,setRingtone(quick_object){
    console.error("[quick2weixin] 暂不支持 media.setRingtone");
  }

}