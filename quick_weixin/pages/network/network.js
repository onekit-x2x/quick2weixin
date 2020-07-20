import network from "../../onekit/api/system/network.js"
Page({
  data: {
  },
  onLoad: function () {
    network.getType({
      success: function (data) {
        console.log(`handling success`, data)
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
    network.subscribe({
      callback: function (data) {
        console.log('handling callback', data)
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      }
    })
  },
})