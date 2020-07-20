import barcode from "../../onekit/api/system/barcode.js"
Page({
  data: {
  },
  onLoad: function () {
    barcode.scan({
      success: function (data) {
        console.log(`handling success`,data)
      },
      fail: function (data, code) {
        console.log(`handling fail`, data)
      },
      cancel: function (data, code) {
        console.log(`handling fail`, data)
      },
    })
  },
})