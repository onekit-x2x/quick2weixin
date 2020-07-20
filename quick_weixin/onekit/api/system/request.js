module.exports = {
  /**request.upload*/
  upload(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_url = quick_object.url;
    let quick_header = quick_object.header;
    let quick_files = quick_object.files;
    let quick_method = quick_object.method;
    let quick_data = quick_object.data;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    //////////////////////////////////////
    var count = quick_files.length;
    var wx_object = {};
    if(quick_url){
      wx_object.url=quick_url
    }
    if (quick_header) {
      wx_object.header = quick_header;
    }
    if (quick_data) {
      wx_object.formData = quick_data;
    }

    wx_object.success = function(wx_res) {
      console.log("upload success", wx_res);
    }
    wx_object.fail = function(wx_res) {
      console.log("upload fail", wx_res);
    }
    wx_object.complete = function(wx_res) {
      console.log("upload complete", wx_res);
      var quick_res = {
        headers: wx_res.header,
        code: wx_res.statusCode,
        data: wx_res.data
      };
      check(quick_res);
    }
    for (var file of quick_files) {
      wx_object.filePath = file.uri;
      wx_object.name = file.name || "file";
      console.log(wx_object);
      wx.uploadFile(wx_object);
      delete wx_object.formData;
    }
    function check(quick_res) {
      count--;
      if (count > 0) {
        return;
      }
      if (quick_res.code == 200) {
        if (quick_success) {
          quick_success(quick_res);
        }
      } else {
        if (quick_fail) {
          quick_fail(quick_res);
        }
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }

    }
  }

  /**request.download */
  ,
  download(quick_object) {
    var that = this;
    var wx_object = {};
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let url = quick_object.url;
    let filename = quick_object.filename || url.substring(url.lastIndexOf("/") + 1);
    let description = quick_object.description || filename;
    wx_object.url = url;
    wx_object.filePath = wx.env.USER_DATA_PATH + "/" + filename;
    if (quick_object.header) {
      wx_object.header = quick_object.header;
    }

    wx_object.success = function(wx_res) {
      console.log("wx_dowload_success ", wx_res);
      var token = "" + new Date().getTime();
      that.url = wx_res.tempFilePath ? wx_res.tempFilePath : wx_res.filePath;
      var return_res = {
        token,
      };
      if (quick_success) {
        quick_success(return_res);
      }
      if (quick_complete) {
        quick_complete(return_res);
      }

      //图片未下载完成就调用监听接口获取uri，导致获取为空的处理方法
      if (that.callback) {
        that.callback({
          uri: that.url
        });
        that.callback = null;
      }

    }
    wx_object.fail = function(wx_res) {
      console.log(wx_res);
      if (quick_fail) {
        quick_fail(wx_res, 1000);
      }
      if (quick_complete) {
        quick_complete(wx_res, 1000);
      }
    };

    this.downloadTask = wx.downloadFile(wx_object);
    this.downloadTask.onProgressUpdate((res) => {
      that.progress = res.progress;
      //console.log('下载进度', res.progress)
      // console.log('已经下载的数据长度', res.totalBytesWritten)
      // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);

    })
  }

  /**onDownloadComplete */
  ,
  onDownloadComplete(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_token = quick_object.token;
    if (this.progress == 100) {
      quick_success({
        uri: this.url
      });
    } else {
      this.callback = quick_success;
    }
  }
}