import share from "../../onekit/api/service/share.js"
import media from '../../onekit/api/system/media.js'
import file from '../../onekit/api/system/file.js'
import prompt from '../../onekit/api/system/prompt.js'
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
    this.shareData = "分享的文本";
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
  shareText() {
    share.share({
      // type: 'text/html',
      type: '/images/img1.jpg',
      data: this.shareData,
      success: function () {
        console.info('share success')
      },
      fail: function (erromsg, errocode) {
        prompt.showToast({
          message: `${errocode}: ${erromsg}`
        })
      }
    })
  },

  shareImage() {
    // 选取图片，获得路径为'internal://tmp/...'
    media.pickImage({
      success: function (ret) {
        console.log(ret);
        // 复制文件到'internal://files/...'
        file.copy({
          srcUri: ret.uri,
          dstUri: 'internal://files/a.jpg',
          success: function () {
            // 分享图片
            share.share({
              type: 'image/*',
              data: 'internal://files/a.jpg',
              success : function(res){
                console.log("分享成功:", res);
              },
              cancel : function(res){
                console.log("分享失败:", res);
              } 
            })
          }
        })
      },
      fail: function(res){
        console.log(res);
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