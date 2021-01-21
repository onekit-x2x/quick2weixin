/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  /** wifi.connect */
  connect(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_SSID = quick_object.SSID
    const quick_BSSID = quick_object.BSSID
    const quick_password = quick_object.password
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // ////////////////////////////////////////////
    const wx_object = {}
    wx_object.SSID = quick_SSID
    wx_object.BSSID = quick_BSSID
    if (quick_password) {
      wx_object.password = quick_password
    }

    wx_object.success = function () {
      const quick_res = {}
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

    wx.connectWifi(wx_object)
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    if (!quick_object) {
      return
    }

    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // ////////////////////////////////////////////
    const wx_object = {}
    wx_object.success = function () {
      const quick_res = {}
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
    wx.getWifiList(wx_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }

    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // ////////////////////////////////////////////
    const wx_object = {}

    wx_object.success = function (wx_res) {
      const quick_res = {}
      for (const wx_res_key of Object.keys(wx_res)) {
        const wx_res_value = wx_res[wx_res_key]
        switch (wx_res_key) {
          case 'wifi':
            quick_res.type = wx_res_value
            break
          case 'errCode':
            break
          case 'errMsg':
            break
          default:
            break
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
    wx.getConnectedWifi(wx_object)
  },
  /**
   * wifi.onscanned */
  onscanned() {
    wx.onGetWifiList(function () {
      console.error('[quick2weixin] 暂不支持 onscanned')
    })
  },
  /** wifi.onstatechanged */
  onstatechanged() {
    wx.offWifiConnected(function () {
      console.error('[quick2weixin] 暂不支持 onstatechanged')
    })
  }
}
