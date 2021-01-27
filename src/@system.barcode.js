/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

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
    PROMISE((SUCCESS) => {
      wx.scanCode({
        success: wx_res => {
          const quick_res = {
            result: wx_res.result,
            scanType: wx_res.scanType,
            charSet: wx_res.charSet,
            path: wx_res.path,
            rawData: wx_res.rawData,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
