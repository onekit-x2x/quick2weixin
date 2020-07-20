import brightness from "../../onekit/api/system/brightness.js"
Page({
  data: {},

  onLoad: function() {
    brightness.setValue({
      value: 100,
      success: function() {
        console.log('handling success')
      },
      fail: function(data, code) {
        console.log(`handling fail`, data)
      }
    })
    /////////////////////////
    brightness.getValue({
      success: function(data) {
        console.log(`handling success`, data)
      },
      fail: function(data, code) {
        console.log(`handling fail`, data)
      }
    })
    ////////////
    brightness.setKeepScreenOn({
      keepScreenOn: true,
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})