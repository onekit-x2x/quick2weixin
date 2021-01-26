import quickapp2weixin from '../quickapp2weixin/index';
const router = quickapp2weixin["@system.router"]

const configuration = quickapp2weixin["@system.configuration"]
const prompt = quickapp2weixin["@system.prompt"]
const webview = quickapp2weixin["@system.webview"]
const request = quickapp2weixin["@system.request"]
const fetch  = quickapp2weixin["@system.fetch"]
const websocketfactory  = quickapp2weixin["@system.websocketfactory"]
const storage   = quickapp2weixin["@system.storage"]
const file    = quickapp2weixin["@system.file"]
const vibrator     = quickapp2weixin["@system.vibrator"]
Page({
  onLoad: function () {
    const FileSystemManager =  wx.getFileSystemManager()
    FileSystemManager.readFile({
      filePath:wx.env.USER_DATA_PATH,
      success:res=>{
        console.log(res)
      },
      fail: function(data) {
        console.log(data)
      }
    })
    file.mkdir({
      uri: 'wxfile://files/dir',
      success: function(data) {
        console.log(data)
      },
      fail: function(data) {
        console.log(data)
      }
    })
    
        file.rmdir({
      uri: 'wxfile://files/dir',
      success: function(data) {
        console.log(data.options.uri)
      },
      fail: function(data) {
        console.log(data)
      }
    })
   


  }
})