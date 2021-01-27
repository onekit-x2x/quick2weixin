/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

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
    const wx_object = {
      value: quick_value / 2.25,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
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
    PROMISE((SUCCESS) => {
      wx.getScreenBrightness({
        success: (wx_res) => {
          const quick_res = {
            value: wx_res.value * 2.25
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /**
   * brightness.setKeepScreenOn
   */

  setKeepScreenOn(quick_object) {
    return wx.setKeepScreenOn(quick_object)
  },
  /**
     brightness.setMode
     */

  setMode() {
    console.log('setMode is not support')
  },
  /**
   brightness.getMode
   */

  getMode() {
    console.log('getMode is not support')
  }
}
