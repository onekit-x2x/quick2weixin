module.exports = {
  fetch(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_url = quick_object.url;
    var quick_data = quick_object.data;
    var quick_header	= quick_object.header;
    var quick_method  = quick_object.method;
    var quick_responseType = quick_object.responseType;
    quick_object =null;
    //////////////////////////////////
    var wx_object = {};
    if(quick_url){
      wx_object.url = quick_url
    }
    if(quick_data){
      wx_object.data=quick_data
    }
    if(quick_header){
      wx_object.header= quick_header
    }
    if(quick_method){
      wx_object.method=quick_method
    }
    if(quick_responseType){
      wx_object.responseType=quick_responseType
    }
      wx_object.success = function(wx_res) {
        var quick_res = {};
        for (var wx_res_key in wx_res) {
          var wx_res_value = wx_res[wx_res_key];
          switch (wx_res_key) {
            case "statusCode": //微信
              quick_res.code = wx_res_value //快应用
              break;
            case "header":
              var wx_res_headers = wx_res_value;
              var quick_res_headers = {};
              for (var wx_res_headers_key in wx_res_headers) { // 循环header里面的属性 对cookies做处理
                var wx_res_headers_value = wx_res_headers[wx_res_headers_key];
                //console.log(wx_res_headers_key, wx_res_headers_value);
                switch (wx_res_headers_key) {
                  case "Set-Cookie":
                    var wx_res_headers_cookies;
                    if (wx_res_headers_value) {
                      wx_res_headers_cookies = wx_res_headers_value.split(",");
                    } else {
                      wx_res_headers_cookies = "";
                    }
                    quick_res_headers[wx_res_headers_key] = wx_res_headers_cookies
                    break
                  default:
                    quick_res_headers[wx_res_headers_key] = wx_res_headers_value;
                    break;
                }
              };
              quick_res.header = quick_res_headers;
              break;
            case "cookies":
              break;
            case "errMsg":
              break;
            default:
              quick_res[wx_res_key] = wx_res_value;
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
      wx.request(wx_object);
  }
}