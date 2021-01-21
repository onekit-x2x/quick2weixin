/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /*
 brightness.setValue
 * */
  setValue(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_value = quick_object.value
    quick_object = null
    // /////////////////////////
    const wx_object = {}
    if (quick_value) {
      wx_object.value = quick_value
    }
    wx_object.success = function () {
      const quick_res = {}
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    return wx.setScreenBrightness(wx_object)
  },
  /*
  brightness.getValue
  * */

  getValue(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // /////////////////////////
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const quick_res = {}
      for (const wx_res_key of Object.keys(wx_res)) {
        const wx_res_value = wx_res[wx_res_key]
        switch (wx_res_key) {
          case 'value':
            quick_res.value = wx_res_value
            break
          default:
            break
        }
      }
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    wx.getScreenBrightness(wx_object)
  },
  /**
   * brightness.setKeepScreenOn
   */

  setKeepScreenOn(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_keepScreenOn = quick_object.keepScreenOn
    quick_object = null
    // /////////////////////////
    const wx_object = {}
    if (quick_keepScreenOn) {
      wx_object.keepScreenOn = quick_keepScreenOn
    }
    wx_object.success = function () {
      const quick_res = {}
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    wx.setKeepScreenOn(wx_object)
  },
  /**
     brightness.setMode
     */

  setMode() {
    console.log('brightness.getMode暂不支持！')
  },
  /**
   brightness.getMode
   */

  getMode() {
    console.log('brightness.getMode暂不支持！')
  }
}
