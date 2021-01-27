/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** device.getInfo */
  getInfo(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getSystemInfo({
        success: wx_res => {
          const quick_res = {
            brand: wx_res.brand,
            model: wx_res.model,
            osVersionName: wx_res.system.split(' ')[0],
            osVersionCode: wx_res.system.split(' ')[1],
            pixelRatio: wx_res.pixelRatio,
            language: wx_res.language,
            screenWidth: wx_res.screenWidth,
            screenHeight: wx_res.screenHeight,
            windowWidth: wx_res.windowWidth,
            windowHeight: wx_res.windowHeight,
            statusBarHeight: wx_res.statusBarHeight,
            vendorOsVersion: wx_res.version,
            theme: wx_res.theme,
            locationReducedAccuracy: wx_res.locationReducedAccuracy,
            safeArea: wx_res.safeArea,
            wifiEnabled: wx_res.wifiEnabled,
            locationEnabled: wx_res.locationEnabled,
            bluetoothEnabled: wx_res.bluetoothEnabled,
            notificationSoundAuthorized: wx_res.notificationSoundAuthorized,
            notificationBadgeAuthorized: wx_res.notificationBadgeAuthorized,
            notificationAlertAuthorized: wx_res.notificationAlertAuthorized,
            notificationAuthorized: wx_res.notificationAuthorized,
            microphoneAuthorized: wx_res.microphoneAuthorized,
            locationAuthorized: wx_res.locationAuthorized,
            cameraAuthorized: wx_res.cameraAuthorized,
            albumAuthorized: wx_res.albumAuthorized,
            benchmarkLevel: wx_res.benchmarkLevel,
            SDKVersion: wx_res.SDKVersion,
            fontSizeSetting: wx_res.fontSizeSetting,
            platform: wx_res.platform,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** device.getId */
  getId() {
    return console.warn('getId is not support')
  },

  /** device.getDeviceId */
  getDeviceId() {
    return console.warn('getDeviceId is not support')
  },

  /** device.getUserId */
  getUserId() {
    return console.warn('getUserId is not support')
  },

  /** device.getAdvertisingId */
  getAdvertisingId() {
    return console.warn('getAdvertisingId is not support')
  },

  /** device.getSerial */
  getSerial() {
    return console.warn('getSerial is not support')
  },

  /** device.getTotalStorage */
  getTotalStorage() {
    return console.warn('getTotalStorage is not support')
  },

  /** device.getAvailableStorage */
  getAvailableStorage() {
    return console.warn('getAvailableStorage is not support')
  },

  /** device.getCpuInfo */
  getCpuInfo() {
    return console.warn('getCpuInfo is not support')
  },

  /** device.getOAID */
  getOAID() {
    return console.warn('getOAID is not support')
  },

  /** device.platform */
  platform() {
    return console.warn('platform is not support')
  },

  /** device.host */
  host() {
    return console.warn('host is not support')
  },

}
