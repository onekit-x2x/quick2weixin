/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** wifi.connect */
  connect(quick_object) {
    wx.startWifi()
    return wx.connectWifi(quick_object)
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    wx.startWifi()
    return wx.getWifiList(quick_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }
    wx.startWifi()
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      wx.getConnectedWifi({
        success: wx_res => {
          const quick_res = {
            SSID: wx_res.wifi.SSID,
            BSSID: wx_res.wifi.BSSID,
            secure: wx_res.wifi.secure,
            signalStrength: wx_res.wifi.signalStrength,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /**
   * wifi.onscanned */
  set onscanned(callback) {
    wx.startWifi()
    return wx.onGetWifiList(callback)
  },
  /** wifi.onstatechanged */
  set onstatechanged(callback) {
    wx.startWifi()
    wx.onWifiConnected(wx_res => {
      let state
      if (wx_res.wifi.secure) {
        state = 1
      } else {
        state = 0
      }
      const quick_res = {
        state,
        SSID: wx_res.wifi.SSID,
        BSSID: wx_res.wifi.BSSID,
        secure: wx_res.wifi.secure,
        signalStrength: wx_res.wifi.signalStrength,
      }
      callback(quick_res)
    })
  }
}
