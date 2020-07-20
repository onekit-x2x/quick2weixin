import request from "../../onekit/api/system/request.js";
import zip from "../../onekit/api/system/zip.js";
import file from "../../onekit/api/system/file.js";
// pages/zip/zip.js
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
      const self = this;
      request.download({
        url: 'https://www.onekitwx.com/quick2weixin/1.zip',
        success: function (data) {
          console.log(`handling success${data.token}`)
          request.onDownloadComplete({
            token: data.token,
            success: function (data) {
              console.log(`download success:`,data.uri)
              
              zip.decompress({
                srcUri: data.uri,
                dstUri: 'internal://files/',
                success: function (res) {
                  console.info(res);
  
                  file.readText({
                    uri: 'internal://files/1.txt',
                    success: function (res) {
                      console.info("read success", res);
                    },
                    fail: function (res) {
                      console.info("fail", res);
                    }
                  });
                  //   prompt.showToast({
                  //         message: `handling success`
                  // })
  
                },
                fail: function (data, code) {
                  console.log(`handling fail`, data, code)
                  // prompt.showToast({
                  //   message: `handling fail, ${code}: ${data}`
                  // })
                }
              })
  
            },
            fail: function (data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })
  
  
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`)
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