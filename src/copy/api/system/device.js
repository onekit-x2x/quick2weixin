/* eslint-disable complexity */
/* eslint-disable guard-for-in */
/* eslint-disable camelcase */
module.exports = {
  getInfo(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // /////////////////////////
    const wx_object = {}
    wx_object.success = function (wx_res) {
      const quick_res = {
        osVersionCode: 29,
        platformVersionCode: 1062,
        platformVersionName: '1.0.6.2',
        product: 'OnePlus7_CH',
        vendorOsName: 'H2OS',
        vendorOsVersion: 'Hydrogen OS 10.0.4.GM57',
      }
      for (const wx_res_key in wx_res) {
        const wx_res_value = wx_res[wx_res_key]
        switch (wx_res_key) {
          case 'brand': // 微信
            quick_res.brand = wx_res_value // 快应用
            quick_res.manufacturer = wx_res_value
            break
          case 'language':
            quick_res.language = wx_res_value.split('_')[0]
            quick_res.region = wx_res_value.split('_')[1]
            break
          case 'safeArea':
            break
          case 'model':
            quick_res.model = wx_res_value
            break
          case 'pixelRatio':
            quick_res.screenDensity = wx_res_value
            break
          case 'platform':
            quick_res.osType = wx_res_value
            break
          case 'system':
            quick_res.osVersionName = wx_res_value.split(' ')[1]
            break
          case 'screenHeight':
            quick_res.screenHeight = wx_res_value
            break
          case 'screenWidth':
            quick_res.screenWidth = wx_res_value
            break
          case 'screenTop':
            quick_res.statusBarHeight = wx_res_value
            break
          case 'windowHeight':
            quick_res.windowHeight = wx_res_value
            break
          case 'windowWidth':
            quick_res.windowWidth = wx_res_value
            break
          case 'SDKVersion':
          case 'benchmarkLevel':
          case 'bluetoothEnabled':
          case 'cameraAuthorized':
          case 'version':
          case 'notificationAuthorized':
          case 'microphoneAuthorized':
          case 'locationEnabled':
          case 'locationAuthorized':
          case 'errMsg':
          case 'deviceOrientation':
          case 'devicePixelRatio':
          case 'fontSizeSetting':
            break
          default:
            quick_res[wx_res_key] = wx_res_value
        }
      }
      if (quick_success) {
        quick_success(quick_res)
      }
      if (quick_complete) {
        quick_complete(quick_res)
      }
    }
    wx_object.fail = function (wx_res) {
      if (quick_fail) {
        quick_fail(wx_res)
      }
      if (quick_complete) {
        quick_complete(wx_res)
      }
    }
    wx.getSystemInfo(wx_object)
  }
}
