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
const barcode     = quickapp2weixin["@system.barcode"]
const sensor     = quickapp2weixin["@system.sensor"]
const clipboard     = quickapp2weixin["@system.clipboard"]
Page({
  onLoad: function () {
    clipboard.set({
      text: 'text',
      success:res=>{
        console.log(res,'ssssss')
      },fail:res=>{
        console.log(res,'ssssss')
      }
    })
    clipboard.get({
      success: function(data) {
        console.log(data)
      },
      fail: function(data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
    // sensor.subscribeStepCounter({
    //   callback: function(ret) {
    //     console.log(ret)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // sensor.subscribeCompass({
    //   callback: function(ret) {
    //     console.log(ret)
    //   }
    // })
    sensor.unsubscribeCompass()
    // wx.startAccelerometer({
    //   interval: 'game',
    //   success:res=>console.log(res)
    // })
    // wx.onAccelerometerChange(res=>{
    //   console.log(res)
    // })
   
    // wx.offAccelerometerChange()
    
    // sensor.subscribeAccelerometer({
    //   callback: function(ret) {
    //     console.log(ret)
    //   }
    // })
    // sensor.unsubscribeAccelerometer()
    // console.log(wx.env.USER_DATA_PATH)
    // const FileSystemManager = wx.getFileSystemManager()
    // FileSystemManager.writeFile({
    //   filePath:'http://usr/user/a.txt',
    //   data:'sssss',
    //   success:res=>{
    //     console.log(res)
    //   },
    //   fail:res=>{
    //     console.log(res)
    //   }
    // })
    // file.mkdir({
    //   uri: 'http://usr/user/b.txt',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    
    //     file.rmdir({
    //   uri: 'http://usr/user',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // file.access({
    //   uri: 'http://usr/user/a.txt',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data,'fail')
    //   }
    // })
    // file.writeText({
    //   uri: 'http://usr/user/a.txt',
    //   text: 'test',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.readText({
    //   uri: 'http://usr/user/a.txt',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // file.delete({
    //   uri: 'http://usr/user/b.txt',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // file.copy({
    //   srcUri: 'http://usr/user',
    //   dstUri: 'http://usr/user',
    //   success: function(uri) {
    //     console.log(uri)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
  
   


  }
})