import wxaccount from "../../../onekit/api/service/wxaccount.js";
// pages/thirdparty/wxaccount/wxaccount.js
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
  useWXAccount() {
    let type = wxaccount.getType();
    console.info(type);
    if (type === 'APP') {
      wxaccount.authorize({
        // 参考微信开平台的字段说明https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317851&token=7ddb5fdbdade83efaf4695baecb9b35649813583&lang=zh_CN
        scope: 'snsapi_userinfo',
        state: 'randomString',
        fail: (data, code) => {
          console.info(`### wxaccount fail ### data:${ JSON.stringify(data) }, code:${ code }`);
        },
        cancel: data => {
          console.info(`### wxaccount cancel ### data:${ JSON.stringify(data) }`);
        },
        success: data => {
          console.info(`### wxaccount success ### data:${ JSON.stringify(data) }`);
          this.code = data.code
        },
      })
    } else {
      console.info(`### wxaccount not available ###`);
    }
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