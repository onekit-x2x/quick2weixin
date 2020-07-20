// component/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentName: 'image',
    remoteURL: 'http://www.w3school.com.cn/svg/',
    inputImageURL: 'http://www.w3school.com.cn/svg/rect1.svg',
    requestImageURL: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onInit() {
    this.$page.setTitleBar({
      text: 'Image'
    })
  },
  onImageUrlChange(data) {
    this.inputImageURL = data.value
  },
  onImageGetClick() {
    this.requestImageURL = this.inputImageURL
    prompt.showToast({
      message: '加载' + this.requestImageURL + '图片'
    })
  },
  onImageComplete(data) {
    prompt.showToast({
      message: '图片获取成功\n' + '高度：' + data.height + 'px  ' + '宽度：' + data.width + 'px'
    })
  },
  onImageError() {
    prompt.showToast({
      message: '图片获取失败'
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