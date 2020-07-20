import prompt from "../../onekit/api/system/prompt.js";
// pages/prompt/prompt.js
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
  },

  showToast() {
    prompt.showToast({
      message: 'message',
      duration: 2000
    })
  },
  showDialog() {
    prompt.showDialog({
      title: '弹框标题',
      message: '弹框内容、告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      buttons: [
        {
          text: '确定',
          color: '#0faeff'
        }, {
          text: '取消'
        }, {
          text: '忽略'
        }
      ],
      autocancel: false, // 值为false时点击遮罩不关闭对话框，默认为true
      success: function (ret) {
        prompt.showToast({
          message: '成功回调:选中按钮序号---' + ret.index
        })
      },
      cancel: function () {
        prompt.showToast({
          message: '取消回调'
        })
      }
    })
  },
  showContextMenu() {
    prompt.showContextMenu({
      itemList: ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'],
      itemColor: '#0faeff',
      success: function (ret) {
        prompt.showToast({
          message: '成功回调:选中按钮序号---' + ret.index
        })
      },
      cancel: function () {
        prompt.showToast({
          message: '取消回调'
        })
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