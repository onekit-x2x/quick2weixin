import share from "../../../onekit/api/service/share.js"
import prompt from '../../../onekit/api/system/prompt.js'
// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.title = "分享的标题";
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
  //图片分享
  shareImage() {
    const self = this
    share.share({
      shareType: 2,
      imagePath:  "/images/img1.jpg",
      fail: function (erromsg, errocode) {
        console.info(`### share.share ### ${errocode}: ${erromsg}`)
        prompt.showToast({
          message: `${errocode}: ${erromsg}`
        })
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  //图文分享
  shareTitleAndImage() {
    const self = this
    share.share({
      shareType: 0,
      title: self.title,
      targetUrl: 'https://www.quickapp.cn/',
      // imagePath: "/images/img1.jpg",
      fail: function (erromsg, errocode) {
        console.info(`### share.share ### ${errocode}: ${erromsg}`)
        prompt.showToast({
          message: `${errocode}: ${erromsg}`
        })
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  //其它分享（纯文本分享，音频分享）
  shareOther() {
    const self = this
    share.share({
      shareType: 1,//3,4
      title: self.title,
      summary: self.summary,
      targetUrl: 'https://www.quickapp.cn/',
      fail: function (erromsg, errocode) {
        console.info(`### share.share ### ${errocode}: ${erromsg}`)
        prompt.showToast({
          message: `${errocode}: ${erromsg}`
        })
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  shareTo() {
    const self = this
    share.share({
      shareType: 0,
      title: self.title,
      summary: self.summary,
      targetUrl: 'https://www.quickapp.cn/',
      platforms: ['SYSTEM'],
      fail: function (erromsg, errocode) {
        console.info(`### share.share ### ${errocode}: ${erromsg}`)
        prompt.showToast({
          message: `${errocode}: ${erromsg}`
        })
      }
    })
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
  onShareAppMessage: function (res) {
    console.log(res);
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)


    }
    return {
      // title: '自定义转发标题',
      // path: '/pages/zip/zip',
      path: 'https://www.baidu.com',
      imageUrl : "/images/img1.jpg",
    }
  },
})