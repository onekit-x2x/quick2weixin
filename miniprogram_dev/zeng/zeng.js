import quickapp2weixin from '../quickapp2weixin/index';
const router = quickapp2weixin["@system.router"]

const configuration = quickapp2weixin["@system.configuration"]
const prompt = quickapp2weixin["@system.prompt"]
const webview = quickapp2weixin["@system.webview"]
const request = quickapp2weixin["@system.request"]
Page({
  onLoad: function () {
    wx.chooseImage({
      count: 0,
      success:res=>{
        request.upload({
          url: 'https://www.onekit.cn',
          files: [
            {
              uri: res.tempFilePaths[0],
              name: 'file1',
              filename: 'test.png'
            }
          ],
          data: [
            {
              name: 'param1',
              value: 'value1'
            }
          ],
          success: function(data) {
            console.log('handling success',data)
          },
          fail: function(data, code) {
            console.log(`handling fail, code = ${code}`)
          }
        })
      }
    })
    
    // request.download({
    //   url: 'http://localhost/a.html',
    //   success: function(data) {
    //     console.log(`handling success${data.token}`,data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
   



  }
})