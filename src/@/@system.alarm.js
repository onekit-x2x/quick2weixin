/* eslint-disable camelcase */
/* eslint-disable no-console */
module.exports = {
  setAlarm(quick_object) {
    if (!quick_object) {
      return
    }
    // const quick_hour = quick_object.hour
    //  const quick_minute = quick_object.minute
    //   const quick_message = quick_object.message
    //   const quick_vibrate = quick_object.vibrate
    //  const quick_days = quick_object.days
    //   const quick_ringtone = quick_object.ringtone
    //   const quick_success = quick_object.success
    //   const quick_fail = quick_object.fail
    //   const quick_complete = quick_object.complete
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
            console.log('登录成功：', res)
            wx.request({
              url: 'http://192.168.22.116/quick/weixin/system/alarm',
              data: {
                openid: res.openid,
                data: quick_object
              },
              success(res) {
                console.log('设置闹钟：', res)
              }
            })
          },
          fail(res) {
            console.log(res)
          },

        })
      },
      fail(res) {
        console.log('授权失败：', res)
      }
    })
  }
}
