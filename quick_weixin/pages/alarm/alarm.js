import alarm from "../../onekit/api/system/alarm"
Page({
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    alarm.setAlarm({
      hour:18,
      minute:10,
      days:[0,1,2,3,4,5,6],
      message: '闹钟1',
      success: function() {
          console.log('handling success')
      },
      fail: function(data, code) {
          console.log(`handling fail, code = ${code}`)
      },
      complete: function() {
          console.log('handling complete')
      }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})