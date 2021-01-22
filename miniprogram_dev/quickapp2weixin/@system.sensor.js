/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_reserved = quick_object.reserved || false
    const quick_interval = quick_object.url || 'normal'
    const quick_callback = quick_object.callback
    // ////////////////////////
    const wx_object = {
      reserved: quick_reserved,
      interval: quick_interval
    }
    wx.onAccelerometerChange(function (callback) {
      quick_callback({
        x: callback.x,
        y: callback.z,
        z: callback.y
      })
    })
    wx.startAccelerometer(wx_object)
  },

  /** unsubscribeAccelerometer */
  unsubscribeAccelerometer() {
    wx.offAccelerometerChange(function callback(e) {
      console.log(e)
    })
  },
  /** sensor.subscribeCompass */
  subscribeCompass(quick_object) {
    if (!quick_object) {
      return
    }
    // const quick_reserved = quick_object.reserved || false
    const quick_callback = quick_object.callback
    // ///////////////////////
    wx.onCompassChange(function (res) {
      quick_callback({
        direction: res.direction
      })
    })
    wx.startCompass({})
  },

  /** sensor.unsubscribeCompass() */
  unsubscribeCompass() {
    wx.stopAccelerometer()
    wx.offAccelerometerChange(function () {})
  },

  /** sensor.subscribeProximity */
  subscribeProximity() {
    console.log('暂不支持！')
  },
  /** sensor.unsubscribeProximity() */
  unsubscribeProximity() {
    console.log('暂不支持！')
  },

  /** sensor.subscribeLight */
  subscribeLight() {
    console.log('暂不支持！')
  },

  /** sensor.unsubscribeLight() */
  unsubscribeLight() {
    console.log('暂不支持！')
  },

  /** sensor.subscribeStepCounter */
  subscribeStepCounter(quick_object) {
    console.log(quick_object)
    if (!quick_object) {
      return
    }
    // const quick_reserved = quick_object.reserved
    const quick_callback = quick_object.callback
    // const quick_fail = quick_object.fail
    // ///////////////////////////
    function check(a1, a2) {
      return ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0))
    }
    let steps = 0

    function add() {
      steps++
      quick_callback({
        steps
      })
    }
    let x
    let y
    let
      z
    wx.onAccelerometerChange(function (res) {
      // console.log(res);
      if (x && check(x, res.x)) {
        add()
        x = 0
      } else if (y && check(y, res.y)) {
        add()
        y = 0
      } else if (z && check(z, res.z)) {
        add()
        z = 0
      }
      x = res.x

      y = res.y

      z = res.z
    })
    wx.startAccelerometer({
      interval: 'game'
    })
  },
  // ////////////////////////////
  /** sensor.unsubscribeStepCounter() */
  unsubscribeStepCounter() {
    wx.offCompassChange(function (res) {
      console.log(res)
    })
  }
}
