/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  setAlarm(quick_object) {
    if (!quick_object) {
      return
    }

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
