import webview from "../../onekit/api/system/webview.js"
Page({
  data: {
  },
  onLoad: function () {
    webview.loadUrl({
      url: 'http://www.baidu.com'
    })
  }
})