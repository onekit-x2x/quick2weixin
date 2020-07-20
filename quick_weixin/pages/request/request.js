import request from "../../onekit/api/system/request.js"
Page({
  data: {

  },
  onLoad: function() {
    var self = this

    // //下载
    request.download({
      // url: 'https://www.quickapp.cn/assets/images/home/logo.png',
      url: "https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg",
      description: '一个网络图片', // 指定描述
      // filename: 'quickappLogo.png', // 指定文件名
      success: function (ret) {
        self.token = ret.token
      },
      fail: function(res){
        console.log("ddd");
      }
    });

    //监听下载任务
    request.onDownloadComplete({
      token: self.token,
      success: function (ret) {
        console.log("out onDownloadComplete", ret);
        self.fileDownloadData = ret.uri
        self.fileUploadData = ret.uri

        self.setData({
          imgSrc: ret.uri
        });

      },
      fail: function (msg, code) {
        console.log(`### request.onDownloadComplete ### ${code}: ${msg}`)
        prompt.showToast({
          message: `${code}: ${msg}`
        })
      }
    })
    self.fileUploadData = "/images/img1.png";
    //上传
    // request.upload({
    //   // url: 'https://www.quickapp.cn/',
    //   url: 'http://192.168.22.67/quick2weixin/upload',
    //   files: [
    //     {
    //       uri: self.fileUploadData,
    //       // name: 'component_test.pdf'
    //       name: "file1.jpg"
    //     },
    //     {
    //       uri: self.fileUploadData,
    //       // name: 'component_test.pdf'
    //       name: "file2.jpg" 
    //     }
    //   ],
    //   data: [
    //     {
    //       name: 'param1',
    //       value: 'value1'
    //     }
    //   ],
    //   success: function (ret) {
    //     self.fileUploadData = ret.data
    //     console.log("out success",ret);
    //   },
    //   fail: function (msg, code) {
    //     self.fileUploadData = `${code}: ${msg}`
    //     console.info(`### request.upload ### ${code}: ${msg}`)
    //     // prompt.showToast({
    //     //   message: `${code}: ${msg}`
    //     // })
    //   }
    // })

  }
})