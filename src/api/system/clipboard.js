/* eslint-disable guard-for-in */
/* eslint-disable default-case */
/* eslint-disable camelcase */
module.exports = {
  /*  clipboard.set/// */
  set(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_text = quick_object.text
    quick_object = null
    // ///////////////
    const wx_object = {}
    if (quick_text) {
      wx_object.text = quick_text
    }
    wx_object.success = function (wx_res) {
      const quick_res = {}
      for (const wx_res_key in wx_res) {
        switch (wx_res_key) {
          case 'errMsg':
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
    wx.setClipboardData(wx_object)
  },
  /* clipboard.get/// */

  get(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // ////////////////////////
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const quick_res = {}
      quick_res.text = wx_res.data
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
    wx.getClipboardData(wx_object)
  }
}
