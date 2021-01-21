/* eslint-disable camelcase */
module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_value = quick_object.value
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // /////////////////////////////////////////
    const wx_object = {}
    wx_object.key = quick_key
    if (quick_value) {
      wx_object.value = quick_value
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
    wx.setStorage(wx_object)
  },
  /* storage.get */

  get(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // /////////////////////////////////////////
    const wx_object = {}
    wx_object.key = quick_key

    wx_object.success = function (wx_res) {
      let quick_res = {}
      for (const wx_res_key of Object.keys(wx_res)) {
        const wx_res_value = wx_res[wx_res_key]
        switch (wx_res_key) {
          case 'data':
            quick_res = wx_res_value
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
    wx_object.fail = function () {
      if (quick_fail) {
        quick_fail('')
      }
      if (quick_complete) {
        quick_complete('')
      }
    }
    wx.getStorage(wx_object)
  },
  /* Storage.clear */

  clear(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // /////////////////////////////////////////
    const wx_object = {}

    wx_object.success = function (wx_res) {
      const quick_res = {}
      if (wx_res) {
        for (const wx_res_key of Object.keys(wx_res)) {
          // const wx_res_value = wx_res[wx_res_key]
          switch (wx_res_key) {
            case 'errMsg':
              break
            default:
              break
          }
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
    wx.clearStorage(wx_object)
  },
  /* Storage.delete */

  delete(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_key = quick_object.key
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // /////////////////////////////////////////
    const wx_object = {}
    wx_object.key = quick_key

    wx_object.success = function (wx_res) {
      const quick_res = {}
      if (wx_res) {
        for (const wx_res_key of Object.keys(wx_res)) {
          //  const wx_res_value = wx_res[wx_res_key]
          switch (wx_res_key) {
            case 'errMsg':
              break
            default:
              break
          }
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
    wx.removeStorage(wx_object)
  },
  /* storage.key */

  key(quick_object) {
    if (!quick_object) {
      return
    }
    // const quick_index = quick_object.index
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // /////////////////////////////////////////
    const wx_object = {}
    const index = quick_object.index
    wx_object.success = function (wx_res) {
      const quick_res = wx_res.keys[index]
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
    wx.getStorageInfo(wx_object)
  }
}
