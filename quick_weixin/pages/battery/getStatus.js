import battery from "../../onekit/api/system/battery.js"
Page({
  data: {},
  onLoad: function() {
    battery.getStatus({
      success: function(data) {
        console.log(`handling success`, data)
      },
      fail: function(data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})