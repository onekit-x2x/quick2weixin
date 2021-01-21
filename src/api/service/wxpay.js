/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  getType() {
    return 'APP'
  },

  pay(quick_object) {
    if (!quick_object) {
      return
    }

    const quick_extra = quick_object.extra
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_cancel = quick_object.cancel
    // /////////////////////////////////
    const wx_object = {
      signType: 'MD5',
    }
    wx_object.timeStamp = quick_extra.timeStamp
    wx_object.nonceStr = quick_extra.nonceStr
    wx_object.package = quick_extra.package
    wx_object.paySign = quick_extra.paySign

    wx_object.success = function (res) {
      console.log('wx-pay-success', res)
      if (quick_success) {
        quick_success({
          prepayid: wx_object.prepayid
        })
      }
    }

    wx_object.fail = function (res) {
      console.log('wx-pay-fail', res)

      if (res.errMsg.indexOf('cancel') > -1 && quick_cancel) {
        // 用户取消支付
        quick_cancel(res)
      } else {
        // 支付失败
        quick_fail(res)
      }
    }

    console.log('支付参数', wx_object)
    wx.requestPayment(wx_object)
  }


}
