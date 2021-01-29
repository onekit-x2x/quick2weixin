/* eslint-disable no-console */
/* eslint-disable camelcase */

module.exports = {
  getType() {
    return 'APP'
  },
  authorize(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    // const quick_cancel = quick_object.cancel
    // ////////////////////////////////////////
    wx.login({
      success(res) {
        console.log('授权成功 ：', res)
        wx.request({
          url: 'http://192.168.22.116/quick/weixin/wxaccount/authorize',
          data: {
            JSCODE: res.code
          },
          success(res) {
            if (quick_success) {
              quick_success(res)
            }
          },
          fail(res) {
            if (quick_fail) {
              quick_fail(res)
            }
          },

        })
      },
      fail(res) {
        console.log('授权失败：', res)
      }
    })
  }

}
