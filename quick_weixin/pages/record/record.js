import record from "../../onekit/api/system/record.js"
Page({
  data: {},
  onLoad: function() {
    record.start({
      duration: 10000,
      sampleRate: 8000,
      numberOfChannels: 1,
      encodeBitRate: 16000,
      format: 'aac',
      success: function(data) {
        console.log(`handling success`,data)
      },
      fail: function(data, code) {
        console.log(`handling fail`,data)
      }
    })
  },
 
})