import sensor from "../../onekit/api/system/sensor.js"
Page({
  data: {},
  onLoad: function(options) {
    var taht = this;
    // sensor.subscribeAccelerometer({
    //   callback: function(ret) {
    //     console.log(`handling callback`, ret)
    //   }
    // })
    // sensor.unsubscribeAccelerometer()

    // sensor.subscribeCompass({
    //   callback: function (ret) {
    //     console.log(`handling callback`, ret)
    //   }
    // })
    // sensor.unsubscribeCompass()

    // sensor.subscribeProximity({
    //   callback: function(ret) {
    //     console.log(`handling callback`, ret)
    //   }
    // })

    sensor.subscribeStepCounter({
      callback: function(ret) {
        console.log(`handling callback`, ret)
      },
      fail: function(data, code) {
        console.log(`handling fail`, data, code)
      }
    })
  },
})