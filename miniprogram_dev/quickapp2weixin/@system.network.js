/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
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
      const quick_res = {
        metered: false
      }
      for (const wx_res_key of Object.keys(wx_res)) {
        const wx_res_value = wx_res[wx_res_key]
        switch (wx_res_key) {
          case 'networkType':
            quick_res.type = wx_res_value
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
    wx.getNetworkType(wx_object)
  },


  // ////////////////////////
  subscribe(quick_object) {
    if (!quick_object) {
      return
    }
    // const quick_reserved = quick_object.reserved
    const quick_callback = quick_object.callback
    // const quick_fail = quick_object.fail
    quick_object = null
    // /////////////////////////
    // const wx_callback = {}
    wx.onNetworkStatusChange(function (wx_callback) {
      quick_callback.type = wx_callback.networkType
    })
  },
  // ///////
  unsubscribe() {
    wx.offNetworkStatusChange(function () {})
  },
  /** getSimOperator */
  getSimOperator() {
    console.log('暂不支持！')
  }
}
