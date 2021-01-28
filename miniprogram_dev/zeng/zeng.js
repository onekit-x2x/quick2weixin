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
const geolocation     = quickapp2weixin["@system.geolocation"]
const network     = quickapp2weixin["@system.network"]
const device     = quickapp2weixin["@system.device"]
const brightness      = quickapp2weixin["@system.brightness"]
const battery      = quickapp2weixin["@system.battery"]
const wifi      = quickapp2weixin["@system.wifi"]
const bluetooth      = quickapp2weixin["@system.bluetooth"]
const zip      = quickapp2weixin["@system.zip"]
const media      = quickapp2weixin["@system.media"]
const image      = quickapp2weixin["@system.image"]

Page({
  // getPhoneNumber (e) {
  //   console.log(e)
  // },
  onLoad: function () {
    media.pickImage({
      success: data => {
        const imagePath = data.uri
        if (imagePath && imagePath.length > 0) {
          image.compressImage({
           
            uri: 
              imagePath,
            
            success: function(res) {
              console.log(res)
            },
            fail: function(data, code) {
              console.log('preview fail, code = ${code}')
            }
          })
         
        }
      },
      fail: function(data, code) {
        console.log(`选择图片失败, 错误码：${code}`)
      }
    })
    // media.pickFile({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // media.pickVideos({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // media.pickVideo({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // media.pickImages({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // const CameraContext =  wx.createCameraContext()
    // CameraContext.takePhoto({
    //   success:res=>{
    //     console.log(res)
    //   }
    // })
    // media.takePhoto({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // media.takeVideo({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // media.pickImage({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // bluetooth.openAdapter({
    //   success: function() {
    //     console.log('success')
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   },
    //   complete: function() {
    //     console.log('complete')
    //   }
    // })

    // bluetooth.closeAdapter({
    //   success: function() {
    //     console.log('success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log('complete')
    //   }
    // })
    // bluetooth.onadapterstatechange = function(data) {
    //   console.log(data)
    // }
    // bluetooth.ondevicefound  = function(data) {
     
    //   }
    // bluetooth.startDevicesDiscovery({
    //   success: function() {
    //     console.log('success')
    //   }
    // })
    // bluetooth.getDevices({
    //   success: function(res) {
    //   bluetooth.getConnectedDevices({
    //     services: res.services,
    //     success: function(data) {
    //       console.log(data)
    //     },
    //     fail: function(data, code) {
    //       console.log(`handling fail, code = ${code}`)
    //     },
    //     complete: function() {
    //       console.log('complete')
    //     }
    //   })
    //     console.log(res)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log('complete')
    //   }
    // })
    // bluetooth.getAdapterState({
    //   success: function(res) {
    //     console.log(
    //      res
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log('complete')
    //   }
    // })
    // wx.startWifi()
    // wx.onWifiConnected(res=>{
    //   console.log(res)
    // })
    // wifi.onstatechanged = function(data) {
    //   console.log(data)
    // }
    // wx.startWifi()
    // wifi.scan({
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // wifi.getConnectedWifi({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // wifi.onscanned = function(data) {
    //   console.log(data)
    //  }
    // wx.login({
    //   success:res=>{
    //     console.log(res)
    //   }
    // })
    // battery.getStatus({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // brightness.setValue({
    //   value: 100,
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // brightness.getValue({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // device.getInfo({
    //   success: function(ret) {
    //     console.log(ret)
    //   }
    // })
    // const str= "iOS 10.0.1"
    
    // console.log(str.split(" "))
    // wx.getSystemInfo({
    //   success (res) {
    //     console.log(res)
        
    //   }
    // })
    // wx.onNetworkStatusChange(function (res) {
    //   console.log(res.isConnected)
    //   console.log(res.networkType)
    // })
    // network.subscribe({
    //   callback: function(data) {
    //     console.log(data)
    //   }
    // })
    // network.unsubscribe()
    // network.getType({
    //   success: function(data) {
    //     console.log(data)
    //   }
    // })
    // geolocation.subscribe({
    //   callback: function(data) {
    //     console.log(
    //       data
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
  
  //  geolocation.getLocationType({
  //     success: function(data) {
  //       console.log(data)
  //     },
  //     fail: function(data) {
  //       console.log(data)
  //     }
  //   })
    // geolocation.chooseLocation({
    //   success: function(data) {
    //     console.log(
    //       data
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`choose location fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log(`choose location complete`)
    //   }
    // })
    // geolocation.openLocation({
    //   latitude: 22.553594050274,
    //   longitude: 114.0586290118,
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`open location fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log(`open location complete`)
    //   }
    // })
    // geolocation.getLocation({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // clipboard.set({
    //   text: 'text',
    //   success:res=>{
    //     console.log(res,'ssssss')
    //   },fail:res=>{
    //     console.log(res,'ssssss')
    //   }
    // })
    // clipboard.get({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
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
    //   uri: 'http://usr/user/c.zip',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // const FileSystemManager  = wx.getFileSystemManager()
    // FileSystemManager.unzip({
    //   zipFilePath: 'http://usr/user/c.zip',
    //   targetPath: 'http://usr/user',
    //   success:res=>{
    //     console.log(res)
    //   },fail:res=>{
    //     console.log(res)
    //   }
    // })
    // // console.log(wx.env.USER_DATA_PATH)
    // zip.decompress({
    //   srcUri: 'internal://user/c.zip',
    //   dstUri: 'http://usr/user/',
    //   success: function() {
    //     console.log(`handling success`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
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