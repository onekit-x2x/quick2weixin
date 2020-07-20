import fetch from "../../onekit/api/system/fetch.js"
Page({
  data: {
  },
  onLoad: function(){
    fetch.fetch({
      url: 'http://localhost/Text/index.jsp',
      success: function (res) {
        console.log("success", res)
      },
      fail: function (res) {
        console.log("fail:", res)
      }
    })
  },

})