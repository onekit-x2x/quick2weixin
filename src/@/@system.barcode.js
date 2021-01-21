/* eslint-disable camelcase */
module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    //  const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    quick_object = null
    // ////////////////////////////////////////
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const quick_res = {}
      for (const wx_res_key of Object.keys(wx_res)) {
        switch (wx_res_key) {
          case 'result':
            quick_res.result = wx_res.result
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
    return wx.scanCode(wx_object)
  }
}
