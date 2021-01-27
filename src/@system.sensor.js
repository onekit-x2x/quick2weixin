/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_interval = quick_object.interval || 'normal'
    const quick_callback = quick_object.callback
    const wx_object = {
      interval: quick_interval,
    }
    wx.startAccelerometer(wx_object)
    wx.onAccelerometerChange(wx_res => {
      const quick_res = {
        x: wx_res.x,
        y: wx_res.y,
        z: wx_res.z,
      }
      quick_callback(quick_res)
    })
  },

  /** unsubscribeAccelerometer */
  unsubscribeAccelerometer() {
    return wx.offAccelerometerChange()
  },
  /** sensor.subscribeCompass */
  subscribeCompass(quick_object) {
    if (!quick_object) {
      return
    }
    wx.startCompass()
    const quick_callback = quick_object.callback
    wx.onCompassChange(function (res) {
      quick_callback({
        direction: res.direction,
        accuracy: res.accuracy
      })
    })
  },

  /** sensor.unsubscribeCompass() */
  unsubscribeCompass() {
    return wx.offCompassChange()
  },

  /** sensor.subscribeProximity */
  subscribeProximity() {
    return console.warn('subscribeProximity is not support')
  },
  /** sensor.unsubscribeProximity() */
  unsubscribeProximity() {
    return console.warn('unsubscribeProximity is not support')
  },

  /** sensor.subscribeLight */
  subscribeLight() {
    return console.warn('subscribeLight is not support')
  },

  /** sensor.unsubscribeLight() */
  unsubscribeLight() {
    return console.warn('unsubscribeLight is not support')
  },

  /** sensor.subscribeStepCounter */
  subscribeStepCounter(quick_object) {
    if (!quick_object) {
      return
    }
    wx.startAccelerometer({
      interval: 'game'
    })
    const quick_callback = quick_object.callback

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
    let z
    wx.onAccelerometerChange(function (res) {
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
  },
  // ////////////////////////////
  /** sensor.unsubscribeStepCounter() */
  unsubscribeStepCounter() {
    return wx.offCompassChange()
  }
}
