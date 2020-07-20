module.exports = {

//获取服务提供商
getProvider(){
    return wx.getSystemInfoSync().brand;
},

 share(quick_object){
  if (!quick_object){
    return;
  }
  var quick_shareType = quick_object.shareType;
  var quick_title = quick_object.title;
  var quick_summary = quick_object.summary;
  var quick_targetUrl = quick_object.targetUrl;
  var quick_imagePath = quick_object.imagePath;
  var quick_mediaUrl = quick_object.mediaUrl;
  var quick_platforms = quick_object.platforms;
  var quick_success = quick_object.success;
  var quick_fail = quick_object.fail;
  var quick_cancel = quick_object.cancel;
  //////////////////////////////////////////
  var wx_object = {};
  if (quick_platforms) {
    var quick_temp = [];
    for (var platforms of quick_platforms) {
      console.log(platforms);
      if (["WEIXIN_CIRCLE", "WEIBO", "QQ", "SYSTEM"].indexOf(platforms) > 0) {
        quick_temp.push(platforms);
      }
    }

    if (quick_temp.lenght > 0) {
      console.warn("[quick2weixin] only support 'WEIXIN'");
    }
  }

  var flag = [0, 2].indexOf(quick_shareType);
  if (flag == 0){
    //图文类型
    wx_object.title = quick_title;
    if(quick_imagePath){
      wx_object.imageUrl = quick_imagePath;
    }

  }else if(flag == 1){
    //纯图片
    wx_object.imageUrl = quick_imagePath;

  }else{
    //其它类型暂不支持
    if (quick_fail) {
      quick_fail("[quick2weixin] only support 'quick_shareType: 0 or 2'", 203);
    }
    return;
  }
  var wx_callback = {};
  if (quick_success) {
    wx_callback.success = quick_success;
  }
  if (quick_fail) {
    wx_callback.fail = quick_fail;
  }
  if (quick_cancel) {
    wx_callback.cancel = quick_cancel;
  }

  wx.navigateTo({
    url: `/onekit/page/share.share/share.share?param=${JSON.stringify(wx_object)}`,
    events: wx_callback,
  });



}

, getAvailablePlatforms(quick_object){
  if(!quick_object){
    return;
  }
  ///////////////////////////////////////////
  var quick_success = quick_object.success;
  var quick_fail = quick_object.fail;
  var quick_complete = quick_object.complete;
  ////////////////////////////////////////
  var result = ["WEIXIN"];//, "WEIXIN_CIRCLE"
  if(quick_success){
    quick_success({
      platforms: result
    });
  }
  if(quick_complete){
    quick_complete({
      platforms : result
    });
  }
}

}