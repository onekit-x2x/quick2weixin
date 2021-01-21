/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /*
 battery.getStatus* */
  getStatus(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // ////////////////////////////////////////
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const quick_res = {}
      for (const wx_res_key of Object.keys(wx_res)) {
        const wx_res_value = wx_res[wx_res_key]
        console.log(wx_res_key)
        switch (wx_res_key) {
          case 'level':
            quick_res.level = wx_res_value / 100
            break
          case 'isCharging':
            quick_res.isCharging = wx_res_value
            break
          case 'errMsg':
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
    return wx.getBatteryInfo(wx_object)
  }
}
