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
const audio      = quickapp2weixin["@system.audio"]
const Video      = quickapp2weixin["@hap.io.Video"]
const texttoaudio      = quickapp2weixin["@service.texttoaudio"]
const cipher  = quickapp2weixin["@system.cipher"]

Page({
  
  // getPhoneNumber (e) {
  //   console.log(e)
  // },
  onLoad: function () {
    cipher.rsa({
      action: 'encrypt',
      //待加密的文本内容
      text: 'hello',
      //base64编码后的加密公钥
      key:
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDc7GR2MrfAoefES+wrs1ns2afT\n' +
        'eJXSfIkEHfPXG9fVFjaws1ho4KcZfsxlA0+SXvc83f2SVGCuzULmM2lxxRCtcUN/\n' +
        'h7SoaYEeluhqFimL2AEjfSwINHCLqObJkcjCfoZpE1JCehPiDOJsyT50Auc08h/4\n' +
        'jHQfanyC1nc62LqUCQIDAQAB',
      success: function(data) {
        console.log(`handling success: ${data.text}`)
      },
      fail: function(data, code) {
        console.log(`### cipher.rsa fail ### ${code}: ${data}`)
      }
    })
    
    //解密：
    cipher.rsa({
      action: 'decrypt',
      //待解密的内容，是base64编码后的一段二进制值，解密后是文本内容“hello”
      text:
        'CUg3tTxTIdpCfreIxIBdws3uhd5qXLwcrVl3XDnQzZFVHyjVVCDHS16rjopaZ4C5xU2Tc8mSDzt7\n' +
        'gp9vBfSwi7bMtSUvXG18DlncsKJFDkJpS5t0PkpS9YrJXrY80Gpe+ME6+6dN9bjgqMljbitDdBRf\n' +
        'S/ZWNI4Q8Q0suNjNkGU=',
      //base64编码后的解密私钥
      key:
        'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANzsZHYyt8Ch58RL\n' +
        '7CuzWezZp9N4ldJ8iQQd89cb19UWNrCzWGjgpxl+zGUDT5Je9zzd/ZJUYK7NQuYz\n' +
        'aXHFEK1xQ3+HtKhpgR6W6GoWKYvYASN9LAg0cIuo5smRyMJ+hmkTUkJ6E+IM4mzJ\n' +
        'PnQC5zTyH/iMdB9qfILWdzrYupQJAgMBAAECgYEAkibhH0DWR13U0gvYJeD08Lfd\n' +
        'Sw1PMHyquEqIcho9Yv7bF3LOXjOg2EEGPx09mvuwXFgP1Kp1e67XPytr6pQQPzK7\n' +
        'XAPcLPx80R/ZjZs8vNFndDOd1HgD3vSVmYQarNzmKi72tOUWMPevsaFXPHo6Xx3X\n' +
        '8x0wYb7XuBsQguRctTECQQD7GWX3JUiyo562iVrpTDPOXsrUxmzCrgz2OZildxMd\n' +
        'Pp/PkyDrx7mEXTpk4K/XnQJ3GpJNi2iDSxDuPSAeJ/aPAkEA4Tw4+1Z43S/xH3C3\n' +
        'nfulYBNyB4si6KEUuC0krcC1pDJ21Gd12efKo5VF8SaJI1ZUQOzguV+dqNsB/JUY\n' +
        'OFfX5wJAB1dKv9r7MR3Peg6x9bggm5vx2h6i914XSuuMJupASM6X5X2rrLj+F3yS\n' +
        'RHi9K1SPyeOg+1tkBtKfABgRZFBOyQJAbuTivUSe73AqTKuHjB4ZF0ubqgEkJ9sf\n' +
        'Q2rekzm9dOFvxjZGPQo1qALX09qATMi1ZN376ukby8ZAnSafLSZ64wJBAM2V37go\n' +
        'Sj44HF76ksRow8gecuQm48NCTGAGTicXg8riKog2GC9y8pMNHAezoR9wXJF7kk+k\n' +
        'lz5cHyoMZ9mcd30=',
      success: function(data) {
        console.log(`handling success: ${data.text}`)
      },
      fail: function(data, code) {
        console.log(`### cipher.rsa fail ### ${code}: ${data}`)
      }
    })
    // cipher.aes({
    //   action: 'encrypt',
    //   //待加密的文本内容
    //   text: 'hello',
    //   //base64编码后的密钥
    //   key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
    //   transformation: 'AES/CBC/PKCS5Padding',
    //   ivOffset: 0,
    //   ivLen: 16,
    //   success: data => {
    //     console.log(`handling success: ${data.text}`)
  
      // cipher.aes({
      //   action: 'decrypt',
      //   //待解密的内容，是base64编码后的一段二进制值
      //   text:data.text,
      //   //base64编码后的密钥
      //   key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
      //   transformation: 'AES/CBC/PKCS5Padding',
      //   ivOffset: 0,
      //   ivLen: 16,
      //   success: data => {
      //    console.log(data)
      //   },
      //   fail: (data) => {
      //     console.log(data)
      //   }
      // })
      //   },
      //   fail: (data, code) => {
      //     console.log(`### cipher.aes fail ### ${code}: ${data}`)
      //   }
      // })
  
      // const data = [{
      //   id: 1
      // }, {
      //   id: 2
      // }]
  
      // // Encrypt
      // const ciphertext = CryptoJS.AES.encrypt('my bank password', 'key1111111').toString()
      // console.log(ciphertext)
  
      // // Decrypt
      // const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123')
      // const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  
      // console.log(decryptedData) // [{id: 1}, {id: 2}]
    // const request =  wx.downloadFile({
    //   url:'http://localhost/SVN.pdf',
    //   success:res=>{
    //     console.log(res)
    //   }
    //   })
    //   request.onProgressUpdate(res=>{
    //     console.log(res)
    //   })
    // texttoaudio.stop()
    // texttoaudio.speak({
    //   lang: 'zh_CN',
    //   content: '这是语音播报效果',
    //   pitch: 1,
    //   rate: 1,
    //   success: function(data) {
    //     console.log(data)
       
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    

  // request.download({
  //     url: 'http://localhost/a.html',
  //     success: function(data) {

  //       console.log(data)
  //     },
  //     fail: function(data, code) {
  //       console.log(`handling fail, code = ${code}`)
  //     }
  //   })
  //   request.onDownloadComplete({
  //     token: '',
  //     success: function(data) {
  //       console.log(data)
  //     },
  //     fail: function(data) {
  //       console.log(data)
  //     }
  //   })
    
    
 
    
    
  //   this.innerAudioContext = wx.createInnerAudioContext();
	//  let that = this
	//  myPlugin.textToSpeech({   // 调用插件的方法
  //    	lang: 'zh_CN',
  //    	content:'语音播报测试',
  //     	success: function (res) {
  //         that.playAudio(res.filename);
  //     	},
  //    })
  // myPlugin.textToSpeech({
  //     lang: "zh_CN",
  //     tts: true,
  //     content: "一个常见的需求",
  //     success: function(res) {
  //       const innerAudioContext = wx.createInnerAudioContext();
  //       innerAudioContext.src = res.filename
  //       innerAudioContext.play()
  //         console.log(res)   
  //     },
  //     fail: function(res) {
  //         console.log("fail tts", res)
  //     }
  // })
    // const video =  new Video()
    
    //  media.pickVideo({
    //   success: function(data) {
    //     console.log(data)
         
    //     video.getVideoInfo({
    //   uri: data.uri,
    //   success: function(data) {
    //     console.log(data)
        
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
   
    // plugin.translate({
    //   lfrom:"en_US",
    //   lto:"zh_CN",
    //   content:"hello, this is the first time to test？",
    //   success: function(res) {
    //     if(res.retcode == 0) {
    //       console.log(res)
    //     } else {
    //       console.warn("翻译失败", res)
    //     }
    //   },
    //   fail: function(res) {
    //     console.log("网络失败",res)
    //   }
    // })
    // 语音
    // const InnerAudioContext =  wx.createInnerAudioContext()
    // InnerAudioContext.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3'
    // InnerAudioContext.play()
    // console.log(InnerAudioContext.volume)
    // audio.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3'
    // audio.play()
    // console.log(audio.volume)
    // audio.stop()
    // console.log(audio.getPlayState())
    // setTimeout(() => {
    //   audio.pause()
    // }, 9000)


    // media.pickImage({
    //   success: data => {
    //     const imagePath = data.uri
    //     if (imagePath && imagePath.length > 0) {
    //       image.compressImage({
           
    //         uri: 
    //           imagePath,
            
    //         success: function(res) {
    //           console.log(res)
    //         },
    //         fail: function(data, code) {
    //           console.log('preview fail, code = ${code}')
    //         }
    //       })
         
    //     }
    //   },
    //   fail: function(data, code) {
    //     console.log(`选择图片失败, 错误码：${code}`)
    //   }
    // })
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
    // sensor.unsubscribeCompass()
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