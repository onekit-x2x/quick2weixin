/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getType() {
    return {
      trade_type: 'APP'
    }
  },

  pay(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_extra = quick_object.extra
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_cancel = quick_object.cancel
    // // /////////////////////////////////
    // PROMISE((SUCCESS) => {
    //   wx.requestPayment({
    //     timeStamp: quick_extra.time_stamp,
    //     nonceStr: quick_extra.nonce_str,
    //     package: quick_extra.package_value,
    //     paySign: quick_extra.order_sign,
    //     signType: 'MD5',
    //     success: () => {
    //       const quick_res = {
    //         prepayid: ''
    //       }
    //       SUCCESS(quick_res)
    //     }
    //   })
    // }, quick_success, quick_fail)
    const wx_object = {

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
